import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Announcement from '../components/Announcement';


//Login page

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://dev.sustainablefur.com/wp-content/uploads/2020/01/shopping564x374.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  ${mobile({ margin: "2px 0px 3px 8px" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  ${mobile({ margin: "5px 0px 5px 0px" })}
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 9px 20px;
  background-color: #6550FF;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 15px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Something went wrong...</Error>}
            {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
            <Link href="/register">CREATE A NEW ACCOUNT</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;