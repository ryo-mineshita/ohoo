import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';

import image1 from '../../1.png'
import image2 from '../../2.png'
import image3 from '../../3.png'
import image4 from '../../4.png'
import image5 from '../../5.png'
import image6 from '../../6.png'
import imageuser from '../../veniceuser.jpg'
import imagemask from '../../imgmask.png'

var styles = {
  nav: {
    width: "100%"
  },
  wp: {
    minHeight: "90.5vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#003366",
    backgroundAttachment: "fixed",
  },
  topContainer: {
    height: "100vh",
    paddingRight: "20px",
    paddingLeft: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  topItem: {
    width: "40vw"
  },
  form: {
    width: "400px",
    maxWidth: "100%",
    marginTop: "200px"
  },
  flex: {
    paddingRight: "60px",
    paddingLeft: "60px",
    display: "flex",
    flexFlow: "column nowrap",
    alignContent: "center"
  },
  hugeText: {
    marginTop: 200,
    marginBottom: 100,
    fontSize: "100px",
    color: "#FFFFFF"
  },
  searchBox: {
    width: "100%",
    height: "30px",
    fontSize: "25px",
    borderRadius: "3px",
    border: "1px solid #cccccc",
    outline: "0px",
    padding: "10px",
    "&:focus": {
      outline: "1px solid #4da7fe !important"
    }
  },
  center: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
  },
  showcase: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
  },
  showcaseBlock: {
    marginTop: "80px",
    marginBottom: "80px",
  },
  grad: {
    background: "linear-gradient(145deg, #509cc7, #4d90fe)"
  },
  shadow: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)"
  },
  box: {
    flex: "0 0 auto",
    width: "300px",
    height: "200px",
    marginBottom: "30px",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    cursor: "pointer",
    transition: "backgroundColor 0.5s",
    border: "none",
    padding: "20px",
    "&:hover": {
      backgroundColor: "#eff5f6"
    }
  },
  boxTitle: {
    fontSize: "30px"
  },
  boxDesc: {
    fontSize: "20px",
    color: "#cccccc"
  },
  '@media (max-width: 900px)': {
    form: {
      width: "100vw",
      marginTop: "0px"
    }
  },
};

const fadein = keyframes`
  0%  { opacity: 0; }
  3%  { opacity: 0; }
  5% { opacity: 1; }
  95% { opacity: 1; }
  97% { opacity: 0; }
  100% {opacity: 0; }
`;
const moveimg1 = keyframes`
  0%  { left: 80%; }
  100%{ left: 0%; }
`;
const moveimg2 = keyframes`
  0%  { left: 75%; }
  100%{ left: 0%; }
`;
const moveimg3 = keyframes`
  0%  { left: 70%; }
  100%{ left: 0%; }
`;
const moveimg4 = keyframes`
  0%  { left: 60%; }
  100%{ left: 0%; }
`;
const moveimg5 = keyframes`
  0%  { left: 60%; }
  100%{ left: 0%; }
`;

const Topimgdiv1 = styled.div`
  height: calc(20vw*9/16);
  width: 20vw;
  top: 10%;
  border: 4px #06699E solid;
  position: absolute;
  animation: ${moveimg1} 30s infinite cubic-bezier(0, 0.2, 1, 0.8) -25s, ${fadein} 30s infinite linear -25s;
`;
const Topimgdiv2 = styled.div`
  height: calc(25vw*9/16);
  width: 25vw;
  top: 20%;
  border: 4px #06699E solid;
  position: absolute;
  animation: ${moveimg2} 30s infinite cubic-bezier(0, 0.2, 1, 0.8) -5s, ${fadein} 30s infinite linear -5s;
`;
const Topimgdiv3 = styled.div`
  height: calc(30vw*9/16);
  width: 30vw;
  top: 30%;
  border: 4px #06699E solid;
  position: absolute;
  animation: ${moveimg3} 30s infinite cubic-bezier(0, 0.2, 1, 0.8) -20s, ${fadein} 30s infinite linear -20s;
`;
const Topimgdiv4 = styled.div`
  height: calc(40vw*9/16);
  width: 40vw;
  top: 40%;
  border: 4px #06699E solid;
  position: absolute;
  animation: ${moveimg4} 30s infinite cubic-bezier(0, 0.2, 1, 0.8) -12s, ${fadein} 30s infinite linear -12s;
`;
const Topimgdiv5 = styled.div`
  height: calc(40vw*9/16);
  width: 40vw;
  top: 50%;
  border: 4px #06699E solid;
  position: absolute;
  animation: ${moveimg5} 30s infinite cubic-bezier(0, 0.2, 1, 0.8) -27s, ${fadein} 30s infinite linear -27s;
`;
const Topimg = styled.img`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
`;
const Userimg = styled.img`
  height: 30%;
  top: 70%;
  left: 10%;
  transform: translateX(-10%);
  transform: translateY(-30%);
  border: 2px #FFF solid;
  position: absolute;
`;
const Maskimg = styled.img`
  height: 35%;
  width: 100%;
  top: 58%;
  left: 0px;
  opacity: 0.5;
  border: 2px #06699E solid;
  position: absolute;
`;
const Homep = styled.p`
  top: 60%;
  left: 40%;
  margin: 0;
  font-size: small;
  position: absolute;
`;
const Topbody = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  background: #003366;
`;
const Infodiv = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

class Top extends React.Component{
  componentDidMount(){
    var object1 = document.getElementById('topimg1');
    var object2 = document.getElementById('topimg2');
    var object3 = document.getElementById('topimg3');
    var object4 = document.getElementById('topimg4');
    var object5 = document.getElementById('topimg5');

    object1.onmouseover = function(){
      this.style.zIndex = 1;
      this.style.height  = 'calc(50vw*9/16)';
      this.style.width  = '50vw';
      this.style.transform  = 'translateX(-25%)';
      this.style.animationPlayState = 'paused';
    };
    object1.onmouseout = function() {
      this.style.zIndex = 0;
      this.style.height  = 'calc(20vw*9/16)';
      this.style.width  = '20vw';
      this.style.transform  = '';
      this.style.animationPlayState = 'running';
    };
    object2.onmouseover = function(){
      this.style.zIndex = 1;
      this.style.height  = 'calc(50vw*9/16)';
      this.style.width  = '50vw';
      this.style.transform  = 'translateX(-25%)';
      this.style.animationPlayState = 'paused';
    };
    object2.onmouseout = function() {
      this.style.zIndex = 0;
      this.style.height  = 'calc(25vw*9/16)';
      this.style.width  = '25vw';
      this.style.transform  = '';
      this.style.animationPlayState = 'running';
    };
    object3.onmouseover = function(){
      this.style.zIndex = 1;
      this.style.height  = 'calc(50vw*9/16)';
      this.style.width  = '50vw';
      this.style.transform  = 'translate(-20%,-10%)';
      this.style.animationPlayState = 'paused';
    };
    object3.onmouseout = function() {
      this.style.zIndex = 0;
      this.style.height  = 'calc(30vw*9/16)';
      this.style.width  = '30vw';
      this.style.transform  = '';
      this.style.animationPlayState = 'running';
    };
    object4.onmouseover = function(){
      this.style.zIndex = 1;
      this.style.height  = 'calc(50vw*9/16)';
      this.style.width  = '50vw';
      this.style.transform  = 'translate(-10%,-5%)';
      this.style.animationPlayState = 'paused';
    };
    object4.onmouseout = function() {
      this.style.zIndex = 0;
      this.style.height  = 'calc(40vw*9/16)';
      this.style.width  = '40vw';
      this.style.transform  = '';
      this.style.animationPlayState = 'running';
    };
    object5.onmouseover = function(){
      this.style.zIndex = 1;
      this.style.height  = 'calc(50vw*9/16)';
      this.style.width  = '50vw';
      this.style.transform  = 'translate(-10%,-10%)';
      this.style.animationPlayState = 'paused';
    };
    object5.onmouseout = function() {
      this.style.zIndex = 0;
      this.style.height  = 'calc(40vw*9/16)';
      this.style.width  = '40vw';
      this.style.transform  = '';
      this.style.animationPlayState = 'running';
    };
  }
  render(){
    return (
      <Topbody>
        <Topimgdiv1 id={'topimg1'}>
          <Topimg src={image1}/>
          <Infodiv>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Topimgdiv1>
        <Topimgdiv2 id={'topimg2'}>
          <Topimg src={image2}/>
          <Infodiv>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Topimgdiv2>
        <Topimgdiv3 id={'topimg3'}>
          <Topimg src={image3}/>
          <Infodiv>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Topimgdiv3>
        <Topimgdiv4 id={'topimg4'}>
          <Topimg src={image4}/>
          <Infodiv>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Topimgdiv4>
        <Topimgdiv5 id={'topimg5'}>
          <Topimg src={image5}/>
          <Infodiv>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Topimgdiv5>
      </Topbody>
    );
  }
}

Top.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);
