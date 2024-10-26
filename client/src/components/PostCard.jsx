import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deletePost } from "../utils/axiosHelper";

const PostCard = ({ post,deleteFunction }) => {
  const handleDelete=async()=>{
  deleteFunction(post._id)
  }
  return (
    <>
      <Card className="post">
        <Card.Img
          variant="top"
          src={post.image}
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
        <Card.Body className="text-start">
          <Card.Title className="d-flex justify-content-between ">
            <Link
              to={"/article?id=" + post._id}
              className=""
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {post.title}
            </Link> 

            {post.owner ? (
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
                style={{ cursor: "pointer", color: "black" }}
                title="Delete Article"
                onClick={handleDelete} // Example action
              />
            ) : (
              ""
            )}
          </Card.Title>
          <hr />
          <Card.Text>{post.content.slice(0, 100)}...</Card.Text>
          <strong className="author-info">- {post.author?.username}</strong>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
