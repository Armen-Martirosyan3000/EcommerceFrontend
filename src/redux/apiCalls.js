import {  loginStart, loginSuccess,loginFailure,registerStart,registerSuccess,registerFailure,logoutStart } from "./userRedux";
import { publicRequest } from "../requestMethods";
import {addProduct, deleteProduct  } from "./cartRedux";

export const login = async (dispatch, user) => {//login ֆունկցիան ենք այստեղ գրել, որտեղ dispatch-ից և user-ից՝ որը userName-ն է և password-ը
  dispatch(loginStart());// այնուհետև մենք կուղարկենք մեր վիճակագրության գործողությունները(actions) սիստեմ մուտք լինելու վերաբերյալ
  try {
    const res = await publicRequest.post("/auth/login", user);//սրանով իրականացվում է նույնականացում ու մուտք սիստեմ, post request-ով userName-ն ու password-ը, մենք դա կվերցնենք login էջից, դրանից հետո եթե ամեն ինչ նորմալ լինի
    dispatch(loginSuccess(res.data));//մենք կուղարկենք հաջող մուտքը սիստեմ ու պետք է հիշել որ userRedux-ում (state.currentUser = action.payload) մենք նշել ենք որ ուղարկում ենք՝ action.payload-ը, դա կլինի՝ res.data-ն որը հանդիսանում է մեր ինֆորմացիան օգտագործողի մասին՝ անունը, էլ հասցեն և այլն
  } catch (err) {
    dispatch(loginFailure());//եթե ինչ որ սխալ լինի մենք կուղարկենք՝ dispatch, loginFailure-ը
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch, user) => {
  console.log(222)
  dispatch(logoutStart());
};

// export const addCart = async (dispatch, cart) => {

//   try {
//     const res = await publicRequest.post("/carts", cart);
//    console.log(res)
//   } catch (err) {
//     //res.status(401).json("Wrong credentials")
//   }
//   dispatch(addProduct());
// };

// export const deleteCart = async (dispatch, cart) => {
//   dispatch(deleteProduct());
//   try {
//     const res = await publicRequest.delete("/cart/:id", cart);
   
//   } catch (err) {
//     res.status(401).json("Wrong credentials")
//   }
// };