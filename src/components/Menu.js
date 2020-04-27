import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core'
import logo from '../images/logo.png'
import '../styles/Menu.css';

class Menu extends Component{

    render(){
        return (
            <div>
                <Typography className="Menu">
                    <Link href="/">
                        <img src={logo} alt={"logo"} className={'logo'}/>
                    </Link>
                    <Link href="/animals" className="link">
                        Animals
                    </Link>
                    <Link href="/artists" className="link">
                        Artists
                    </Link>
                    <Link href="/inventories" className="link">
                        Inventories
                    </Link>
                    <Link href="/performances" className="link">
                        Performances
                    </Link>
                    <Link href="/shows" className="link">
                        Shows
                    </Link>
                    <Link href="/tickets" className="link">
                        Tickets
                    </Link>
                    <Link href="/venues" className="link">
                        Venues
                    </Link>
                    <Link href="/visitors" className="link">
                        Visitors
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;
