import React, {Component} from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, _) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    const {hasError, errorMessage} = this.state
    if(hasError) {
      return (
          <div>
            <h1>{ errorMessage }</h1>
          </div>
      );
    }
    return this.props.children
  }
}