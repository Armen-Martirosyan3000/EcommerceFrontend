import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #6550FF;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>An unprecedented offer! 20% off purchases over $80</Container>;
};

export default Announcement;


