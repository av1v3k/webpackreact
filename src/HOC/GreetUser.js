import React from "react";

function GreetUser(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <WrappedComponent {...this.props}>{this.props.children}</WrappedComponent>
      );
    }
  };
}

export default GreetUser;
