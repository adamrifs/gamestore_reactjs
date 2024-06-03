import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/shop';
import Nav from './components/navbar/Nav';
import Login from './components/registration/login';
import { mycontext } from './components/context';
import Signup from './components/registration/signup';
import { useState } from 'react';
import { games, mobileGame } from './components/Shop/datafile';
import PcGames from './components/Shop/pcGames';
import Gamedet from './components/Shop/gamedet';
import MobileGames from './components/Shop/mobileGames';
import User from './components/user/user';
import Mobdet from './components/Shop/mobdet';
import PCCategoryView from './components/Shop/PCCategoryView';
import MobCategory from './components/Shop/mobCategory';
import Wishlist from './components/Shop/wishlist';
import Cart from './components/Shop/cart';
import Theme from './components/navbar/theme';
import Admin from './components/admin/admin';
import Adminusers from './components/admin/adminusers';
import Adminproducts from './components/admin/adminproducts';
import Adminmobgames from './components/admin/adminmobgames';
import AdminEdit from './components/admin/adminEdit';
import Footer from './components/footer/footer';
import Searched from './components/Shop/searched';
import Adminaddgame from './components/admin/adminaddgame';
import Settings from './components/navbar/settings';
import Adminlogin from './components/admin/adminlogin';
function App() {

  const [user, setuser] = useState([])
  const [logeduser, setlogeduser] = useState([])
  const [logout, setlogout] = useState(null)
  const [game, setgame] = useState(games)
  const [mobile, setmobile] = useState(mobileGame)
  const [searchdt, setsearchdt] = useState()
  const [filtered, setfiltered] = useState([])
  const [wish, setwish] = useState([])
  const [cart, setcart] = useState([])
  const [theme, settheme] = useState('light')
  const [istheme, setistheme] = useState(false)
  const [scrolled, setscrolled] = useState(false)
  const [blocked, setblocked] = useState({})
  const [searched, setsearched] = useState([])

  const values = {
    user, setuser, logeduser, setlogeduser, logout, setlogout, game, setgame, searchdt, setsearchdt, mobile,
    setmobile, filtered, setfiltered, wish, setwish, cart, setcart, theme, settheme, istheme, setistheme,
    scrolled, setscrolled, blocked, setblocked, searched, setsearched
  }

  return (
    <div className="App">
      {/* <Shop/>
      <Nav/> */}

      <BrowserRouter>
        <mycontext.Provider value={values}>
          <Nav />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/Nav' element={<Nav />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/pcGames' element={<PcGames />} />
            <Route path='/gamedet/:id' element={<Gamedet />} />
            <Route path='/mobileGame' element={<MobileGames />} />
            <Route path='/user' element={<User />} />
            <Route path='/mobdet/:id' element={<Mobdet />} />
            <Route path='/pcCategory/:category' element={<PCCategoryView />} />
            <Route path='/mobCategory/:Category' element={<MobCategory />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/theme' element={<Theme />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/adminusers' element={<Adminusers />} />
            <Route path='/adminproducts' element={<Adminproducts />} />
            <Route path='/adminmobgames' element={<Adminmobgames />} />
            <Route path='/admin/adminEdit/:type/:id' element={<AdminEdit />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/searched' element={<Searched />} />
            <Route path='adminadd' element={<Adminaddgame />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/adminlogin' element={<Adminlogin />} />
          </Routes>
          <Footer />
        </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
