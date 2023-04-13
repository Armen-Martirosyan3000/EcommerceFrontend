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


// Footer 

const Container = styled.div`
	display: flex;
	background-color:#E2FDFD;
	${mobile({ flexDirection: "column" })}
  `;


// Footer Left

const Left = styled.div`
	flex: 1;
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

// Footer Center

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: "none" })}
  `;

const Title = styled.h3`
	margin-bottom: 30px;
	color:#6550FF;
	font-weight: 900
  `;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;	
  `;

const ListItem = styled.li`
   width: 50%;
	margin-bottom: 10px;
  `;

// Footer Right

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#E2FDFD" })}
  `;

const ContactItem = styled.div`
	margin-bottom: 18px;
	display: flex;
	align-items: center;
  `;

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
					<Room style={{ marginRight: "10px" }} /> Armenia, Yerevan
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +374 77 00 00 00
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> kagada@gmail.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;