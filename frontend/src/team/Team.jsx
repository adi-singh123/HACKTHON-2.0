import React from 'react';

const TeamSection = () => {
  return (
    <section id="teams" className="pb100 pt100">
      <div className="container">
        <div className="section_title">
          <h3 className="title-dark" data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
            Meet The Crew
          </h3>
        </div>

        <div className="section_title">
          <h4 className="title-dark clr-white">Team</h4>
        </div>

        <div className="row justify-content-center">
          {/* Team Members */}
          {[
            {
              name: 'Damia Sharma',
              role: 'Lead Organizer',
              img: 'assets/img/team/damia.jpg',
              linkedin: 'https://www.linkedin.com/in/damia-sharma-6695311ab/',
            },
            {
              name: 'Nancy Garg',
              role: 'Lead Organizer',
              img: 'assets/img/team/nancy.jpeg',
              linkedin: 'https://www.linkedin.com/in/nancy-g-083864210/',
            },
            {
              name: 'Sumrath',
              role: 'Coordinator',
              img: 'assets/img/sponsors/6.0/Sumrath.jpeg',
              linkedin: 'https://www.linkedin.com/in/sumrath-36b42327b/',
            },
            {
              name: 'Muskan Goyal',
              role: 'Tech Head',
              img: 'assets/img/team/Muskan.jpeg',
              linkedin: 'https://www.linkedin.com/in/its-muskan-goyal/',
            },
            {
              name: 'Saurav Kumar',
              role: 'Graphics Head',
              img: 'assets/img/team/saurav2.jpeg',
              linkedin: 'https://www.linkedin.com/in/sauravkumar2206/',
            },
            {
              name: 'Jiya Rao',
              role: 'Graphics Head',
              img: 'assets/img/team/jiya2.jpeg',
              linkedin: 'https://www.linkedin.com/in/jiya-r-733067275/',
            },
            {
              name: 'Akshat Swami',
              role: 'Content Head',
              img: 'assets/img/team/akshat.jpeg',
              linkedin: 'https://www.linkedin.com/in/akshat-swami-a43803286/',
            },
            {
              name: 'Sanchit Singhal',
              role: 'Tech Head',
              img: 'assets/img/team/sanchit.jpeg',
              linkedin: 'https://www.linkedin.com/in/sanchit-singhal-3a6b84255/',
            },
          ].map((member, index) => (
            <div className="col-md-4 text-center" key={index}>
              <div className="team-box">
                <img src={member.img} alt={member.name} width="90%" />
                <h2>{member.name}</h2>
                <h5>{member.role}</h5>
                <h6>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div className="section_title">
          <h4 className="title-dark clr-white">Mentors</h4>
        </div>

        <div className="row justify-content-center">
          {/* Mentors */}
          {[
            {
              name: 'Anmol Wassan',
              role: 'Advisor',
              img: 'assets/img/team/mentors/anmol.jpeg',
              linkedin: 'https://www.linkedin.com/in/anmolwassan/',
            },
            {
              name: 'Sajal Bansal',
              role: 'Advisor',
              img: 'assets/img/team/mentors/sajal.jpeg',
              linkedin: 'https://www.linkedin.com/in/sajalban5al/',
            },
            {
              name: 'Harit Saini',
              role: 'Advisor',
              img: 'assets/img/team/mentors/harut.jpeg',
              linkedin: 'https://www.linkedin.com/in/sainiharit/',
            },
            {
              name: 'Utkarsh Singh',
              role: 'Advisor',
              img: 'assets/img/team/mentors/utkarsh.jpeg',
              linkedin: 'https://www.linkedin.com/in/utkarsh1999/',
            },
            {
              name: 'Shyaamal Tripathi',
              role: 'Advisor',
              img: 'assets/img/team/mentors/shy.jpeg',
              linkedin: 'https://www.linkedin.com/in/shyaamal-tripathi-a389051b3/',
            },
            {
              name: 'Vaibhav Srivastava',
              role: 'Advisor',
              img: 'assets/img/team/mentors/vaibhav.jpeg',
              linkedin: 'https://www.linkedin.com/in/vaibhav-srivastava-8673591ba/',
            },
            {
              name: 'Saksham Duhan',
              role: 'Advisor',
              img: 'assets/img/team/mentors/saksham.jpeg',
              linkedin: 'https://www.linkedin.com/in/saksham-duhan-48a536229/',
            },
          ].map((mentor, index) => (
            <div className="col-md-3 text-center" key={index}>
              <div className="team-box">
                <img src={mentor.img} alt={mentor.name} width="90%" />
                <h2>{mentor.name}</h2>
                <h5>{mentor.role}</h5>
                <h6>
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
