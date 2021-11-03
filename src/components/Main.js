import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import arrow from "../arrow.png";
class Main extends Component {
    

  render(){

      return (

        <div className="sub-main">
              <div className="form">

                    
                    <div>
                        <label className="float-start"><b>From</b></label>
                        <label className="float-end" >Balance : </label>
                    </div>


                    
                    
                    <div className="input-group mb-2">
                        <input className= "a" className="form-control form-control-lg"/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <img src={logo} height='32' alt=""/>
                                &nbsp;&nbsp;&nbsp; ETH
                            </div>
                        </div>
                    </div>


                    
                    
                    <div className="pt-0 pt-2"><a href="#"><img src={arrow} height='15' alt='' onClick={() => console.log("goooz")} href='#'/></a></div>


                    

                    <div className="mt-0">
                      <label className="float-start"><b>To</b></label>
                      <span className="float-end">Balance:</span> 
                    </div>      
                  
        


        
                    <div className="input-group mb2 mt-2">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="0"
                                disabled
                            />
                            
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <img src={logo} height='32' alt=""/>
                                     &nbsp; Dapp
                                </div>
                            </div>
                    </div>






                    <div className="mb-5">
                        <span className="float-start">Exchange Rate</span>
                        <span className="float-end">
                        1ETH = 100 Dapp</span>
                    </div>






                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">SWAP!</button>
                    </div>
      


              </div>
           </div>


  )
}
}
export default Main;









