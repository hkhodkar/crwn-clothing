import { Routes, Route } from 'react-router-dom'

import Home from "./pages/home/Home";
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';
import NavigationBar from './pages/navigation/NavigationBar';
import Authentication from './components/authentication/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;

