import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/ShowsTable";

class ShowsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Shows</h1>
                <Table />
            </div>
        );
    }
}

export default ShowsPage;
