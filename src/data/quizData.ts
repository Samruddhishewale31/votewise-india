export const quizQuestions = [
  {
    id: 1,
    question: "What is the minimum age to be eligible to vote in India?",
    options: ["16", "18", "21", "25"],
    correctAnswer: 1, // index of option '18'
    explanation: "Indian citizens who are 18 years of age on the qualifying date (usually 1st January of the year) are eligible to register as voters."
  },
  {
    id: 2,
    question: "If you do not have your physical EPIC (Voter ID) card on polling day, can you still vote?",
    options: [
      "No, showing the physical EPIC card is mandatory.",
      "Yes, you can use any of the 12 ECI approved photo ID cards, like Aadhaar or PAN, if your name is on the roll.",
      "Yes, as long as you know your EPIC number.",
      "Yes, but you have to pay a small fine."
    ],
    correctAnswer: 1,
    explanation: "The Election Commission allows voters whose names are on the electoral roll to establish their identity using alternative approved documents."
  },
  {
    id: 3,
    question: "Which form do you need to fill to enroll as a new voter?",
    options: ["Form 6", "Form 7", "Form 8", "Form 4"],
    correctAnswer: 0,
    explanation: "Form 6 is used for the inclusion of names for first-time voters or voters shifting to another constituency."
  },
  {
    id: 4,
    question: "Are Electronic Voting Machines (EVMs) connected to the internet?",
    options: [
      "Yes, to transmit results in real-time.",
      "Yes, occasionally for updates.",
      "No, they are standalone devices with no wireless capabilities.",
      "Only the VVPAT machine is connected via Bluetooth."
    ],
    correctAnswer: 2,
    explanation: "EVMs used in Indian elections are totally standalone devices without any network capabilities (Wi-Fi, Bluetooth, or cellular), minimizing hacking risks."
  },
  {
    id: 5,
    question: "What does VVPAT stand for?",
    options: [
      " Voter Verified Paper Audit Trail",
      " Voting Validation Process And Testing",
      " Visual Voter Polling Audit Trail",
      " Verified Voting Paper Attached Trail"
    ],
    correctAnswer: 0,
    explanation: "VVPAT stands for Voter Verified Paper Audit Trail. It provides feedback to voters to verify that their vote cast went to the correct candidate."
  }
];

export function calculateReadinessScore(score: number, total: number) {
  const percentage = (score / total) * 100;
  
  if (percentage === 100) return {
    rating: "Excellent",
    message: "You are fully prepared for polling day! Don't forget to double check your booth location.",
    color: "text-tertiary",
    bg: "bg-tertiary/10"
  };
  
  if (percentage >= 60) return {
    rating: "Good",
    message: "You have a solid understanding, but might want to review a few specific details in the Learning Hub.",
    color: "text-primary",
    bg: "bg-primary/10"
  };

  return {
    rating: "Needs Review",
    message: "We recommend spending some time in the Learning Hub, especially reviewing EVMs and Registration steps.",
    color: "text-secondary",
    bg: "bg-secondary/10"
  };
}
