import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import uniqueId from "lodash.uniqueid";
class EditerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      id: this.props.editDetail != "" ? this.props.editDetail.id : uniqueId(),
      name: this.props.editDetail != "" ? this.props.editDetail.name : "",
      email: this.props.editDetail != "" ? this.props.editDetail.email : "",
      phone: this.props.editDetail != "" ? this.props.editDetail.phone : "",
      position:
        this.props.editDetail != "" ? this.props.editDetail.position : "",
      company: this.props.editDetail != "" ? this.props.editDetail.company : "",
      address: this.props.editDetail != "" ? this.props.editDetail.address : "",
    };
  }

  close = () => {
    if (this.props.modalType == "add") {
      if (this.state.name != "" && this.state.phone != "") {
        var tempAddDetail = {
          id: uniqueId(),
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          position: this.state.position,
          company: this.state.company,
          address: this.state.address,
        };
        this.props.add(tempAddDetail);
      }
    } else {
      var tempEditDetail = {
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        position: this.state.position,
        company: this.state.company,
        address: this.state.address,
      };
      this.props.edit(tempEditDetail);
    }

    this.props.closeModal();
    this.setState({ open: false });
  };
  handleChange = (key, event) => {
    this.setState({ [key]: event.target.value });
  };
  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;

    return (
      <div>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          style={{ width: "auto" }}
        >
          <Modal.Header>Contacts</Modal.Header>
          <Modal.Content>
            <div class="ui input" style={{ alignItems: "center" }}>
              Name:
              <input
                style={{ marginLeft: "25px" }}
                value={this.state.name}
                type="text"
                placeholder="Name..."
                onChange={(e) => this.handleChange("name", e)}
              />
            </div>
          </Modal.Content>
          <Modal.Content>
            <div class="ui input" style={{ alignItems: "center" }}>
              Email:
              <input
                style={{ marginLeft: "29px" }}
                value={this.state.email}
                type="text"
                placeholder="Email..."
                onChange={(e) => this.handleChange("email", e)}
              />
            </div>
          </Modal.Content>
          <Modal.Content>
            <div class="ui input" style={{ alignItems: "center" }}>
              Phone:
              <input
                style={{ marginLeft: "25px" }}
                value={this.state.phone}
                type="text"
                placeholder="Phone..."
                onChange={(e) => this.handleChange("phone", e)}
              />
            </div>
          </Modal.Content>
          <Modal.Content>
            <div class="ui input" style={{ alignItems: "center" }}>
              Position:
              <input
                style={{ marginLeft: "15px" }}
                value={this.state.position}
                type="text"
                placeholder="Position..."
                onChange={(e) => this.handleChange("position", e)}
              />
            </div>
          </Modal.Content>
          <Modal.Content>
            <div class="ui input" style={{ alignItems: "center" }}>
              Company:
              <input
                style={{ marginLeft: "7px" }}
                value={this.state.company}
                type="text"
                placeholder="Company..."
                onChange={(e) => this.handleChange("company", e)}
              />
            </div>
          </Modal.Content>
          <Modal.Content>
            <div class="ui input" style={{ alignItems: "center" }}>
              Address:
              <input
                style={{ marginLeft: "15px" }}
                value={this.state.address}
                type="text"
                placeholder="Address..."
                onChange={(e) => this.handleChange("address", e)}
              />
            </div>
          </Modal.Content>

          <Modal.Actions>
            <Button
              onClick={this.close}
              positive
              labelPosition="right"
              icon="checkmark"
              content="Save"
            />
          </Modal.Actions>
        </Modal>
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
  edit: (val) => {
    dispatch({ type: "EDIT", payload: val });
  },
  minus: () => dispatch({ type: "MINUS_ONE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditerModal);
