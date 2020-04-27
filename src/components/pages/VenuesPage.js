import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/VenuesTable";

class VenuesPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Venues</h1>
                <Table />
            </div>
        );
    }
}

export default VenuesPage;
