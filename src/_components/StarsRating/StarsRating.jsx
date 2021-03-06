import React, { Component } from "react";
import StarRate from "@material-ui/icons/StarRate";
import StarRateOutlined from "@material-ui/icons/StarRateOutlined";
import { IconButton } from "@material-ui/core";

class StarsRating extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      hoverValue: value,
    }
  }

  handleMouseEnter = (event) => {
    const { target } = event;
    const value = target.getAttribute('star-index');
    // console.log('Value:', value);
    this.setState({ hoverValue: value });
  }

  handleMouseLeave = () => {
    const { value } = this.props;
    this.setState({ hoverValue: value });
  }

  renderIcon(i) {
    const { value } = this.props;
    const { hoverValue } = this.state;

    const primary = i <= value && i <= hoverValue;
    const secondary = i <= value && hoverValue <= value || i > value && hoverValue >= i;
    const disabled = i <= value && i > hoverValue && hoverValue <= value && hoverValue > value || i > value && hoverValue < i;


    if (primary) {
      return <StarRate color="primary" />
    } else if (secondary) {
      return <StarRate color="secondary" />
    } else if(disabled) {
      return <StarRate color="disabled" />
    }
  }

  render() {
    const stars = [];
    const { max, handleClick, disabled } = this.props;
    for (let i = 1; i <= max; i++) {
      stars.push(
        <IconButton
          star-index={i}
          key={i}
          disabled={disabled}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={() => { handleClick(i) }}
        >
          {this.renderIcon(i)}
        </IconButton>
      )
    }

    return (
      <div id="stars">
        {stars}
      </div>
    )
  }
}

export { StarsRating };