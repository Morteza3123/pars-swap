import React, { component } from 'react';
import { Component } from 'react';
import Identicon from 'identicon.js';


class Navbar extends Component {
    render(){
        return(
            
      <nav className="navbar navbar-light fixed-top bg-light fix-md-norap p-2 shadow">
      <a
      className='navbar-brand col-sm5 col-md-0 mr-5'
      href='http://localhost:3000/'
      >
        Pars-Swap
      </a>
      <ul className="navbar-nav px-3">
            <li className="nav-item">
              <small className="text-secondary">
                  <small id="account">{this.props.account}</small>
              </small>
              {this.props.account
            ? <img 
            className="ml-2"
            width='30' 
            height='30' 
            src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
            alt=""
            />
            : <span></span>
            }
          </li>
          
      </ul>
      
    </nav>
        
        );
    }

}


export default Navbar;