import React, { useState } from 'react';
import question_bike from '../assets/Images/question_bike.svg';
import Down_arrow from '../assets/Images/Down_arrow.svg';

const faqs = [
  {
    question: "What is SwapUp?",
    answer:
      "SwapUp is a Battery-as-a-Service solution that lets you buy the scooter without a battery and charger. Instead, subscribe monthly and swap your drained battery for a fully charged one at any of our swap stations — simple, hassle-free, and cost-effective!",
  },
  {
    question: "How does the subscription work?",
    answer:
      "You pay a monthly fee and get access to swap stations where you can replace your drained battery with a fully charged one anytime.",
  },
  {
    question: "Where can I find swap stations?",
    answer:
      "Swap stations are located across the city and can be found using the SwapUp mobile app or website map.",
  },
];

const Question_component = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <div className="py-10 bg-[#F8F9F9] flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-SFDispaly">Got more questions?</h1>
        <h1 className="text-sm md:text-xl py-1 md:py-2">Checkout the below FAQS</h1>
        <img src={question_bike} alt="Bike Illustration" className="w-[175px] md:w-[270px] py-5 pb-12" />

        <div className="w-[90%] md:w-[75%] lg:w-[60%] 2xl:w-[50%] space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white p-5 md:p-8 rounded-2xl md:rounded-4xl transition-transform duration-300 ease-in-out"
            >
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleFAQ(idx)}
              >
                <h1 className="text-[16px] md:text-2xl flex-1 font-semibold">{faq.question}</h1>
                <img
                  src={Down_arrow}
                  alt="Toggle Answer"
                  className={`w-8 lg:w-10 transform transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm md:text-lg text-[#606568]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question_component;
