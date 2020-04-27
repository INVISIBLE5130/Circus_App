import React, { Component } from 'react';
import './App.css';

import HomePage from './components/pages/HomePage';
import AnimalsPage from './components/pages/AnimalsPage';
import ArtistsPage from './components/pages/ArtistsPage';
import InventoriesPage from './components/pages/InventoriesPage';
import ClinicsPage from './components/pages/PerformancesPage';
import DonationsPage from './components/pages/ShowsPage';
import TicketsPage from './components/pages/TicketsPage';
import VenuesPage from './components/pages/VenuesPage';
import VisitorsPage from './components/pages/VisitorsPage';

import { MoreHoriz, AddBox, Delete, Edit, Build } from '@material-ui/icons';

import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {

  render() {

    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/animals"} component={AnimalsPage}/>
            <Route exact path={"/artists"} component={ArtistsPage}/>
            <Route exact path={"/inventories"} component={InventoriesPage}/>
            <Route exact path={"/performances"} component={ClinicsPage}/>
            <Route exact path={"/shows"} component={DonationsPage}/>
            <Route exact path={"/tickets"} component={TicketsPage}/>
            <Route exact path={"/venues"} component={VenuesPage}/>
            <Route exact path={"/visitors"} component={VisitorsPage}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
