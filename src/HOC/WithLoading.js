import React from "react";

function WithLoading(WrappedComponent) {
  return ({ isLoading, ...restProps }) => {
    return isLoading ? (
      <p>Hey! I am loading ! Give me some time :)</p>
    ) : (
      <WrappedComponent {...restProps} />
    );
  };
}

export default WithLoading;
