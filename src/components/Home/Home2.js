import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myimg from "../../Assets/gokul.jpeg";
import leaf from "../../Assets/Projects/leaf.png";
import akshara from "../../Assets/akshara.jpg"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,

  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <h1 style={{ fontSize: "2.0em",textAlign: "center"}}>
            <span className="white">  LET ME <span className="purple"> INTRODUCE </span> MYSELF</span>
      </h1>
      <div class="raised-box">
        <div class="part-1">
          <div class="part-3">
            <img src={myimg} alt="Your Image" width="100" height="100"/> 
              <div class="user">
              <p ><b>Name:</b> Gokul Krishna</p>
              <p><b>Role:</b> Full stack developer</p>
              <p><b>Email:</b> gookul.krishna@gmail.com</p>
              </div>
          </div>
          <div class="part-4">
            <div class="part-4-heading"><h2 class="underline-on-hovers"><b>Skills</b></h2></div>
            <div class="part-4-box">
              <div class="skill-div">Spring MVC</div>
              <div class="skill-div">Spring Security</div>
              <div class="skill-div">Web Api</div>
              <div class="skill-div">Hibernate</div>
              <div class="skill-div">Microservices</div>
            </div>
          </div>
        </div>
        <div class="part-2">
          <h2 class="underline-on-hovers">About Me</h2>
          <p>Highly motivated and versatile programmer with a strong commitment to expanding technical knowledge and utilizing new technologies. Skilled in problem-solving and taking ownership of projects, with a proven track record of contributing to both individual and team goals.Dedicated to effective communication and collaboration, constantly staying ahead of industry trends and seeking new challenges to enhance skills and deliver exceptional outcomes</p>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <br></br>




      <div class="raised-box">
      <div class="part-1">
        <div class="part-3">
          <img src={akshara} alt="Your Image" width="100" height="100"/> 
            <div class="user1">
            <p><b>Name:</b> Akshara Madhusudhanan</p>
            <p><b>Role:</b> Frontend developer</p>
            <p><b>Email:</b> akshara6782@gmail.com</p>
            </div>
        </div>
        <div class="part-4">
          <div class="part-4-heading"><h2 class="underline-on-hovers"><b>Skills</b></h2></div>
          <div class="part-4-box">
            <div class="skill-div">HTML</div>
            <div class="skill-div">CSS</div>
            <div class="skill-div">JavaScript</div>
            <div class="skill-div">React</div>
            <div class="skill-div">Bootstrap</div>
          </div>
        </div>
      </div>
      <div class="part-2">
        <h2 class="underline-on-hovers">About Me</h2>
        <p>Enthusiastic Frontend Developer with a keen eye for design and a track record of crafting visually appealing and user-friendly web interfaces. Demonstrated ability to collaborate effectively in cross-functional teams, staying attuned to industry trends. Committed to delivering innovative and seamless user experiences in dynamic web environments.</p>
      </div>
    </div>

<br>
</br>
<br></br>
<br></br>
    <h1 className="project-heading" id="project">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black", textAlign:"center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div class="project-con" >
           <a href="https://www.google.com">
             <div class="flip-container">
               <div class="flipper">
                  <div class="front">
                    <img src={leaf} alt="Image Description"/>
                    <h2 class="proj-font">Hospital management system dsfdfsdfsdf</h2>
                    <h3 class="proj-font">HTML,CSS,react,spring</h3>
                  </div>
                  <div class="back">
                    <p class="proj-font">Image 1 Description</p>
                  </div>
               </div>
             </div>
           </a>
       <a href="https://www.google.com">
        <div class="flip-container">
         <div class="flipper">
            <div class="front">
            <img src={leaf} alt="Image Description"/>
              <h2 class="proj-font">Hospital management system dsfdfsdfsdf</h2>
             <h3 class="proj-font">HTML,CSS,react,spring</h3>
          </div>
           <div class="back">
             <p class="proj-font">Image 1 Description</p>
          </div>
        </div>
      </div>
      </a>
      <a href="https://www.google.com">
        <div class="flip-container">
         <div class="flipper">
            <div class="front">
            <img src={leaf} alt="Image Description"/>
              <h2 class="proj-font">Hospital management system dsfdfsdfsdf</h2>
             <h3 class="proj-font">HTML,CSS,react,spring</h3>
          </div>
           <div class="back">
             <p class="proj-font">Image 1 Description</p>
          </div>
        </div>
      </div>
      </a>
      <a href="https://www.google.com">
        <div class="flip-container">
         <div class="flipper">
            <div class="front">
            <img src={leaf} alt="Image Description"/>
              <h2 class="proj-font">Hospital management system dsfdfsdfsdf</h2>
             <h3 class="proj-font">HTML,CSS,react,spring</h3>
          </div>
           <div class="back">
             <p class="proj-font">Image 1 Description</p>
          </div>
        </div>
      </div>
      </a>
      <a href="https://www.google.com">
        <div class="flip-container">
         <div class="flipper">
            <div class="front">
            <img src={leaf} alt="Image Description"/>
              <h2 class="proj-font">Hospital management system dsfdfsdfsdf</h2>
             <h3 class="proj-font">HTML,CSS,react,spring</h3>
          </div>
           <div class="back">
             <p class="proj-font">Image 1 Description</p>
          </div>
        </div>
      </div>
      </a>
      
      </div>
      <Container>
            <Row>
              <Col md={12} className="home-about-social">
                <h1 style={{color:"black"}} >FIND ME ON</h1>
                <p style={{color:"black"}}>
                  Feel free to <span className="purple">contact us </span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/soumyajit4419"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/Soumyajit4419"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <AiFillInstagram/>
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/soumyajit4419/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/soumyajit4419"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillMail />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
      </Container>
    </Container>
  );
}
export default Home2;