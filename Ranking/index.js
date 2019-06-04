import React from 'react';
import { Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import background1 from './images/backgroundNo1.png';
import background2 from './images/backgroundNo2.png';
import background3 from './images/backgroundNo3.png';
import background4 from './images/backgroundNo4.png';
import thumbnail1 from './images/1.png';
import thumbnail2 from './images/2.png';
import thumbnail3 from './images/3.png';
import thumbnail4 from './images/4.png';
import thumbnail5 from './images/5.png';
import thumbnail6 from './images/6.png';
import image from '../../venice.jpg'

const styles = {
  root: {
    position:"absolute",
    marginTop:"15px",
    marginLeft:"490px",
    color:"primary"
  },
  root2: {
    position:"absolute",
    marginTop:"15px",
    marginLeft:"700px",
  },
  main: {
    background: "#042133",
    width: "100%",
    height:"1000px",
  },
  formControl: {
    minWidth: 140,
  },
  selectEmpty: {
    color:"white"
  },
  trendground: {
    position:"absolute",
    marginLeft:"0%",
    marginTop:"10%",
    width: "22%",
    height: "430px",
    background: "#042160"
  },
  tagtitle:{
    position:"absolute",
    fontSize:"25px",
    color:"white",
    marginTop:"5%",
    marginLeft:"3%",
  },
  tag1sttext:{
    position:"absolute",
    color:"yellow",
    fontSize:"25px",
    marginTop:"20%",
    marginLeft:"3%",
  },
  tag1st: {
    position:"absolute",
    color:"Black",
    background:"yellow",
    component:"a",
    href:"#chip",
    marginLeft:"-30%",
    marginTop:"20%",

  },
  tag1stdougatitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"32%",
    marginLeft:"3%",
  },
  tag1stdouga:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"30%",
    marginLeft:"-25%",
  },
  tag1stkensakutitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"32%",
    marginLeft:"50%",
  },
  tag1stkensaku:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"30%",
    marginLeft:"15%",
  },
  tag2sttext:{
    position:"absolute",
    color:"#C0C0C0",
    fontSize:"25px",
    marginTop:"43%",
    marginLeft:"3%",
  },
  tag2st: {
    position:"absolute",
    color:"Black",
    background:"#C0C0C0",
    component:"a",
    href:"#chip",
    marginLeft:"-30%",
    marginTop:"43%",

  },
  tag2stdougatitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"55%",
    marginLeft:"3%",
  },
  tag2stdouga:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"53%",
    marginLeft:"-25%",
  },
  tag2stkensakutitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"55%",
    marginLeft:"50%",
  },
  tag2stkensaku:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"53%",
    marginLeft:"15%",
  },
  tag3sttext:{
    position:"absolute",
    color:"#C47222",
    fontSize:"25px",
    marginTop:"65%",
    marginLeft:"3%",
  },
  tag3st: {
    position:"absolute",
    color:"Black",
    background:"#C47222",
    component:"a",
    href:"#chip",
    marginLeft:"-30%",
    marginTop:"65%",

  },
  tag3stdougatitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"78%",
    marginLeft:"3%",
  },
  tag3stdouga:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"76%",
    marginLeft:"-25%",
  },
  tag3stkensakutitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"78%",
    marginLeft:"50%",
  },
  tag3stkensaku:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"76%",
    marginLeft:"15%",
  },
  tag4sttext:{
    position:"absolute",
    color:"white",
    fontSize:"25px",
    marginTop:"88%",
    marginLeft:"3%",
  },
  tag4st: {
    position:"absolute",
    color:"Black",
    background:"white",
    component:"a",
    href:"#chip",
    marginLeft:"-30%",
    marginTop:"88%",
  },
  tag4stdougatitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"101%",
    marginLeft:"3%",
  },
  tag4stdouga:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"99%",
    marginLeft:"-25%",
  },
  tag4stkensakutitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"101%",
    marginLeft:"50%",
  },
  tag4stkensaku:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"99%",
    marginLeft:"15%",
  },
  tag5sttext:{
    position:"absolute",
    color:"white",
    fontSize:"25px",
    marginTop:"112%",
    marginLeft:"3%",
  },
  tag5st: {
    position:"absolute",
    color:"Black",
    background:"white",
    component:"a",
    href:"#chip",
    marginLeft:"-30%",
    marginTop:"112%",
  },
  tag5stdougatitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"125%",
    marginLeft:"3%",
  },
  tag5stdouga:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"123%",
    marginLeft:"-25%",
  },
  tag5stkensakutitle:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"125%",
    marginLeft:"50%",
  },
  tag5stkensaku:{
    position:"absolute",
    color:"white",
    fontSize:"16px",
    marginTop:"123%",
    marginLeft:"15%",
  },
  background1:{
    position:"absolute",
    height:"20%",
    width:"65%",
    marginLeft:"-15%",
    marginTop:"5%"
  },
  background2:{
    position:"absolute",
    height:"20%",
    width:"65%",
    marginLeft:"-15%",
    marginTop:"15%"
  },
  background3:{
    position:"absolute",
    height:"20%",
    width:"65%",
    marginLeft:"-15%",
    marginTop:"25%"
  },
  background4:{
    position:"absolute",
    height:"20%",
    width:"65%",
    marginLeft:"-15%",
    marginTop:"35%"
  },
  background5:{
    position:"absolute",
    height:"20%",
    width:"65%",
    marginLeft:"-15%",
    marginTop:"45%"
  },
  background6:{
    position:"absolute",
    height:"20%",
    width:"65%",
    marginLeft:"-15%",
    marginTop:"55%"
  },
  RankingNo1:{
    position:"absolute",
    color:"yellow",
    fontSize:"50px",
    marginTop:"7%",
    marginLeft:"27%"
  },
  thumbnail1:{
    position:"absolute",
    height:"15%",
    width:"15%",
    marginTop:"6.2%",
    marginLeft:"-8%"
  },
  titleNo1:{
    position:"absolute",
    textDecoration:"underline",
    color:"blue",
    marginTop:"6.2%",
    marginLeft:"7%",
    fontSize:"20px",
  },
  explanatoryNo1:{
    position:"absolute",
    marginTop:"9%",
    marginLeft:"58%",
    fontSize:"15px"
  },
  usericon:{
    position:"absolute",
    marginTop:"6.2%",
    marginLeft:"33%",
    width: "10%"
  },
  username:{
    position:"absolute",
    color:"blue",
    fontSize:"20px",
    marginTop:"11.2%",
    marginLeft:"35%",
  },
  RankingNo2:{
    position:"absolute",
    color:"#C0C0C0",
    fontSize:"50px",
    marginTop:"17%",
    marginLeft:"27%"
  },
  thumbnail2:{
    position:"absolute",
    height:"15%",
    width:"15%",
    marginTop:"16.2%",
    marginLeft:"-8%"
  },
  titleNo2:{
    position:"absolute",
    textDecoration:"underline",
    color:"blue",
    marginTop:"16.2%",
    marginLeft:"7%",
    fontSize:"20px",
  },
  explanatoryNo2:{
    position:"absolute",
    marginTop:"19%",
    marginLeft:"58%",
    fontSize:"15px"
  },
  usericon2:{
    position:"absolute",
    marginTop:"16.2%",
    marginLeft:"33%",
    width: "10%"
  },
  username2:{
    position:"absolute",
    color:"blue",
    fontSize:"20px",
    marginTop:"21.2%",
    marginLeft:"35%",
  },
  RankingNo3:{
    position:"absolute",
    color:"#C47222",
    fontSize:"50px",
    marginTop:"27%",
    marginLeft:"27%"
  },
  thumbnail3:{
    position:"absolute",
    height:"15%",
    width:"15%",
    marginTop:"26.2%",
    marginLeft:"-8%"
  },
  titleNo3:{
    position:"absolute",
    textDecoration:"underline",
    color:"blue",
    marginTop:"26.2%",
    marginLeft:"7%",
    fontSize:"20px",
  },
  explanatoryNo3:{
    position:"absolute",
    marginTop:"29%",
    marginLeft:"58%",
    fontSize:"15px"
  },
  usericon3:{
    position:"absolute",
    marginTop:"26.2%",
    marginLeft:"33%",
    width: "10%"
  },
  username3:{
    position:"absolute",
    color:"blue",
    fontSize:"20px",
    marginTop:"31.2%",
    marginLeft:"35%",
  },
  RankingNo4:{
    position:"absolute",
    color:"white",
    fontSize:"50px",
    marginTop:"37%",
    marginLeft:"27%"
  },
  thumbnail4:{
    position:"absolute",
    height:"15%",
    width:"15%",
    marginTop:"36.2%",
    marginLeft:"-8%"
  },
  titleNo4:{
    position:"absolute",
    textDecoration:"underline",
    color:"blue",
    marginTop:"36.2%",
    marginLeft:"7%",
    fontSize:"20px",
  },
  explanatoryNo4:{
    position:"absolute",
    marginTop:"39%",
    marginLeft:"58%",
    fontSize:"15px"
  },
  usericon4:{
    position:"absolute",
    marginTop:"36.2%",
    marginLeft:"33%",
    width: "10%"
  },
  username4:{
    position:"absolute",
    color:"blue",
    fontSize:"20px",
    marginTop:"41.2%",
    marginLeft:"35%",
  },
  RankingNo5:{
    position:"absolute",
    color:"white",
    fontSize:"50px",
    marginTop:"47%",
    marginLeft:"27%"
  },
  thumbnail5:{
    position:"absolute",
    height:"15%",
    width:"15%",
    marginTop:"46.2%",
    marginLeft:"-8%"
  },
  titleNo5:{
    position:"absolute",
    textDecoration:"underline",
    color:"blue",
    marginTop:"46.2%",
    marginLeft:"7%",
    fontSize:"20px",
  },
  explanatoryNo5:{
    position:"absolute",
    marginTop:"49%",
    marginLeft:"58%",
    fontSize:"15px"
  },
  usericon5:{
    position:"absolute",
    marginTop:"46.2%",
    marginLeft:"33%",
    width: "10%"
  },
  username5:{
    position:"absolute",
    color:"blue",
    fontSize:"20px",
    marginTop:"51.2%",
    marginLeft:"35%",
  },
  RankingNo6:{
    position:"absolute",
    color:"white",
    fontSize:"50px",
    marginTop:"57%",
    marginLeft:"27%"
  },
  thumbnail6:{
    position:"absolute",
    height:"15%",
    width:"15%",
    marginTop:"56.2%",
    marginLeft:"-8%"
  },
  titleNo6:{
    position:"absolute",
    textDecoration:"underline",
    color:"blue",
    marginTop:"56.2%",
    marginLeft:"7%",
    fontSize:"20px",
  },
  explanatoryNo6:{
    position:"absolute",
    marginTop:"59%",
    marginLeft:"58%",
    fontSize:"15px"
  },
  usericon6:{
    position:"absolute",
    marginTop:"56.2%",
    marginLeft:"33%",
    width: "10%"
  },
  username6:{
    position:"absolute",
    color:"blue",
    fontSize:"20px",
    marginTop:"61.2%",
    marginLeft:"35%",
  },
  input:  {
    display: 'none',
  },
};

const inputLabelStyle = {
  color: '#fff',
}

class Ranking extends React.Component{
  componentDidMount(){
    window.scrollTo(0, 0)
    this.getImage
  }
  state = {
    age: '',
    category: '',
    name: 'hai',
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const {classes} = this.props;
    return (
      <div className={classes.main}>

      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
        <InputLabel style={inputLabelStyle} htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
            style={inputLabelStyle}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1days</MenuItem>
            <MenuItem value={20}>3days</MenuItem>
            <MenuItem value={30}>7days</MenuItem>
            <MenuItem value={40}>All</MenuItem>
          </Select>
        </FormControl>
      </form>

      <form className={classes.root2} autoComplete="off">
        <FormControl className={classes.formControl}>
        <InputLabel style={inputLabelStyle} htmlFor="category-simple">category</InputLabel>
          <Select
            value={this.state.category}
            onChange={this.handleChange}
            inputProps={{
              name: 'category',
              id: 'category-simple',
            }}
            style={inputLabelStyle}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={50}>DBD</MenuItem>
            <MenuItem value={60}>LOL</MenuItem>
            <MenuItem value={70}>スマッシュブラザーズSPECIAL</MenuItem>
            <MenuItem value={80}>ファイナルファンタジー</MenuItem>
            <MenuItem value={90}>OverWatch</MenuItem>
            <MenuItem value={100}>All</MenuItem>
          </Select>
        </FormControl>
      </form>

        <div className={classes.trendground}>
          <div className={classes.tagtitle}>
            トレンドランキング
          </div>
          <div className={classes.tag1sttext}>
            1st
          </div>
          <Chip
            label="LOL"
            className={classes.tag1st}
            clickable
            />
            <div className={classes.tag1stdougatitle}>
              動画件数 :
            </div>
            <Button href="#text-buttons" size="medium" className={classes.tag1stdouga}>
                3000
            </Button>
            <div className={classes.tag1stkensakutitle}>
              検索数 :
            </div>
            <Button href="#text-buttons" size="medium" className={classes.tag1stkensaku}>
                120000
            </Button>
            <div className={classes.tag2sttext}>
              2nd
            </div>
            <Chip
              label="OverWatch"
              className={classes.tag2st}
              clickable
              />
            <div className={classes.tag2stdougatitle}>
              動画件数 :
            </div>
            <Button href="#text-buttons" size="medium" className={classes.tag2stdouga}>
                1800
            </Button>
            <div className={classes.tag2stkensakutitle}>
              検索数 :
            </div>
            <Button href="#text-buttons" size="medium" className={classes.tag2stkensaku}>
                9500
            </Button>
            <div className={classes.tag3sttext}>
              3rd
            </div>
            <Chip
              label="ファイナルファンタジー"
              className={classes.tag3st}
              clickable
              />
              <div className={classes.tag3stdougatitle}>
                動画件数 :
              </div>
              <Button href="#text-buttons" size="medium" className={classes.tag3stdouga}>
                  1200
              </Button>
              <div className={classes.tag3stkensakutitle}>
                検索数 :
              </div>
              <Button href="#text-buttons" size="medium" className={classes.tag3stkensaku}>
                  6000
              </Button>
              <div className={classes.tag4sttext}>
                4th
              </div>
              <Chip
                label="DBD"
                className={classes.tag4st}
                clickable
                />
                <div className={classes.tag4stdougatitle}>
                  動画件数 :
                </div>
                <Button href="#text-buttons" size="medium" className={classes.tag4stdouga}>
                    120
                </Button>
                <div className={classes.tag4stkensakutitle}>
                  検索数 :
                </div>
                <Button href="#text-buttons" size="medium" className={classes.tag4stkensaku}>
                    2500
                </Button>
                <div className={classes.tag5sttext}>
                  5th
                </div>
                <Chip
                  label="スマッシュブラザーズSPECIAL"
                  className={classes.tag5st}
                  clickable
                  />
                  <div className={classes.tag5stdougatitle}>
                    動画件数 :
                  </div>
                  <Button href="#text-buttons" size="medium" className={classes.tag5stdouga}>
                      800
                  </Button>
                  <div className={classes.tag5stkensakutitle}>
                    検索数 :
                  </div>
                  <Button href="#text-buttons" size="medium" className={classes.tag5stkensaku}>
                      5000
                  </Button>
        </div>

          <div>
            <img src= {background1} className={classes.background1}/>
            <img src= {thumbnail1} className={classes.thumbnail1}/>
            <img src= {image} className={classes.usericon}/>

            <div className={classes.RankingNo1}>
              1st
            </div>
            <Button href="#text-buttons" size="medium" className={classes.titleNo1}>
                バロンベイト
            </Button>
            <Button href="#text-buttons" size="small" className={classes.username}>
                たけお
            </Button>
            <div className={classes.explanatoryNo1}>
                バロンを取りました
            </div>
          </div>

          <div>
            <img src= {background2} className={classes.background2}/>
            <img src= {thumbnail2} className={classes.thumbnail2}/>
            <img src= {image} className={classes.usericon2}/>

          <div className={classes.RankingNo2}>
              2nd
            </div>
            <Button href="#text-buttons" size="medium" className={classes.titleNo2}>
                キルスティール
            </Button>
            <Button href="#text-buttons" size="small" className={classes.username2}>
                たける
            </Button>
            <div className={classes.explanatoryNo2}>
                キルを奪いました
            </div>
          </div>

          <div>
            <img src= {background3} className={classes.background3}/>
            <img src= {thumbnail3} className={classes.thumbnail3}/>
            <img src= {image} className={classes.usericon3}/>

          <div className={classes.RankingNo3}>
              3rd
            </div>
            <Button href="#text-buttons" size="medium" className={classes.titleNo3}>
                aaaaaaa
            </Button>
            <Button href="#text-buttons" size="small" className={classes.username3}>
                たける
            </Button>
            <div className={classes.explanatoryNo3}>
                キルを奪いました
            </div>
          </div>

          <div>
            <img src= {background4} className={classes.background4}/>
            <img src= {thumbnail4} className={classes.thumbnail4}/>
            <img src= {image} className={classes.usericon4}/>

          <div className={classes.RankingNo4}>
              4th
            </div>
            <Button href="#text-buttons" size="medium" className={classes.titleNo4}>
                aaaaaaa
            </Button>
            <Button href="#text-buttons" size="small" className={classes.username4}>
                たける
            </Button>
            <div className={classes.explanatoryNo4}>
                キルを奪いました
            </div>
          </div>

          <div>
            <img src= {background4} className={classes.background5}/>
            <img src= {thumbnail5} className={classes.thumbnail5}/>
            <img src= {image} className={classes.usericon5}/>

          <div className={classes.RankingNo5}>
              5th
            </div>
            <Button href="#text-buttons" size="medium" className={classes.titleNo5}>
                aaaaaaa
            </Button>
            <Button href="#text-buttons" size="small" className={classes.username5}>
                たける
            </Button>
            <div className={classes.explanatoryNo5}>
                キルを奪いました
            </div>
          </div>

          <div>
            <img src= {background4} className={classes.background6}/>
            <img src= {thumbnail6} className={classes.thumbnail6}/>
            <img src= {image} className={classes.usericon6}/>

          <div className={classes.RankingNo6}>
              6th
            </div>
            <Button href="#text-buttons" size="medium" className={classes.titleNo6}>
                aaaaaaa
            </Button>
            <Button href="#text-buttons" size="small" className={classes.username6}>
                たける
            </Button>
            <div className={classes.explanatoryNo6}>
                キルを奪いました
            </div>
          </div>

      </div>
    );
  }
}

Ranking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ranking);
