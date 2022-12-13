import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

// եթե position: absolute(դիրքը բացարձակ)-ենք դնում, ապա իր ծնողին պետք է դնենք  position: relative, տվյալ դեքում ծնողը const Container-ն է
//Հատկությունը positionսահմանում է տարրի համար օգտագործվող դիրքավորման մեթոդի տեսակը(static, relative, fixed, absolute or sticky).
// relative
// Տարրը տեղադրվում է փաստաթղթի բնականոն ընթացքի համաձայն, այնուհետև փոխհատուցվում է իր նկատմամբ՝ հիմնվելով , top, rightև bottomի արժեքների վրա left: Օֆսեթը չի ազդում որևէ այլ տարրերի դիրքի վրա. Այսպիսով, էջի դասավորության մեջ տարրի համար տրված տարածությունը նույնն է, ինչ դիրքը static.
// Այս արժեքը ստեղծում է նոր կուտակման համատեքստ , երբ արժեքը z-indexչէ auto: Դրա ազդեցությունը table-*-group, table-row, table-column, table-cellև table-captionտարրերի վրա անորոշ է:
// absolute
// Տարրը հեռացվում է փաստաթղթի սովորական հոսքից, և էջի դասավորության մեջ տարրի համար տարածք չի ստեղծվում: Այն գտնվում է իր ամենամոտ դիրքավորված նախնիների համեմատ, եթե այդպիսիք կան. հակառակ դեպքում այն ​​տեղադրվում է սկզբնական պարունակող բլոկի համեմատ : Նրա վերջնական դիրքը որոշվում է top, right, bottom, և ի արժեքներով left:
//  min-width: 360px;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 75vh;
  position: relative;
  ${mobile({ margin: "1px" })}

`;
//CSS object-fit հատկությունն օգտագործվում է ճշտելու համար, թե ինչպես պետք է <img> կամ <video> չափը փոխվի իր կոնտեյնին համապատասխանելու համար:cover- Պատկերը պահպանում է իր հարաբերակցությունը և լրացնում է տրված չափը: Պատկերը կկտրվի, որպեսզի տեղավորվի
const Image = styled.img`
  width: 100%;
  height: 102%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
 
`;


//  flex-direction: column, եթե սա չեմ դնում նկարի վրայի վերնագիրն`LIGHT JACKETS ու button-ը`SHOP NOW գտնվում են իրար կողքի()
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {//այս { item }-ը փոխանցվել է Categories.js-ի կողմից որպես props, { item }-ի մեջ են գտնվում categories զանգվածի 3 օբյեկտները  
  //console.log(item), 
  return (
    <Container>
{/* այստեղ Link-ով մենք սահմանում ենք որ երբ պահենք մկնիկի սլաքը պահենք մեր 3 առանձին նկարներով կատեգորիաների վրա որոնք սահմանվել են data.js-ում՝ "SHIRT STYLE!"-women, "LOUNGEWEAR LOVE"-"jeans","LIGHT JACKETS"-"jacket" ու սեղմելով ձախ քլիք ինքը սրա՝ ${item.cat}(փոխանցվwum է Categories.js-ի կողմից որպես props) միջոցով կգնա համապատախան կատեգորիայի հագուստների բաժինը*/}
      <Link to={`/products/${item.cat}`}>
      {/* Այստեղով վերցնում ենք item-ի մեջ մտած օբյեկտ-ի img key-ի արժեքը որը նկար է */}
      <Image src={item.img} />
      <Info>
      {/* Այստեղով վերցնում ենք item-ի մեջ մտած օբյեկտ-ի img title-ի արժեքը որը վերնագիրն է */}
        <Title>{item.title}</Title>
        {/* Այստեղով վերնագրի տակը կնոպկա ենք ստեղծում՝ SHOP NOW անունով */}
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;