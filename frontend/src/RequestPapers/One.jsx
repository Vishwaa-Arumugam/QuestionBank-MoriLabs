import Heading from "./Heading"
import Header from '../SubmitPapers/Header'
import SubjectDetails from "../SubmitPapers/SubjectDetails"
import MoreDetails from "../SubmitPapers/MoreDetails"
import SubjectName from './SubjectName'
import RequestPaper from './RequestPaper'
import Contribute from "./Contribute"
export default function One(){

    return(
        <>
        <Heading></Heading>
        <Header></Header>
        <SubjectDetails></SubjectDetails>
        <MoreDetails></MoreDetails>
        <SubjectName></SubjectName>
        <RequestPaper></RequestPaper>
        <Contribute></Contribute>
        </>

    )
}