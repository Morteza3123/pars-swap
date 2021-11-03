import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="main">
      <div className="sub-main">
      <div className="form">
      <label className="float-start">from</label><br/>
      <input className= "a"/>
      <input className="b"/><br/>
      <button type="submit" className="btn btn-primary">SWAP!</button>
      </div>
      
      <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>

      </div>
    
    </div>
    
  );
}

export default App;
