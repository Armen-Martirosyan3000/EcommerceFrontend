import styled from "styled-components";
// "@material-ui/core": "^4.12.4",
//     "@material-ui/icons": "^4.11.3",
//     "body-parser": "^1.20.1",
//     "dotenv": "^16.0.3",
//     "nodemailer": "^6.8.0",
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
  return <Container>Super Deal! Free Shipping on Orders Over $40</Container>;
};

export default Announcement;



//#6550FF;
//Super deal! Free shipping on orders over $40, we wish you a pleasant shopping experience, many surprises await!

