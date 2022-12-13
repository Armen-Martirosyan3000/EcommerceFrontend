import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Room,
	Telegram,
	Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
 
  
  //Footer-ը կայքի ներքևի հատվածն է 

  //սա վերաբերվում է ընդհանուրին
  //#DBFAFD
  const Container = styled.div`
	display: flex;
	background-color:#E2FDFD;
	${mobile({ flexDirection: "column" })}
  `;


  //Left-այսինքն ձախ հատվածը ֆութերի կլինի ուղղահայաց
  const Left = styled.div`
	flex: 1;#DBFAFD
	display: flex;
	flex-direction: column;
	padding: 20px;
	${mobile({ backgroundColor: "white" })}
	
  `;
  
  const Logo = styled.h1`
  color:#6550FF;
  font-weight: 900;
  font-size: 32px;
  
  `;
  
  const Desc = styled.p`
	margin: 26px 0px;
  `;
  
  
  const SocialContainer = styled.div`
	display: flex;
	cursor:pointer
  `;
  //ֆեսբուքի, ինստագրամի և մյուս սոցիալական icon-ներն են ստեղով կարգավորվում
//քանի որ բոլոր icon-ները գտնվում են նույն SocialIcon կոնտեյներներում, դր ահամ background-color-ը փոխանցվում է props-ով, որ առանձին առանձին չգրենք, ներքևում յուրաքանչյուրին՝ SocialIcon color="E4405F" տրված է color որը գալիս մտնում է props-ի մեջ և յուրաքանչյուր այքոնին props.color-ով տրվում իր համապատասխան գույնը
  const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
  `;
  
  const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
  `;
  
  
  //Title կոնտեյների մեջ մտնում են՝ Useful Links ու Contact վերնագրերը
  const Title = styled.h3`
	margin-bottom: 30px;
	color:#6550FF;
	font-weight: 900
  `;
  

  //կա նաև <ol>(Ordered List element-Պատվիրված ցուցակի տարրը),այս դեպքում երբ <ol>-ի մեջ է լինում <li>-երը ցուցակը համարակալվում է 1 2 3 և այլն ըստ հերթականության , կարող է type ուրիշ լինի և ցուցակի հերթականությունը սահմանվի օրինակ տառերով և այլն
  //տվյալ դեպքում List-ը հանդիսանում  է մեր ul-ը(Unordered List element-տարրերի չդասավորված ցանկ,,Չպատվիրված ցուցակի տարրը): Այս դեքպում ցուցալը համարակալված կամ դասավորված չի լինում այլ պարզապես դիմացում դրվում են կետիկներ կամ այլ նշաններ նայած css-ով ինչ ենք փոխանցում(li {list-style-type: circle;}, li { list-style-type: square;})
  //սրա՝ list-style: none; միջոցով հանում ենք ցուցակի դիմացի կետերը
  const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	
  `;
  //տվյալ դեպքում List-ը հանդիսանում  է մեր <li>-ը(List Item element-Ցուցակի տարրը)
  const ListItem = styled.li`
   width: 50%;
	margin-bottom: 10px;
  `;
  
  const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#E2FDFD" })}
  `;

  //ContactItem-ը կոնտակտների ընդհանուր կոնտեյներն է որն էլ գտնվում է Right կոնտեյների մեջ
  const ContactItem = styled.div`
	margin-bottom: 18px;
	display: flex;
	align-items: center;
  `;
  // վճարայի քարտերի նակարների կոնտեյներն է
  const Payment = styled.img`
	  width: 50%;
  `;
  
  const Footer = () => {
	return (
	  <Container>
		<Left>
		  <Logo>KAGADA</Logo>
		  <Desc>
		  KAGADA brand clothing is created with great love.
         Become a part of our brand. We value each of our customers, we work hard to meet your requirements.
         We are waiting for you, we wish you a pleasant shopping
		  </Desc>
		  {/* սա մեր սոցիալական կոնտեյներն է, որը պարունակում է ֆեյսբուքի, թվիթերի և այլ սոցիալական կայքերի icon-ները */}
		  <SocialContainer>
		  <a href="https://www.facebook.com/" target="blank">
			<SocialIcon color="3B5999">
			  <Facebook />
			</SocialIcon>
			</a>
			<a href="https://www.instagram.com/" target="blank">
			<SocialIcon color="E4405F">
			  <Instagram />
			</SocialIcon>
			</a>
			<a href="https://twitter.com/" target="blank">
			<SocialIcon color="55ACEE">
			  <Twitter />
			</SocialIcon>
			</a>
			<a href="https://www.telegram.com/" target="blank">
			<SocialIcon color="4B96EE">
			  <Telegram />
			</SocialIcon>
			</a>
		  </SocialContainer>
		</Left>
		<Center>
		  <Title>Useful Links</Title>
		  <List>
			<ListItem>Home</ListItem>
			<ListItem>Cart</ListItem>
			<ListItem>Man Fashion</ListItem>
			<ListItem>Woman Fashion</ListItem>
			<ListItem>Accessories</ListItem>
			<ListItem>My Account</ListItem>
			<ListItem>Order Tracking</ListItem>
			<ListItem>Wishlist</ListItem>
			<ListItem>Wishlist</ListItem>
			<ListItem>Terms</ListItem>
		  </List>
		</Center>
		<Right>
		  <Title>Contact</Title>
		  <ContactItem>
		  {/* Room-ը տեղը ցույց տվող icon-ի անունն է որը վերցրել ենք UI մատերիալից */}
			<Room style={{marginRight:"10px"}}/> Armenia, Yerevan
		  </ContactItem>
		  <ContactItem>
			{/* Phone-ը հեռախոսի icon-ի անունն է որը վերցրել ենք UI մատերիալից */}
			<Phone style={{marginRight:"10px"}}/> +374 77 00 00 00
		  </ContactItem>
		  <ContactItem>
			{/* MailOutline-ը նամակի icon-ի անունն է որը վերցրել ենք UI մատերիալից */}
			<MailOutline style={{marginRight:"10px"}} /> kagada@gmail.com
		  </ContactItem>
		  {/* Payment-ում դրել ենք վճարային քարտերի նկարների լինքը, UI մատերիալի հետ կապ չունի */}
		  <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
		</Right>
	  </Container>
	);
  };
  
  export default Footer;