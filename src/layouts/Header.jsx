import { styled } from 'styled-components';

const HeaderContainer = styled.header`
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
  
  h1 {
    font-size: 40px;
  }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <h1>My App</h1>
            <p>A app created by me.</p>
        </HeaderContainer>
    );
}