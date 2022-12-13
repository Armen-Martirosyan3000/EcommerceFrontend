import { Add, Remove,DeleteForeverOutlined,MinimizeTwoTone } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
 import StripeCheckout from "react-stripe-checkout";
 import { useEffect, useState } from "react";
 import { userRequest } from "../requestMethods";
// import { useHistory } from "react-router";
 import { useNavigate } from "react-router-dom";
 import { Link } from "react-router-dom";
 import { deleteProduct } from "../redux/cartRedux";
 import { useDispatch } from "react-redux";

const KEY = process.env.REACT_APP_STRIPE;

//Սա զամբյուղի ընդհանուր էջն է
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;


const Title = styled.h1`
  font-weight: 400;
  text-align: center;
`;
//Top-ի մեջ մտնում են՝TopButton-ը, TopTexts-ը, TopText-ը
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

//filled նշանակում է լրացված:border: ${(props) Սա նշանակում է եթե ներքևից բաթընին փոխանցվող type-ը "filled" է՝ props.type === "filled" ապա border-ը none է այսինքն border չկա 
//background-color: ${(props)-ը նշանակում է եթե(?) բաթընի թայփը filled է ապա բաթընի բեքգրաունդ քոլորը սև է իսկ եթե դա այդպես չէ(:) "transparent"( թափանցիկ), դրա համար CHECKOUT NOW կնոպկայի բեքգրաունդը սև է(քանի որ իր թայփը "filled" է) իսկ CONTINUE SHOPPING-ի բեքգրաունդը թափանցիկ է
//color: ${(props)-ով սահմանում է որ եթե բաթընի type filled է ապա color-ը սպիտակ է
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// const TopTexts = styled.div`
// ${mobile({ display: "none" })}
// `;


// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;


const Info = styled.div`
  flex: 3;
`;

//Product-ը յուրաքանչյուր ապրանքի գծով կոնտեյներն է
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;


// ProductDetail-ի մեջ Ապրանքի մանրամասններն են
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
//ապրանքի նկարն է
const Image = styled.img`
  width: 200px;
`;

//Details-ապրանքի մանրամասներն են, որի մեջ չկա նկարը
//flex-direction:column; սա սահմանում է , թե ինչպես են flex տարրերը տեղադրվում flex կոնտեյներով, որոնք սահմանում են հիմնական առանցքը և ուղղությունը, տվյալ դեպքում տարրերի ուղղությունը(direction) դասավորվում է ուղղահայաց
//justify-content հատկությունը սահմանում է, թե ինչպես է բրաուզերը տարածություն բաշխում բովանդակության տարրերի միջև և շուրջը ճկուն կոնտեյների հիմնական առանցքի և ցանցային կոնտեյների ներկառուցված առանցքի երկայնքով : space-around-ի դեպքում տարրերը ունեն կիսով չափ տարածություն երկու ծայրերում
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// ProductColor-ը սահմանում է տվյալ ապրանքի գույնը, կլորակի մեջ որ երևում է 
//(props)-ով տրվում է տվյալ ապրանքին իր գույնը
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

//PriceDetail-Գին Մանրամասն-ի մեջ մտնում է +-ի -ի նշանները և ապրանքի արժեքը
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
//</ProductAmountContainer>-ի մեջ մտնում է +ը -ը և քանակը,Amount-Գումարը
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

//ապրանքի քանակն է ցույց տալի
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;
//${mobile({ margin: "5px 15px" })}

//սա ապրանքի արժեքն է
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;


//ապրանքները տարանջատող գիծն է
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

//Summary(ամփոփում)-ին ընդհանուր կոնտեյներն է որով սահմանվում է, ORDER SUMMARY պատուհանի ընդհանուր դիզայնը՝ պատուհանւ բարձրություն, բորդերը և այլն
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;
// առանձին SummaryItem-ների մեջ տեղադրված են ՝ Subtotal, Estimated Shipping, Shipping Discount բաժինները
//font-weight: ${(props)-ի միջոցով սահմանվել է որ total թայփ ունեցող SummaryItem-ը մուգ լինի, դա՝Total $175 տողն է
//font-size: ${(props)-ի միջոցով սահմանվել է որ total թայփ ունեցող SummaryItem-ը 24px լինի, դա՝Total $175 տողն է
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

//Summary-ի մեջի Button է
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer
  
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);//սրանով՝ state.cart վերադարձվում է cart-ը, որից հետո մենք կարող ենք օգտագործել մեր ապրանքները մեր info կոնտեյների մեջ
   const [stripeToken, setStripeToken] = useState(null);//սկզբնական արժեքը null է, այսինքն առկա չէ
   const dispatch = useDispatch();
   //const history = useHistory();//Կեռիկը useHistoryմեզ թույլ է տալիս մուտք գործել React Router-ի պատմության(history) օբյեկտ:Պատմության օբյեկտի(history) միջոցով մենք կարող ենք մուտք գործել և շահարկել(manipulate) բրաուզերի պատմության(history) ներկա վիճակը:UseHistory() կեռիկը թույլ է տալիս մուտք գործել պատմության օրինակ(history instance) React Router-ի միջոցով, և դա լավ պատճառով հայտնի կեռիկ է: Օգտագործելով պատմության օրինակը(history instance), դուք կարող եք հեշտությամբ վերահղել օգտվողներին ցանկացած ֆունկցիոնալ բաղադրիչից ձեր ընտրած էջին: Այս hook-ը հնարավորություն է տալիս մուտք գործել դեպի React-ի գրառումը, թե որտեղ է եղել օգտատերը, և այն հնարավորություն է տալիս սահմանել, թե ուր նրանք կգնան հաջորդը: Վերջինիս կարելի է հասնել՝ օգտագործելով history.push. Օրինակ, հաջող մուտք գործելուց հետո դուք կարող եք նավարկել դեպի գլխավոր էջ կամ օգտվողի պրոֆիլ
   
   const navigate = useNavigate()
  
   const onToken = (token) => {//այստեղ մենք ստեղծում ենք մեր onToken ֆունկցիան, որը ներքևում՝StripeCheckout-ում օգտագործում ենք, այն ընդունում է token և
    setStripeToken(token);// այստեղ սահմանենք(ուստանովկա անենք) մեր token-ը,setStripeToken-ը մեր useState-ով սահմանած ֆունկցիան է
  };
console.log(stripeToken)

const handleClick = () => {
    
  dispatch(//dispatch-ով առաքում ենք
  deleteProduct()//այստեղով մենք կանչում ենք addProduct-ը(cartRedux-ից) և ուղարկում ենք Cart.js ամբողջ ինֆորմացիան մեր ապրանքի մասին (...product) ինչպես նաև նրա քանակը գույնը և չափսը(quantity, color,size )
 //   addProduct({ ...product, quantity, color, size })

  );
};



//այստեղով ստեղծում ենք ձևակերպումը և վճարումը։ Տոկենի ստացումից հետո՝ setStripeToken(token), ստեղծենք useEffect
  useEffect(() => {
    const makeRequest = async () => {//makeRequest(կատարել հարցում)
      try {
        await userRequest.post("/checkout/payment", {//userRequest-ը գալիս է requestMethods.js-ից(բեքենդում stripe-ի path-ը payment(վճարում) է)
          tokenId: stripeToken.id,//այստեղով ուղարկում ենք stripeToken-ի id-ն։ Մեր պատասխանից հետո մենք կտեղափոխվենք մեր պատվերների(order) էջ կամ success(հաջողության) էջ։Որպեսզի դա անենք մենք կօգտագործենք useHistory()(պատմություն) հուկը
          amount: cart.total*100,
        });
       // history.push("/success", {data: res.data });
        // navigate("/success", {data: res.data });
      } catch {}
    };
    stripeToken && cart.total>=1 && makeRequest();
  }, [stripeToken, cart.total,navigate]);//useEffect-ի կախվածությունը(դիփենդեսի) կլինի մեր տոկենը՝ stripeToken
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>   
        <Top>
        <Link to={"/"} style={{textDecoration: 'none'}}>
          <TopButton >CONTINUE SHOPPING</TopButton>
          </Link> 
          {/* <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts> */}
		  {/* filled նշանակում է լրացված, սա որ դնում ենք կնոպկայի բեքգրաունդը սև է դառնում */}
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
		{/* Info-ն զամբյուղում(cart) ապրանքների ընդհանուր կոնտեյներն է */}
          <Info>


          {cart.products.map((product) => (//քարտի միջի ապրանքների զանգվածի(բեքենդում երևում է car մոդելում առկա products զանգվածը) վրայով map ենք անում և վերադարձնում ենք <Product> կոնտեյներում եղած ինֆորմացիան ապրանքի մասին՝img, title, _id, color, size
              //  <Slide bg={item.bg} key={item.id}></Slide>
             // ***
             <Product key={product.id}>
                <ProductDetail >
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                {/* Add -ը UI-ի + icon-ի անունն է */}
                  {/* <Add /> */}
                  {/* <Remove /> */}
                  <MinimizeTwoTone />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  {/* Remove-ը UI-ի - icon-ի անունն է */}
                  <MinimizeTwoTone />
                  <DeleteForeverOutlined onClick={handleClick}/>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
		  {/* Summary-ամփոփում */}
          <Summary>
          {/* ORDER SUMMARY-ՊԱՏՎԵՐԻ ԱՄՓՈՓՈՒՄ */}
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
            {/* Subtotal-Ենթագումար */}
              <SummaryItemText>Subtotal</SummaryItemText>
              {/* {cart.total}-ը զամբյուղում գտնվող ապրանքների ընդհանուր արժեքն է */}
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            {/* Estimated Shipping-Մոտավոր առաքում */}
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 7.60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            {/* Shipping Discount-Առաքման զեղչ */}
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -7.60</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="KAGADA"
              image="https://st3.depositphotos.com/5040187/18744/v/600/depositphotos_187443880-stock-illustration-logo-swoosh-ellipse-blue-letter.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}//այստեղ բազմապատկում ենք 100-ով քանի որ եթե օրինակ գրենք {100} սա կնշանակի 1$, դրա համար ենք բազմապատկում 100-ով
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;