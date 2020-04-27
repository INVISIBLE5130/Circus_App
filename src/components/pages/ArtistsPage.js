import {Component} from "react";
import React from "react";
import Menu from '../Menu';
import '../../styles/Page.css';
import Table from "../tables/ArtistsTable";

class ArtistsPage extends Component {

    render() {
        return (
            <div className="Page">
                <Menu />
                <h1>Artists</h1>
                <Table />
            </div>
        );
    }
}

export default ArtistsPage;
