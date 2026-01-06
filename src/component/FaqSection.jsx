import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is space tourism safe?",
      answer:
        "However, exposure to elevated levels of ionising radiation, such as those possible during space weather events, can potentially cause damage to DNA.",
    },
    {
      question: "Do I need to be in perfect health?",
      answer: "Most travelers need to meet basic health requirements.",
    },
    {
      question: "What training is required?",
      answer: "Basic astronaut training and safety drills are required.",
    },
    {
      question: "How long does a space trip last?",
      answer: "Most commercial space trips last a few minutes to several days.",
    },
    {
      question: "Can anyone go to space?",
      answer: "With time, accessibility will expand, but currently requirements apply.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-purple-400 text-sm font-medium text-center mb-4">
          /FAQS
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          FREQUENTLY ASKED <br /> QUESTIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side - FAQs */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border ${
                  openIndex === index ? "border-purple-500" : "border-transparent"
                } p-4 cursor-pointer`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg">
                    {String(index + 1).padStart(2, "0")}. {faq.question}
                  </h3>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src="/FAQ-Image (1).webp"
              alt="Wireframe Plane"
              className="w-96 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on the <br /> Future of Space Travel
            </h3>
            <p className="text-gray-100">
              Be the first to know about upcoming launches, new destinations,
              exclusive offers, and behind-the-scenes insights from our space
              programs
            </p>
          </div>

          {/* Email Input */}
          <div className="flex w-full md:w-1/2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-4 rounded-l-lg bg-white text-black outline-none"
            />
            <button className="bg-black px-6 rounded-r-lg text-white">
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
