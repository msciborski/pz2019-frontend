import React from 'react';
import { Component } from "react";

import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import bot_avatar from './bot_avatar.png';
import { chatBotSteps } from "../../_helpers";
import {connect} from "react-redux";

const styles = {
	fontFamily: "Roboto, Helvetica, Arial, sans-serif",
	headerFontSize: "20px",
	headerBgColor: "#3f51b5",
	headerFontColor: "#fff",
	userFontColor: "#000",
	botBubbleColor: "#3f51b5",
	userBubbleColor: "#fff",
	botFontColor: "#fff",
};


class ChatBotWidget extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { loggedIn } = this.props;

		return(
			<ThemeProvider theme={styles}>
				{
					loggedIn &&

					<ChatBot
						steps={chatBotSteps}
						botAvatar={bot_avatar}
						headerTitle="Clinic Manager Chat"
						floating="true"
						customDelay="500"
						width="300px"
						height="400px"
					/>
				}
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => {
	const { loggedIn, user } = state.authentication;
	return {
		loggedIn,
		authUser: user ? user.user : {},
	};
}

const connectedNavBar = connect(mapStateToProps)(ChatBotWidget);
export { connectedNavBar as ChatBotWidget };
