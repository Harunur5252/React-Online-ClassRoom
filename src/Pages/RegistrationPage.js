import React, { Component } from 'react';
import { Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation'
import Registration from '../components/Registration/Registration'
import Footer from '../components/Footer/Footer'
class RegistrationPage extends Component {

    componentDidMount(){
        window.scroll(0,0);
     }

     
    render() {
        return (
            <Fragment>
                 <TopNavigation title="UserRegistration"/>
                 <Registration/>
                 <Footer/>
            </Fragment>
        );
    }
}

export default RegistrationPage;