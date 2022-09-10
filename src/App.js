
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Registration from '../../../grid/src/Component/Registration/Registration';
import './App.css';
import About from './Component/About1/About';
import Addblog from './Component/Addblog/Addblog';
import Addmenproduct from './Component/Addmenproduct/Addmenproduct';
import Addproduct from './Component/Addproduct/Addproduct';
import Addwomenproduct from './Component/Addwomen/Addwomenproduct';
import Admin from './Component/Admin_Dashboard/Admin';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Menproduct from './Component/Menproduct/Menproduct';
import MenproductDetails from './Component/MenproductDetails/MenproductDetails';
import Message from './Component/Message/Message';
import Product from './Component/Product/Product';
import ProductDetails from './Component/Productdetails/Productdetails';
import Registration from './Component/Registration/Registration';
import WomenProduct from './Component/Womenproduct/Womenproduct';
import WomenproductDetails from './Component/Womenproductdetails/Womenproductdetails';
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Component/Login/PrivateRoute";
import Orders from './Component/Orders/Orders';
import Manageorders from './Component/ManageOrder/Manageorder';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <AuthProvider>
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/product" element={<Product/>} />
       <Route path="/product/:productId" element={
        <PrivateRoute>
       <ProductDetails/>
       </PrivateRoute>
       } />
       <Route path="/womenproduct" element={
        <PrivateRoute>
       <WomenProduct/>
       </PrivateRoute>} />
       <Route path="/womenproduct/:womenproductId" element={
        <PrivateRoute>
       <WomenproductDetails/>
       </PrivateRoute>
       } />
       <Route path="/menproduct" element={<Menproduct/>} />
       <Route path="/menproduct/:menproductId" element={
        <PrivateRoute>
       <MenproductDetails/>
       </PrivateRoute>
       }/>
        <Route path="/contact" element={<Contact/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/addProduct" element={
        <PrivateRoute>
       <Addproduct/>
       </PrivateRoute>} />
       <Route path="/addwomenProduct" element={
       <PrivateRoute>
       <Addwomenproduct/>
       </PrivateRoute>
       } />
       <Route path="/addmenProduct" element={
        <PrivateRoute>
       <Addmenproduct/>
       </PrivateRoute>
       } />
       <Route path="/addBlog" element={
        <PrivateRoute>
       <Addblog/>
       </PrivateRoute>
       } />
       <Route path="/addBlog" element={
        <PrivateRoute>
       <Addblog/>
       </PrivateRoute>} />
       <Route path="/message" element={
        <PrivateRoute>
       <Message/>
       </PrivateRoute>} />
       <Route path="/admin" element={
        <PrivateRoute>
       <Admin/>
       </PrivateRoute>} 
       />
       <Route path="/manageorders" element={<PrivateRoute><Manageorders/></PrivateRoute>} />

       <Route path="/orders" element={<PrivateRoute><Orders/></PrivateRoute>} />

       <Route path="/login" element={<Login/>} />
       <Route path="/registration" element={<Registration/>} />





      
       


     </Routes>
     <Footer/>
     </AuthProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
