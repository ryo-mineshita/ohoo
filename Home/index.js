import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styled, { keyframes } from 'styled-components';

import image from '../../venice.jpg'
import imageuser from '../../veniceuser.jpg'
import imagemask from '../../imgmask.png'
import imageyazirusi from '../../yazirusi.png'

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

const moveimg0 = keyframes`
  0% {
    height: var(--height0);
    width: var(--width0);
    top: var(--top0);
    left: var(--left0);
  }
  100% {
    height: var(--height1);
    width: var(--width1);
    top: var(--top1);
    left: var(--left1);
`;
const moveimg1 = keyframes`
  0% {
    height: var(--height1);
    width: var(--width1);
    top: var(--top1);
    left: var(--left1);
  }
  100% {
    height: var(--height2);
    width: var(--width2);
    top: var(--top2);
    left: var(--left2);
  }
`;
const moveimg2 = keyframes`
  0% {
    height: var(--height2);
    width: var(--width2);
    top: var(--top2);
    left: var(--left2);
  }
  100% {
    height: var(--height3);
    width: var(--width3);
    top: var(--top3);
    left: var(--left3);
  }
`;
const moveimg3 = keyframes`
  0% {
    height: var(--height3);
    width: var(--width3);
    top: var(--top3);
    left: var(--left3);
  }
  100% {
    height: var(--height4);
    width: var(--width4);
    top: var(--top4);
    left: var(--left4);
  }
`;
const moveimg4 = keyframes`
  0% {
    height: var(--height4);
    width: var(--width4);
    top: var(--top4);
    left: var(--left4);
  }
  100% {
    height: var(--height5);
    width: var(--width5);
    top: var(--top5);
    left: var(--left5);
  }
`;
const moveimg5 = keyframes`
  0% {
    height: var(--height5);
    width: var(--width5);
    top: var(--top5);
    left: var(--left5);
  }
  100% {
    height: var(--height0);
    width: var(--width0);
    top: var(--top0);
    left: var(--left0);
  }
`;
const info = keyframes`
  0% {
    top: 0vh;
  }
  100% {
    top: 30vh;
  }
`;

const Homeimgdiv0 = styled.div`
  --height0: calc(56vw*9/16);
  --width0: 56vw;
  --top0: 13%;
  --left0: 50%;
  z-index: 1;
  transform: translateX(-50%);
  border: 4px #06699E ridge;
  position: absolute;
  animation: ${moveimg0} 1s infinite alternate paused;
`;
const Homeimgdiv1 = styled.div`
  --height2: calc(20vw*9/16);
  --width2: 20vw;
  --top2: 55%;
  --left2: 11%;
  transform: translateX(-50%);
  border: 4px #06699E ridge;
  position: absolute;
  animation: ${moveimg1} 1s infinite alternate-reverse paused;
`;
const Homeimgdiv2 = styled.div`
  --height2: calc(20vw*9/16);
  --width2: 20vw;
  --top2: 25%;
  --left2: 20%;
  transform: translateX(-50%);
  border: 4px #06699E ridge;
  position: absolute;
  animation: ${moveimg2} 1s infinite alternate paused;
`;
const Homeimgdiv3 = styled.div`
  --height4: calc(20vw*9/16);
  --width4: 20vw;
  --top4: 13%;
  --left4: 50%;
  transform: translateX(-50%);
  border: 4px #06699E ridge;
  position: absolute;
  animation: ${moveimg3} 1s infinite alternate-reverse paused;
`;
const Homeimgdiv4 = styled.div`
  --height4: calc(20vw*9/16);
  --width4: 20vw;
  --top4: 25%;
  --left4: 80%;
  transform: translateX(-50%);
  border: 4px #06699E ridge;
  position: absolute;
  animation: ${moveimg4} 1s infinite alternate paused;
`;
const Homeimgdiv5 = styled.div`
  --height0: calc(20vw*9/16);
  --width0: 20vw;
  --top0: 55%;
  --left0: 89%;
  transform: translateX(-50%);
  border: 4px #06699E ridge;
  position: absolute;
  animation: ${moveimg5} 1s infinite alternate-reverse paused;
`;

const Homeimg = styled.img`
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
const Buttonimgl = styled.img`
  height: 100%;
  width: 100%;
  transform: translate(-50%,0%) scale(-1);
  position: absolute;
`;
const Buttonimgr = styled.img`
  height: 100%;
  width: 100%;
  transform: translate(-50%,0%);
  position: absolute;
`;
const Homep = styled.p`
  top: 60%;
  left: 40%;
  margin: 0;
  font-size: small;
  position: absolute;
`;
const Leftbuttondiv = styled.div`
  height: 100%;
  width: 22%;
  top: 0px;
  left: 0px;
  z-index: 10;
  opacity: 0;
  position: absolute;
`;
const Rightbuttondiv = styled.div`
  height: 100%;
  width: 22%;
  top: 0px;
  left: 100%;
  transform: translateX(-100%);
  z-index: 10;
  opacity: 0;
  position: absolute;
`;
const Homebody = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  background: #003366;
`;
const Infodiv = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  animation: ${info} 1s infinite alternate paused;
`;

class Home extends React.Component{
  componentDidMount(){
    var leftbutton = document.getElementById('leftbutton');
    var rightbutton = document.getElementById('rightbutton');
    var object0 = document.getElementById('homeimgdiv0');
    var object1 = document.getElementById('homeimgdiv1');
    var object2 = document.getElementById('homeimgdiv2');
    var object3 = document.getElementById('homeimgdiv3');
    var object4 = document.getElementById('homeimgdiv4');
    var object5 = document.getElementById('homeimgdiv5');
    var infodiv0 = document.getElementById('infodiv0');
    var infodiv1 = document.getElementById('infodiv1');
    var infodiv2 = document.getElementById('infodiv2');
    var infodiv3 = document.getElementById('infodiv3');
    var infodiv4 = document.getElementById('infodiv4');
    var infodiv5 = document.getElementById('infodiv5');

    const objectarr = [object0,object1,object2,object3,object4,object5];
    const infoarr = [infodiv0,infodiv1,infodiv2,infodiv3,infodiv4,infodiv5];
    const heightarr = ['calc(56vw*9/16)','calc(20vw*9/16)','calc(20vw*9/16)','calc(20vw*9/16)','calc(20vw*9/16)','calc(20vw*9/16)'];
    const widtharr = ['56vw','20vw','20vw','20vw','20vw','20vw'];
    const toparr = ['13%','55%','25%','13%','25%','55%'];
    const leftarr = ['50%','11%','20%','50%','80%','89%'];
    const varheightarr = ['--height0','--height1','--height2','--height3','--height4','--height5'];
    const varwidtharr = ['--width0','--width1','--width2','--width3','--width4','--width5'];
    const vartoparr = ['--top0','--top1','--top2','--top3','--top4','--top5'];
    const varleftarr = ['--left0','--left1','--left2','--left3','--left4','--left5'];
    var busy = 1;
    var pxflag = 0;
    var pxflag1 = 0;
    var zindexflag = 0;

    infoarr[0].style.animationPlayState = 'running';
    function infopaused(){
      infodiv0.style.animationPlayState = 'paused';
      busy = 0;
    }
    window.setTimeout(infopaused,1000);
    leftbutton.onclick = function(){
      if(busy == 0){  //連打防止
        busy = 1;
        for(var i=5;i>=0;i--){
          if((pxflag1%6)%2 == 1){
            if(i==1){ i = 5;}
            else if(i==2){ i = 4;}
            else if(i==4){ i = 2;}
            else if(i==5){ i = 1;}
            objectarr[i].style.setProperty(varheightarr[(i+1)%6], heightarr[pxflag1%6]);
            objectarr[i].style.setProperty(varwidtharr[(i+1)%6], widtharr[pxflag1%6]);
            objectarr[i].style.setProperty(vartoparr[(i+1)%6], toparr[pxflag1%6]);
            objectarr[i].style.setProperty(varleftarr[(i+1)%6], leftarr[pxflag1%6]);
            objectarr[i].style.setProperty(varheightarr[i], heightarr[(pxflag1+1)%6]);
            objectarr[i].style.setProperty(varwidtharr[i], widtharr[(pxflag1+1)%6]);
            objectarr[i].style.setProperty(vartoparr[i], toparr[(pxflag1+1)%6]);
            objectarr[i].style.setProperty(varleftarr[i], leftarr[(pxflag1+1)%6]);
            if(i==5){ i = 1;}
            else if(i==4){ i = 2;}
            else if(i==2){ i = 4;}
            else if(i==1){ i = 5;}
          } else {
            if(i==1){ i = 5;}
            else if(i==2){ i = 4;}
            else if(i==4){ i = 2;}
            else if(i==5){ i = 1;}
            objectarr[i].style.setProperty(varheightarr[i], heightarr[pxflag1%6]);
            objectarr[i].style.setProperty(varwidtharr[i], widtharr[pxflag1%6]);
            objectarr[i].style.setProperty(vartoparr[i], toparr[pxflag1%6]);
            objectarr[i].style.setProperty(varleftarr[i], leftarr[pxflag1%6]);
            objectarr[i].style.setProperty(varheightarr[(i+1)%6], heightarr[(pxflag1+1)%6]);
            objectarr[i].style.setProperty(varwidtharr[(i+1)%6], widtharr[(pxflag1+1)%6]);
            objectarr[i].style.setProperty(vartoparr[(i+1)%6], toparr[(pxflag1+1)%6]);
            objectarr[i].style.setProperty(varleftarr[(i+1)%6], leftarr[(pxflag1+1)%6]);
            if(i==5){ i = 1;}
            else if(i==4){ i = 2;}
            else if(i==2){ i = 4;}
            else if(i==1){ i = 5;}
          }
          pxflag1++;
        }
        pxflag1 = pxflag1 - 1;
        pxflag = (pxflag+5)%6;
        zindexflag = (zindexflag+1)%6;
        for(var i=0;i<6;i++){
          objectarr[i].style.animationPlayState = 'running';
        }
        function timeout(){
          for(var i=0;i<6;i++){
            objectarr[i].style.animationPlayState = 'paused';
          }
          infoarr[zindexflag].style.animationPlayState = 'paused';
          infoarr[(zindexflag+5)%6].style.animationPlayState = 'paused';
          busy = 0;
        }
        for(var cnt=0;cnt<6;cnt++){
          objectarr[cnt].style.zIndex = 0;
        }
        objectarr[zindexflag].style.zIndex = 1;
        infoarr[zindexflag].style.animationPlayState = 'running';
        infoarr[(zindexflag+5)%6].style.animationPlayState = 'running';
        leftbutton.style.opacity = 0;
        rightbutton.style.opacity = 0;
        window.setTimeout( timeout,1000);
      }
    }
    rightbutton.onclick = function(){
      if(busy == 0){  //連打防止
        busy = 1;
        for(var i=0;i<6;i++){
          if((pxflag%6)%2 == 1){
            objectarr[i].style.setProperty(varheightarr[(i+1)%6], heightarr[pxflag%6]);
            objectarr[i].style.setProperty(varwidtharr[(i+1)%6], widtharr[pxflag%6]);
            objectarr[i].style.setProperty(vartoparr[(i+1)%6], toparr[pxflag%6]);
            objectarr[i].style.setProperty(varleftarr[(i+1)%6], leftarr[pxflag%6]);
            objectarr[i].style.setProperty(varheightarr[i], heightarr[(pxflag+1)%6]);
            objectarr[i].style.setProperty(varwidtharr[i], widtharr[(pxflag+1)%6]);
            objectarr[i].style.setProperty(vartoparr[i], toparr[(pxflag+1)%6]);
            objectarr[i].style.setProperty(varleftarr[i], leftarr[(pxflag+1)%6]);
          } else {
            objectarr[i].style.setProperty(varheightarr[i], heightarr[pxflag%6]);
            objectarr[i].style.setProperty(varwidtharr[i], widtharr[pxflag%6]);
            objectarr[i].style.setProperty(vartoparr[i], toparr[pxflag%6]);
            objectarr[i].style.setProperty(varleftarr[i], leftarr[pxflag%6]);
            objectarr[i].style.setProperty(varheightarr[(i+1)%6], heightarr[(pxflag+1)%6]);
            objectarr[i].style.setProperty(varwidtharr[(i+1)%6], widtharr[(pxflag+1)%6]);
            objectarr[i].style.setProperty(vartoparr[(i+1)%6], toparr[(pxflag+1)%6]);
            objectarr[i].style.setProperty(varleftarr[(i+1)%6], leftarr[(pxflag+1)%6]);
          }
          pxflag++;
        }
        pxflag = pxflag - 5;
        pxflag1 = (pxflag1+1)%6;
        zindexflag = (zindexflag+5)%6;
        for(var i=0;i<6;i++){
          objectarr[i].style.animationPlayState = 'running';
        }
        function timeout(){
          for(var i=0;i<6;i++){
            objectarr[i].style.animationPlayState = 'paused';
          }
          infoarr[zindexflag].style.animationPlayState = 'paused';
          infoarr[(zindexflag+1)%6].style.animationPlayState = 'paused';
          busy = 0;
        }
        for(var cnt=0;cnt<6;cnt++){
          objectarr[cnt].style.zIndex = 0;
        }
        objectarr[zindexflag].style.zIndex = 1;
        infoarr[zindexflag].style.animationPlayState = 'running';
        infoarr[(zindexflag+1)%6].style.animationPlayState = 'running';
        leftbutton.style.opacity = 0;
        rightbutton.style.opacity = 0;
        window.setTimeout( timeout,980);
      }
    }
    rightbutton.onmouseover = function(){
      this.style.opacity = 0.1;
    }
    rightbutton.onmouseout = function(){
      this.style.opacity = 0;
    }
    leftbutton.onmouseover = function(){
      this.style.opacity = 0.1;
    }
    leftbutton.onmouseout = function(){
      this.style.opacity = 0;
    }
  }
  render(){
    return (
      <Homebody>
        <Leftbuttondiv id={'leftbutton'}>
          <Buttonimgl src={imageyazirusi} />
        </Leftbuttondiv>
        <Rightbuttondiv id={'rightbutton'}>
          <Buttonimgr src={imageyazirusi} />
        </Rightbuttondiv>
        <Homeimgdiv0 id={'homeimgdiv0'}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/btAeujiijjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Infodiv id={'infodiv0'}>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Homeimgdiv0>
        <Homeimgdiv1 id={'homeimgdiv1'}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/cmM4F10vam0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Infodiv id={'infodiv1'}>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Homeimgdiv1>
        <Homeimgdiv2 id={'homeimgdiv2'}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RkymVjlR8h4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Infodiv id={'infodiv2'}>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Homeimgdiv2>
        <Homeimgdiv3 id={'homeimgdiv3'}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QQGhRsJw1o8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Infodiv id={'infodiv3'}>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Homeimgdiv3>
        <Homeimgdiv4 id={'homeimgdiv4'}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/IFhOY-Y2Q84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Infodiv id={'infodiv4'}>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Homeimgdiv4>
        <Homeimgdiv5 id={'homeimgdiv5'}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YXs8kBusJZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Infodiv id={'infodiv5'}>
            <Maskimg src={imagemask}/>
            <Userimg src={imageuser}/>
            <Homep>aaaaaaaaa</Homep>
          </Infodiv>
        </Homeimgdiv5>
      </Homebody>

    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
