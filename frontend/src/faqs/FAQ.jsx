import React from 'react';

const FaqSection = () => {
  const faqs = [
    {
      question: 'What is a hackathon?',
      answer: `A hackathon can be best described as an “invention marathon”, or in simple words hackathons are about bringing your crazy ideas to reality. It’s an event where any tech-enthusiast, regardless of their individual field can come & participate to learn, build & share their creations over the course of a weekend, in a relaxed & productive environment. Hackathons are simply a venue for self-expression & creativity, where people come together & transform their thoughts into reality, through technology.`,
    },
    {
      question: 'How big a team can be?',
      answer: 'The minimum team size is two and the maximum team size is four.',
    },
    {
      question: 'Who all can participate?',
      answer:
        'This is a student hackathon and only students are allowed to participate. You will be required to verify at the event by showing your student ID card.',
    },
    {
      question: 'Do I need to have any specific qualifications to be a participant for the hackathon?',
      answer: 'If you love to code, you are more than welcome to participate in the hackathon.',
    },
    {
      question: "I'm not a citizen of India. Can I participate?",
      answer:
        'There is only one eligibility for this hackathon and that is Motivation. If you love to code and have an innovative brain then you are more than welcome. So yes, If you are an International Participant, You are always welcome to our hackathon.',
    },
    {
      question: 'I am a newbie, can I hack?',
      answer:
        'Of course you can! We at hackCBS ensure that no one is left behind during the hacking, thanks to our mentors and volunteers who help us achieve the same. We make sure that you learn the best you can alongside having fun and experiencing what it feels to belong to a community.',
    },
    {
      question: 'Is there any registration fees for participation?',
      answer:
        "We don't want to monetize learning, community, and innovation. So, There is <b>no</b> participation/registration fees.",
    },
    {
      question: 'Can I start working on my hack before the event?',
      answer:
        'No. In the interest of fairness, students should not be working on their projects before hackCBS begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand.',
    },
    {
      question: 'What to bring to the hackathon?',
      answer:
        'Please bring a valid university ID (or any student ID if in high school), a computer (preferably a laptop), chargers, and any hardware you will use for your hack. No firearms, weapons, alcohol, or illegal drugs are allowed on campus.',
    },
    {
      question: 'Does hackCBS provide Internet facility during hackathon?',
      answer:
        "You're advised to bring your own broadband/hotspot device as we can arrange for at most one connection per team.",
    },
    {
      question: 'What is the shortlisting procedure?',
      answer:
        'Based on the info provided in the registration form, teams will be shortlisted for the hackathon.',
    },
    {
      question: 'I am below 18 or a high school student. Can I attend the hackathon?',
      answer:
        'Yes, you are most welcome but you will need to have parent’s consent to stay in the premises from 9th to 10th.',
    },
    {
      question: 'Error 404 question not found?',
      answer: `Drop us a mail at <a href="mailto:connect@hackcbs.tech" target="_blank"><u>connect@hackcbs.tech</u></a> and we would be more than happy to answer your queries. Also, feel free to write if you'd like to volunteer for the event or be a mentor or judge!`,
    },
  ];

  return (
    <section id="faq" className="pb100 pt100" style={{ background: '#040709' }}>
      <div className="container">
        <div className="section_title mb50">
          <h3
            className="title-dark"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            Frequently Asked Questions
          </h3>
        </div>

        <div className="accordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <a>{faq.question}</a>
              <div className="content">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          ))}
        </div>

        <br />
        <br />

        <div className="row justify-content-center">
          <div
            className="col-md-12 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cta">
                <span className="hover-underline-animation" style={{ color: 'white', fontSize: '17px' }}>
                  Code of Conduct
                </span>
                <svg
                  style={{ fill: 'white' }}
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
