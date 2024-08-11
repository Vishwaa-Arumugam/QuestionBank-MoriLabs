
import RectangleProfile from "./Profile";
export default function TeamComponent() {
    return (
        <>
            <div className="profiles">
                <RectangleProfile name="Vijay Veerasekaran" imageLink="/src/assets/Vijay Veerasekaran.jpeg" githubLink='https://github.com/vijay2110746' linkedinLink='https://www.linkedin.com/in/vijay-veerasekaran-1819b0259/' instagramLink='https://www.instagram.com/vijay_veerasekaran/' />
                <RectangleProfile name="Vishnu Siddharth" imageLink="/src/assets/Vishnu Siddharth.jpg" githubLink='https://github.com/HallowSiddharth' linkedinLink='https://www.linkedin.com/in/vishnusiddharth/' instagramLink='https://www.instagram.com/vishnusiddharthvr/' />
                <RectangleProfile name="Vishwaa Arumugam" imageLink='/src/assets/Vishwaa D A.png' githubLink='https://github.com/Vishwaa-Arumugam' linkedinLink='https://www.linkedin.com/in/vishwaa-arumugam/' instagramLink='' />
                <RectangleProfile name="Vishal Prakash" imageLink="/src/assets/Vishal Prakash.jpg" githubLink='https://github.com/v1sh-afk' linkedinLink='https://www.linkedin.com/in/vishal-prakash-40728a25b/' instagramLink='https://www.instagram.com/v1sh.afk/' />
                <RectangleProfile name="Ranjith Srikanth" imageLink='/src/assets/Ranjith S.png' githubLink='https://github.com/RanjithSrikanth' linkedinLink='https://www.linkedin.com/in/ranjith-srikanth-55a61023b/' instagramLink='https://www.instagram.com/_.ranji.20._/' /> {/* Added fifth profile */}
            </div>

        </>
    )
}