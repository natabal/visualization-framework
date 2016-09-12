import React, { Component } from "react";
import { ReduxRouter } from "redux-router";
import { Route } from "react-router";

import AppContainer from "./components/AppContainer.js"
import DomainContainer from "./components/DomainContainer.js"
import EnterpriseContainer from "./components/EnterpriseContainer.js"
import Page2Container from "./components/Page2Container.js"
import PageContainer from "./components/PageContainer.js"


class App extends Component {

    render() {
        return (
        <div>
            <AppContainer>
                <ReduxRouter>
                    <Route path="/" component={PageContainer} />
                    <Route path="/zoom" component={Page2Container} />
                    <Route path="/enterprises/:enterpriseID" component={EnterpriseContainer} />
                    <Route path="/domains/:domainID" component={DomainContainer} />
                </ReduxRouter>
            </AppContainer>
        </div>
        );
    }
}

export default App;
