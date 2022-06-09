import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCatalog from './ProductCatalog';

function App() {
  return (
    <div className="App">
      <ProductCatalog total={10} />
    </div>
  );
}

export default App;
