import React, {Component} from 'react';
import Header from "./Header/index";
import '../../styles/css/App.css'
import CornerBottom from "../CornerBottom";

class Home extends Component {

    render() {
        return (
            <section className='home'>
                <Header/>
                <h1 className='home__title'>Welcome to Aleks Web React - Pro</h1>
                <CornerBottom/>
            </section>
        )
    }
}

export default Home;