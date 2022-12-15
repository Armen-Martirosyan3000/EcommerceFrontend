import { createSlice } from "@reduxjs/toolkit";
//createSlice-ի մասին կա teorea բաժնում և cartRedux-ում
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: {},//ընթացիկ յուզեռը սկզբում 0 է
    isFetching: false,
    error: false,
  },
  //isLoading-ը երբ հարցումը(request) գալիս է սերվերին, իսկ isFetching-ը երբ գնում է հարցում բայց պատասխաը ստացվում է քեշից
  reducers: {//սա առաջին reducer ֆունկցիան է, որը ապահովելու է հաճախորդի մուտքը կայք, login լինելն է ապահովում, loginStart՝ մուտք Սկսել
  
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {//սա երկրորդ reducer ֆունկցիան է, loginSuccess՝ մուտք Հաջողություն, մենք API հարցում ենք անելու եթե ամեն ինչ հաջող լինի մենք կթարմացնենք մեր ընթացիկ յուզեռին։API հարցում ենք կատարելու փորձելու ենք login լինել որով մուտք կգործենք համակարգ ուղարկելով userName-ը և password-ը, եթե ամեն ինչ հաջող լինի գրում ենք այս տողից ներքև գրված տողերը
      state.isFetching = false; //isFetching-տվյալների բեռնում ??? ինչ է սա նշանակում
      state.currentUser = action.payload; // ??? ինչ է սա նշանակում
    },
    registerFailure: (state) => {//սա երրորդ reducer ֆունկցիան է, որը վերաբերվում է  loginFailure-ին(մուտքի ձախողում), եթե userName-ը կամ password-ը, սխալ կլինեն ակմ ինչ որ մի բան այն չի լինի API-ի հետ նեքևում գրում ենք համապատասխան կոդը
      state.isFetching = false;
      state.error = true;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {//սա երկրորդ reducer ֆունկցիան է, loginSuccess՝ մուտք Հաջողություն, մենք API հարցում ենք անելու եթե ամեն ինչ հաջող լինի մենք կթարմացնենք մեր ընթացիկ յուզեռին։API հարցում ենք կատարելու փորձելու ենք login լինել որով մուտք կգործենք համակարգ ուղարկելով userName-ը և password-ը, եթե ամեն ինչ հաջող լինի գրում ենք այս տողից ներքև գրված տողերը
      state.isFetching = false; //isFetching-տվյալների բեռնում ??? ինչ է սա նշանակում
      state.currentUser = action.payload; // ??? ինչ է սա նշանակում
    },
    loginFailure: (state) => {//սա երրորդ reducer ֆունկցիան է, որը վերաբերվում է  loginFailure-ին(մուտքի ձախողում), եթե userName-ը կամ password-ը, սխալ կլինեն ակմ ինչ որ մի բան այն չի լինի API-ի հետ նեքևում գրում ենք համապատասխան կոդը
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = false; 
      state.currentUser = {}; 
    },
  },
});

export const { registerStart,registerSuccess,registerFailure,loginStart,loginSuccess,loginFailure,logoutStart} = userSlice.actions;
export default userSlice.reducer;