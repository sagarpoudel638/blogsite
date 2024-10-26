import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Navbar";
import PostCard from "../components/PostCard";
import Footer from "../components/footer";
import { FloatingButton } from "../components/FloatingButton";
import { Link } from "react-router-dom";
import { deletePost, fetchMyPost } from "../utils/axiosHelper";

const MyPostPage = () => {
  const [posts,setPosts]= useState([]);

  const deleteFunction =async(_id)=>{
    const response = await deletePost(_id);
    console.log(response)
    if (response.status=="success") {
      console.log("success")
      
    }
    else{
      console.log("error")
    }
  }
  const fillPosts = async()=>{
    const response = await fetchMyPost();
    setPosts(response.data??[]);
  }
  
  useEffect(()=>{
fillPosts();

  },[])

  
  return (
    <>
      <Header />
      <Link to="/mypost/create">
        <FloatingButton />
      </Link>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ width: "66%", margin: "0 auto" }}
      >
        <Row className="mt-4">
          <Col className="text-center">
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
            {posts.map((post) => {
                post.owner = true;
                return (
                  <PostCard
                    key={post._id}
                    post={post}
                    deleteFunction={deleteFunction}
                  />
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MyPostPage;
