
import RectangleProfile from "./Profile";
export default function TeamComponent() {
    return (
        <>
            <div className="profiles">
                <RectangleProfile name="Vijay Veerasekaran" />
                <RectangleProfile name="Vishnu Siddharth" />
                <RectangleProfile name="Vishwaa Arumugam" />
                <RectangleProfile name = "Vishal Prakash"/>
                <RectangleProfile  name = "Ranjith Srikanth"/> {/* Added fifth profile */}
            </div>

        </>
    )
}