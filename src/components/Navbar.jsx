import { styled } from 'styled-components';

const NavbarContainer = styled.div`
 overflow: hidden;
  background-color: #333;
  
  a {
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
  
  a.right {
    float: right;
  }
  
  a:hover {
    background-color: #ddd;
    color: black;
  }
`;

export default function Navbar() {
    return (
        <NavbarContainer>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#" className="right">Link</a>
        </NavbarContainer>
    );
}