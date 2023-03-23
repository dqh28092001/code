import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Sidebar = () => {
  const [shows, setShow] = useState(false);

  // Modal
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mời vào Không gian làm việc
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="modal_input"
            type="text"
            placeholder="Địa chỉ email hoặc tên"
          />
        </Modal.Body>

        <div className="modal-footer">
          <div className="modal-footer-icon">
            <i class="fa-solid fa-link"></i>
          </div>
          <div className="modal-footer-text">
            <span>Mời ai đó vào Không gian làm việc này bằng liên kết</span>
            <a href="" style={{ textDecorationLine: "underline" }}>
              Tạo liên kết
            </a>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <aside className={`sidebaras ${shows ? "shows" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!shows)}>
          <i
            className={`fas fa-bars ${shows ? "fa-solid fa-caret-left" : null}`}
          ></i>
        </div>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <div className="icon">
                <a href="">T</a>
              </div>
              <div className="text">
                <span className="nav-logo-name">
                  Trello Không gian làm việc
                </span>
                <br />
                <span className="fre">Miễn phí</span>
              </div>
            </Link>

            <hr className="hr" />

            <div className="nav-list">
              <Link to="/dashboard" className="nav-link active">
                <i class="fa-solid fa-table"></i>
                <span className="nav-link-name">Bảng</span>
              </Link>
              

              
              
<div className="nav-link">
                <div className="nav-link-setting">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <a href="" style={{fontSize:"14px",marginTop:"3px"}}>Bảng</a>

                <Button variant="primary" onClick={() => setModalShow(true)} 
                style={{
                  display: "flex",
                      border: "none",
                      backgroundColor: "hsl(202deg 2.98% 23.7% / 90%)",
                      marginLeft:"130px",
                      height: "21px",
                }}
                >
                  <i class="fa-solid fa-plus" style={{fontSize:"10px",paddingLeft:"6px"}}></i>
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
              </div>


              <div className="nav-link">
                <div className="nav-link-setting">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropdow-toggle"
                    style={{
                      display: "flex",
                      border: "none",
                      backgroundColor: "hsl(202deg 2.98% 23.7% / 90%)",
                      width: "0px",
                      height: "21px",
                    }}
                  >
                    <p>
                      Các cài đặt Không gian làm
                      <i class="fa-solid fa-chevron-down"></i>
                    </p>
                  </Dropdown.Toggle>
                  <p style={{ fontSize: "13px" }}>việc</p>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Các cài đặt Không gian làm việc
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Nâng cấp Không gian làn việc
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
              </div>


              <h1 className="text-inf">Dạng xem Không gian làm việc</h1>

              
  
                  <div className="nav-link">
                <div className="nav-link-setting">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <a href="" style={{fontSize:"14px",marginTop:"3px"}}>Bảng</a>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="success" id="dropdown-basic"
                    style={{
                      display: "flex",
                      border: "none",
                      backgroundColor: "hsl(202deg 2.98% 23.7% / 90%)",
                      marginLeft:"136px",
                      height: "21px",
                    }}
                  >
                    <i class="fa-solid fa-chevron-down"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>


           

              <div className="nav-link">
                <div className="nav-link-setting">
                  <i class="fa-solid fa-gear"></i>
                </div>
                <a href="" style={{fontSize:"14px",marginTop:"3px"}}>Lịch</a>

                <Dropdown>
                  <Dropdown.Toggle
                    variant="success" id="dropdown-basic"
                    style={{
                      display: "flex",
                      border: "none",
                      backgroundColor: "hsl(202deg 2.98% 23.7% / 90%)",
                      marginLeft:"143px",
                      height: "21px",
                    }}
                  >
                   <i
                    class="fa-solid fa-ellipsis"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>




              <Dropdown
                style={{
                  marginLeft: "11px",
                  marginTop: "10px",
                  display: "flex",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "13px",
                  }}
                >
                  Các bảng của bạn{" "}
                </p>

                <Dropdown.Toggle
                  style={{
                    display: "flex",
                    border: "none",
                    backgroundColor: "hsl(202deg 2.98% 23.7% / 90%)",
                    width: "0px",
                    marginLeft: "62px",
                    height: "21px",
                  }}
                >
                  <a
                    href=""
                    style={{
                      marginTop: "-2px",
                      fontSize: "13px",
                      color: "#fff",
                      marginLeft: "-10px",
                      cursor: "text",
                    }}
                  >
                  </a>
                  <i
                    class="fa-solid fa-ellipsis"
                    style={{ paddingLeft: "5px", fontSize: "13px" }}
                  ></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    style={{ fontSize: "12px", textAlign: "center" }}
                  >
                    Bảng
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item
                    href="#/action-2"
                    style={{ fontSize: "12px", padding: "0 7px" }}
                  >
                    <i
                      class="fa-solid fa-trash-can"
                      style={{ marginRight: "5px" }}
                    ></i>
                    Xóa Dạng xem{" "}
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                </Dropdown.Menu>
                <a
                  href=""
                  style={{
                    marginLeft: "7px",
                    color: "#fff",
                    fontSize: "13px",
                    marginTop: "3px",
                  }}
                >
                  <i class="fa-solid fa-ellipsis"></i>
                </a>
              </Dropdown>
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
