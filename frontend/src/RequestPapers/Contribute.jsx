import styled from "styled-components"
import {Link} from "react-router-dom"
function Contribute(){
    
    const Req = styled.div`

    text-align:center;
    margin-top:12px;
    margin-bottom:50px;

    a{
    color:blue;
    }
`
    return(
        <div>
        <Req>
            <span>
            Have a question paper already? <Link to="/contribute">Contribute Here</Link>
            </span>
        </Req>
        </div>
    )
}


export default Contribute