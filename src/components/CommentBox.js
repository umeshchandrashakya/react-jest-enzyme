import React from "react";

import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";
class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.saveComments(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <h4>Add A comment</h4>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          ></textarea>
          <div>
            <button>Submmit Comment</button>
          </div>
        </form>
        <br></br>
        <button className="fetch_comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
