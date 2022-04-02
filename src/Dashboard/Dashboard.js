import React,{useState,useEffect} from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

import logo from "../Images/logo.jpg";
import image from "../Images/image.png";

import { FaColumns, FaListUl } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { BsFillPlusCircleFill, BsFileEarmarkCheck } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { AiOutlineRight, AiFillPrinter } from "react-icons/ai";
import { FiEdit, FiArrowDownCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import "./Dashboard.css";
import { Col } from "react-bootstrap";


const Dashboard = () => {
  const[patientDetails,setPatientDetails]=useState({});
  const[upcomingAppointment,setUpcomingAppointment]=useState({});
  const baseUrl="https://619f39821ac52a0017ba467e.mockapi.io/"
  useEffect(()=>{
    fetch(`${baseUrl}/patientDetails`)
    .then(res=>res.json())
    .then(data=>setPatientDetails(data[0]))
  },[])
  useEffect(()=>{
    fetch(`${baseUrl}/appointment_details`)
    .then(res=>res.json())
    .then(data=>setUpcomingAppointment(data[0]))
  },[])
  const{name,past,upcoming,Gender,Birthday}=patientDetails;
  const{Time,Date,Treatment,Dentist,Nurse}=upcomingAppointment;
  
  console.log(upcomingAppointment)
  console.log(patientDetails)
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
      }}
    >
      <div className="sidebar-left">
        <CDBSidebar textColor="black" backgroundColor="aliceblue">
          <CDBSidebarHeader
            className="sidebar-header"
            prefix={<i className="fa fa-bars p-2 mt-1" />}
          >
            <img src={logo} alt="" className="sidebar-logo me-2" />
            <span style={{ fontSize: "18px" }}>Zendenta</span>
          </CDBSidebarHeader>

          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="th-large" textFontSize="14px">
                Overview
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="calendar" textFontSize="14px">
                Calendar
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem className='text-primary' icon="list" textFontSize="14px">
                Patient List
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="envelope" textFontSize="14px">
                Messages
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="file-invoice" textFontSize="14px">
                Payment Information
              </CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="th" textFontSize="14px">
                Settings
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: "20px 5px" }}
            >
              <img src="" alt="" /> Drg.Adam H.
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>

      <div className="sidebar-right w-100 overflow-x-hidden">
        <div style={{ background: "#f4f4f4" }}>
          <div className="d-flex justify-content-between py-3 px-3 mx-3">
            <div className="d-flex align-items-center mt-1">
              <p className="me-3">
                <BiUser className="icon pt-2" />
              </p>
              <h5 style={{ fontWeight: "700" }}>{name}</h5>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="search-bar ps-3"
              />
              <BsFillPlusCircleFill className="icon ms-3" />
              <VscBellDot className="icon ms-3" />
            </div>
          </div>
          <hr className="m-0 p-0" />
        </div>

        <div style={{ background: "#f4f4f4" }}>
          <div className="d-flex align-items-center justify-content-between px-3 mx-3">
            <div className="d-flex align-items-center mt-3">
              <p className="ms-1">
                <span style={{ color: "blue" }}>Patient List</span>{" "}
                <AiOutlineRight />
              </p>
              <p>Diane Cooper</p>
            </div>

            <div className="d-flex align-items-center mt-3">
              <p
                className="me-3 px-3 py-2"
                style={{
                  backgroundColor: "aliceblue",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                }}
              >
                <AiFillPrinter />
              </p>
              <p
                className="px-3 py-2"
                style={{
                  backgroundColor: "aliceblue",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                }}
              >
                <FiEdit /> Edit Patient
              </p>
            </div>
          </div>
          <hr className="m-0 p-0" />
        </div>

        <div className="p-3">
          <div className="row d-flex">
            <Col md={8}>
              <div className="row d-flex">
                <Col md={5} className="text-center">
                  <div
                    className="py-3"
                    style={{ background: "aliceblue", borderRadius: "5px" }}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-25"
                      style={{ borderRadius: "100px" }}
                    />
                    <h5 className="mt-2" style={{ fontWeight: "700" }}>
                      {name}
                    </h5>
                    <p>DianeCooper@gmail.com</p>
                    <div className="row d-flex text-center">
                      <Col md={6}>
                        <p style={{ fontWeight: "700" }}>15</p>
                        <p>Past</p>
                      </Col>
                      <Col md={6} className="v-bar">
                        <p style={{ fontWeight: "700" }}>2</p>
                        <p>Upcoming</p>
                      </Col>
                    </div>
                    <button
                      className="py-1 px-5 mt-3"
                      style={{ borderRadius: "5px", fontWeight: "700" }}
                    >
                      Send Message
                    </button>
                  </div>
                </Col>
                <Col md={7}>
                  <div
                    className="p-3"
                    style={{ background: "aliceblue", borderRadius: "5px" }}
                  >
                    <div className="row d-flex">
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>Gender</p>
                        <p>{Gender}</p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>Birthday</p>
                        <p>{Birthday}</p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>Phone Number</p>
                        <p>239-555-0108</p>
                      </Col>
                    </div>
                    <hr
                      className="m-0 p-0"
                      style={{ color: "grey", opacity: "0.3" }}
                    />
                    <div className="row d-flex my-2">
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>Street Address</p>
                        <p>Mirpur DOSH</p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>City</p>
                        <p>Dhaka</p>
                      </Col>
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>ZIP Code</p>
                        <p>655849</p>
                      </Col>
                    </div>
                    <hr
                      className="m-0 p-0"
                      style={{ color: "grey", opacity: "0.3" }}
                    />
                    <div className="row d-flex my-2">
                      <Col md={4}>
                        <p style={{ fontWeight: "700" }}>Member Status</p>
                        <p>Active Member</p>
                      </Col>
                      <Col md={5}>
                        <p style={{ fontWeight: "700" }}>Registered Date</p>
                        <p>Feb 24th, 2020</p>
                      </Col>
                      <Col md={3}></Col>
                    </div>
                    <hr
                      className="m-0 p-0"
                      style={{ color: "grey", opacity: "0.3" }}
                    />
                  </div>
                </Col>
              </div>
            </Col>
            <Col md={4}>
              <div
                className="card p-3 border-0"
                style={{ backgroundColor: "aliceblue", borderRadius: "5px" }}
              >
                <div className="d-flex justify-content-between mx-3">
                  <p style={{ fontWeight: "600" }}>Notes</p>
                  <p style={{ fontWeight: "600" }}>See all</p>
                </div>
                <div className="py-2" style={{ background: "white" }}>
                  <ul>
                    <li>This patient is lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>has alergic history</li>
                  </ul>
                  <button
                    className="p-2 me-3"
                    style={{
                      float: "right",
                      border: "none",
                      borderRadius: "5px",
                      background: "blue",
                      color: "white",
                    }}
                  >
                    save note
                  </button>
                </div>
                <div className="mx-3 pt-3">
                  <p>Lorem Ipsum</p>
                  <div className="d-flex justify-content-between">
                    <p>
                      <BiUser className="me-2" />
                      Drg. Mega Nande
                    </p>
                    <p>2nd April, 22</p>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>

        <div className="py-3 px-2 mx-2">
          <div className="row d-flex">
            <Col md={8}>
              <div
                style={{ backgroundColor: "aliceblue", borderRadius: "5px" }}
              >
                <div className="p-4">
                  <div
                    className="w-75 px-4 pt-2 d-flex"
                    style={{ background: "white", borderRadius: "5px" }}
                  >
                    <p className="pe-4" style={{ color: "blue" }}>
                      Upcoming Appointments
                    </p>
                    <p className="pe-4">Past Appointments</p>
                    <p>Medical Records</p>
                  </div>
                </div>

                <div className="p-3 mx-3" style={{ background: "white" }}>
                  <div className="d-flex justify-content-between">
                    <p style={{ fontWeight: "700" }}>Root Canal Treatment</p>
                    <button
                      className="px-3"
                      style={{ border: "none", background: "aliceblue" }}
                    >
                      <MdKeyboardArrowUp />
                      Show Previous Treatment
                    </button>
                  </div>
                  <hr />

                  <div
                    className="row px-2 pt-2"
                    style={{ background: "aliceblue", borderRadius: "5px" }}
                  >
                    <Col md={3}>
                      <p style={{ fontSize: "18px", fontWeight: "700" }}>
                        26 Nov' 19
                      </p>
                      <p>09.00-10.00</p>
                    </Col>
                    <Col md={3}>
                      <p>Treatment</p>
                      <p style={{ fontSize: "16px", fontWeight: "700" }}>
                        Open Access
                      </p>
                    </Col>
                    <Col md={6}>
                      <div className="row">
                        <Col md={5}>
                          <p>Dentist</p>
                          <p style={{ fontSize: "16px", fontWeight: "700" }}>
                            Drg. Adam H.
                          </p>
                        </Col>
                        <Col md={5}>
                          <p>Nurse</p>
                          <p style={{ fontSize: "16px", fontWeight: "700" }}>
                            Jessica
                          </p>
                        </Col>
                        <Col md={2}>
                          <p></p>
                          <p style={{ color: "blue", fontWeight: "700" }}>
                            <CgNotes />
                            Note
                          </p>
                        </Col>
                      </div>
                    </Col>
                  </div>

                  <div
                    className="row px-2 pt-2 mt-3"
                    style={{ background: "aliceblue", borderRadius: "5px" }}
                  >
                    <Col md={3}>
                      <p style={{ fontSize: "18px", fontWeight: "700" }}>
                        12 Dec' 19
                      </p>
                      <p>09.00-10.00</p>
                    </Col>
                    <Col md={3}>
                      <p>Treatment</p>
                      <p style={{ fontSize: "16px", fontWeight: "700" }}>
                        Root Canal prep
                      </p>
                    </Col>
                    <Col md={6}>
                      <div className="row">
                        <Col md={5}>
                          <p>Dentist</p>
                          <p style={{ fontSize: "16px", fontWeight: "700" }}>
                            Drg. Adam H.
                          </p>
                        </Col>
                        <Col md={5}>
                          <p>Nurse</p>
                          <p style={{ fontSize: "16px", fontWeight: "700" }}>
                            Jessica
                          </p>
                        </Col>
                        <Col md={2}>
                          <p></p>
                          <p style={{ color: "blue", fontWeight: "700" }}>
                            <CgNotes />
                            Note
                          </p>
                        </Col>
                      </div>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div
                className="card py-5 px-3 border-0"
                style={{ backgroundColor: "aliceblue", borderRadius: "5px" }}
              >
                <div className="d-flex justify-content-between mx-3">
                  <p style={{ fontWeight: "600" }}>Files/Documents</p>
                  <p style={{ fontWeight: "600", color: "blue" }}>Add Files</p>
                </div>

                <div
                  className="mx-3 px-3 d-flex justify-content-between"
                  style={{ background: "white", borderRadius: "5px" }}
                >
                  <p>
                    <BsFileEarmarkCheck /> Check Up Result.pdf
                  </p>
                  <p>123kb</p>
                </div>
                <div
                  className="mx-3 mt-2 px-3 d-flex justify-content-between"
                  style={{ background: "white", borderRadius: "5px" }}
                >
                  <p>
                    {" "}
                    <BsFileEarmarkCheck /> Dental X-Ray Result2.pdf
                  </p>
                  <p>
                    <RiDeleteBinLine /> <FiArrowDownCircle />
                  </p>
                </div>
                <div
                  className="mx-3 mt-2 px-3 d-flex justify-content-between"
                  style={{ background: "white", borderRadius: "5px" }}
                >
                  <p>
                    {" "}
                    <BsFileEarmarkCheck /> Medical Prescriptions.pdf
                  </p>
                  <p>87kb</p>
                </div>
                <div
                  className="mx-3 mt-2 px-3 d-flex justify-content-between"
                  style={{ background: "white", borderRadius: "5px" }}
                >
                  <p>
                    {" "}
                    <BsFileEarmarkCheck /> Dental X-Ray Result.pdf
                  </p>
                  <p>
                    <RiDeleteBinLine /> <FiArrowDownCircle />
                  </p>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
