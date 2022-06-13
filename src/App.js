import React, { Component } from "react";
import imge from "./profilimage.png"
class App extends Component {
  //src\imgprostate.png
  constructor(props) {
    super(props);
    this.state ={
      personne: {
        fullName: "salem",
        bio: "etudiant a centre de formation go my code 2022 / etudiant a ISIGK 2013---2016",
        imgsrs: "imge",
        profession: "developpeur web full stack",
      },
      show: false,
      count : 0
    }
    }
    Afficher =()=>{this.setState({show:!this.state.show})};

    componentDidMount() { 
      setInterval(()=>{
         this.setState({count:this.state.count+1})
       }, 500);
      }

    
  render() {
    return (
      <div >
    <p>  {this.state.count}</p>

    {this.state.show ? <img src={imge} style= {{width:'180px' }}alt="pucture "/> : null}

    {this.state.show ? <p> {this.state.personne.fullName} </p>: null}
    {this.state.show ? <p> {this.state.personne.bio} </p>: null}
    {this.state.show ? <p> {this.state.personne.profession} </p>: null}

      <button onClick={this.Afficher}>information</button>
      
      </div>
      )
    
    
  }
}
export default App;
