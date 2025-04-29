import styled from 'styled-components';
import Button from '../Button';

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
      <div className='flex justify-center'>
        <Button name={'Request Paper'}/>
      </div>  
    
    );
}
