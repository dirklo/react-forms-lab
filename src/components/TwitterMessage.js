import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageText: "",
    };
  }

  handleInput = e => {
    this.setState({
      messageText: e.target.value,
    })
  }

  render() {
    let remainingCharacters = this.props.maxChars - this.state.messageText.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInput} value={this.state.messageText} />
        {remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
