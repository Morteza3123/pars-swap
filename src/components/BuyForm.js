import React, { Component } from 'react';
import logo from '../eth.png';
import '../App.css';
import arrow from "../arrow.png";
import oxin from "../oxin2.jpg";


class BuyForm extends Component {

    constructor(props){
        super(props)
        this.state ={
            output : '0'
        }
    }

    changeForm = () => {
        console.log("ffff")
        if(this.props.currentForm == 'buy'){
          this.setState({currentForm : 'sell'})
        }else{
          this.setState({currentForm : 'buy'}) 
        }
    }
    

  render(){

      return (

        <form  onSubmit={(event) => {
            event.preventDefault()
            let etherAmount
            etherAmount = this.input.value.toString()
            etherAmount =  window.web3.utils.toWei(etherAmount, 'Ether')
            this.props.buyTokens(etherAmount)
            }}>


            <div className="form">

                                
            <div>
                <label className="float-start"><b>From</b></label>
                <label className="float-end" >Balance : {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')} </label>
            </div>




            <div className="input-group mb-2">
                <input 
                    type="text"
                    onChange={(event) => {
                    const etherAmount = this.input.value.toString()
                    this.setState({
                    output : etherAmount*1000
                    })
                    }}
                    ref={(input) => { this.input = input}}
                    className="form-control form-control-lg"
                    placeholder="0"
                    required />


                <div className="input-group-append">
                    <div className="input-group-text">
                        <img src={logo} height='32' alt=""/>
                        &nbsp;&nbsp;&nbsp; ETH
                    </div>
                </div>
            </div>




            <div className="pt-0 pt-2"><a href="#"><img src={arrow} height='15' alt='' onClick ={this.props.changeForm}  href='#'/></a></div>




            <div className="mt-0">
            <label className="float-start"><b>To</b></label>
            <span className="float-end">
                Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}
            </span> 
            </div>      





            <div className="input-group mb2 mt-2">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="0"
                        value={this.state.value}
                        disabled
                    />
                    
                    <div className="input-group-append">
                        <div className="input-group-text">
                            <img src={oxin} height='32' alt=""/>
                            &nbsp; Oxin
                        </div>
                    </div>
            </div>






            <div className="mb-5">
                <span className="float-start">Exchange Rate</span>
                <span className="float-end">
                1ETH = 1000 Oxin</span>
            </div>






            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">SWAP!</button>
            </div>


            </div>



            </form>
)
}
}

export default BuyForm;









