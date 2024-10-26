import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"; // Added Spinner and Alert for better loading/error handling
import Header from "../components/Navbar";
import PostCard from "../components/PostCard";
import Footer from "../components/footer"; // Make sure the casing matches your component file
import { useLocation } from "react-router-dom";
import { fetchSearchPost } from "../utils/axiosHelper";
import { useParams } from 'react-router-dom';



const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const { query } = useParams(); // Get the query from URL parameters

  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  //const query = queryParams.get('query');
    const searchPost=async()=>{
      setLoading(true); // Reset loading state when fetching posts
      try {
        const response = await fetchSearchPost(query);
        console.log(query)
  
        if (response?.status === "error") {
          
          throw new Error(response.message);
          setPosts([]);
        } else {
          console.log(response.data);
          setPosts(response.data); // Ensure you access the correct data property
        }
      } catch (err) {
        setError(err.message);
        setPosts([]);
      } finally {
        setLoading(false);
      }
        
    }
  useEffect(() => {
    searchPost();
  }, [query]);


if (loading) return <Spinner animation="border" />; // Use a spinner for loading state
  if (error) return <Alert variant="danger">Error: {error}</Alert>; // Use an alert for error messages
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
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
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
