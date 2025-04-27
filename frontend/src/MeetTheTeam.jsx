import React from 'react';
const Team = () => {
  const teamMembers = [
    {
      name: "Vijay Veerasekaran",
      imageLink: "/src/assets/Vijay Veerasekaran.jpeg",
      githubLink: "https://github.com/vijay2110746",
      linkedinLink: "https://www.linkedin.com/in/vijay-veerasekaran-1819b0259/",
      instagramLink: "https://www.instagram.com/vijay_veerasekaran/"
    },
    {
      name: "Vishnu Siddharth",
      imageLink: "/src/assets/Vishnu Siddharth.png",
      githubLink: "https://github.com/HallowSiddharth",
      linkedinLink: "https://www.linkedin.com/in/vishnusiddharth/",
      instagramLink: "https://www.instagram.com/vishnusiddharthvr/"
    },
    {
      name: "Vishwaa Arumugam",
      imageLink: "/src/assets/Vishwaa.jpeg",
      githubLink: "https://github.com/Vishwaa-Arumugam",
      linkedinLink: "https://www.linkedin.com/in/vishwaa-arumugam/",
      instagramLink: ""
    },
    {
      name: "Vishal Prakash",
      imageLink: "/src/assets/Vishal Prakash.jpg",
      githubLink: "https://github.com/v1sh-afk",
      linkedinLink: "https://www.linkedin.com/in/vishal-prakash-40728a25b/",
      instagramLink: "https://www.instagram.com/v1sh.afk/"
    },
    {
      name: "Ranjith Srikanth",
      imageLink: "/src/assets/Ranjith S.png",
      githubLink: "https://github.com/RanjithSrikanth",
      linkedinLink: "https://www.linkedin.com/in/ranjith-srikanth-55a61023b/",
      instagramLink: "https://www.instagram.com/_.ranji.20._/"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase tracking-wider text-black mb-2">
          MEET THE TEAM
        </h2>
        <p className="text-xl text-black italic mb-12">
          Five Minds, Infinite Possibilities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="w-64 bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-36 h-36 mx-auto mb-6 rounded-full border-4 border-blue-500 overflow-hidden">
                <img 
                  src={member.imageLink} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {member.name}
              </h3>
              <div className="flex justify-center space-x-4">
                {member.githubLink && (
                  <a 
                    href={member.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 text-2xl transition-colors"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
                {member.linkedinLink && (
                  <a 
                    href={member.linkedinLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 text-2xl transition-colors"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {member.instagramLink && (
                  <a 
                    href={member.instagramLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500 text-2xl transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;