import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

//justify-content-ը սահմանում է հիմնական առանցքի երկայնքով հավասարեցումը:CSS հատկությունը սահմանում է justify-content, թե ինչպես է զննարկիչը տարածություն բաշխում բովանդակության տարրերի միջև և շուրջը ճկուն կոնտեյների հիմնական առանցքի(Flexbox- ում հիմնական առանցքը սահմանվում է սեփականության կողմից սահմանված ուղղությամբ flex-direction: Կան չորս հնարավոր արժեքներ flex-direction` row, row-reverse,column,column-reverse:Եթե ​​դուք ընտրեք, rowթե՞ row-reverseձեր հիմնական առանցքը կանցնի շարքի երկայնքով ներգծի ուղղությամբ:Ընտրեք columnկամ column-reverse, և ձեր հիմնական առանցքը կանցնի էջի վերևից ներքև՝ բլոկի ուղղությամբ:) և ցանցային կոնտեյների ներգծային առանցքի երկայնքով: օգտագործելով justify-content(հիմնավորել բովանդակությունը):
//space-between-ի դեպքում տարրերը հավասարաչափ բաշխված են տողում. առաջին կետը մեկնարկային տողում է, վերջին կետը՝ վերջում
//  flex-wrap: wrap;
const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between; 
  ${mobile({ padding: "2px", flexDirection:"column" })}
`;
//

const Categories = () => {
  return (
    <Container>
      {/* Երբ օգտագործում ես map այդ ժամանակ պարտադիր է օգտագործել եզակի բանալի, որը տվյալ դեպքում, զանգվածում գտնվող օբյեկտների id-ն է */}
      {categories.map((item) => (// այստեղով map-ով անցնում է data.js-ում գտնվող categories զանգվածի վրայով վերցնում է նրա արժեքները, որոնք 3 օբյեկտներ են՝ իրենց կատեգորիաներն են "SHIRT STYLE!", "LOUNGEWEAR LOVE" ,"LIGHT JACKETS"
        <>
        {/* {console.log(item)} */}
        {/* այս item-ների մեջ մտնում են categories զանգվածի միջի 3 օբյեկտները, որոնք մենք որպես props փոխանցում ենք CategoryItem-ին, այսինքն ծնող կոմպոնենտից child կոմպոնենտին */}
       <CategoryItem item={item} key={item.id} />
        </>       
      ))}
    </Container>
  );
};

export default Categories;