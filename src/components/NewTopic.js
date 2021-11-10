import React, { useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

import Title from "./Title";
import Typography from "@mui/material/Typography";

const NewTopic = () => {
  const { topicId } = useParams();

  const [isLoading, setLoaded] = React.useState({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    setLoaded({ isLoading: true });
    fetch(`https://reqres.in/api/unknown/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoaded({ isLoading: false, data: data });
      });
  }, [topicId]);

  const customStyle =
    isLoading && !isLoading.isLoading
      ? { color: isLoading.data.data.color }
      : { color: "#000000" };

  const content =
    !isLoading.isLoading && isLoading.data ? isLoading.data.support.text : null;

  const name =
    !isLoading.isLoading && isLoading.data ? isLoading.data.data.name : null;

  const year =
    !isLoading.isLoading && isLoading.data ? isLoading.data.data.year : null;

  const spinner = <p>Loading...</p>;

  return (
    <>
      {!isLoading.isLoading ? (
        <>
          <Title>{name}</Title>
          <Typography
            style={{ display: "inline-block" }}
            component="span"
            color="text.secondary"
            sx={{ flex: 1 }}
          >
            {year}
          </Typography>
          <Typography style={customStyle} component="p" variant="h4">
            {content}
          </Typography>
        </>
      ) : (
        spinner
      )}
    </>
  );
};

export default NewTopic;
