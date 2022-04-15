import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav , Card, Button } from 'react-bootstrap';
import blogsData from './blogsData';
import { useState } from 'react';

// Header Component
function Header(){
  return(
    <header>
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><h1>Everyone's Blog</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav><Link to="/" style={{marginRight:'12px', textDecoration:'none', color:'#fff'}}>Home</Link></Nav>
            <Nav><Link to="/Blog" style={{textDecoration:'none', color:'#fff'}}>Blog</Link></Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  </header>
  );
}

// Banner Component
function Banner(){
  return(
    <section className="banner">
        <div className="container">
          <div className="background-banner">
            <h2>Everyone's Blog</h2> 
          </div>
        </div>
      </section>
  );
}

// Blogs Component
function Blogs(props){
  return(
    <Card style={{ width: '28%' , marginBottom:'28px', cursor:'pointer'}} >
      <Card.Body>
        <Card.Title>{props.blogs.title}</Card.Title>
        <Card.Text>
          {props.blogs.content}
        </Card.Text>
      </Card.Body>
    </Card>
    
  );
}

// Footer Component
function Footer(){
  return(
    <footer>
      <div className="container">
        <address>
          Copyright by Park
        </address>
      </div>
    </footer>
  );
}

function App() {
  let [blogs, blogsChange] = useState(blogsData);
  let [viewCnt, viewCntChange] = useState(3);
  let history = useHistory();

  return (
    <Router>
      {/* Home page */}
      <div className="App">
        <Route exact path="/">
          <Header />
          <Banner />
          <section className="blog">
            <div className="container">
              <div className="blogs-box">
                {
                  blogs.map((item, idx, arr)=>{
                    if(idx >= viewCnt ){
                      return false;
                    }else{
                      return(
                        <Blogs key={item.id} blogs={item} idx={idx}/>      
                      );
                    }
                  })
                }
              </div>
              <div className="buttons-box">
                <Button variant="dark" style={{ marginRight:'28px'}} onClick={()=>{
                  viewCntChange(viewCnt += 3);
                }}>더 보기</Button>
                <Button variant="dark">블로그 작성</Button>
              </div>
            </div>
          </section>
          <Footer />
        </Route>
       
       {/* Blog page */}
        <Route exact path="/blog">
          <Header />
          <section className="blog">
            <div className="container">
              <div className="blogs-box">
                {
                  blogs.map((item, idx)=>{
                    if(idx >= viewCnt ){
                      return false;
                    }else{
                      return(
                        <Blogs key={item.id} blogs={item} idx={idx}/>      
                      );
                    }
                  })
                }
              </div>
              <div className="buttons-box">
                <Button variant="dark" style={{ marginRight:'28px'}} onClick={()=>{
                  viewCntChange(viewCnt += 3);
                }}>더 보기</Button>
                <Button variant="dark" style={{ marginRight:'28px'}}>블로그 작성</Button>
                <Button variant="dark" onClick={()=>{
                  history.go(-1);
                }}>뒤로가기</Button>
              </div>
            </div>
          </section>
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
