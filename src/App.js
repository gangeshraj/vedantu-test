import React,{Component} from 'react';
// import axios from 'axios';
import styled, { withTheme } from 'styled-components'

const FullPage= styled.div`
  /* This renders the buttons above... Edit me! */
  background-color:white;
  margin:0px;
  padding:0px;
  border:0px;
  display:flex;
  width:100vw;
  height:100vh;
  flex-direction:row;
  padding:50px;
  box-sizing:border-box;
  @media (max-width:700px){
    flex-direction:column;
  }
`

const LeftSide= styled.div`
  /* This renders the buttons above... Edit me! */
  width:70%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  ${'' /* background-color:red; */}
  margin-right:50px;
`

const LeftSideTop= styled.div`
  /* This renders the buttons above... Edit me! */
  width:100%;
  height:100px;
  display:block;
  h1{
    lineHeight:100px;
    fontSize:30px;
    color:black;
    paddingLeft:30px;
    marginTop:0px;
    border-bottom:2px solid grey;
  }
`


const LeftSideBottom= styled.div`
  /* This renders the buttons above... Edit me! */
  width:100%;
  height:calc(100% - 150px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:red;
  border:1px solid black;

`


const RightSide= styled.div`
  /* This renders the buttons above... Edit me! */
  position:relative;
  bottom:80px;
  width:28%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  ${'' /* background-color:green; */}
`
const RightSideTop= styled.div`
  /* This renders the buttons above... Edit me! */
  width:100%;
  height:100px;
  display:block;
`


const RightSideBottom= styled.div`
  /* This renders the buttons above... Edit me! */
  width:100%;
  height:calc(100% - 150px);
  display:flex;
  flex-direction:column;
  justify-content:center;
  & {
    div,input{
    marginBottom:20px
    }
    .ok{
      width:100%;
      border-color:black;
      border-width:1px;
      border-style:solid;
      margin:auto;
      margin-top:30px;
      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }

      & .content {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }
`


class App extends Component {

  constructor() {
    // Required step: always call the parent class' constructor
    super();
    this.state={
      inputValue:undefined,
      colors:[]
    }
  }



  componentDidMount(){

    // axios.get('https://api.github.com/users/supreetsingh247')
    // .then(({data})=>{
    //   this.setState({userData:data})
    // })
    // .catch(error=> this.setState({userData:fall1}));
    // axios.get('https://api.github.com/users/supreetsingh247/repos')
    // .then(({data})=>{
    //   this.setState({userRepo:data})
    // })
    // .catch(error=>this.setState({userRepo:fall2}));
  }

  onChangeHandler=(e)=>{
    console.log("color a",this,e.target.value);
    this.setState({
      inputValue:+(e.target.value)
    })
    console.log("this",this)
    // this.get Squares();
  }

  randomColorGenerator(){
    var letters = "0123456789ABCDEF"; 
  
    // html color code starts with # 
    var color = '#'; 
  
    // generating 6 times as HTML color code consist 
    // of 6 letter or digits 
    for (let i = 0; i < 6; i++) 
       {
         color += letters[(Math.floor(Math.random() * 16))]; 
       }
    return color;
  }

  getSquares=()=>{
    // console.log("this",this.state.value)
    let colors=[];
    for (let i=0;i<this.state.inputValue;++i){
      colors.push(this.randomColorGenerator());
    }
    let returnColors=colors.map((color)=>{
      return <div colorKey={color} style={{height:'50px',width:'50px',backgroundColor:color}}> </div>;
    })
    return returnColors;
  }

  

  render(){
    // if(!this.state.userData || !this.state.userRepo)
    // return <div>loading</div>;
      return <FullPage>
          <LeftSide>
            <LeftSideTop><h1>PALETTE</h1></LeftSideTop>
            <LeftSideBottom >
              {
                this.state.inputValue?this.getSquares():undefined
              }
            </LeftSideBottom>
          </LeftSide>
          <RightSide>
          <RightSideTop><h1 style={{lineHeight:'100px',fontSize:'30px',color:'black',paddingLeft:'30px',marginTop:'0px',borderBottom:'2px solid grey'}}>Config Panel</h1></RightSideTop>
          <RightSideBottom>
            <input type="number" style={{height:'40px',width:'100%'}} value={this.state.value} onChange={this.onChangeHandler.bind(this)}/>
            <div style={{height:'40px',width:'100%',display:'flex',justifyContent:'space-between',marginTop:'30px'}}>
              <div style={{height:'100%',width:'45%',backgroundColor:'green',textAlign:'center',lineHeight:'40px',color:'white'}} 
                onClick={this.getSquares}>Generate</div>
              <div style={{height:'100%',width:'45%',backgroundColor:'red',textAlign:'center',lineHeight:'40px',color:'white'}} 
                onClick={this.getSquares}>Clear</div>
            </div>
            <div className="ok">
              <div>COLOR BOX</div>
            </div>
          </RightSideBottom>
          </RightSide>
          </FullPage>
    }
}

export default App;
