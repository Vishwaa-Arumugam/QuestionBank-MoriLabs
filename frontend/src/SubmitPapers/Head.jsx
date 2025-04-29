import styled from "styled-components"


export default function Head(){
    const Header = styled.div`
    margin-top:20px;
    font-size:35px;
    font-weight:bold;
    text-align:center;

    span{
    color:#75232a
    }
    `
    return(
        <Header>
            Submit a <span>Question Paper</span>
        </Header>
    )
}