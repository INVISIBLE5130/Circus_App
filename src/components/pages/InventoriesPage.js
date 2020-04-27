import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/InventoriesTable";

class InventoriesPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Inventories</h1>
                <Table />
            </div>
        );
    }
}

export default InventoriesPage;
