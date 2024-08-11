import styled from 'styled-components';

export default function Heading() {
    const Submit = styled.div`
    text-align:center;
    input{
    background-color:black;
    color:white;
    width:250px;
    height:40px;
    border-radius:20px;

      &:hover {
    background-color: #067;  // Light gray on hover
  }
    }
`
    return (
        <Submit>
            <input type="button" value="Request Paper" />
        </Submit>

    
    );
}
