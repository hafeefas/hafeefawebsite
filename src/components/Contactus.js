import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contactus = () => {
  return (
    
    <>
      <h1 style={{textAlign:"center", fontSize:"55px", paddingBottom:"5px", color:"black"}} > 
        Get In Touch 
      </h1>
        <div>
          
    <div  style={{ paddingLeft:"10px"}}></div>
    <Card className="text-center" 
      style={{background:"white", 
      width:"70%", 
      marginLeft:"auto", 
      marginRight:"auto",
      padding:"20px",
      border:"solid black"}}>
      <Card.Body>
        <Card.Title>
        </Card.Title>
          <Card.Text>
        <p style={{textAlign:"center", fontSize:"30px", paddingBottom:"10px",color:"black"}}> Want to work together or have any questions?</p>
        </Card.Text>
        <Button variant="primary" id="contactbutton"> 
        <a href= "mailto:hafeefas47@gmail.com" 
          target="_blank" style={{ textDecoration:"none"}}> 
            <div style={{ 
              color:"white", 
              marginLeft:"auto", 
             marginRight:"auto",
             paddingLeft:"60px", 
             paddingRight:"60px", 
             padding:"20px"}}>
                              Email me! 
          </div>
        </a> 
        </Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
        </div>

        <Container style={{ paddingTop:"15px"}}>
      <Row className="justify-content-md-center">

        <Col xs lg="2">
          <a href="https://github.com/hafeefas" 
          target="_blank" 
          // className="resume" 
          style={{color:"black", textDecoration:"none"}}>
            <p style={{fontSize:"25px", paddingLeft:"110px"}}>Github</p> 
              </a>     
           </Col>

        <Col md="auto">
          <a href ="https://docs.google.com/document/d/1ImeRckQpQiwg_0XFUt8ViyBqMJlgxy0c6X7HdazpRAQ/edit?usp=sharing"
          target="_blank" 
          className="resume" 
          style={{color:"black", textDecoration:"none"}} > 
            <p style={{fontSize:"24.7px"}}>Resume</p> 
          </a>  
          </Col>

        <Col xs lg="2">
        <a href="https://www.linkedin.com/in/hafeefa-sultan-1a3785227/" 
          target="_blank" 
          // className="resume" 
          style={{color:"black", textDecoration:"none"}}>
            <p style={{fontSize:"24.4px"}}>Linkedin</p> 
              </a>     
        </Col>
      </Row>
      </Container>
        
        

      <br/>
    </>
  )
}

export default Contactus;