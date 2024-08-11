import "./team.css";
import image from "/src/assets/Vijay Veerasekaran.jpeg";

export default function RectangleProfile({name,imageLink,githubLink,linkedinLink,instagramLink}) {
    return (
        <div className="details">
            <div className="ima" >
                <img 
                    src={imageLink} 
                    alt={name} 
    
                />
            </div>
            <div className="name">
                {name}
            </div>
            <div className="link">
            <a href = {instagramLink}>
            <button className="instagram-button" >
                <i className="fab fa-instagram"></i>
            </button>
            </a>
            <a href = {linkedinLink}>
            <button className="linkedin-button">
                <i className="fab fa-linkedin"></i>
            </button>
            </a>
            <a href = {githubLink}>
            <button className="github-button">
                <i className="fab fa-github"></i>
            </button>
            </a>
        </div>
        </div>
    );
}
