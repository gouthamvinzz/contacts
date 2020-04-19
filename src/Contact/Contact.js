import React from "react";
import { connect } from "react-redux";
import EditerModal from "./EditerModal";
import matchSorter from "match-sorter";
import "./Contact.css";
class ContactView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showModal: false,
      contactViewDetail: {},
      showDetail: false,
      modalType: "",
      editDetail: {},
      filterSearchKey: "",
    };
  }

  //To open the model for edit/add
  openModal = (type = "", contact = "") => {
    this.setState({
      showModal: !this.state.showModal,
      modalType: type,
      editDetail: contact,
      contactList: this.props.contacts,
      showDetail: false,
    });
  };

  //Deatil view for selected contact
  contactDetail() {
    const { contactViewDetail } = this.state;
    return (
      <div>
        <div className="contactDetail">
          <img
            style={{ marginTop: "55px", marginLeft: "140px", fontSize: "52px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN7USRtFiSwwrfqNMPm_kTcGJ4NkIX7xRy4ztZq4Acm298JkWd&usqp=CAU"
            class="ui avatar image"
          />
          <p className="mainName">{contactViewDetail.name}</p>
          <p style={{ textAlign: "center" }}>{contactViewDetail.position}</p>
          <p style={{ marginLeft: "40px", marginTop: "25px", display: "flex" }}>
            <p style={{ color: "gray" }}>Full name:</p>
            <p style={{ marginLeft: "48px" }}>{contactViewDetail.name}</p>
          </p>
          <p style={{ marginLeft: "40px", marginTop: "25px", display: "flex" }}>
            <p style={{ color: "gray" }}>Email:</p>
            <p style={{ marginLeft: "72px" }}>{contactViewDetail.email}</p>
          </p>
          <p style={{ marginLeft: "40px", marginTop: "25px", display: "flex" }}>
            <p style={{ color: "gray" }}>Phone:</p>
            <p style={{ marginLeft: "68px" }}>{contactViewDetail.phone}</p>
          </p>
          <p style={{ marginLeft: "40px", marginTop: "25px", display: "flex" }}>
            <p style={{ color: "gray" }}>Company:</p>
            <p style={{ marginLeft: "49px" }}>{contactViewDetail.company}</p>
          </p>
          <p style={{ marginLeft: "40px", marginTop: "25px", display: "flex" }}>
            <p style={{ color: "gray" }}>address:</p>
            <p style={{ marginLeft: "61px" }}>{contactViewDetail.address}</p>
          </p>
        </div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            marginLeft: "30px",
            backgroundColor: "#eae8e9",
            width: "400px",
            height: "120px",
          }}
        >
          <i
            style={{
              fontSize: "50px",
              marginTop: "46px",
              color: "#ff8567",
              marginLeft: "17px",
            }}
            aria-hidden="true"
            class="law icon"
          ></i>
          <div>
            <p
              style={{
                marginTop: "25px",
                fontSize: "20px",
                marginLeft: "16px",
              }}
            >
              Tax Evasion & Pay Notice
            </p>
            <p
              style={{ color: "gray", marginLeft: "16px", marginTop: "-14px" }}
            >
              Date 17 April , 2020
            </p>
          </div>
        </div>
      </div>
    );
  }

  //To open selected contact details
  openDetail(contact) {
    this.setState({ contactViewDetail: contact, showDetail: true });
  }

  //To delete the contact
  deleteContact(contact) {
    this.setState({ showDetail: false });
    this.props.delete(contact.id);
  }

  //To edit the contact
  editContact(contact) {
    this.setState({ showDetail: false });
    this.openModal("edit", contact);
  }

  //To take the
  filterSearch(event) {
    this.setState({ filterSearchKey: event.target.value });
  }

  //the main contact table
  contactTable() {
    let newList = [];

    if (this.state.filterSearchKey !== "") {
      newList = matchSorter(this.props.contacts, this.state.filterSearchKey, {
        keys: ["name", "email", "company", "phone", "address"],
      });
    } else {
      newList = this.props.contacts;
    }
    return (
      <div style={{ marginLeft: "199px", marginTop: "50px", width: "600px" }}>
        <table class="ui very basic selectable table">
          <thead class="">
            <tr
              class=""
              style={{ backgroundColor: "#eae8e9", textAlign: "center" }}
            >
              <th class="">
                {" "}
                <i
                  style={{ marginTop: "18px" }}
                  aria-hidden="true"
                  class="add square icon"
                ></i>
              </th>
              <th class="">
                <p style={{ marginTop: "18px", color: "gray" }}>Basic Info</p>
              </th>
              <th class="">
                <p style={{ marginTop: "18px", color: "gray" }}>Company</p>
              </th>
              <th class="">
                <p style={{ marginTop: "18px", color: "gray" }}>Edit</p>
              </th>
              <th class="">
                <p style={{ marginTop: "18px", color: "gray" }}>Delete</p>
              </th>
            </tr>
          </thead>

          <tbody class="">
            {newList.map((contact) => {
              return (
                <tr class="" style={{ textAlign: "center" }}>
                  <td class="" onClick={(e) => this.openDetail(contact)}>
                    <input
                      type="checkbox"
                      class="hidden"
                      readonly=""
                      tabindex="0"
                    />
                  </td>
                  <td
                    class=""
                    onClick={(e) => this.openDetail(contact)}
                    style={{ display: "flex" }}
                  >
                    <div>
                      <img
                        style={{ marginTop: "5px", fontSize: "26px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN7USRtFiSwwrfqNMPm_kTcGJ4NkIX7xRy4ztZq4Acm298JkWd&usqp=CAU"
                        class="ui avatar image"
                      />
                    </div>
                    <div style={{ textAlign: "left", marginLeft: "10px" }}>
                      <p style={{ fontSize: "large", marginTop: "6px" }}>
                        {contact.name}
                      </p>
                      <p style={{ marginTop: "-17px", color: "gray" }}>
                        {contact.email}
                      </p>
                    </div>
                  </td>
                  <td class="" onClick={(e) => this.openDetail(contact)}>
                    {contact.company}
                  </td>
                  <td
                    class="warning"
                    onClick={(e) => this.editContact(contact)}
                  >
                    <i
                      style={{ marginTop: "18px" }}
                      aria-hidden="true"
                      class="edit outline icon"
                    ></i>
                  </td>
                  <td
                    class="negative"
                    onClick={(e) => this.deleteContact(contact)}
                  >
                    <i
                      style={{ marginTop: "18px" }}
                      aria-hidden="true"
                      class="delete icon"
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.showModal && (
          <EditerModal
            closeModal={this.openModal}
            modalType={this.state.modalType}
            editDetail={this.state.editDetail}
          />
        )}
        <div class="ui segment pushable">
          <div
            class="ui inverted vertical labeled icon ui overlay left thin visible sidebar menu"
            style={{ width: "80px", backgroundColor: "#ff8567" }}
          >
            <a class="item">
              <i aria-hidden="true" class="sliders horizontal icon"></i>
            </a>

            <a class="item" style={{ marginTop: "20px" }}>
              <i aria-hidden="true" class="home icon"></i>
            </a>
            <a class="item">
              <i aria-hidden="true" class="user outline icon"></i>
            </a>
            <a class="item">
              <i aria-hidden="true" class="file alternate outline icon"></i>
            </a>
            <a class="item">
              <i aria-hidden="true" class="clock outline icon"></i>
            </a>
            <a class="item">
              <i aria-hidden="true" class="database icon"></i>
            </a>
            <a class="item">
              <i aria-hidden="true" class="calendar alternate outline icon"></i>
            </a>
            <a class="item">
              <i aria-hidden="true" class="setting icon"></i>
            </a>
          </div>
          <div class="pusher" style={{ marginBottom: "100%" }}>
            <div
              class="ui basic segment"
              style={{ borderBottom: "2px solid #eae8e9" }}
            >
              <div>
                <a
                  class="item"
                  style={{
                    marginLeft: "100px",
                    backgroundColor: "#eae8e9",
                    borderRadius: "50%",
                    color: "#444243",
                    padding: "7px",
                  }}
                >
                  <i aria-hidden="true" class="search icon"></i>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  float: "right",
                  marginTop: "-20px",
                  color: "#444243",
                }}
              >
                <p style={{ paddingRight: "20px" }}>
                  <i
                    aria-hidden="true"
                    style={{ fontSize: "smaller" }}
                    class="add icon"
                  ></i>
                  ADD
                </p>
                <i
                  aria-hidden="true"
                  class="mail icon"
                  style={{ paddingRight: "30px" }}
                ></i>
                <p style={{ paddingRight: "5px" }}>
                  Mark Hendry <i aria-hidden="true" class="caret down icon"></i>
                </p>
                <a class="item" style={{ paddingRight: "5px" }}>
                  <i
                    aria-hidden="true"
                    class="bell outline icon"
                    style={{ color: "#444243" }}
                  ></i>
                </a>
              </div>
            </div>
            <div style={{ marginLeft: "151px", display: "flex" }}>
              <i
                aria-hidden="true"
                class="address book icon"
                style={{
                  color: "#ff8567",
                  fontSize: "40px",
                  marginTop: "60px",
                }}
              ></i>
              <div>
                <p style={{ fontSize: "27px", marginTop: "37px" }}>Contacts</p>
                <p style={{ marginTop: "-29px", color: "gray" }}>
                  Welcome to flatCRM contact pge
                </p>
              </div>
              <p
                style={{
                  marginTop: "60px",
                  paddingLeft: "50px",
                  color: "gray",
                }}
              >
                Sort by: Date Created{" "}
                <i aria-hidden="true" class="caret down icon"></i>
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <div
                class="ui big icon input"
                style={{ marginLeft: "195px", marginTop: "15px" }}
              >
                <input
                  type="text"
                  placeholder="Search contacts"
                  style={{ borderRadius: "25px", backgroundColor: "#eae8e9" }}
                  onChange={(e) => this.filterSearch(e)}
                />
                <i aria-hidden="true" class="search icon"></i>
              </div>
              <div>
                <button
                  onClick={() => this.openModal("add")}
                  class="ui button"
                  style={{
                    marginTop: "20px",
                    marginLeft: "35px",
                    backgroundColor: "#ff8567",
                    color: "white",
                  }}
                >
                  <i
                    aria-hidden="true"
                    style={{ fontSize: "smaller" }}
                    class="add icon"
                  ></i>
                  Add Contact
                </button>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              {/* <div class="two column row"> */}
              {this.contactTable()}
              {this.state.showDetail && this.contactDetail()}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
const mapDispatchToProps = (dispatch, payload) => ({
  add: (val) => {
    dispatch({ type: "ADD_NEW", payload: val });
  },

  delete: (val) => {
    dispatch({ type: "DELETE", payload: val });
  },
  minus: () => dispatch({ type: "MINUS_ONE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);
