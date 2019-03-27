import React from "react";
import { Component } from "react";
import { userActions } from "../../_actions";

class ChangePasswordDialog extends Component {
    constructor (props){
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }
    handleSubmit = () => {
        const { oldPassword, newPassword } = this.state;
        const { userId, changePassword } = this.props;

        changePassword(oldPassword, newPassword, userId);
    }

    render() {
        const { open, handleClose, user } = this.props;
        const { userToUpdate } = this.state;

        return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="change-password"
            aria-describedby="change-password-description"
        >
            <ValidatorForm onSubmit={this.handleSubmit}>
            <DialogTitle id="edit-basic-info-title">
                {"Edit"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                {`Update user: ${user.name} ${user.surname}`}
                </DialogContentText>
                <InputWithLabel
                label="Voivodeship"
                onChange={this.handleEditChange}
                value={userToUpdate.voivodeship}
                name="voivodeship"
                margin="normal"
                autoComplete="voivodeship"
                isFullWidth={true}
                />
                <InputWithLabel
                label="Street"
                onChange={this.handleEditChange}
                value={userToUpdate.street}
                name="street"
                margin="normal"
                autoComplete="street"
                isFullWidth={true}
                />
                <InputWithLabel
                label="City"
                onChange={this.handleEditChange}
                value={userToUpdate.city}
                name="city"
                margin="normal"
                autoComplete="city"
                isFullWidth={true}
                />
                <InputWithLabel
                label="Number"
                onChange={this.handleEditChange}
                value={userToUpdate.number}
                name="number"
                margin="normal"
                autoComplete="number"
                isFullWidth={true}
                />
                <InputWithLabel
                label="Zip Code"
                onChange={this.handleEditChange}
                value={userToUpdate.zipCode}
                name="zipCode"
                margin="normal"
                autoComplete="zipCode"
                isFullWidth={true}
                />
                <InputWithLabel
                label="Phone"
                onChange={this.handleEditChange}
                value={userToUpdate.phone}
                name="phone"
                margin="normal"
                autoComplete="phone"
                isFullWidth={true}
                />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleClose}>
                Cancel
                </Button>
                <Button
                color="primary"
                type="submit"
                >
                Save
            </Button>
            </DialogActions>
            </ValidatorForm>
        </Dialog>
        )
    }
}


const mapStateToProps = state => {
    const { authentication } = state;
    return {
      userId: authentication.user.id,
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        changePassword: (oldPassword, newPassword, userId) => dispatch(userActions.changePassword(oldPassword, newPassword, userId)),        
    };
  }