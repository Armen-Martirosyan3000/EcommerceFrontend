import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
// ??? useLocation(օգտագործման գտնվելու վայրը)-useLocation-ը կեռիկ է, որը թույլ է տալիս մեզ ստանալ վեբ հավելվածի ընթացիկ գտնվելու վայրը (կամ URL-ը):Վերադարձնում է գտնվելու վայրը ցանկացած բաղադրիչի:Կեռիկը useLocationվերադարձնում է այն locationօբյեկտը, որը ներկայացնում է ընթացիկ URL-ը: Դուք կարող եք մտածել դրա մասին, ինչպես այն useState, որը վերադարձնում է նորը location, երբ URL-ը փոխվում է:Սա կարող է իսկապես օգտակար լինել, օրինակ, այն իրավիճակում, երբ դուք ցանկանում եք գործարկել նոր «էջ դիտում» իրադարձություն՝ օգտագործելով ձեր վեբ վերլուծության գործիքը, երբ նոր էջը բեռնվում է:Այս կեռիկը վերադարձնում է ընթացիկ locationօբյեկտը: Սա կարող է օգտակար լինել, եթե ցանկանում եք որևէ կողմնակի ազդեցություն ունենալ, երբ ընթացիկ գտնվելու վայրը փոխվի:
import { useLocation } from "react-router";
import { useState } from "react";


//rafc-ով կամ rafce որ գրում ենք ավտոմատ ստեղծում է կոմպոնենտ(arrow ֆունկցիայով) տվյալ js ֆայլի անունով
//rfc Enter, սրա միջոցով ավտոմատ ստեղծում է ֆունկցիա

//Սա ապրանքների ցուցակն է, և այստեղ import ենք այն կոմպոնենտները որոնք ուզում ենք որ լինի այստեղ

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  color:red;
  font-weight: 800;
`;
//սա մեր ֆիլտր կոնտեյներն է, որով մենք կարող ենք ընտրել մեր ապրանքի չափսը(ռազմեր), գույնը և այլն, և դա կլինի տեսակավորման էջը, և այստեղ մենք կօգտագործենք մեր ապրանքների ցուցակը մեր կոմպոնենտներում որպեսզի զրոյից չսարքենք
//այս կոնտեյների մեջ մտնում են Filter Products-ը և Sort Products-ը
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;
//${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

//FilterText-ի մեջ մտնում են՝ Filter Products տեքստը ուղղակի և Sort Products: տեքստը ուղղակի
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;


//Select-ընտրել, <select> -ը օգտագործվում է բացվող ցուցակ ստեղծելու համար:
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 1px" })}
`;


//Option-տարբերակ, Option-ով  <select> ցուցակի մեջ տարբերակներ ենք ստեղծում:Տարրի ներսում <option>պիտակները սահմանում են բացվող ցանկում առկա տարբերակները:
const Option = styled.option``;

const ProductList = () => {
  //useLocationվերադարձնում է այն locationօբյեկտը, որը ներկայացնում է ընթացիկ URL-ը:Այդ օբյեկտը մենք տեսնում ենք կոնսոլ լոգ անելով ու մտնելով բրաուզերում պրասմատրետ կոդ ու հետո info, այդ օյեկտի մեջ մենք կտեսնենք մեր գտնվելու վայրը՝ pathname: "/products/women", որտեղ երևում է մեր path-ի անունը՝"/products/women", մենք կարող ենք բաժանել այդ տողը սրա միջոցով՝location.pathname.split("/")[2], այս պարագայում կոնսոլում ցույց կտա /products/women-ի 2-րդ էլեմենտը այսինքն՝women-ը
    //split(պառակտում, բաժանում) օրինակ
    //const authHeader = 'bearer token'
    //const split = authHeader.split(' ') //  [ 'bearer', 'token' ]
    //const token = split[1] //  token
    //եթե մենք ունենանք token մենք դա պետք է ստուգենք
  const location = useLocation();
 // console.log(location.pathname.split("/")[2])
   const cat = location.pathname.split("/")[2];//cat այսինքն կատեգորիա այս փոփոխականի մեջ մենք վերցնում ենք(split-ի մջոցով առանձնացնում ենք մեր կատեգորիաները) մեր կատեգորիաները,այսպես սրա՝location.pathname.split("/")[2] միջոցով այս պարագայում կոնսոլում ցույց կտա /products/women-ի 2-րդ էլեմենտը այսինքն՝women-ը, եթե լիներ /products/jeans-կատեգորիան կոնսոլում ցույց կտա միայն jeans կատեգորիան
  //useLocation-ից հետո կարող ենք սահմանել մեր ֆիլտրները, http://localhost:3000/products/woman path-ով երբ մենք մտնում ենք էջ և ընտրում ենք color-ի միջից ինչպես գույն ու size-ից ինչ որ չափ, մենք կստեղծենք օբյեկտ և մենք կփոխենք արժեքները(այսինքն գույների և չափերի արժեքները) այդ օբյեկտի ներսում,որպեսզի մենք դա անենք մենք կօգտագործենք useState({}) hook-ը, սկզբնական արժեքը տալիս ենք օբյեկտ ու դրանից հետո ամեն անգամ երբ կփոխենք գույնը և չափսը մենք կթարմացնենք այդ state(վիճակը)-ը
   const [filters, setFilters] = useState({});
  //sort-ով մենք տեսակավորում ապրանքները ըստ՝ newest-նորագույն, արժեքի աճի(price(asc)) ու արժեքի նվազման(price(desc))
   const [sort, setSort] = useState("newest");//սկզբնական արժեքը տալիս ենք newest, այսինքն ամենա նոր ապրանքները

  const handleFilters = (e) => {
    const value = e.target.value;//e.target.value-ն ընթացիկ արժեքն է
    setFilters({//setFilters ֆունկցիայով սահմանում ենք մեր ֆիլտրները և այն թարմացվելու է
      //եթե մենք գրում ենք միայն [e.target.name]: value, մենք ստանում ենք միայն օբյեկտ որտեղ կա միայն չափսը ու ներսում գույնը չկա, որպեսզի բացառենք այդ խնդիրը մենք կօգտագործենք spread(...) օպերատորը։JavaScript-ի տարածման օպերատորը ( ...) թույլ է տալիս մեզ արագ պատճենել գոյություն ունեցող զանգվածի կամ օբյեկտի ամբողջ կամ մի մասը մեկ այլ զանգվածի կամ օբյեկտի մեջ:Այսպիսով ...filters-ը ավելացնելով, երբ մենք դնում ենք օրինակ սև գույնը, հետո դնում ենք չափսը ...filters-ի միջոցով արդեն նոր օբյեկտի մեջ պատճե է անում արդեն սև գույնը ու այդ նոր օբյեկտի մեջ լինում է և գույնը և չափսը։ Հետաքրքիրը այն է որ երբ սկզբում ընտրում ես չափսը հետո գույնը ապա նոր ստեղծվող օբյեկտի մեջ սկզբում չափսն է լինում ու հետո գույնը, հակառակ դեպքում հակառակ հերթականությամբ է
      ...filters,
      [e.target.name]: value,
    });
  };
console.log(filters)


  return (
    <Container>
      <Navbar />
      <Announcement />
      {/* Այստեղով սահմանվում է մեր յուրաքանչյուր կատեգորիան՝{cat} */}
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          {/* Select-ը ստեղծում է ընտրելու ցուցակ, որտեղ կան օրինակ գույներ ու դրանցից մեկը դու ընտրում ես */}
          {/* Onchange իրադարձությունը տեղի է ունենում, երբ փոխվել է տարրի արժեքը: onchange իրադարձությունը նաև աշխատում է <select> տարրերի վրա։Onchange- ը իրադարձության հատկանիշ է:Իրադարձությունը գործարկվում է ամեն անգամ, երբ HTML տարրի արժեքը փոխվում է:Onchange իրադարձություն հատկանիշն աշխատում է, երբ տարրի արժեքը փոխվում է և ցուցակից ընտրում է նոր արժեքը։ */}
          {/* քանի որ Color-ի դեպքում էլ ու Size-ի դեքպում էլ օգտագործվում է նույն ֆունկցիան, որպեսզի մեր ֆունկցաին տարբերակի գույնն է փոխվում թե չափսը դրա համար մենք գրում ենք անուն(name="color", name="size" ) որի միջոցով  ֆունկցիան կտարբերակի գույնն է փոխվում թե չափսը */}
          <Select name="color" onChange={handleFilters}>
          {/* սա՝ disabled  ապահովում է որ ցուցակի տարբերակներում Color-ը ակտիվ չլինի */}
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option> 
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>purple</Option>
            <Option>pink</Option>
          </Select>
          {/* size-ի դեպքում կրկին օգտագործվում է նույն handleFilters ֆունկցիան */}
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          {/* տեսակավորման ֆունկցիան մենք գրում ենք հենց Select-ում */}
          {/* որպեսզի e.target.value-ով կարողանանք վերցնել ընթացիկ արժեքը, դրա համար մենք Option(տարբերակ)-ներին տալիս ենք արժեքներ՝ value="newest" և այլն */}
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      {/* մեր ստեղծած բոլոր արժեքները՝ {cat}-կատեգորիան(women, jeans,jacket), {filters}-գույնի և չափսի ֆիլտրնեը, {sort}-ըստ նոր ապրանքների, գնի աճման և նվազման սորտավորումները մենք կարող ենք օգտագործել մեր ապրանքների(Products) ներսում, դրա համար մենք դրանք որպես props փոխացում ենք Products կոմպոնենտում */}
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;



  
  



  
  
  


