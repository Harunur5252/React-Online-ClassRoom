import React, { Component,Fragment } from 'react'
import {Navbar,NavLink} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faBars, faHome,faBook,faGlobe, faPowerOff, faFile, faEnvelope, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state={
            sideNav:false,
            sideNavClass:"sidenavClose",
            NavText:"d-none",
            mainDiv:"mydiv",
        }

        this.showHideSideNav=this.showHideSideNav.bind(this);
    }


    showHideSideNav(){
        if(this.state.sideNav===false){
            this.setState({sideNav:true,NavText:"",sideNavClass:"sidenavOpen",mainDiv:"mydiv2"})
        }
        else {
            this.setState({sideNav:false,NavText:"d-none",sideNavClass:"sidenavClose",mainDiv:"mydiv"})
        }
    }

    render() {
        return (
            <Fragment>
                 <title>{this.props.title}</title>
                 <Navbar  expand="lg" className="fixed-top shadow-sm  mb-5 py-3" variant="light" bg="success">
                    <Navbar.Brand onClick={this.showHideSideNav} style={{color:"yellow"}} href=""><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <b>MD. HARUN</b>
                </Navbar>

                <div className={this.state.sideNavClass}>
                    <NavLink><Link to="/ClassRoomHome" className="pageDecorationLink fontIconColor"> <FontAwesomeIcon icon={faHome} /> <span className={this.state.NavText}>&nbsp; Home</span></Link> </NavLink>
                    <NavLink><Link exact to="/" className="pageDecorationLink fontIconColor"> <FontAwesomeIcon icon={faGlobe} /> <span className={this.state.NavText}>&nbsp; Main Site</span></Link></NavLink>
                    <NavLink ><Link exact to="/tutorials" className="pageDecorationLink fontIconColor"> <FontAwesomeIcon icon={faBook} /> <span className={this.state.NavText}>&nbsp; Tutorials</span></Link></NavLink>
                    <NavLink ><Link exact to="/files" className="pageDecorationLink fontIconColor"> <FontAwesomeIcon icon={faFile} /> <span className={this.state.NavText}>&nbsp; Files</span></Link></NavLink>
                    <NavLink ><Link exact to="/messages" className="pageDecorationLink fontIconColor"> <FontAwesomeIcon icon={faEnvelope} /> <span className={this.state.NavText}>&nbsp; Messages</span></Link></NavLink>
                    <a href="https://www.facebook.com/" className="pageDecorationLink fontIconColor ml-3" target='_blank' style={{fontSize:'18px'}}> <FontAwesomeIcon icon={faFacebook} /> <span className={this.state.NavText}>&nbsp;Join Discuss</span></a>
                    <NavLink ><Link exact to="/profile" className="pageDecorationLink fontIconColor"> <FontAwesomeIcon icon={faUserCircle} style={{fontSize:'18px'}} /> <span className={this.state.NavText}>&nbsp; Profile</span></Link></NavLink>
                    <Link className="ml-3 NavItem text-decoration" exact to="/"> <FontAwesomeIcon icon={faPowerOff} /> <span className={this.state.NavText}>&nbsp; Sign Out</span></Link>
                </div>

                <div onClick={this.showHideSideNav} className={this.state.mainDivOverlay}>

                </div>

                <div className={this.state.mainDiv}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}
