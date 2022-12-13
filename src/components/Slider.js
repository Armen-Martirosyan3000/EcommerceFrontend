import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
//CSS-ում vh-ը նշանակում է տեսադաշտի բարձրություն, իսկ vw՝ տեսադաշտի լայնությունը: Ինչպես տեսնում եք, առաջին միավորը հիմնված է տեսադաշտի բարձրության վրա, և 1vh-ը համարժեք է տեսադաշտի բարձրության 1%-ին: vw-ն աշխատում է նույնը, բայց տեսադաշտի լայնության համար:VH նշանակում է «տեսակետի բարձրություն», որը դիտելի էկրանի բարձրությունն է: 100VH-ը կներկայացնի տեսադաշտի բարձրության 100%-ը կամ էկրանի ամբողջ բարձրությունը: Եվ, իհարկե, VW-ն նշանակում է «տեսադաշտի լայնություն», որը դիտելի էկրանի լայնությունն է։«100vh», ինչը նշանակում է, որ այն զբաղեցնում է ամբողջ տեսադաշտը (ձեր դիտարկիչի բարձրությունը) : Սա թույլ է տալիս նախագծել վայրէջք էջեր՝ հետևողական զննարկման փորձով. կարող եք ապահովել, որ նույն բովանդակությունը (մեկ հատվածում) տեսանելի է բոլոր սարքերում:
//overflow: hidden-ը է էկրանի հորիզոնական սքրոլ(որ մկնիկով տեղաշարժում է որ գնաս հաջորդ էջ), սրանով այդ սքրոլը հանվել է
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
   
`;

// եթե position: absolute(դիրքը բացարձակ)-ենք դնում, ապա իր ծնողին պետք է դնենք  position: relative, տվյալ դեքում ծնողը const Container-ն է
//position սահմանում է տարրի համար օգտագործվող դիրքավորման մեթոդի տեսակը (ստատիկ-static, հարաբերական-relative, ֆիքսված-fixed, բացարձակ-absolute կամ կպչուն-sticky):
//${(props) => props.direction === "left" && "10px"},${(props) => props.direction === "right" && "10px"} սրանց միջոցով սլաքները էկարնի ձախ և աջ կողմերից հեռացված են 10px-ով դեպի ներս
//եթե  margin: auto-ն չենք դնում սլաքները բարձրանում են վերև
//opacity: 0.5; սա բացացնում է սլաքների գույնը
//CSS հատկությունը սահմանում է position-դիրքավորված(position CSS հատկությունը սահմանում է , թե ինչպես է տարրը տեղադրվում փաստաթղթում: , , , և հատկությունները որոշում են դիրքավորված տարրերի վերջնական գտնվելու վայրը:position top right bottom left) տարրի և նրա հետնորդների կամ ճկուն տարրերի z-index կարգը : Ավելի մեծ z ինդեքսով համընկնող տարրերը ծածկում են ավելի փոքր տարրերով:ավելի մեծ կարգ ունեցող տարրը միշտ գտնվում է ավելի ցածր կարգով տարրի դիմաց:
//քանի որ այստեղ օգտագործում ենք js կոդ այդ պատճառով օգտագործում ենք $-ի նշանը, ներքևից փոխանցվում է direction="left" ու դա գալիս մտնում է props-ի(կարա ուրիշ անուն լինի props-ի տեղը) մեջ ու այստեղ ստուգում է ֆունկցիան եթե props.direction-ը՝ փոխանցված direction-ը(direction-ի տեղը կարա ուրիշ անուն լինի) left է այդ դեպքում left:-ին տուր 10px, նույն ձևով ստուգում է rigth-ը, ինչի համար է props-ով կարգավորվում քանի որ պայմանի ստուգում է իրականացվում աջ և ձախ կողմերի համար
//եթե   z-index: 2-ը չեմ դնում ձախ սլաքը կորում է, ամենայն հավաանակաւոթյամբ 2-ը վերաբերում է նրան որ առկա են 2 սլաքներ
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
// transition: all 2s ease սա ապահովում է այն ֆունկցիան որ երբ սլաքները սեղմում ենք մի էջից մյուս էջը գնա 1․5 վայրկյանում այս վայրկյանները կարող են փոխվել ըստ ցանկության
//translateX()-ը վերադիրքավորում է տարրը հորիզոնական հարթության վրա 2D հարթության վրա:
//ներքևում Wrapper-ին տալիս ենք մեր useState-ի slideIndex փոփոխականը որը իր մեջ ներառում է սլայդների(slide) ինդեքսները ու այնտեղից props-ով ստանում ենք slideIndex-ը որին բազմապատկում ենք -100-ով(100-ը ընկալվում է որպես 100%), քանի որ առաջին սլայդը գտնվում է 0 ինդեքսում ու երբ մենք ուզում ենք տեղափոխվել օրինակ վերջին սլայդ այդ դեպքում slideIndex-ը հավասար է լինում 2 ու 2*-100 դառնում է -200 այսինքն -200%-ով տեղափոխում ենք ձախ դեպի մինուս ու տեսնում ենք վերջին սլայդը նույն պրիցիպով է նաև
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  
`;
//Slide-ը ImgContainer և InfoContainer-ի համար հանդիսանում է ծնող
//background-color:-ին props-ով փոխանցում է բեքգրաունդի գույնը, վանդականիշը գույնի կոդի դիմաց դրվող վանդականիշն է
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  padding:0%
`;
// քանի որ ImgContainer-ը և InfoContainer-ը նույն չափի եբ դրա համար նրանց երկուսին ել տալիս ենք flex: 1
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  margin-left:18%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
//#FFC000
const Title = styled.h1`
  font-size: 60px;
  color:red
`;
//նկարագրություն
//letter-spacing: 3px, սա տեքստի բառերը իրարից 3px-ով հեռվացրել է
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
  color:#5000E1 
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color:#5000E1;
  border: 2px solid #5000E1;

 
  
  
`;
//useState(0), useState-ով slideIndex-ին տալիս ենք 0 որ կայքը բացելուց սկզբնական էջը լինի winter sale-ն, սրանով որոշվում է մեր սլայդների(slider) ինդեքսները քանի որ
//հիմնվում է const sliderItems-ի վրա որը զանգված է data.js-ում ստեղծված, որի միջոցով յուրաքանչյուր սլայդ(էջ) ունի իր ինդեքսը(քանի որ գտնվում է sliderItems զանգվածի մեջ)
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    // սա՝ direction === "left" նշանակում է եթե սլաքը ձախ է ապա որպեսզի ծրագիրրը հասկանա թե ձախ սլաքը սեղմելուց որ սլայդը ցույց տա դրա համար ասում ենք եթե slideIndex > 0-ից ուրեմն ինդեքսիղ հանիր 1՝-1 եթե դա այդպես չի այսինքն  slideIndex = 0 ապա ձախ սլաքը սեղմելուց ցույց տուր 2 ինդեքսին համապատասխան սլայդը այսինքն վերջինը, քանի որ եթե 0-1 ապա կստանանք -1 ինդեք ւսկ մեն զանգվածում չունենք -1 ինդեքս
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {//սա վերաբերվում է աջ սլաքին, որտեղ ասվում է եթե slideIndex < 2 ուրեմն +1 արա այսինքն և թող այդ սլայդը բացվի եթե դա այդպես չի այսինքն` slideIndex = 2 այս դեպքում աջ սլաքը սեղմելուց տեղափոխի 0 ինդեքսով սլայդը քանի որ, զանգվածում 2-ից մեծ ինդեքս չունենք այս դեպքում
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
		{/* Սա ձախ սլաքն է էկրանի վրա, ArrowLeftOutlined-ը UI մատերիալում ձախ սլաքի անունն է, որը վերևում ավտոմատ իմփորթ է արվում */}
        {/* direction-ուղղությունը */}
	      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {/* sliderItems զանգված-ը սահմանված է data.js ֆայլում */}
        {sliderItems.map((item) => (//map-ի միջոցով պտտվում է sliderItems զանգվածի վրայով և տվյալ Slide-ին տալիս է իր համապատասխան նկարը բեքգրաունդը(bg) վերնագիրը(title), նկարագրություն(desc), նկարը(img)
          // Երբ օգտագործում ես map այդ ժամանակ պարտադիր է օգտագործել եզակի բանալի, որը տվյալ դեպքում, զանգվածում գտնվող օբյեկտների id-ն է
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
