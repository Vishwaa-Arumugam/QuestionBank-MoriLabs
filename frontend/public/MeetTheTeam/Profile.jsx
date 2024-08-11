import "./team.css";
import image from "/src/assets/Vijay Veerasekaran.jpeg";

export default function RectangleProfile({name}) {
    return (
        <div className="details">
            <div className="ima" >
                <img 
                    src={image} 
                    alt={name} 
    
                />
            </div>
            <div className="name">
                {name}
            </div>
            <div className="link">
            <button className="instagram-button">
                <i className="fab fa-instagram"></i>
            </button>
            <button className="linkedin-button">
                <i className="fab fa-linkedin"></i>
            </button>
            <button className="github-button">
                <i className="fab fa-github"></i>
            </button>
        </div>
        </div>
    );
}
