// import { sum, multiply } from './helpers';
// import cats from './cats';
// import { meow } from './cats';
import items from './items';
import moreItems from './moreItems';
import ShoppingCart from './ShoppingCart';
import fakeLogo from './fakeLogo.svg'
import Alert from './Alert';
import './App.css';
import Greeting from './Greetings';

function App() {
  /*
  console.log(multiply(4,9));
  console.log(sum(4,9));
  console.log(cats);
  console.log(meow);
  */
  return (
    <div>
      <Alert variant='success'>
        <h1>Welcome Back</h1>
        <Greeting/>
      </Alert>
      <Alert variant='danger'>
        <h1>Oh No!</h1>
      </Alert>
      <img src={fakeLogo} id='logo' alt='logo'/>
      <ShoppingCart items={items} username='Carly'/>
      <ShoppingCart items={moreItems} username='Rusty'/>
    </div>
  );
}

export default App;
