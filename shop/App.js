import './App.css';
import Data from './data';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { useState } from 'react';

function Card(props){
 
  return(
    <div className="col-md-4">
      <img src={`https://yeonghoonpark.github.io/shop/images/shoes0${
        props.idx<10
        ?"0"+props.idx
        :props.idx
      }.jpg`}/>
      <h2>{props.shoes.title}</h2>
      <p>{props.shoes.content}</p>
    </div>
  );
}


function App() {
  let [shoes, shoesChange] = useState(Data);
  
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Jumbotron */}
      <Jumbotron className="background">
        <h1>신발사세요!! 맛 좋은 신발이요!!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">더 보기</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          {
            shoes.map((item, idx, arr)=>{
              return <Card key={item.id} shoes={item} idx={idx}/>
            })
          }
          
         
        </div>
      </div>
    
    
    
    </div>
  );
}

export default App;
