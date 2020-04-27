import Menu from '../Menu';
import {Component} from "react";
import React from "react";
import circus from "../../images/circus.jpg";
import '../../styles/HomePage.css';

class App extends Component {

    render() {
        return (
            <div className="HomePage">
                <Menu/>
                <div className="text">
                    <h3>Circus</h3>
                    <img src={circus} alt={"logo"} className='circus'/>
                    <p>A <strong>circus</strong> is a special kind of entertainment that can be enjoyed by children and adults.
                        Circuses are a group of performers that may include acrobats, clowns, trained animals, trapeze acts, musicians, hoopers, tightrope walkers, jugglers and other artists who perform stunts.
                        Circuses usually travel about to different parts of the country or to different countries.
                        They perform in a huge tent called the <strong>“Big Top”</strong>.
                        There may be room for hundreds of people in the audience.
                        The seating is tiered (the seats at the back are higher than those in front).
                        In the middle is the circular area where the artists perform.
                        This area is called the <strong>“ring”</strong>.
                        The person in charge of the whole show is the <strong>“ringmaster”</strong>.
                        Not all circuses travel about.
                        A few circuses perform in their own building.</p>
                </div>
            </div>
        );
    }
}

export default App;
