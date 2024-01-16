import { styled } from 'styled-components';

const SideContainer = styled.div`
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
`;

export default function Side() {
    return (
        <SideContainer>
            <h2>About Me</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg" style={{height: '200px'}}>Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div className="fakeimg" style={{height: '60px'}}>Image</div>
            <br />
            <div className="fakeimg" style={{height: '60px'}}>Image</div>
            <br />
            <div className="fakeimg" style={{height: '60px'}}>Image</div>
        </SideContainer>
    );
}