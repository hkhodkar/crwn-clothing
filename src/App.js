import { Routes, Route } from 'react-router-dom'

import NavigationBar from './pages/navigation/NavigationBar';

import Home from "./pages/home/Home";
import SignIn from './components/sign-in/SignIn';

const Shop = () => {
  return <h1>shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;

