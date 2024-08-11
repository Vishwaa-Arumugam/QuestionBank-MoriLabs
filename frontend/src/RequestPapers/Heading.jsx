import styled from "styled-components"


export default function Heading(){
    const Header = styled.div`
    margin-top:20px;
    font-size:35px;
    font-weight:bold;
    text-align:center;

    span{
    color:#75232a
    }
    `
    const Paragraph = styled.p`
        text-align: center;
    `
    return(
        <div>
        <Header>
            Request a <span>Question Paper</span>
        </Header>
        <Paragraph>
        <p> Don't have your question paper listed? Submit a request </p>
        </Paragraph>
        <Paragraph>
        <p> and our volunteer team will try to provide quick action! </p>
        </Paragraph>
        </div>
    )
}