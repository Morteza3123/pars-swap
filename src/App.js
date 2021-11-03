import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <form className="mb-3">
      <div className="main">
        <div className="sub-main">
              <div className="form">

                    <div>
                        <label className="float-start"><b>Input</b></label>
                        <label className="float-end" >Balance : </label>
                    </div>

                    <div className="input-group mb-5">
                        <input className= "a" className="form-control form-control-lg"/>
                        <div className="input-group-append">
                            <div className="input-group-text">
                                <img src={logo} height='32' alt=""/>
                                &nbsp;&nbsp;&nbsp; ETH
                            </div>
                        </div>
                    </div>



                    <label className="float-start"><b>Output</b></label>
        
        
        <span className="float-end">
                Balance: 
        </span>
        
        
        <div className="input-group mb2">
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
      </div>
      
  </form>

  );
}

export default App;
