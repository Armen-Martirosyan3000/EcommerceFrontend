import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
 import { useEffect, useState } from "react";
 import { publicRequest } from "../requestMethods";// տվյալների ստանալու համար մենք կօգտագործենք  publicRequest-ը, որովհետև ցանկացած ապրանքի ստացման համար մեզ պետք չի լինել յուզեռ(օգտագործող) կամ ADMIN դրա համար publicRequest-ը կտեղադրենք ներքևում
 //import { addProduct } from "../redux/cartRedux";//մենք այստեղով կանչում ենք մեր addProduct action-ը որտեղից կտանք ապրանքները(action.payload.product) և արժեքը(action.payload.price) որպես payload։ Այդ պրոցեսը երևում է handleClick ֆունկցիայում
import { useDispatch } from "react-redux";
import { addCart} from "../redux/apiCalls";


//սա 1 ապրանքի էջն է, երբ մկնիկը պահում ենք տվյալ ապրանքի վրա ու սեղմում ենք խոշորացույցի վրա տեղափոխվում ենք այս էջ
const Container = styled.div``;

//Wrapper-ը էջի ընդհանուր մեջտեղի հատվածն է
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
 
`;
 

const ImgContainer = styled.div`
  flex: 1;
`;
//CSS object-fitհատկությունն օգտագործվում է ճշտելու համար, թե ինչպես պետք է <img> կամ <video> չափը փոխվի իր կոնտեյնին համապատասխանելու համար:cover- Պատկերը պահպանում է իր հարաբերակցությունը և լրացնում է տրված չափը: Պատկերը կկտրվի, որպեսզի տեղավորվի
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
 
`;


const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
//FilterContainer-ի մեջ մեր ֆիլտրներն են Size-ը և color-ը
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`; 

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

//background-color-ը ներքևից props-ով փոխանցվում է յուրաքանչյուր FilterColor-ին իր գույնը
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

//FilterSize փոփոխականին այստեղ տալով select, ինքը ստեղծում է չափսերի ցուցակը
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
//FilterSizeOption-ին այստեղ տալով option, ինքը ստեղծում է FilterSize ցուցակի տարբերակները
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;


const AmountContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: 700;
`;

//<span> inline կոնտեյներ է, որն օգտագործվում է տեքստի կամ փաստաթղթի մի մասը նշելու համար:<span>շատ նման է <div> տարրին, բայց <div>-ը block տիպի  տարր է <span>-ը inline տարր է:
//այստեղով տրվում է + - -ի արանքում գտնվող 1-ի դիզայնը, իր ռամկան ռամկայի գույնը և այլն
//առանց align-items: center-ի 1-ը բարձրանում է ամենավերև
//առանց justify-content: center-ի 1-ը գնում է ձախ
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #6550FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #6550FF;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});//սկզբնական արժեքը տալիս ենք օբյեկտ
   const [quantity, setQuantity] = useState(1);//սա ապրանքի էջում գտնվող ապրքնաի քանակը +1- սահմանող state-ն, սկազբնական արժեք տալիս ենք 1
   const [color, setColor] = useState("");//այս state-ի միջոցով մենք այնպես ենք անելու որ յուզեռը կարողանա ընտրի ապրանքի գույնը
   const [size, setSize] = useState("");//այս state-ի միջոցով մենք այնպես ենք անելու որ յուզեռը կարողանա ընտրի ապրանքի չափսը
   const dispatch = useDispatch();// ակտիվացնում ենք seDispatch() hook-ը

  useEffect(() => {
    const getProduct = async () => {
      try {
        //սա կլինի մեր get(ստացման) հարցումը,find(գտնել)։Մենք գիտենք որ բեքենդում rout-ների մեջ մեր Product js-ում սահմանված է //Get product՝ router.get("/find/:id"), ցանկացած տվյալի ստացման համար մենք ուղղակի նշել ենք /find(գտնել) ու նրա id-ն, ու տվյալների ստանալուց հետո մենք կսահմանենք մեր ապրանքը ու այդ ապրանքը որպես պատասխան կուղարկենք՝res.data
        const res = await publicRequest.get("/products/find/" + id);//ցանկացած ապրանքի ստացման համար մեզ պետք չի լինել յուզեռ(օգտագործող) կամ ADMIN դրա համար publicRequest-ը կտեղադրենք այստեղ
        setProduct(res.data);
      } catch {}
    };
    getProduct();// այստեղ կանչում ենք մեր ֆունկցիան
  }, [id]);// մեր դիփենդեսին(կախվածությունը) կլինի ապրանքի id-ն՝

  //այս ֆունկցիայով իրաիանացվում է ապրանքի քանակի ավելացումը և պակասեցումը`-1+
  const handleQuantity = (type) => {
    if (type === "dec") {//այստեղ նշվում է պայման եթե սեղմում ենք նվազման կնոպկան՝"dec" ու քանակը մեծ է մեկից ապա -1-ով իջեցնում է թիվը
      quantity > 1 && setQuantity(quantity - 1);//quantity-ն վերևում useState-ով ստեղծված փոփոխականն է, setQuantity-ն այդ փոփոխականը փոփոխության ենթարկող ֆունկցիան
    } else {
      setQuantity(quantity + 1);//հակառակ դեպքում ավելացնում է
    }
  };

  const handleClick = () => {
    
     
     addCart(dispatch,{ ...product, quantity, color, size })//այստեղով մենք կանչում ենք addProduct-ը(cartRedux-ից) և ուղարկում ենք Cart.js ամբողջ ինֆորմացիան մեր ապրանքի մասին (...product) ինչպես նաև նրա քանակը գույնը և չափսը(quantity, color,size )
    //   addProduct({ ...product, quantity, color, size })
  };

  // const handleClickAdd = (e) => {
  //   e.preventDefault();
  //   addCart(dispatch);
  // };
  // const handleClickDelete = (e) => {
  //   e.preventDefault();
  //   deleteCart(dispatch);
  // };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        {/* Ապրանքի էջի ձախ հատվածն է նկարի կոնտեյները, վերցվում է դատաբազա մուտք եղած տվյալներից */}
        <ImgContainer>
        {/* երբ մենք մկնիկը պահում ենք ապրանքի վրա ու խոշորացույցը սեղմում ենք տվյալ ապրանքի էջ բացվում է սրա՝ {product.img} միջոցով */}
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
        <Title>{product.title}</Title>
          {/* Ապրանքի նկարագրություն, վերցվում է դատաբազա մուտք եղած տվյալներից */}
          <Desc>{product.desc}</Desc>
          {/* այստեղ արժեքն է, վերցվում է դատաբազա մուտք եղած տվյալներից */}
          <Price>$ {product.price}</Price>
          {/* սա ընդհանուր FilterContainer-ն է որի մեջ մտնում են գույների չափսերի ընդհանուր հատվածը */}
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
               {/* այստեղ ապրանքի գույնն է, վերցվում է դատաբազա մուտք եղած տվյալներից,map-ով պտտվում է տվյալ ապրանքի գույների վրա ու քանի գույն կա նկարում է էկրանին */}
              {product.color?.map((c) => (//սա՝color? նշանակում է եթե կա գույն
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />//սրա միջոցով սահմանվում է որ քլիքի միջոցով ընտրվի տվյալ ապրանքը, с-ն գույների զանգվածի միջի արժեքներն է(այսինքն դատաբազա մուտք եղած գույներն են)
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              {/* այստեղ ապրանքի չափսն է, վերցվում է դատաբազա մուտք եղած տվյալներից,map-ով պտտվում է տվյալ ապրանքի չափսերի վրա ու քանի չափս որ մուտք(postmen-ով) է եղել դատաբազա size զանգվածի մեջ, այդքան հատ բացվում է տվյալ ապրանքի size պատուհանի մեջ, որից կարողանում ես ընտրել */}
              {/* e.target.value-ն տվյալ պահին ընտրված size-ի չափսն է(S կամ SX կամ Լ և այլն), ընթացիկ արժեքն է */}
              {/* e-ն event է իրադարձություն, այսինքն ֆունկցիային տրվող պարամետր է այսնքն չափսերը, որը տվյալ դեպքում setSize ֆունկցիան e.target.value-ը փոխանցում է size փոփոխականին */}
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (//սա՝size? նշանակում է եթե կա չափս, s-ն с-ն չափսերի զանգվածի մեջ գտնվող արժեքն է(այսինքն դատաբազա մուտք եղած չափսերն են)
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            {/* Այս կոնտեյներում պակասեցնելու և ավելացնելու կնոպկաներն են */}
            <AmountContainer>
              {/* սա պակասեցնելու կնոպկան է որը վերցված է UI մատերիալից */}
              {/* "dec"-ը պարզապես տվել ենք պարամետր՝decrease-պակասեցնել */}
              <Remove onClick={() => handleQuantity("dec")} />
                {/* այստեղ ապրանքի քանակն՝{quantity} է սահմանվում, որը սահմանված է վերևում useState-յով*/}
              <Amount>{quantity}</Amount>
               {/* սա ավելացնելու կնոպկան է որը վերցված է UI մատերիալից  */}
              {/* "inc"-ը պարզապես տվել ենք պարամետր՝increase-ավելացնել */}
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            {/* Այստեղ ստեղծվել է ADD TO CART կնոպկան onClick={handleClick}, այս՝handleClick ֆունկցիայով իրականացվում է ADD TO CART կնոպկան սեղմելով որպեսզի ավելանա էկրանի աջ վերևի անկյունում գտնվող զամբյուղ icon-ի թիվը */}
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;