import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }, 3000));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has an error .<Link to="/">click here</Link>. Go back to
          homepage.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
