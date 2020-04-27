import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/PerformancesTable";

class PerformancesPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Performances</h1>
                <Table />
            </div>
        );
    }
}

export default PerformancesPage;
