import React from "react";
import { useParams } from "react-router-dom";

const PaperMachine = ({ match }) => {
  const { slug } = useParams();
  console.log(slug);
  return <>{`${slug}`}</>;
};

export default PaperMachine;
