import React, { Component } from 'react';
import '../App.css';
import arrow from "../arrow.png";
import BuyForm from './BuyForm';
import SellForm from './SellForm';






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
    }

    changeForm2 = () => {
    console.log("ffff")
    this.setState({currentForm : 'buy'})
    }





  render(){
      


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
            changeForm2={this.changeForm2}
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









