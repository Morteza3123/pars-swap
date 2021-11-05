import Web3 from 'web3';
import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Token from './contract/Token.json';
import ParsSwap from './contract/ParsSwap.json';
import { Component } from 'react';

class App extends Component {


  async componentWillMount(){
      await this.loadWeb3()
      await this.loadBlockchainData()
  }



  //load web3
  async loadWeb3(){
     if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        window.alert(
          "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
      }
  }




  //loadBlockchainData 
  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account : accounts[0]})
    

    const ethBalance = await web3.eth.getBalance(this.state.account);
    this.setState({ethBalance });



    //load Token
    const networkId = await web3.eth.net.getId()
    const tokenData = Token.networks[networkId]
    if(tokenData){
      const token = new web3.eth.Contract(Token.abi, tokenData.address);
      this.setState({token})
      this.setState({ tokenAddress : tokenData.address})
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      let contractBalance = await token.methods.balanceOf(tokenData.address).call()
      console.log("token balance", contractBalance.toString())
      this.setState({tokenBalance: tokenBalance.toString()})
    }else{
      window.alert('Token contract not deployed to detected network')
    }
    


    //load ParsSwap
    const parsSwapData = ParsSwap.networks[networkId]
      if(parsSwapData){
        const parsSwap = new web3.eth.Contract(ParsSwap.abi, parsSwapData.address);
        this.setState({parsSwap})
        this.setState({ parsSwapAddress : parsSwapData.address})
        
        
      }else{
        window.alert('Token contract not deployed to detected network')
      }
      this.setState({ loading : false })
      
    }



  


   //buy tokens function
   buyTokens = async (etherAmount) => {
    this.setState({ loading: true})
    await this.state.parsSwap.methods.buyToken().send({ value: etherAmount, from: this.state.account}).on('transactionHash', (hash) => {
      this.setState({ loading : false})
    })
  }




  //sell tokens function
  sellTokens = async (tokenAmount) => {
    this.setState({ loading: true})
     await this.state.token.methods.approve(this.state.parsSwapAddress, tokenAmount).send({from: this.state.account}).on('transactionHash', (hash) => {
      this.state.parsSwap.methods.sellToken(tokenAmount).send({from: this.state.account}).on('transactionHash', (hash) => {
      this.setState({ loading : false})
      })
    })
  }





      constructor(props){
        super(props)
        this.state = {
          account:'',
          token: {},
          parsSwap: {},
          ethBalance: '0',
          tokenBalance: '0',
          tokenAddress:'',
          parsSwapAddress:'',
          loading: true
        }
        
      }




    render(){

          let content
        
        if(this.state.loading) {
          content = <p id="leader" className="text-center">Loading ...</p>
        } else {
          content = <Main 
          ethBalance={this.state.ethBalance}  
          tokenBalance={this.state.tokenBalance}
          buyTokens={this.buyTokens} 
          sellTokens={this.sellTokens}
          />
        }


  return (

      <div className="main">

        <Navbar account={this.state.account}/>

        {content}
      </div>
      

  );
}
}

export default App;
