import React, { Component, Fragment } from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class AboutPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <title>About</title>
                <TopNavigation />
                <About />
                <Footer />
            </Fragment>
        )
    }
}
