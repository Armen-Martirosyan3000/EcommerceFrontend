//rfc Enter, սրա միջոցով ավտոմատ ստեղծում է ֆունկցիա
//rafce Enter, սրա միջոցով ավտոմատ ստեղծում ես arrow ֆունկցիա
//Navigation bar-ը (կամ նավիգացիոն համակարգը ) օգտատիրոջ գրաֆիկական միջերեսի մի հատված է, որը նախատեսված է այցելուներին տեղեկատվություն ստանալու հարցում օգնելու համար:
//Նավիգացիոն գոտին օգտատիրոջ միջերեսի տարր է վեբ էջի ներսում, որը պարունակում է հղումներ դեպի կայքի այլ բաժիններ։Վեբկայքի նավիգացիոն գոտին ամենից հաճախ ցուցադրվում է որպես հղումների հորիզոնական ցուցակ յուրաքանչյուր էջի վերևում: Այն կարող է լինել վերնագրի կամ լոգոյի տակ, բայց այն միշտ տեղադրված է էջի հիմնական բովանդակությունից առաջ: Որոշ դեպքերում, կարող է իմաստ ունենալ յուրաքանչյուր էջի ձախ կողմում ուղղահայաց տեղադրել նավիգացիոն գիծը: Նավիգացիոն գծի այս տեսակը կոչվում է նաև կողային գոտի , քանի որ այն հայտնվում է հիմնական բովանդակության կողմում: Որոշ կայքեր ունեն և՛ հորիզոնական նավիգացիոն գիծ՝ վերևում, և՛ ուղղահայաց նավիգացիոն տող՝ յուրաքանչյուր էջի ձախ կողմում:
import React from 'react';
import Announcement from '../components/Announcement';
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import Newsletter from "../components/Newsletter";
import Slider from '../components/Slider';
import Products from "../components/Products";


const Home = () => {
  return (
	<div>
	  <Announcement/>
	  <Navbar/>
	  <Slider/>
	  <Categories/>
	  <Products/>
	  <Newsletter/>
	  <Footer/>
	</div>
  )
}

export default Home
