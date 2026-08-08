import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const steps = [
  {
    id: 1,
    icon: <FaUserPlus />,
    title: "Create Account",
    desc: "Sign up in minutes as a job seeker or employer. Build your profile and let opportunities come to you.",
  },
  {
    id: 2,
    icon: <MdFindInPage />,
    title: "Find or Post a Job",
    desc: "Browse thousands of live listings or post your open role to reach a pool of qualified candidates instantly.",
  },
  {
    id: 3,
    icon: <IoMdSend />,
    title: "Apply or Recruit",
    desc: "Job seekers apply with one click. Employers review applications and connect with the right talent fast.",
  },
];

const HowItWorks = () => {
  return (
    <section className="hiw">
      <div className="hiw__inner">
        <div className="hiw__header">
          <p className="hiw__eyebrow">Simple Process</p>
          <h2 className="hiw__title">How CareerConnect Works</h2>
          <p className="hiw__sub">
            Get started in three easy steps — whether you're looking for your
            next role or your next great hire.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div className="hiw__card" key={step.id}>
              <div className="hiw__card-top">
                <span className="hiw__icon">{step.icon}</span>
                <span className="hiw__step-num">0{i + 1}</span>
              </div>
              <h3 className="hiw__card-title">{step.title}</h3>
              <p className="hiw__card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
