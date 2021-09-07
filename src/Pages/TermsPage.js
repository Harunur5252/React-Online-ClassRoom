import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import Terms from '../components/Terms/Terms'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class TermsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <title>Terms</title>
                <TopNavigation />
                <Terms />
                <Footer />
            </Fragment>
        )
    }
}
