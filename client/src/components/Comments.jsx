import React from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import ListGroup from "react-bootstrap/ListGroup";
import { UserComment } from "./UserComment";
import { useState } from "react";
import { Comment } from "../utils/axiosHelper";

export const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState(""); // Separate state for input text

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // comment api call
    // const commentObj = req.body;

    const commentObj = {
      author: "Author Name", // Replace with actual author name if available
      data: commentText,
      time: new Date().toLocaleString(),
    };
    const response = await Comment(id, { commentObj });
    if (response.status == "success") {
      //reload
      //window.location.reload();
      //setCommentText("");
      setComments([...comments, response.comment]);
    } else {
      console.log("error");
    }
  };

  const handleOnChange = (e) => {
    setCommentText(e.target.value);
  };
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={commentText}
            onChange={handleOnChange}
          />
        </FloatingLabel>
        <br></br>
        <Button variant="primary" type="submit">
          Comment
        </Button>
      </Form>
      <hr></hr>
      {/* <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup> */}

      {comments.map((comment, index) => (
        <UserComment key={index} comments={comment} />
      ))}
    </>
  );
};
