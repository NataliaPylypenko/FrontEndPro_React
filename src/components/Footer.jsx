import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: #ddd;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <h2>Footer</h2>
        </FooterContainer>
    );
}