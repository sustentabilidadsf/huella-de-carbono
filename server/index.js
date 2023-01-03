require('dotenv').config()

const {Calculator} = require("./calculator/calculator");

const express = require('express');
const excelJS = require("exceljs");
const {DatabaseFB} = require("./databaseFB");
const port = 8000;
const databaseFB = new DatabaseFB();
const calculator = new Calculator();


const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  // HEADERS FOR PRODUCTION
  // const allowedOrigins = [`http://${process.env.SSF_FRONTEND_DOMAIN}`, `https://${process.env.SSF_FRONTEND_DOMAIN}`,
  //   `http://www.${process.env.SSF_FRONTEND_DOMAIN}`, `https://www.${process.env.SSF_FRONTEND_DOMAIN}`
  // ];
  // const origin = req.headers.origin;
  // if (allowedOrigins.includes(origin)) {
  //   res.setHeader('Access-Control-Allow-Origin', origin);
  // }
  // res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  // res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  // res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  // Headers for 
  // TODO: Setear esto por variable de ambiente (dev/prod)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});


// Endpoint for calculating footprint
app.post('/footprint', function(req, res){
  let body = req.body;
  let calculation = calculator.calculateFootprint(body, body['type']);
  if(!process.env.DEVELOPMENT_MODE) {
    databaseFB.saveFootprint(body, calculation);
  }
  console.log(calculation);
  res.json({'footprintResult': calculation});
});


// Endpoint for calculating footprint
app.get('/results', async function(req, res){
  const results = await databaseFB.getResults();
  let token = req.query.token;
  if (token !== process.env.TOKEN_REPORT) {
    return res.json({'result': "Error unauthorised action"});
  }

  const workbook = new excelJS.Workbook();  // Create a new workbook
  simpleSheet(workbook, results);
  complexSheet(workbook, results);

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=" + "reporte_ssf.xlsx"
  );

  return workbook.xlsx.write(res).then(() => {
    res.status(200).end();
  });

});

function simpleSheet(workbook, results) {
  const worksheet = workbook.addWorksheet("Huella de Carbono Simple"); // New Worksheet

  const rows = results.filter(r => r.data.type === "simple").map(r => {
    let _row = r.data;
    _row.result = r.footprint.total;
    return _row;
  })

  // Column for data in excel. key must match data key
  worksheet.columns = [
    { header: "calculateCarbonFootprint", key: "calculateCarbonFootprint", width: 10 }, 
    { header: "Area de consumo", key: "consumptionArea", width: 10 },
    { header: "Consumo eléctrico", key: "electricConsumption", width: 10 },
    { header: "Conocimiento ambiental", key: "environmentalKnowledge", width: 10 },
    { header: "Km. auto", key: "kilometersTraveledByCar", width: 10 },
    { header: "Km. moto", key: "kilometersTraveledByMotorcycle", width: 10 },
    { header: "Km. trasnporte público", key: "kilometersTraveledByPublicTransport", width: 10 },
    { header: "Gender", key: "knowCarbonFootprint", width: 10 },
    { header: "Consumo de carne", key: "meatConsumption", width: 10 },
    { header: "Personas en el Hogar", key: "peopleInHome", width: 10 },
    { header: "Edad", key: "personAge", width: 10 },
    { header: "Resultado", key: "result", width: 10 }
  ];

  rows.forEach((row) => {
    worksheet.addRow(row); // Add data in worksheet
  });

  return rows;
}

function complexSheet(workbook, results) {

  const worksheet = workbook.addWorksheet("Huella de Carbono Completa"); // New Worksheet

  const rows = results.filter(r => r.data.type !== "simple").map(r => {
    let _row = r.data;
    _row.composts =  r.data.composts ? 'Sí' : 'No';
    _row.recycles =  r.data.recycles ? 'Sí' : 'No';
    _row.energy = r.footprint.energy;
    _row.home = r.footprint.home;
    _row.nutrition = r.footprint.nutrition;
    _row.transport = r.footprint.transport;
    _row.result = r.footprint.total;
    return _row;
  });

  // Column for data in excel. key must match data key
  worksheet.columns = [
    { header: "calculateCarbonFootprint", key: "calculateCarbonFootprint", width: 10 }, 
    { header: "Area de consumo", key: "consumptionArea", width: 10 },
    { header: "Consumo eléctrico", key: "electricConsumption", width: 10 },
    { header: "Consumo de agua", key: "waterConsumption", width: 10 },
    { header: "Conocimiento ambiental", key: "environmentalKnowledge", width: 10 },
    // Auto
    { header: "Cant. promedio de personas en auto", key: "averagePersonPerCar", width: 10 },
    { header: "Eficiencia de auto", key: "carEfficiency", width: 10 },
    { header: "Tipo de combustible", key: "carFuelType", width: 10 },
    //
    { header: "Tamaño de bolsa", key: "bagSize", width: 10 },
    { header: "Cant. bolsas por semana", key: "numberOfBagsPerWeek", width: 10 },
    //
    { header: "Compost", key: "composts", width: 10 },
    { header: "Separa", key: "doYouSeparate", width: 10 },
    { header: "Recicla", key: "recycles", width: 10 },
    // Kms
    { header: "Kms. recorridos con taxi", key: "kilometersTraveledByTaxi", width: 10 },
    { header: "Kms. recorridos con avión", key: "kilometersTraveledByPlane", width: 10 },
    { header: "Kms. recorridos con bus larga distancia", key: "kilometersTraveledByLongDistanceBus", width: 10},
    { header: "Kms. recorridos con subte", key: "kilometersTraveledBySubway", width: 10},
    { header: "Kms. recorridos con auto", key: "kilometersTraveledByCar", width: 10 },
    { header: "Kms. recorridos con colectivo", key: "kilometersTraveledByBus", width: 10},
    // Gas
    { header: "Consumo de gas garrafa", key: "gasCarafeConsumption", width: 10},
    { header: "Consumo de gas", key: "gasConsumption", width: 10},
    // Personal
    { header: "knowCarbonFootprint", key: "knowCarbonFootprint", width: 10 },
    { header: "Consumo de Carne", key: "meatConsumption", width: 10 },
    { header: "Personas en el Hogar", key: "peopleInHome", width: 10 },
    { header: "Uso de Internet", key: "internetUse", width: 10 },
    { header: "Jeans comprados", key: "jeansBought", width: 10 },
    { header: "Método de separación", key: "separationMethods", width: 10 },
    { header: "Genero", key: "genreSelection", width: 10 },
    { header: "Edad", key: "personAge", width: 10 },
    // Results
    { header: "Energía", key: "energy", width: 10 },
    { header: "Hogar", key: "home", width: 10 },
    { header: "Nutrición", key: "nutrition", width: 10 },
    { header: "Transporte", key: "transport", width: 10 },
    { header: "Resultado", key: "result", width: 10 },
  ];

  rows.forEach((row) => {
    worksheet.addRow(row); // Add data in worksheet
  });

  return rows;
}


app.listen(port, () => {
  console.log(`Footprint app listening at http://localhost:${port}`)
})

