import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
// Redirect,-ի փոխարեն հիմա օգտագործվում է Navigate
} from "react-router-dom";
 import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  //return <ProductList/>;
  //return <Product/>;
   //return <Home/>;
  //return <Register/>;
  // return <Login/>;
  // return <Cart/>;
  //Սրանով մենք թարմացնում ենք մեր user-ին դրա համար մենք կօգտագործենք useSelector, վերցնում ենք state-ը ու ընտրում ենք ընթացիկ յուզեռին՝ currentUser
  const user = useSelector((state) => state.user.currentUser);// useSelector Գործառույթ է, որն ընդունում է ներկայիս վիճակը(state) որպես արգումենտ և վերադարձնում է նրանից ինչ տվյալներ եք ուզում:
  // const user = {name: "admin"}
  console.log(user)
          
  const isEmpty=function (obj) { // *** 
    return Object.keys(obj).length === 0;
  } 

  return (
    <Router>
      {/* <Switch>-ը էլ չի օգտագործվում , նրա փոխարեն <Routes>-ն է օգտագործվում */}
      <Routes>
      {/* exact-ը հստակեցնող, կարգավորող նշանակություն ունի որ օրինակ եթե path="/" նման մեկ այլ path ունենաս սա նրա հետ չխառնի */}
        
        <Route exact path="/" element={<Home />}/>
        {/* <Route exact path="/register" element={<Register />}/>*/}
        {/* <Route exact path="/login" element={<Login />}/>  */}
         <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />}/>
        <Route path="/cart" element={<Cart />}/>
       
        <Route path="/success" element={<Success />}/>
        {/* <Route path="/success">
          <Success />
        </Route> */}
       
        {/* <Route path="/success" element={<Success />}/>*/}
        {/* եթե մուտք գործենք սայտ մենք չպետք է տեսնենք ռեգիստրացիայի բաժինը կամ էլ լոգինի բաժինը, որովհետև մենք արդեն ունենք օգտագործող որպեսզի հաստատենք դա, ռեգիստրացիայի համար ու մուտքը սիստեմ
         մենք գրում ենք պայման, իհարկե մենք օգտագործելու ենք redux մուտքի գործընթացի համար, բայց առայժմ մենք պարզապես ժամանակավոր փոփոխական կգրենք( վերևում const user=true, հետո սա ջնջելու ենք) ու կտեսնենք ինչպես ստանանք root-ը(սկզբնաղբյուր) մեր կոմպոնենտների։
        Դրա համար login(մուտք) էջի համար մենք գրում ենք պայման եթե կա յուզեռ, եթե կա գրանցված յուզեռ նրանք կվերահղվեն(Navigate) կուղղվեն դեպի Home էջ(user ? <Navigate to="/"-Home-ի path-ն է), իսկ եթե յուզեռ չկա մենք կարող ենք գնանք մեր Login-ի էջ( : <Login />)*/}
          <Route path="/login" element={!isEmpty(user)  ? <Navigate replace to="/" /> : <Login />}/> 
        {/* Դրա համար registr-ացիայի(մուտք) էջի համար մենք գրում ենք պայման եթե կա յուզեռ, եթե կա գրանցված յուզեռ նրանք կվերահղվեն(Navigate) կուղղվեն դեպի Home էջ(user ? <Navigate to="/"-Home-ի path-ն է), իսկ եթե յուզեռ չկա մենք կարող ենք գնանք մեր Register-ի էջ( : <Register/>) */}
        <Route path="/register" element={!isEmpty(user) ? <Navigate replace to="/" /> : <Register />}/>
        
          

        {/* <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/> */}
      </Routes>
    </Router>
  );
};

export default App;
