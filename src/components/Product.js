import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	FavoriteOutlined
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { red } from 'material-ui-colors'


//One product content

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
  `;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;
	&:hover ${Info}{
		opacity: 1;
	}
	`;

const Circle = styled.div`
	width: 180px;
	height: 180px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
  `;

const Image = styled.img`
	height: 75%;
	z-index: 2;
  `;

//Icon ShoppingCartOutlined and SearchOutlined 
const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
	  transform: scale(1.3);
	}
  `;

//Icon1 FavoriteBorderOutlined and FavoriteOutlined
const Icon1 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
	transform: scale(1.3);
  }
`;

const Product = ({ item }) => {
	const [like, setLike] = useState(" ");
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<Link to={"/cart"}>
						<ShoppingCartOutlined />
					</Link>
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`}>
						<SearchOutlined />
					</Link>
				</Icon>
				<Icon1 onClick={() => setLike((prevLike) => !prevLike)}>
					{like ? <FavoriteBorderOutlined /> : <FavoriteOutlined style={{ color: red[600] }} />}
				</Icon1>
			</Info>
		</Container>
	);
};

export default Product;