import React, { useState } from 'react';
import '../faqs/faqs.css';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is a hackathon?',
      answer: `A hackathon is an “invention marathon”, where people build, learn, and share ideas using technology over a weekend.`,
    },
    {
      question: 'How big a team can be?',
      answer: 'Team size must be between 4 and 5 members.',
    },
    {
      question: 'Who all can participate?',
      answer: 'Only students can participate.',
    },
    {
      question: 'Do I need any specific qualifications?',
      answer: 'If you love to code, you’re welcome to join.',
    },
    {
      question: 'I am a newbie, can I hack?',
      answer: 'Absolutely! Mentors and volunteers will guide you.',
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No. Participation is completely free.',
    },
    {
      question: 'Can I start working on my hack before the event?',
      answer: 'YES. You should only start building once your team selected.',
    },
    {
      question: 'What to bring to the hackathon?',
      answer: 'Laptop, chargers, student ID, and other essentials.',
    },
    {
      question: 'Does HACKFEST provide internet?',
      answer: 'We recommend bringing your own hotspot; but we say yes we will provide.',
    },
    {
      question: 'What is the shortlisting procedure?',
      answer: 'Teams are shortlisted based on the registration form and PPT .',
    },
    {
      question: 'Error 404 question not found?',
      answer: `Drop a mail at <a href="adityasingh35052@gmail.com" target="_blank">ADITYA SINGH</a> for help.`,
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqs.map((faq, index) => (
          <div
            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <button
              className="accordion-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className="accordion-answer">
              <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
