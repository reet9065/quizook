const currentElectricityMCQs = [
    {
      id: 1,
      question: "What is the SI unit of electric current?",
      answers: [
        { text: "Volt", correct: false },
        { text: "Watt", correct: false },
        { text: "Ampere", correct: true },
        { text: "Ohm", correct: false }
      ]
    },
    {
      id: 2,
      question: "What is Ohm's law?",
      answers: [
        { text: "V = IR", correct: true },
        { text: "P = IV", correct: false },
        { text: "I = VR", correct: false },
        { text: "R = VI", correct: false }
      ]
    },
    {
      id: 3,
      question: "The resistance of a conductor depends on its...",
      answers: [
        { text: "Length", correct: true },
        { text: "Cross-sectional area", correct: true },
        { text: "Temperature", correct: true },
        { text: "Material", correct: true }
      ]
    },
    {
      id: 4,
      question: "The resistivity of a material is a measure of its...",
      answers: [
        { text: "Length", correct: false },
        { text: "Cross-sectional area", correct: false },
        { text: "Temperature", correct: false },
        { text: "Ability to resist current flow", correct: true }
      ]
    },
    {
      id: 5,
      question: "When does a metallic conductor become a superconductor?",
      answers: [
        { text: "At extremely high temperatures", correct: false },
        { text: "At extremely low temperatures", correct: true },
        { text: "When exposed to strong magnetic fields", correct: true },
        { text: "When the length of the conductor is reduced", correct: false }
      ]
    },
    {
      id: 6,
      question: "Kirchhoff's first law is also known as...",
      answers: [
        { text: "Faraday's law", correct: false },
        { text: "Lenz's law", correct: false },
        { text: "Ohm's law", correct: false },
        { text: "The law of conservation of charge", correct: true }
      ]
    },
    {
      id: 7,
      question: "Which of the following materials has the highest resistivity?",
      answers: [
        { text: "Copper", correct: false },
        { text: "Silver", correct: false },
        { text: "Aluminum", correct: false },
        { text: "Rubber", correct: true }
      ]
    },
    {
      id: 8,
      question: "In a series circuit, the current...",
      answers: [
        { text: "Remains the same throughout", correct: true },
        { text: "Varies from resistor to resistor", correct: false },
        { text: "Is zero", correct: false },
        { text: "Depends on the battery voltage", correct: false }
      ]
    },
    {
      id: 9,
      question: "The drift velocity of charge carriers in a conductor is...",
      answers: [
        { text: "Very high", correct: false },
        { text: "Very low", correct: true },
        { text: "Equal to the speed of light", correct: false },
        { text: "Constant", correct: false }
      ]
    },
    {
      id: 10,
      question: "When resistors are connected in parallel, the total resistance...",
      answers: [
        { text: "Increases", correct: false },
        { text: "Decreases", correct: true },
        { text: "Remains the same", correct: false },
        { text: "Depends on the battery voltage", correct: false }
      ]
    },
    {
      id: 11,
      question: "A high resistance in ammeter causes...",
      answers: [
        { text: "The ammeter to show lower readings", correct: false },
        { text: "The ammeter to show higher readings", correct: true },
        { text: "No change in ammeter readings", correct: false },
        { text: "The ammeter to malfunction", correct: false }
      ]
    },
    {
      id: 12,
      question: "A low resistance in voltmeter causes...",
      answers: [
        { text: "The voltmeter to show lower readings", correct: false },
        { text: "The voltmeter to show higher readings", correct: true },
        { text: "No change in voltmeter readings", correct: false },
        { text: "The voltmeter to malfunction", correct: false }
      ]
    },
    {
      id: 13,
      question: "The energy loss in a resistor is mainly dissipated in the form of...",
      answers: [
        { text: "Heat", correct: true },
        { text: "Light", correct: false },
        { text: "Sound", correct: false },
        { text: "Mechanical energy", correct: false }
      ]
    },
    {
      id: 14,
      question: "The unit of electric power is...",
      answers: [
        { text: "Watt", correct: true },
        { text: "Volt", correct: false },
        { text: "Ampere", correct: false },
        { text: "Ohm", correct: false }
      ]
    },
    {
      id: 15,
      question: "What is the equivalent resistance of three resistors with resistances R₁, R₂, and R₃ when connected in series?",
      answers: [
        { text: "R₁ + R₂ + R₃", correct: true },
        { text: "1/(1/R₁ + 1/R₂ + 1/R₃)", correct: false },
        { text: "R₁R₂R₃/(R₁ + R₂ + R₃)", correct: false },
        { text: "√(R₁R₂R₃)", correct: false }
      ]
    },
    {
      id: 16,
      question: "A conductor has a resistance of 5 ohms. What is the resistance when its length is doubled, and its cross-sectional area is halved?",
      answers: [
        { text: "10 ohms", correct: false },
        { text: "20 ohms", correct: true },
        { text: "5/2 ohms", correct: false },
        { text: "2.5 ohms", correct: false }
      ]
    },
    {
      id: 17,
      question: "Which of the following statements about resistivity is correct?",
      answers: [
        { text: "It increases with temperature for all materials", correct: false },
        { text: "It is a measure of how much a material resists current flow", correct: true },
        { text: "It is the same for all materials", correct: false },
        { text: "It is independent of temperature", correct: false }
      ]
    },
    {
      id: 18,
      question: "When a resistor is connected to a battery, the direction of conventional current is...",
      answers: [
        { text: "From positive to negative terminal of the battery", correct: true },
        { text: "From negative to positive terminal of the battery", correct: false },
        { text: "In the same direction as electron flow", correct: false },
        { text: "Random", correct: false }
      ]
    },
    {
      id: 19,
      question: "The current-voltage characteristic of an ohmic conductor is...",
      answers: [
        { text: "A straight line passing through the origin", correct: true },
        { text: "A curve", correct: false },
        { text: "A vertical line", correct: false },
        { text: "A horizontal line", correct: false }
      ]
    },
    {
      id: 20,
      question: "What is the relation between current, voltage, and resistance according to Ohm's law?",
      answers: [
        { text: "I = V/R", correct: true },
        { text: "V = IR", correct: false },
        { text: "R = IV", correct: false },
        { text: "I = R/V", correct: false }
      ]
    },
    {
      id: 21,
      question: "The equivalent resistance of three resistors with resistances R₁, R₂, and R₃ when connected in parallel is...",
      answers: [
        { text: "R₁ + R₂ + R₃", correct: false },
        { text: "1/(1/R₁ + 1/R₂ + 1/R₃)", correct: true },
        { text: "R₁R₂R₃/(R₁ + R₂ + R₃)", correct: false },
        { text: "√(R₁R₂R₃)", correct: false }
      ]
    },
    {
      id: 22,
      question: "Which of the following statements about electric power is correct?",
      answers: [
        { text: "Power is the rate at which charge flows", correct: false },
        { text: "Power is directly proportional to current", correct: true },
        { text: "Power is inversely proportional to voltage", correct: false },
        { text: "Power is the product of voltage and resistance", correct: false }
      ]
    },
    {
      id: 23,
      question: "What is the purpose of a rheostat in a circuit?",
      answers: [
        { text: "To measure current", correct: false },
        { text: "To measure voltage", correct: false },
        { text: "To regulate current by changing resistance", correct: true },
        { text: "To regulate voltage by changing resistance", correct: false }
      ]
    },
    {
      id: 24,
      question: "Which of the following materials is a good conductor of electricity?",
      answers: [
        { text: "Glass", correct: false },
        { text: "Plastic", correct: false },
        { text: "Copper", correct: true },
        { text: "Rubber", correct: false }
      ]
    },
    {
      id: 25,
      question: "What is the direction of conventional current?",
      answers: [
        { text: "From negative to positive", correct: true },
        { text: "From positive to negative", correct: false },
        { text: "From electron-rich to electron-deficient", correct: false },
        { text: "From electron-deficient to electron-rich", correct: false }
      ]
    },
    
  ];
  
  export default currentElectricityMCQs