import { useEffect, } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { Routes, Route } from 'react-router-dom'

import { setCurrentUser } from './store/user/user.action';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils'

import Home from "./pages/home/Home";
import Shop from './pages/shop/Shop';
import Checkout from './pages/checkout/Checkout';
import NavigationBar from './pages/navigation/NavigationBar';
import Authentication from './components/authentication/Authentication';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [dispatch])


  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;

