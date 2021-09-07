import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import Privacy from '../components/Privacy/Privacy'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <title>Privacy</title>
                <TopNavigation />
                <Privacy />
                <Footer />
            </Fragment>
        )
    }
}
