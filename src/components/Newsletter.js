import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert'



//սա ներքևի Product newsletter-ի ընդհանուր բաժինն է այստեղ
//fcf5f5
const Container = styled.div`
  height: 60vh;
  background-color: #f5fafd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  color:
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
  
`;


const InputContainer = styled.div`
  width: 45%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  flex: 7;
  padding-left: 20px;
  border: 1px solid lightgray;
  &:focus {
	outline: none;
	border: 2px solid #6550FF;
}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #6550FF;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
    // console.log(email,555)

  const [show, setShow] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const res = await fetch("/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({
        email
      })
    });

    const data = await res.json();
    console.log(data)
    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      console.log("Email sent");
      setShow(true);
      setEmail("")
    }
  }

  return (
    <>
       {
          show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
            <Alert.Heading> Email Sent Successfully</Alert.Heading>
           
          </Alert> : ""
    }

    <Container>
      <Title>Newsletter</Title>
      <Desc>Get regular updates from your favorite products</Desc>
      <InputContainer>
	 
        <Input placeholder="Your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
		{/* <Focus/> */}
        <Button type="submit" onClick={sendEmail}>
	{/* սա վերցված է UI մատերալից, Send-ը icon-ի անունն է onClick={handleClick} */}
          <Send  />
        </Button >
      </InputContainer>
    </Container>
    </>
  );
};

export default Newsletter;