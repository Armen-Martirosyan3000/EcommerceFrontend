import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";


//Structure of 3 product categories

const Container = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between; 
  ${mobile({ padding: "2px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <>
          <CategoryItem item={item} key={item.id} />
        </>
      ))}
    </Container>
  );
};

export default Categories;