import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../App.css';
import arrow from "../arrow.png";
import BuyForm from './BuyForm';
import SellForm from './SellForm';
// import Go from './Go';






class Main extends Component {
    constructor(props){
        super(props)
        this.state ={
            currentForm : 'buy'
            
        }
    }
    
     changeForm = () => {
      console.log("ffff")
      this.setState({currentForm : 'sell'})
      // if(this.state.currentForm == 'buy'){
      //   this.setState({currentForm : 'sell'})
      // }else{
      //   this.setState({currentForm : 'buy'}) 
      // }
  }

  render(){
      
    console.log(this.state.currentForm)

    let content

      if(this.state.currentForm == 'buy'){
          content = <BuyForm 
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          buyTokens={this.props.buyTokens}
          changeForm={this.changeForm}
          currentForm={this.state.currentForm}
          />
      } if(this.state.currentForm == 'sell'){
          content = <SellForm
            ethBalance={this.props.ethBalance}
            tokenBalance={this.props.tokenBalance}
            sellTokens={this.props.sellTokens}
            changeForm={this.changeForm}
            currentForm={this.state.currentForm}
          />
      }

     

      return (


        <div className="sub-main">
               {content}

           </div>


  )
}
}

export default Main;









