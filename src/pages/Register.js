import styled from "styled-components";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Announcement from '../components/Announcement';


//Registration page

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.retaildoc.com/hubfs/Attract%20customers%20%281%29%20%281%29.webp")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  ${mobile({ margin: "5px 0px 5px 21px", fontSize: "20px" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${mobile({ margin: "8px", minWidth: "55%" })}
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  
`;

const Error = styled.span`
  color: red;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: #6550FF;
  color: white;
  cursor: pointer;
  font-size: 15px;
  ${mobile({ padding: "10px 15px" })}
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);


  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, password, name, lastname, email, confirmpassword, });
  };
  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input onChange={(e) => setName(e.target.value)} placeholder="name" />
            <Input onChange={(e) => setLastname(e.target.value)} placeholder="last name" />
            <Input onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            <Input onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email" name="email" />
            <Input onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
            <Input onChange={(e) => setConfirmpassword(e.target.value)} placeholder="confirm password" type="password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleClick} disabled={isFetching}>CREATE</Button>
            {error && <Error>Something went wrong...</Error>}
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;