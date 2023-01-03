import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {app} from "app/app";
import {Home} from "controllers/Home";
import {AdvancedForm} from "../controllers/AdvancedForm";
import {Result} from "../controllers/Result";
import SimpleForm from "../controllers/SimpleForm";
import {Compensation} from "../controllers/Compensation";
import {CompensationDetail} from "../controllers/CompensationDetail";

class Routes extends Component {
    render() {
        return (
            <Router key="router" initialRouteName={app.routes().home}>
                <Route exact path={app.routes().home} component={Home}/>
                <Route exact path={app.routes().simpleForm} component={SimpleForm}/>
                <Route exact path={app.routes().advancedForm} component={AdvancedForm}/>
                <Route exact path={app.routes().result} component={Result}/>
                <Route exact path={app.routes().compensation} component={Compensation}/>
                <Route exact path={app.routes().compensationDetail} component={CompensationDetail}/>
            </Router>
        )
    }


}

export default Routes;
