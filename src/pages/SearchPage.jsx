import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"; // Added Spinner and Alert for better loading/error handling
import Header from "../components/Navbar";
import PostCard from "../components/PostCard";
import Footer from "../components/footer"; // Make sure the casing matches your component file


const SearchPage = () => {

    const searchPost=()=>{

        console.log("searching....")
    }
//   useEffect(() => {
//     // searchPosts();
//   }, []);



  return (
    <>
      <Header />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ width: "66%", margin: "0 auto" }}
      >
        <Row className="mt-4">
          <Col className="text-center">
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
              {/* {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))} */}
              <h1>Search</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchPage;
