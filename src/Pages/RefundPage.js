import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import Refund from '../components/Refand/Refund'
import TopNavigation from '../components/TopNavigation/TopNavigation'

export default class RefundPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
     }
    render() {
        return (
            <Fragment>
                <title>Refund</title>
                <TopNavigation />
                <Refund />
                <Footer />
            </Fragment>
        )
    }
}
