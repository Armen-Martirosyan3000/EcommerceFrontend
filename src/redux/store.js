//այստեղով մենք կստեղծենք մեր գլոբալ store-ը, որից հետո մենք կկարողանանք օգտագործել այդ պահեստը մեր բոլոր էջերում(pages) և կոմպոնենտներում
import { configureStore, combineReducers } from "@reduxjs/toolkit";//եթե մենք ցանկանում ենք գնել տվյալ զամբյուղը(cart),որպեսզի դա անենք մենք կօգտագործենք combineReducers ֆունկցիան
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
//Redux Persist գրադարանի միջոցով մշակողները կարող են պահպանել Redux (store)խանութը մշտական(persistent) ​​պահեստում(storage), օրինակ՝ տեղական պահեստում(local storage): Հետևաբար, նույնիսկ browser-ը թարմացնելուց հետո կայքի վիճակը դեռ կպահպանվի: Redux Persist-ը ներառում է նաև մեթոդներ, որոնք թույլ են տալիս մեզ հարմարեցնել այն վիճակը, որը պահպանվում և վերականգնվում է, այս ամենը հեշտ հասկանալի API-ով:
import {//սա վերցված է https://redux-toolkit.js.org/usage/usage-guide կայքից, սա օգտագործել ենք նրա համար քանի որ երբ լոգին(մուտք) ենք անում ու հետո թարմացնում ենք էջը ու դնում ենք http://localhost:3000/login նա էլի բերում է սկզբնական վիճակին(initial state) որ նորից պետք է լոգին անես ու մուտք գործես, քանի որ մեր յուզեռ-ի տվյալները չի պահպանվում, դրա համար որպեսզի պահպանենք մեր state-ն մեք օգտվում ենք redux-toolkit-ում առկա usage-guide-ի Redux Persist գրադարանից
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });//եթե մենք ցանկանում ենք գնել տվյալ զամբյուղը(cart),որպեսզի դա անենք մենք կօգտագործենք combineReducers ֆունկցիան

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({//սրանով ստեղծում ենք մեր store-ը, այստեղ ներսում մենք գրում ենք մեր reducer-ները, քանի որ մենք ունենք մի քանի reducer-ներ
  reducer: persistedReducer,
  //ստեղից ներքև կոդը նույնպես վերցրել ենք Persist-ից
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);