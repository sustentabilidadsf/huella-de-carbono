# Calculadora de Huella de Carbono

## Bootstrapping del proyecto:

#### Pre-requisitos
Es necesario tener instaladas las ultimas versiones LTS de **Node**, **npm** y **yarn**

#### Clone
```git clone https://github.com/sustentabilidadsf/huella-de-carbono```

#### Instalar dependencias
Ejecutar el comando ```yarn install``` en el root del proyecto

#### Variables de entorno
Crear un archivo ```.env``` en el directorio root y copiarle el contenido del archivo ```.env.example```.

*REACT_APP_API_URL*: La url de la api que se esté usando (en caso de que se esté usando una)

*REACT_APP_USING_FAKE_API*: True si se quieren usar los mocks o vacío si se quiere usar una API.  

#### Run
```yarn start```  o ```npm start```

#### Correr los tests
```jest``` 

## Deploy

#### Backend (Calculadora)

* ```cd /home/fdecroix/ssf```
* ```git pull```
* ```sudo supervisorctl restart all```
* ```sudo service nginx restart```

#### FrontEnd

* ```cd /home/fdecroix/ssf```
* ```git pull```
* ```rm -r build_final/```
* ```npm run-script build```
* ```mv build/ build_final/```
* ```sudo service nginx restart```


### Docker

Si se quieren probar los servicios individualmente, se pueden levantar cada uno como:

* ```docker build -t ssf-front .```  Se puede agregar otro nombre a la imagen
* ```docker build -t ssf-server .```  Dentro de la carpeta server

Ejemplo de correr:

```
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    ssf-front
```

### Docker compose

Si se quiere levantar de manera más sencilla los dos servicios juntos, solo se debe correr:

* ```docker-compose build```
* ```docker-compose up```

El server se levanta en el puerto 8000 y el front en el puerto 3000.


## Otros links de utilidad

* [React documentation](https://reactjs.org/)
* [Tests con Jest](https://jestjs.io/)
* [Airbnb React conventions](https://github.com/airbnb/javascript/tree/master/react)

