import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/TicketsTable";

class TicketsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Tickets</h1>
                <Table />
            </div>
        );
    }
}

export default TicketsPage;
