import { Badge } from "@material-ui/core";//npm install @material-ui/core --force, կողքը --forc եմ դրել քանի որ UI մատերիալի այս փեքիջը չի աշխատում ռեակտ 18 վերսիայի հետ դրել եմ, որ ամեն դեքում զագռուզկա անի
import { Search, ShoppingCartOutlined } from "@material-ui/icons";//npm install @material-ui/icons --force, կողքը --forc եմ դրել քանի որ UI մատերիալի այս փեքիջը չի աշխատում ռեակտ 18 վերսիայի հետ դրել եմ, որ ամեն դեքում զագռուզկա անի
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
//եթե responsive.js-ում export default mobile-ով էքսպորրտ անեինք mobile-ը այդ դեպքում այստեղ import անելուց կգրեինք՝ import  mobile  from "../responsive" առանց ձևավոր փակագծերի, բայց երբ առանց default ենք էքսպորտ անում այդ դեպքում որտեղ որ իմփորթ ենք անում պետք է դնենք ձևավոր փակագխերը այսպես՝ { mobile }
    
//<div>-ի փոխարեն մենք կարող ենք ստեղծել մեր սեփական ոճի(style) կոմպոնետները(բաղադրիչները)
//ստեղծենք մեր առաջին աթայլ կոմպոնենտը՝ const Container, <div>-ի փոխարեն մենք կստեղծենք մեր կոնտեյները՝ style(ոճի) բաղադրիչներ օգտագործելու համար, դրա համար մենք կներմուծենք(import) style կոմպոնենտների գրադարանը:styled-components-ը React- ին հատուկ CSS-in-JS ոճավորման լուծում է, որը ծրագրավորողների համար հարթակ է ստեղծում՝ գրելու իրական CSS կոդը՝ React բաղադրիչները ոճավորելու համար, ինչպես նաև React Native-ում :
//styled.-ից հետո կարողանում ենք գրել մեր html էլեմենտը որը տվյալ դեպքում div-ն է
//խորհուրդ է տրվում style-ները իրականացնել styled կոմպոնենտի միջոցով այլ ոչ թե առանձին css ֆայլերի միջոցով որպեսզի className-ներից զերծ մնանք
//մեր Container-ը բաժանելու ենք 3 մասի, ձախ հատվածում կներառվի մեր սայտի լեզվի ինտրան դաշտը, դրանից աջ կստեղծվի որանման դաշտը, մեջտեղում կտեղադրվի լոգո-ն, աջ հատվածում կտեղադրվի լոգինի(մուտք) և ռեգիստրացիայի(գրանցման) դաշտերը և այլն
//mobile փոփոխականի կառուցվածքը ինփորթ ենք անում ստեղ ու այդ փոփոխականի ֆունկցիային props-ով տալիս ենք որ max-width: 420px-ի դեքում(@media-ում գրված մեր պայմանն է) height: "50px" լինի
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px"})}
`;


//Wrapper-ի մեջ դրել ենք navbar բառը ինքը վերևից 10px ներքև է իջեցրել և ձախից 20px է հեռացրել
//Wrapper-ը բացի Container-ից մյուսների համար հանդես է գալիս որպես ծնող կոմպոնենտ: 
//օգտագործելով display: flex(ցուցադրման ճկունություն կամ ինչպես ասում են flexbox) Wrapper-ի միջի տարրերը դասավորվում են իրար կողքի հորիզոնական(առանց flexbox-ի) նրանք իրար տակ են շարվում
//justify-content-ը սահմանում է հիմնական առանցքի երկայնքով հավասարեցումը:CSS հատկությունը սահմանում է justify-content, թե ինչպես է զննարկիչը տարածություն բաշխում բովանդակության տարրերի միջև և շուրջը ճկուն կոնտեյների հիմնական առանցքի(Flexbox- ում հիմնական առանցքը սահմանվում է սեփականության կողմից սահմանված ուղղությամբ flex-direction: Կան չորս հնարավոր արժեքներ flex-direction` row, row-reverse,column,column-reverse:Եթե ​​դուք ընտրեք, rowթե՞ row-reverseձեր հիմնական առանցքը կանցնի շարքի երկայնքով ներգծի ուղղությամբ:Ընտրեք columnկամ column-reverse, և ձեր հիմնական առանցքը կանցնի էջի վերևից ներքև՝ բլոկի ուղղությամբ:) և ցանցային կոնտեյների ներգծային առանցքի երկայնքով: օգտագործելով justify-content(հիմնավորել բովանդակությունը):
//space-between-ի դեպքում տարրերը հավասարաչափ բաշխված են տողում. առաջին կետը մեկնարկային տողում է, վերջին կետը՝ վերջում

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px"})}
`;

//flex-ը կարող է սահմանվել մեկ, երկու կամ երեք արժեքների միջոցով, օրինակ՝ flex: 1 1 100px:Այս հատկությունը սղագրություն է հետևյալ CSS հատկությունների համար. flex-grow(աճել) flex-shrink(նեղանալ) flex-basis(հիմք, ելակետ):Flex հատկությունը կարող է սահմանվել մեկ, երկու կամ երեք արժեքներով: Երբ կա մեկ արժեքի շարահյուսություն, արժեքը պետք է լինի կամ թիվ կամ հիմնաբառեր, ինչպիսիք են ոչ մեկը, ավտոմատ կամ սկզբնական : Երբ կա երկարժեք շարահյուսություն, առաջին արժեքը պետք է լինի թիվ (օգտագործվում է որպես flex-grow ), երկրորդ արժեքը կարող է լինել կամ թիվ (օգտագործվում է flex-shrink-ի համար ) կամ վավեր լայնության արժեք (օգտագործվում է որպես flex-basic): ) Երբ կա երեք արժեք ունեցող շարահյուսություն, ապա արժեքները պետք է հետևեն հերթականությանը. թիվ flex-grow-ի համար , մի շարք flex-shrink-ի համար և վավեր լայնության արժեք flex-basis-ի համար :flex-grow: Սա դրական առանց միավորի թիվ է, որը որոշում է ճկուն աճի գործակիցը: Այն նշում է, թե որքան կաճի ապրանքը մյուս ճկուն ապրանքների համեմատ: Բացասական արժեքներ չեն թույլատրվում: Եթե ​​այն բաց է թողնվել, ապա այն սահմանվում է 1 արժեքով :Flex-shrink: Դա դրական առանց միավորի թիվն է, որը որոշում է ճկման կրճատման գործակիցը: Այն սահմանում է, թե որքանով կփոքրանա իրը մյուս ճկուն տարրերի համեմատ: Բացասական արժեքներ չեն թույլատրվում: Եթե ​​այն բաց է թողնվել, ապա այն սահմանվում է 1 արժեքով :flex-basic. դա երկարությունը հարաբերական կամ բացարձակ միավորներով է, որը սահմանում է ֆլեքս-տարրի սկզբնական երկարությունը: Այն օգտագործվում է ֆլեքս-տարրի երկարությունը սահմանելու համար: Դրա արժեքները կարող են լինել auto, inherit կամ մի թիվ, որին հաջորդում են երկարության միավորները, ինչպիսիք են em, px և այլն: Բացասական արժեքները չեն թույլատրվում: Եթե ​​այն բաց է թողնվել, ապա այն սահմանում է 0 արժեքը :auto. flex հատկության այս արժեքը համարժեք է 1 1 auto- ին : none: flex հատկության այս արժեքը համարժեք է 0 0 auto- ին : Այն ոչ աճում է, ոչ էլ փոքրացնում է ճկուն իրերը: initial: Այն սահմանում է հատկությունը իր լռելյայն արժեքին: Այն համարժեք է 0 0 ավտոմատին : inherit: Այն ժառանգում է սեփականությունը իր մայր տարրից:
//Flex հատկությունը սահմանում է ճկուն երկարությունը ճկուն տարրերի վրա: Նշում. Եթե տարրը ճկուն տարր չէ, ապա flex հատկությունը ազդեցություն չունի: Սահմանում և օգտագործում:
//Ո՞րն է Flex-ի օգտագործումը CSS-ում: Այն օգտագործվում է ճկուն իրերի երկարությունը սահմանելու համար: 
//flex: 1, դա նշանակում է, որ բոլոր մյուս տարրերի լայնությունը նույնն է, ինչ դրանց պարունակությունը, բայց flex՝ 1 տարրին կտրվի մնացած լրիվ տարածությունը: եթե ունենք օրինակ 3 հատ տարր՝ առբվազն պիտի 100%-ը բաժանենք 3-ի որ հավասար լինի բայց դա այնքանել արդյունավետ չի քանի որ 100/3=33.33333333, համար օգտագործվում է ավելի ճկուն տարբերակ flex: 1, եթե օրինակ գրենք center-flex: 2 այդ ժամանակ մեր ձախ ու աջ տարրերը կլինեն 1 միավոր իսկ մեջտեղը կլինի 2 միավոր(այսինքն ձախ ու աջ հատվածից 2 անգամ մեծ)
//align items-հավասարեցնել տարրերը։Հատկությունը align-itemsսահմանում է ճկուն կոնտեյների ներսում գտնվող իրերի լռելյայն հավասարեցումը:align-item հատկությունը օգտագործվում է flexible  կոնտեյների ներսում կամ տվյալ պատուհանում տարրերի հավասարեցումը սահմանելու համար: Այն հարթեցնում է Flex իրերը առանցքի ողջ երկայնքով: align-self հատկությունն օգտագործվում է align-items հատկությունը վերացնելու համար:align-items: center- Flexbox-ի տարրերը դասավորված են խաչաձև առանցքի կենտրոնում :Լռելյայնորեն, խաչի առանցքը ուղղահայաց է: Սա նշանակում է, որ flexbox տարրերը կկենտրոնացվեն ուղղահայաց :

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
//<span> թեգը ներկառուցված կոնտեյներ է, որն օգտագործվում է տեքստի մի մասը կամ փաստաթղթի մի մասը նշելու համար :  <span> թեգը շատ նման է <div> տարրին, բայց <div>-ը բլոկի մակարդակի տարր է, իսկ <span>-ը inline տարր է:
//քանի որ սրանով դնելու ենք մեր սայտի լեզուն, դրա համար տառաչափ ենք դնում՝ font-size
//mobile-ի դեպքում դրեցինք որ EN-ը չլինի
// const Language = styled.span`
//   font-size: 15px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

//SearchContainer-Որոնման կոնտեյներ

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;


// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "35px" })}
// `;


const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({marginLeft:"2px" })}
`;


//#6550FF
// const Logo = styled.h1`
//  font-weight: 800;
//   color: #6550FF;
//   font-size:45px;
//   ${mobile({ fontSize: "22px" })}
// `;
const Logo = styled.h1`
  font-weight: bold;
    color: #6550FF;
   font-size:45px;
  ${mobile({ fontSize: "24px" })}
`;


//justify-content: flex-end-ը Right-ի միջի բոլոր տարրերը տանում է դեպի աջ(վերջ)

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 10, justifyContent: "center" })}
`;



const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state=>state.cart.quantity)//սկզբից մենք վերցնում ենք մեր state-ը,սրանով՝ state.cart.quantity մենք բոլոր cart-երից ընտրում ենք միայն մեր էկրանի աջ անկյունում գտնվող զամբյուղը
  //հիշում ենք որ մեր store-ում մենք ունենք զամբյուղ(cart) որը մենք օգտագործում ենք այստեղ
//console.log(quantity), այստեղով երևում է const cartSlice փոփոխականի initialState-ի quantity(զամբյուղի սկզբնական արժեքը որը 0 է) 0 արժեքը
  const isEmpty=function (obj) { // *** 
  return Object.keys(obj).length === 0;
}
const user = useSelector((state) => state.user.currentUser)// ***
console.log(user,"user")
const handleClick = (e) => {
  e.preventDefault();
  logout(dispatch);
};
return (
	<Container>
		<Wrapper>
		  <Left>
        {/* <Language>EN</Language> */}
         {/* <SearchContainer> */}
          {/* քանի որ Input-ն ու Search-ն  նույն SearchContainer-ի մեջ են դրա համար 2-ն էլ եզրագծված են ընդհանուր ռամկայի մեջ */}
         {/* placeholder="Search",փնտրման դաշտում ինփութի մեջ գրված է Search */}
         {/* <Input placeholder="Search" /> */}
         {/* մտնելով՝ https://mui.com/material-ui/material-icons/, փնտրման դաշտում գրել էի search որ տեսնեի search-ի համար ինչ icon-ներ է առաջարկում UI մատերիալը ինձ դուր եկած icon-ի անունը հենց search, և երբ UI մատերիալի համապատասխան փեքիջը զագռւզկա արեցի npm instal-ով(npm install @material-ui/icons --force և npm install @material-ui/icons --force), ու քանի որ այդ փնտրման icon-ի անունը search էր հենայստեղ գրեցի Search vs կոդը միանգամից ինդզ բերեց UI մատերիալի այդ այքոնի համապատասխան հղումը և երբ ես մկնիկով դա ընտրեցի ինքը վերևում ավտոմատ միանգամից իմպորտ արեց */}
          {/* <Search style={{ color: "gray", fontSize: 16, "margin-left": 5}} /> */}
          
        {/* </SearchContainer>  */}
      </Left>
		  <Center>
        <Logo>KAGADA</Logo>
        </Center>
		  <Right>
      <Link to={"/"} style={{textDecoration: 'none'}}>
      <MenuItem>HOME</MenuItem>
       </Link> 
       {
        isEmpty(user) && 
        <>
         <Link to={"/register"} style={{textDecoration: 'none'}}>
      <MenuItem>REGISTER</MenuItem>
      </Link>
      <Link to={"/login"} style={{textDecoration: 'none'}}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
        </>
       }
         {/*  *** */}
         { !isEmpty(user) && <MenuItem onClick={handleClick}>LOGOUT</MenuItem>} 
       
          {/* Երբ սեղմում ենք էկրանի աջ վերևի անկյունում գտնվող զամբյուղի icon-ի վրա այս link-ի միջոցով տեղափոխվում ենք մեր զամբյուղի(cart) էջ */}
          <Link to={"/cart"} >
          <MenuItem>
          {/*<Badge badgeContent={4} color="primary">  
          <ShoppingCartOutlined />
            </Badge>  այս կառուցվածքը քոփի ենք անում https://mui.com/material-ui/material-icons/?query=cart&theme=Outlined-ի Badge բաժնից */}
           {/*{4}-սա զամբյուղի վերևում թիվ է գրում , 4-ի փոխարեն կարա այլ թիվ լինի*/}
            <Badge badgeContent={quantity} color="primary">
              {/*ShoppingCartOutlined-ը քոփի է արվել https://mui.com/material-ui/material-icons/?query=cart&theme=Outlined-ի Material Icons բաժնից*/}
              <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
            </Link>
        </Right>
		</Wrapper>
	  
	</Container>
  )
}

export default Navbar

