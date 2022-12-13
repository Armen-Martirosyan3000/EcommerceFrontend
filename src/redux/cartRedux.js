import { createSlice } from "@reduxjs/toolkit";

// createSlice ???  Slice-կտոր,հատված
// createSlice-ի միջոցով մենք ստեղծում ենք slice reducer, որը օբյեկտ է
//createSlice()Ընտրանքներ Օբյեկտ Ֆունկցիան createSlice()օգտագործվում է պարզեցնելու և նվազեցնելու համար անհրաժեշտ ծածկագիրը հավելվածի հատվածներ ստեղծելիս: Որպես փաստարկ այն վերցնում է տարբերակների օբյեկտ: Ընտրանքներն են .name: հատվածի անվանումը, որն օգտագործվում է որպես առաջացած action.typeտողերի նախածանց ․initialState: ռեդուկտորի կողմից օգտագործվող վիճակի սկզբնական արժեքը ․reducersԳործողությունների օբյեկտների անվանումները և դրանց համապատասխան դեպքերի կրճատիչները
const cartSlice = createSlice({
  name: "cart",
  initialState: {//սկզբնական վիճակ-ն է որտեղ, ու այստեղ ներառված են այն ինչ մենք ունենալու ենք
    products: [],//այստեղ լինելու են մեր cart-ում վերցվող ապրանքները, որը սկզբում դատարկ է զանգված է
    quantity: 0,//այստեղ ապրանքների քանակն է, այն սկզբում կլինի 0
    total: 0,//այստեղ մեր զամբյուղում(cart) գտնվող ապրանքների ընդհանուր արժեքն է, և այն սկզբում կրկին 0 է քանի որ ոչմի ապրանք չունենք զամբյուղում
  },
  //Reducers-ը, ինչպես անունն է հուշում, ընդունում են երկու բան՝ նախորդ վիճակ(previous state) և գործողություն(action): Այնուհետև նրանք այն կրճատում(reduce) են (կարդում ենք վերադարձը) մեկ անձի՝ state-ի նոր թարմացված օրինակը : Այսպիսով, reducers-ը հիմնականում մաքուր JS գործառույթներ են, որոնք ընդունում են նախորդ վիճակում և գործողություն(action) և վերադարձնում են նոր թարմացված վիճակը(updated state):
  //Reducer-ի աշխատանքն է վերադարձնել թարմացված վիճակը և նաև նկարագրել, թե ինչպես է փոխվում վիճակը: 
  // Հիմնականում reducer ֆունկցիան վերադարձնում է նոր վիճակ(new state)՝ սկզբնական վիճակի(initial state) վրա գործողություն(action ) կատարելով:
  //reducer ֆունկցիան պարունակում է երկու պարամետր, որոնցից մեկը վիճակը(State) է: State-ը օբյեկտ է, որը պարունակում է որոշ տեղեկություններ, որոնք կարող են փոխվել component(բաղադրիչ)-ի կյանքի ընթացքում:
  //Actions. reducer ֆունկցիայի երկրորդ պարամետրը գործողություններն(actions) են: Գործողությունները(actions) JavaScript օբյեկտ են, որոնք պարունակում են տեղեկատվություն: Գործողությունները(actions) խանութի(store) համար տեղեկատվության միակ աղբյուրն են: Գործողություններ(actions) օբյեկտը պետք է ներառի տիպի հատկությունը(type property) և այն կարող է նաև պարունակել օգտակար բեռը(payload) (գործողությունների(actions) տվյալների(data) դաշտը)՝ գործողությունը(action) նկարագրելու համար
  reducers: {//առաջին reducer-ը որ օգտագործում ենք ,այն կավելացնի ապրանքներ(addProduct) մեր զամբյուղում(cart)
    
    addProduct: (state, action) => {//??? state-ի ու action-ի մեջ ինչն է գալիս մտնում որպես պարամետր ու որտեղից 
      state.quantity += 1;//սրանով թարմացվում է մեր state,քանակը(quantity) կավելացվի +1։ Երբ որ մենք սեղմենք 1 ապրանքի էջի ADD TO CART կնոպկան մենք կավելացնենք մեչ էկրանի վերևի աջ անկյունում գտնվող զամյուղի(կապույտ թիվ) թիվը, դրանից հետո մենք կթարմացնենք մեր ապրանքները
      //այս՝state.quantity-ը պետք չէ խառնել այս՝action.payload.quantity քանակի հետ, սա՝state.quantity զամբյուղի քանակի թիվն է որը ավելացվում է ADD TO CART կնոպկայով, իսկ action.payload.quantity-ն ապրանքների քանակն է որը ավելացվում կամ պակասեցվում է + - կնոպկաներով
      //state.products.push(action.payload) ???, ??? payload-ը որտեղից է գալիս
	  
      state.products.push(action.payload);//այստեղով իրականացվում է մեր ապրանքների թարմացումը, payload-ը մեր մեր նոր ապրանքն է
      state.total += action.payload.price * action.payload.quantity;// այստեղով սահմանվում է ընդհանուր ապրանքների գումարը(total), որը ավելացնում ենք կրկին՝ ապրանքի գինը(action.payload.price) բազմապատկելով
    //եթե մենք օգտագործենք մաքուր redux մենք չենք կարող փոխել մեր state-ն այս տարբերակով
	},
   deleteProduct: (state, action) => {//??? state-ի ու action-ի մեջ ինչն է գալիս մտնում որպես պարամետր ու որտեղից 
    state.quantity -= 1;
  
    state.products.pull(action.payload);//այստեղով իրականացվում է մեր ապրանքների թարմացումը, payload-ը մեր մեր նոր ապրանքն է
    state.total -= action.payload.price * action.payload.quantity;
},
  },
});




export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;