import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/VisitorsTable";

class VisitorsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Visitors</h1>
                <Table />
            </div>
        );
    }
}

export default VisitorsPage;
