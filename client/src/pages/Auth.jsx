import React, { useState } from 'react'
import styled from 'styled-components'
import LogoImage from '../utils/Images/Logo.png'
import AuthImage from '../utils/Images/AuthImage.jpg'
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
  background: linear-gradient(135deg, #6a0dad, #ff6b6b, #feca57);
`;
const Left = styled.div`
flex:1;
background: blue;
position:relative;
@media only screen and (max-width: 600px) {
display:none;
}
`;
const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
position:absolute;
width:70px;
top:40px;
left:60px;
z-index:10
`;
const Image = styled.img`
position:relative;
width:100%;
height:100%;
object-fit:cover;
`

const Text = styled.div`
font-size:16px;
text
`
const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
`;


const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  // console.log(isLogin)
  return (
    <Container className='bg-purple-300'>
      <Left>
        <Logo src={LogoImage} />
        <Image src={AuthImage} />
      </Left>
      <Right className='flex align-middle text-center'>
        {!isLogin ? <>
          <SignIn />
          <Text  >
            Don't have a Account? <TextButton onClick={() => setIsLogin(true)}>Sign Up</TextButton></Text>
        </> : <>
          <SignUp />
          <Text  >
            Already have a Account? <TextButton onClick={() => setIsLogin(false)}>Sign In</TextButton>

          </Text></>}


      </Right>


    </Container>
  )
}

export default Auth;