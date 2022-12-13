import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import styled from "styled-components";
  
  //այս էջը վերաբերվում է ներքևում գտնվող փոքր ապրանքներին
// Ավելի մեծ z ինդեքսով համընկնող տարրերը ծածկում են ավելի փոքր տարրերով:ավելի մեծ կարգ ունեցող տարրը միշտ գտնվում է ավելի ցածր կարգով տարրի դիմաց:
  //Info-ն դա այն դաշտն է երբ մկնիկը մոտեցնում ենք ներքևի ձոքր ապրանքներին, իքը բերում է մոխրագույն բեքգրաունդ ու զամբյուղի, պոիսկի և սրտի իկոնկաներով
//transition: all 0.5s ease երբ մկնիկը մոտեցնում ենք ներքևի փոքր նկարին գալիս է մոխրագույն բեքգրաունդը 0.5s-ն ցույց է տալիս թե քանի վայրկյանում գա այդ ֆոնը
 //opacityCSS հատկությունը սահմանում է տարրի անթափանցիկությունը : Անթափանցիկությունը տարրի հետևում գտնվող բովանդակության թաքնվածության աստիճանն է և թափանցիկության հակառակն է:Եթե opacity: 0 ենք դնում բաց մոխրագույն(info) դաշտը մեր փոքր ապրանքների վրա չի երևում, եթե օրինակ դրվի opacity: 1 կամ opacity:-ը ընդհանրապես չդրվի ապա նկարների վրա մշտապես կերևա այդ մոխրագույն դաշտը
//բաց մոխրագույն գույնը սա՝ background-color: rgba(0, 0, 0, 0.2) է ապահովում, երբ մկնիկը մոտեցնում ենք մեր փոքր նկարների առաջացող icon-ների բաց մոխրագույն գույնը
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
  
  //ընդհանուր Container-ին է վերաբերվում
  //սրա՝ &:hover ${Info}{opacity: 1;} միջոցով, երբ մենք մկնիկը մոտեցնում ենք մեր ապրանքների փոքր նկարներին այդ ժամանակ նոր երեվում է մոխրագույն բեքգրաունդով և 3 icon-ներով պատուհանը
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
  
  // սա ներքևում գտնվող ապրանքների հետևոըւմ ստեղծում է կլոր սպիտակ շրջանաձև բեքգրաունդ
  const Circle = styled.div`
	width: 220px;
	height: 220px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
  `;
  
  //z-index: 2 սրա միջոցով ապահովում է որ շրջանաձև(Circle) բեքգրաունդը գնա ապրանքի հետևի ֆոն
  const Image = styled.img`
	height: 75%;
	z-index: 2;
  `;
  //մոխրագույն բեքգրաունդ ու զամբյուղի, պոիսկի և սրտի իկոնկաների ձևերն ու չափսերն է սահմանում const Icon-ը
  //սրա՝ transform: scale(1.2); միջոցով ապահովում է փոքր ապրանքներին մկնիկը մոտեցնելուց մոխրագույ ֆոնի ի հայտ գալուց հետո վրայի իկոնկաներին որ մոտեցնենք մկնիկը hover-ի միջոցով փոխվի չափսը, օրինակ՝ մեծանա
  //transition: all 0.5s ease; սրա միջոցով ապահովում ենք այն թե քանի վայրկյանում կկատարվի hover(տվյալ դեպքում քանի վայրկյանում կմեծանա օրինակ սիրտ Icon-ը երբ մկնիկը պահենք նրա վրա)
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
  // ***
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
  
  // ***
  const Product = ({ item }) => {
	const handleClick = (Icon1) => {
		// e.preventDefault();
		return Icon1=`background-color: red`
	  };
	return (
	  <Container>
		{/* Circle-ը ստեղծվել է Container-ի համար ֆոնի գույն ապահովելու համար և դրանից հետո մենք կստեղծենք մեկ այլ ֆոն որը կլինի շրջանաձև */}
		<Circle />
		<Image src={item.img} />
		{/* Info կոնտեյները իր մեջ ներառում է 3 հատ icon */}
		<Info>
		  <Icon>
		  <Link to={"/cart"}>
		  {/* զամբյուղի տեսքով ShoppingCartOutlined անունով icon-ը(պատկերակ), վերցնում ենք UI մատերիալի Material Icos(https://mui.com/material-ui/material-icons/?query=cart+ShoppingCartOutlined&theme=Outlined) բաժնում ընտրելով Outlined ու պոիսկի տեղը գրելով cart բացված icon-ներից ընտրում ես, վերևում միանգամից իմփորթ է լինում երբ այստեղ գրում է այդ այքոնի անունը */}
			<ShoppingCartOutlined />
			</Link>
		  </Icon>
		  <Icon>
			{/* Այս link-ի միջոցով մենք սեղմում ենք ապրանքի վրայի խոշորացույցի վրա(որը նույնականացվում է ապրանքի id-ով) ու տեղափոխվում ենք 1 ապրանքի էջում */}
		  <Link to={`/product/${item._id}`}>
		  {/* պոիսկի տեքսով SearchOutlined անունով icon-ը կրկին վերցրել ենք UI մատերիալից */}
			<SearchOutlined />
			</Link>
		  </Icon>
		  <Icon1>
		 {/* սրտի տեքսով FavoriteBorderOutlined անունով icon-ը կրկին վերցրել ենք UI մատերիալից */}
			<FavoriteBorderOutlined onClick={handleClick} /> 
		  </Icon1>
		</Info>
	  </Container>
	);
  };
  
  export default Product;