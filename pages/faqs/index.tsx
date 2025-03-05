import React, { useState } from 'react';
import Plus from '../../components/illustration/plus';
import Heading from '../../components/Typography/heading';

type Faq = {
  q: string;
  a?: string;
  a1?: string;
  a2?: string;
  ai?: string;
  av?: string;
};

const faqs: Faq[] = [
    {
      q: 'What is AsyncAPI Conf?',
      a: 'AsyncAPI Conference is a way for you to experience the excitement and energy of this series of micro-conferences hosted around the globe, where the brightest minds and most passionate enthusiasts gather to share their knowledge and explore the latest developments in the field.',
    },
    {
      q: 'Who can submit a talk?',
      a: "We're excited to have speakers from different parts of the globe sharing how they apply the AsyncAPI Specification in their practical use cases. We encourage proposals from all individuals, regardless of their expertise level, to promote a diverse content track that welcomes everyone.",
    },
    {
      q: 'When is the deadline to submit a talk?',
      a1: 'The deadline date for submitting a talk is on ',
      a2: ' at 12pm UTC',
    },
    {
      q: "Talks we don't recommend",
      a: 'Marketing/Sales - rather share your experience or use case using our tools or specification.',
    },
    {
      q: 'Talks Review',
      a: 'Reviews will be kept anonymous, and reviewers will not have access to speaker information such as name, gender or company, etc.',
    },
    {
      q: 'Can I send a virtual talk?',
      ai: 'No, this is an in-person event; all speakers must deliver their sessions in person.',
      av: 'Yes, you can send a virtual talk as this is an online event.',
    },
  ];

const FaqSection: React.FC = () => {
  const [show, setShow] = useState<number | null>(null);
  const talkDeadLine = 'March 31'; 
  const virtual = false; 

  const toggleShow = (index: number) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className="faq-section z-[9] m-20" data-test="faq-section" >
      <Heading className="text-[60px] text-white text-center">FAQs</Heading>
      <div className="faq-list mt-20">
        {faqs.map((faq, i) => (
          <div key={faq.q} onClick={() => toggleShow(i)}>
            <div className="faq-item pb-4 cursor-pointer mt-4" style={{ borderBottom: '1px solid #333' }}>
              <div className={`flex justify-between ${show === i ? 'text-white' : 'text-gray-400'} hover:text-white`}>
                <h2 className="text-xl w-[90%]">{faq.q}</h2>
                <button className="pointer border h-[30px] border-[#ffff] mr-[20px] rounded-3xl p-1">
                  <Plus
                    className={`w-[20px] transition-transform duration-700 ${show === i ? 'rotate-45' : 'rotate-90'}`}
                  />
                </button>
              </div>

              {i === 2 && faq.a1 && faq.a2 ? (
                <p className={`mt-8 text-md text-white ${show === i ? 'block' : 'hidden'}`}>
                  {faq.a1 + talkDeadLine + faq.a2}
                </p>
              ) : i === 5 && (faq.ai || faq.av) ? (
                <p className={`mt-8 text-md text-white ${show === i ? 'block' : 'hidden'}`}>
                  {virtual ? faq.av : faq.ai}
                </p>
              ) : faq.a ? (
                <p className={`mt-8 text-md text-white ${show === i ? 'block' : 'hidden'}`}>
                  {faq.a}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
