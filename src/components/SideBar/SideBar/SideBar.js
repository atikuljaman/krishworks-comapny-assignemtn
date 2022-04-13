import React from "react";
import Logo from "../../../Assets/images/logo.png";
import { BsQuestionCircle, BsCalendar4Week, BsPerson } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Doctor from "../Doctor/Doctor";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import Overview from "../Overview/Overview";
import NavigationBar from "../NavigationBar/Navigation";
import PatientList from "../PatientList/PatientList/PatientList";
import Calendar from "../Calendar/Calendar";
import Messages from "../Messages/Messages";
import PaymentInformations from "../PaymentInformations/PaymentInformation";
import Settings from "../Settings/Settings";
import { Col, Container, Row } from "react-bootstrap";
import "./SideBar.css";

const SideBar = () => {
  let { path, url } = useRouteMatch();

  return (
    <>
      <NavigationBar />

      <Container fluid>
        <Row className="p-0">
          <Col md={2} className="p-0">
            <div className="sidebar-container">
              <div className="logo-container">
                <img className="logo" src={Logo} alt="" />
              </div>
              <div className="nav-links-container">
                <NavLink
                  exact
                  to={`${url}`}
                  className="navigation-link"
                  activeClassName="sidebar-menu-selected"
                >
                  <BsQuestionCircle className="nav-icon" />
                  <span className="nav-title">Overview</span>
                </NavLink>
                <NavLink
                  to={`${url}/calendar`}
                  className="navigation-link"
                  activeClassName="sidebar-menu-selected"
                >
                  <BsCalendar4Week className="nav-icon" />
                  <span className="nav-title">Calendar</span>
                </NavLink>
                <NavLink
                  to={`${url}/patientList`}
                  className="navigation-link"
                  activeClassName="sidebar-menu-selected"
                >
                  <BsPerson className="nav-icon-person" />
                  <span className="nav-title">Patient List</span>
                </NavLink>
                <NavLink
                  to={`${url}/messages`}
                  className="navigation-link"
                  activeClassName="sidebar-menu-selected"
                >
                  <BiMessageRoundedDetail className="nav-icon-person" />
                  <span className="nav-title">Messages</span>
                </NavLink>
                <NavLink
                  to={`${url}/paymentInformations`}
                  className="navigation-link"
                  activeClassName="sidebar-menu-selected"
                >
                  <AiOutlineDollar className="nav-icon-person" />
                  <span className="nav-title">Payment Information</span>
                </NavLink>
                <NavLink
                  to={`${url}/settings`}
                  className="navigation-link"
                  activeClassName="sidebar-menu-selected"
                >
                  <IoSettingsOutline className="nav-icon-person" />
                  <span className="nav-title">Settings</span>
                </NavLink>
              </div>
              <div className="help-container">
                <BsQuestionCircle className="nav-icon" />
                <span className="nav-title">Help?</span>
              </div>
              <div className="line"></div>
              <Doctor />
            </div>
          </Col>
          <Col md={10} className="p-0">
            <Switch>
              <Route exact path={path}>
                <Overview />
              </Route>
              <Route path={`${path}/calendar`}>
                <Calendar />
              </Route>
              <Route path={`${path}/patientList`}>
                <PatientList />
              </Route>
              <Route path={`${path}/messages`}>
                <Messages />
              </Route>
              <Route path={`${path}/paymentInformations`}>
                <PaymentInformations />
              </Route>
              <Route path={`${path}/settings`}>
                <Settings />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SideBar;
