import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

//Մուտք գործելու, լոգին լինելու էջն է
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://dev.sustainablefur.com/wp-content/uploads/2020/01/shopping564x374.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%", backgroundSize: "50%" })}
`;
 

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
//flex-direction-ը սահմանում է , թե ինչպես են flex տարրերը տեղադրվում flex կոնտեյներով, որոնք սահմանում են հիմնական առանցքը և ուղղությունը, տվյալ դեպքում ուղղահայաց սյունակով(column) են դասավորվում տարրերը
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 9px 20px;
  background-color: #6550FF;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 15px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
//Link փոփոխականին կցել a թեգը, որ լինք գրի, ու DO NOT YOU REMEMBER THE PASSWORD? և CREATE A NEW ACCOUNT դրել է link-ի մեջ
//սա՝ text-decoration: underline ընդգծում է DO NOT YOU REMEMBER THE PASSWORD? ու CREATE A NEW ACCOUNT-ի տակ
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");//username-ի state-ն է, սկզբնական արժեքը դատարկ string է
  const [password, setPassword] = useState("");//password-ի state-ն է,սկզբնական արժեքը դատարկ string է
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);//սրանով մենք ապահովում ենք որպեսզի եթե userName-ը կամ password-ը սխալ լինի մենք կօգտագործենք այդ սխալը և ստանանք դա

  const handleClick = (e) => {//ֆունկցիան ընդունում է e(event-իրադարձություն, e տառի փոխարեն կարա լինի ցանկացած այլ տառ)
    // PreventDefault() մեթոդը չեղարկում է իրադարձությունը, եթե այն չեղարկվում է, ինչը նշանակում է, որ իրադարձությանը պատկանող լռելյայն գործողությունը տեղի չի ունենա:
    // Օրինակ, սա կարող է օգտակար լինել, երբ.
    // Սեղմելով «Ներկայացնել» կոճակը, թույլ չտալ, որ այն ձևաթղթեր ուղարկի
    // Սեղմելով հղման վրա՝ թույլ չտալ, որ հղումը հետևի URL-ին
    // Նշում. Ոչ բոլոր միջոցառումներն են չեղարկվում: Օգտագործեք չեղյալ համարվող հատկությունը՝ պարզելու, թե արդյոք միջոցառումը չեղարկվում է: 
    // Նշում. preventDefault() մեթոդը չի խոչընդոտում իրադարձությունների հետագա տարածմանը DOM-ի միջոցով: Դա կարգավորելու համար օգտագործեք stopPropagation() մեթոդը:  
    //PreventDefault () մեթոդն օգտագործվում է  browser-ի կողմից ընտրված տարրի default գործողությունը(action) կանխելու համար: Այն կարող է թույլ չտալ օգտվողին(user) մշակել հարցումը՝ սեղմելով հղումը:
    e.preventDefault();
    login(dispatch, { username, password });//այստեղ մենք կանչում ենք  login ֆունկցիան apiCalls.js-ից և սահմանում ենք այդ ուղարկում որը հանդիսանում է username-ը ու password-ը
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}//այստեղ կիրառում ենք  onChange մեթոդը username-ին փոխանցում ենք ընթացիկ արժեքը, որով ունենում ենք userName-ը
          />
          <Input
            placeholder="password"
            type="password"// այստեղ type="password" դնելով, password ինփութում գրելով տեքստը կետիկների տեսքով է ցույց տալիս
            onChange={(e) => setPassword(e.target.value)}//այստեղ կիրառում ենք  onChange մեթոդը password-ին փոխանցում ենք ընթացիկ արժեքը, որով ունենում ենք password-ը
          />
          {/* Վերևի ինփութներում ունենալով յուզերնեյմը և փասֆորդը մենք կարող ենք ուղարկել {handleClick}-ով*/}
          {/* disabled={isFetching}-սա պայման է որը նշանակում եթե նա չի աշխատում այն անջատված է, եթե սխալ է լինում սրա միջոցով կնոպկայի վրա կլոր կարմիր նշան է լինում  */}
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {/* Այստեղ պայման ենք դնում error-ի դեպքում կգրվի Something went wrong... */}
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;