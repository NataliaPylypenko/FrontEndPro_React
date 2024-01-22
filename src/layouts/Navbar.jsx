import { styled } from 'styled-components';

const NavbarContainer = styled.div`
 overflow: hidden;
  background-color: #333;
  
  span {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    
    @media (max-width: 639px){
      float: none;
      width: 100%;
    }
  }
  
  span.right {
    float: right;
  }
  
  span:hover {
    background-color: #ddd;
    color: black;
  }
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <span>Link</span>
            <span>Link</span>
            <span>Link</span>
            <span className="right">Link</span>
        </NavbarContainer>
    );
}