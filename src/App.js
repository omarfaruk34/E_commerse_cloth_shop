
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Registration from '../../../grid/src/Component/Registration/Registration';
import './App.css';
import Addblog from './Component/Addblog/Addblog';
import Addproduct from './Component/Addproduct/Addproduct';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Message from './Component/Message/Message';
import Product from './Component/Product/Product';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/product" element={<Product/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/addProduct" element={<Addproduct/>} />
       <Route path="/addBlog" element={<Addblog/>} />
       <Route path="/addBlog" element={<Addblog/>} />
       <Route path="/message" element={<Message/>} />




     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
