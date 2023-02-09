import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarr from './components/Navbarr';
import Card from 'react-bootstrap/Card';
import ContactUs from './components/Contactus';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';




function App() {
  return (
    <>
   
    <div className="normalfont">
   
    <Navbarr></Navbarr>
<br/> <br/> <br/>
    
<Container>

            <h1 className="normalfont"> <strong></strong> </h1>
              <h3 style=
                {{color:'black' , 
                fontSize:"35px", 
                paddingLeft:"30px" ,
                paddingBottom:"50px", 
                textAlign:"center", 
                borderRadius:"20px"}}
                className="underlineintro"> 
                Hello world, nice to meet you! My name is <em style={{textDecoration:"underline"}}>Hafeefa Sultan</em> 🎀 </h3>
                
              <h5 style=
              {{color:'black',
              padding:"20px", 
              textAlign:"center", 
              textDecoration:"underline",
              textDecorationColor:"black",
              paddingBottom:"22px"}}>
                 <strong  id="aspiringfont">I'm an aspiring software engineer based in New York City!</strong> </h5>
          {/* </Col>
        <Col> */}

        <div className="image-fluid">
           <img src="https://i.pinimg.com/originals/01/9f/c4/019fc468dd8f365bd036e228772eb66d.jpg"
             id="art"/>
       </div>
            
            <br/>
    
{/* </div> */}
      <h1 
        style=
        {{textAlign:"center", 
        paddingTop:"15px", 
        fontSize:"25px"}}>
          
          <em style=
          {{textDecoration: "underline", 
            color:"black",
            padding:"10px"}}
              className="underlineintro">
                 Learn more about me below!
          </em>
      </h1> 

             <br/> <br/>
             <br/> <br/>
             <br/> <br/>
             <br/>
             
       {/* first card */}

      <Row style= {{paddingTop:"10px",  margin:"auto"}}>
      <p id="a" style={{textAlign:"center", fontSize:"45px", paddingBottom:"10px",  margin:"auto"}}> 
          Frameworks and Languages I use
      </p>

    <Col style={{marginLeft:"10px"}}><Card  id="cards">
      <Card.Body>
        <Card.Title id="cardTitleSpacing">HTML, CSS, JavaScript</Card.Title>
        <Card.Text>
          
          I am advanced at utilizing HTML and CSS, 
          but definetly still have lots to learn about them. 
          As for JavaScript, I utilise it in order to 
          add aesthetics, but definetly require more practice with it. 
          <br/>

          <img src="https://images.velog.io/images/gga4638/post/6d9df8cb-5086-4fa9-83d1-521fd6a2cb27/image.png" 
          style={{height:"14vh", marginTop:"35px",  margin:"auto"}}/> 
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card></Col>
    <br/>

    {/* second card */}

    <Col  style={{marginLeft:"10px",  margin:"auto"}}><Card  id="cards" >
      <Card.Body>
        <Card.Title id="cardTitleSpacing">React JS, BootStrap JS</Card.Title>
        <Card.Text>

          I absolutely love working with React and Boostrap, as they 
          allow my site to obtain more website functionality. I also love their
          ease of use, and always come in handy when building sites.
          <br/>

          <img src="https://www.educative.io/api/page/5816757605367808/image/download/5327498687545344" 
          id="picture" style={{height:"14vh", marginTop:"35px",  margin:"auto"}}/>

        </Card.Text>
      </Card.Body>
    </Card></Col>
    <br/>

    {/* third card */}
    <Col  style={{marginLeft:"10px",  margin:"auto"}}><Card  id="cards">
      <Card.Body>
        <Card.Title id="cardTitleSpacing">Java</Card.Title>
        <Card.Text>
          I use java in my cs classes, and do enjoy using it in order to build programs.
          Though I use it in class, I would love to have real world experience
          with java and more real world applications with it. <br/>

          <img src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg" 
          id="picture" style={{height:"14vh", marginTop:"35px",  margin:"auto"}}/>
        </Card.Text>
      </Card.Body>
    </Card></Col>
  </Row>
<br/><br/> <br/> <br/> <br/> <br/> <br/>

    <p id="a" 
          className="underlineintro"
          style={{paddingBottom:"10px",fontSize:"50px", textAlign:"center"}}>
          Learn more about me and my objectives!
    </p>
<br/>
{/* my own picture */}
<Container>
    <Row>
      <Col>
        <div class="container">   
          <img src="https://media.licdn.com/dms/image/D4E03AQFKCehSPZwPmQ/profile-displayphoto-shrink_800_800/0/1674249851349?e=1680739200&v=beta&t=pIz9oADbHJRR8Uo_36pNl-ACKgcRpXbsVbcwIgFQpH8"
          class="image" style={{width:"48vh", paddingTop:"50px", borderRadius:"30px",  margin:"auto"}} />
        </div>
      </Col>
{/* why i want to become full stack */}
      <Col>
          <p id="why" style={{paddingTop:"43px"}}>
              I am asipring full stack software engineer mainly specializing in the front end areas.
              I am however, knowledgable in certain areas in backend. I want to become a full stack developer
              because I want to learn and work with multiple technologies, and be able to see the full 
              picture of where the backend and frontend is used.
          </p>
          <p id="why">
              I would also enjoy being a full stack developer because it would allow
              me to work for businesses as well as software companies. I can then 
              listen to business owners and collaborate with them to create and deploy an 
              entire solution, which I find pretty cool!
          </p>
          <p id="why">
              Though these are all true, I still do have a long way to go until I can reach my goal.
              I am currently looking for full stack, front-end, and back-end internships that will
              help reach my target. I love working in every aspect of front end and back end, so
              I would give it my all in order to reach my objectives!
          </p>
      </Col>
    </Row>
  </Container>
  
    <br/><br/> <br/> <br/> <br/>
        <br/> 

      {/* beginning of why exactly */}

<div 
  style={{border:"solid black", 
  borderRadius:"10px", 
  borderWidth:"5px",
  padding:"45px",
  maxWidth:"100%", 
  height:"auto"}}>

    <br/>   
      <p 
          style={{textAlign:"center", fontSize:"40px", paddingBottom:"5px", color:"black"}} 
            className="underline">
         Why exactly do I want to be a software engineer? 
      </p>

    <br/> 
{/* first */}

   
    <Card className="bg-light text-black" style={{paddingBottom:"50px", textAlign:"center", border:"solid black"}}>
      <Card.Body>
        <Card.Title className="underlineintro" id= "secondCardTitle" style={{fontSize:"35px", color:"black"}} > 
          <em> It's fun! </em>
          </Card.Title>
            <Card.Text style={{ paddingTop:"6px", fontSize:"18px", color:"black"}}>
              During an internship I had during January 2023, I worked in a team of 5 and we
              were able to build a complete marketplace full-stack website. 
              Building strong connections, worrking together and striving for the same goal
              made the internship so much fun. That's one of the highlights
              of being a software engineer, working in cooperative teams and aiming for a common target!
            </Card.Text>
      </Card.Body>
    </Card>

    <br/><br/> 
    {/* second */}

  
<br/>
    <Card className="bg-light text-white" 
      style={{paddingBottom:"60px", border:"solid black", textAlign:"center"}}>
      {/* <Card.Header as="h5">Featured</Card.Header> */}
      <Card.Body>
        <Card.Title  id= "secondCardTitle" className="underlineintro" style={{fontSize:"35px"}} > <em>I love to problem solve!</em></Card.Title>
          <Card.Text style={{paddingTop:"6px",  fontSize:"18px", color:"black"}}>
          I personally enjoy problem solving
          very much. I love the challenge it gives to my brain, and I learned I really work best when working in 
          a problem solving environment! When I find the solution to my problems, it just makes me want
          to celebrate!
          </Card.Text>
      </Card.Body>
    </Card>
    <br/>
  
{/* pink line design */}
<br></br> <br/> 

    </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br/>
  
  

  {/* <Card style={{ width: '70vh', maxWidth: "50%", height: "auto"}}></Card> */}
  
    <CardGroup >
      <Card className="bg-light" style={{maxWidth: "100%", height: "auto",  borderWidth:"2px"}} >
        <Card.Img variant="top" src="https://www.makerstations.io/content/images/2022/08/jb-bardoles-desk-setup-02.jpg" />
          <Card.Body>
            <Card.Title style={{color:"black", fontSize:"30px", textDecoration:"underline", paddingBottom:"5px"}} 
              className="underlineintro"> 
                What I used in order to build this website</Card.Title>
         
                <Card.Text style={{paddingTop:"10px", fontSize:"20px", color:"black"}}>
                  <ul>
                    <li> Editor: VSCode</li>
                    <li> Framework: Bootstrap </li>
                    <li> Open source: Node.js, Git, Github </li>
                    <li> Languages: React, HTML, JavaScript, CSS </li>
                  </ul>
          </Card.Text>
        </Card.Body>
      </Card> 

      {/* second card */}

      <Card className="bg-light" style={{maxWidth: "100%", height: "auto",  borderWidth:"2px"}} >
        <Card.Img variant="top" src="https://www.makerstations.io/content/images/size/w1384/2022/08/jb-bardoles-desk-setup-01.jpg" />
          <Card.Body>
              <Card.Title style={{color:"black", fontSize:"30px", textDecoration:"underline", paddingBottom:"5px"}}
                className="underlineintro">
                   My experience with building sites </Card.Title>

          <Card.Text  style={{paddingTop:"10px", fontSize:"20px",color:"black"}}>
              <li > 9 months experience with front end</li>
              <li > One web development certificate</li>
              <li > Have built a full stack marketplace website for business processes in a team of five
                in under three weeks
            </li>
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>
    
 
<br/> <br/>
<br/><br/> 
<br/> <br/>


        <ContactUs/>
          <br/>
              <p style={{textAlign:"center", fontSize:"12px"}}>
                <em>Desgined and developed by Hafeefa Sultan on February 6, 2023. </em> 
              </p>
            <br/>
        </Container>
      </div>

    </>
  );
}

export default App;
