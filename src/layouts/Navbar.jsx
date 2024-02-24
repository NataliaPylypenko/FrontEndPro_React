import { styled } from 'styled-components';
import {Link} from "react-router-dom";

const NavbarContainer = styled.div`
  overflow: hidden;
  background-color: #333;
  
  li {
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
  
  li.right {
    float: right;
  }
  
  li:hover {
    background-color: #ddd;
    color: black;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default function Navbar({ counter }) {
    return (
        <NavbarContainer>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todoTheme">TodoTheme</Link></li>
            <li><Link to="/blocks">Blocks</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/temperature">Temperature</Link></li>
            <li><Link to="/table">Table</Link></li>
            <li>{counter}</li>
            <li className="right">Link</li>
        </NavbarContainer>
    );
}