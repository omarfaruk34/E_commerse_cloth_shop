
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Registration from '../../../grid/src/Component/Registration/Registration';
import './App.css';
import About from './Component/About1/About';
import Addblog from './Component/Addblog/Addblog';
import Addmenproduct from './Component/Addmenproduct/Addmenproduct';
import Addproduct from './Component/Addproduct/Addproduct';
import Addwomenproduct from './Component/Addwomen/Addwomenproduct';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Menproduct from './Component/Menproduct/Menproduct';
import MenproductDetails from './Component/MenproductDetails/MenproductDetails';
import Message from './Component/Message/Message';
import Product from './Component/Product/Product';
import ProductDetails from './Component/Productdetails/Productdetails';
import WomenProduct from './Component/Womenproduct/Womenproduct';
import WomenproductDetails from './Component/Womenproductdetails/Womenproductdetails';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/product" element={<Product/>} />
       <Route path="/product/:productId" element={<ProductDetails/>} />
       <Route path="/womenproduct" element={<WomenProduct/>} />
       <Route path="/womenproduct/:womenproductId" element={<WomenproductDetails/>} />
       <Route path="/menproduct" element={<Menproduct/>} />
       <Route path="/menproduct/:menproductId" element={<MenproductDetails/>}/>
        <Route path="/contact" element={<Contact/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/addProduct" element={<Addproduct/>} />
       <Route path="/addwomenProduct" element={<Addwomenproduct/>} />
       <Route path="/addmenProduct" element={<Addmenproduct/>} />
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
