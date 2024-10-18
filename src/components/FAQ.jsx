import './reviews.css';
import './FAQ.css';
import { useState } from 'react';

export default function FAQ() {
  const [selected, setSelected] = useState(null);
  const [rotated, setRotated] = useState(null); // State for rotation

  const questions = [
    'What types of salads are available on JustDiet?',
    'Can I customize my salad orders based on dietary preferences?',
    'Is delivery available to my gym or workplace?',
    'How do I manage or cancel my subscription plan?',
  ];

  const answers = [
    'We offer a variety of salads, including non-veg chicken salads, veg salads, and fruit salads, all made fresh daily to suit your preferences.',
    'Yes, you can customize your salad orders according to your dietary preferences. Just let us know your requirements!',
    'Yes, we provide delivery to gyms and workplaces. Check our delivery options for more details.',
    'You can manage or cancel your subscription plan directly through your account settings on our website.',
  ];

  const handleToggle = (id) => {
    setSelected(selected === id ? null : id);
    setRotated(selected === id ? null : id); // Set the rotation state immediately
  };

  return (
    <div className="FAQ-section" id="FAQ">
      <img src="./src/assets/faq-bg.webp" alt="FAQ bg" className="faq-bg" />
      <img
        src="./src/assets/faq-decor.webp"
        alt="FAQ Decor"
        className="faq-decor1"
      />
      <p className="fp-heading-style">FAQ</p>
      <img
        src="./src/assets/faq-decor1.webp"
        alt="FAQ Decor"
        className="faq-decor"
      />
      <ul id="accordian">
        {questions.map((question, index) => (
          <li key={index}>
            <label
              htmlFor={`question-${index}`}
              onClick={() => handleToggle(`question-${index}`)}
            >
              {question}
              <span
                className={rotated === `question-${index}` ? 'checked' : ''}
              >
                {selected === `question-${index}` ? '-' : '+'}
              </span>
            </label>
            <input
              type="radio"
              name="accordian"
              id={`question-${index}`}
              checked={selected === `question-${index}`}
              readOnly
            />
            <div
              className="content"
              style={{
                display: selected === `question-${index}` ? 'block' : 'none',
              }}
            >
              <p>{answers[index]}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
