import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: left;
  border: 1px solid #ccc;
  border-radius: 35px;
  padding: 5px 5px;
  max-width: 550px;
  height: 55px;
  margin: 20px auto;
  background-color: #fff;
`;

const Section = styled.div`
  width: 100%;  // Occupies the full width now
  text-align: left;
  height: 100%;
  
  span {
    margin-left: 10px;
    display: block;
    font-weight: bold;
    font-size: 13px;
    color: #555;
  }

  input {
    width: calc(100% - 20px);  // Full width minus padding/margin
    border: none;  // Remove the border
    background-color: transparent;  // Match the background of the container
    padding-left: 10px;  // Ensure padding on the left for alignment
    font-size: 14px;
    outline: none;  // Remove the outline on focus
    color: #000;
  }
`;

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
const Req = styled.div`

    text-align:center;
    margin-top:12px;
    margin-bottom:50px;

    a{
    color:blue;
    }
`

const Alias = () => {
  return (
    <>
        <Wrapper>
        <Section>
            <span>Enter an alias (For upload credit purposes)</span>
            <input 
            type="text" 
            placeholder='A cool nickname perhaps?' 
            />
        </Section>

        </Wrapper>
        <Submit>
            <input type="button" value="Submit My Paper"  />
        </Submit>
        <Req>
            <span>
                Want to request for a Question paper? <Link to='/submitpapers'>Request Here </Link>
            </span>
        </Req>
    </>
  );
};

export default Alias;
