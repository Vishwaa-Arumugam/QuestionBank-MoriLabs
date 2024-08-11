import Head from "./Head"
import SubjectDetails from "./SubjectDetails"
import QPDetails from "./Header"
import MoreDetails from "./MoreDetails"
import FileUpload from "./Upload"
import AcknowledgementCheckbox from "./AcknowledgementCheckBox"
import Alias from "./Alias"

export default function Combined(){

    return(
        <>
        <Head></Head>
        <QPDetails></QPDetails>
        <SubjectDetails></SubjectDetails>
        <MoreDetails></MoreDetails>
        <FileUpload></FileUpload>
        <AcknowledgementCheckbox></AcknowledgementCheckbox>
        <Alias></Alias>
        </>

    )
}