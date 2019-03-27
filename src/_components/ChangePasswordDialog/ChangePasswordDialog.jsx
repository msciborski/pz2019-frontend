import React from "react";
import { Component } from "react";
import { userActions } from "../../_actions";

class ChangePasswordDialog extends Component {
    constructor (props){
        super(props);
        this.state = {
            oldPassword: '',
            newPassword: '',
            repPassword: '',
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }
    handleSubmit = () => {
        const { oldPassword, newPassword, repPassword } = this.state;
        const { userId, changePassword } = this.props;

        changePassword(oldPassword, newPassword, userId);
    }

    render() {
        const { open, handleClose, userId } = this.props;
        const { oldPassword, newPassword } = this.state;

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
                label="Old password"
                onChange={this.handleChange}
                value={oldPassword}
                name="oldPassword"
                margin="normal"
                autoComplete="Old password"
                isFullWidth={true}
                type="password"
                />
                <InputWithLabel
                label="New password"
                onChange={this.handleChange}
                value={newPassword}
                name="newPassword"
                margin="normal"
                autoComplete="New password"
                isFullWidth={true}
                type="password"
                />
                <InputWithLabel
                label="Repeat password"
                onChange={this.handleChange}
                value={newPassword}
                name="city"
                margin="normal"
                autoComplete="city"
                isFullWidth={true}
                type="password"
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