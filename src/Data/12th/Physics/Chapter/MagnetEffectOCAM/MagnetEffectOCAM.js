const magnetismMCQs = [
    {
      id: 1,
      question: "What is the SI unit of magnetic field?",
      answers: [
        { text: "Tesla", correct: true },
        { text: "Watt", correct: false },
        { text: "Henry", correct: false },
        { text: "Ohm", correct: false }
      ]
    },
    {
      id: 2,
      question: "A current-carrying conductor produces a magnetic field...",
      answers: [
        { text: "Outside the conductor", correct: true },
        { text: "Only inside the conductor", correct: false },
        { text: "At the ends of the conductor", correct: false },
        { text: "Inside and outside the conductor", correct: false }
      ]
    },
    {
      id: 3,
      question: "What is the direction of the magnetic field lines around a straight current-carrying conductor?",
      answers: [
        { text: "Clockwise", correct: false },
        { text: "Counterclockwise", correct: false },
        { text: "Radial outward", correct: false },
        { text: "Circular, concentric with the conductor", correct: true }
      ]
    },
    {
      id: 4,
      question: "What is Ampere's law used to calculate?",
      answers: [
        { text: "Electric field around a conductor", correct: false },
        { text: "Magnetic field around a conductor", correct: true },
        { text: "Electric potential difference", correct: false },
        { text: "Resistance of a conductor", correct: false }
      ]
    },
    {
      id: 5,
      question: "A solenoid is used to...",
      answers: [
        { text: "Generate electric current", correct: false },
        { text: "Generate magnetic field", correct: true },
        { text: "Store electrical energy", correct: false },
        { text: "Convert mechanical energy to electrical energy", correct: false }
      ]
    },
    {
      id: 6,
      question: "What is the purpose of a galvanometer?",
      answers: [
        { text: "To measure current", correct: true },
        { text: "To measure voltage", correct: false },
        { text: "To store energy", correct: false },
        { text: "To regulate current", correct: false }
      ]
    },
    {
      id: 7,
      question: "What is the effect of placing a ferromagnetic material inside a solenoid?",
      answers: [
        { text: "Decreases the magnetic field", correct: false },
        { text: "Increases the magnetic field", correct: true },
        { text: "Has no effect on the magnetic field", correct: false },
        { text: "Reverses the direction of the magnetic field", correct: false }
      ]
    },
    {
      id: 8,
      question: "The magnetic field inside a long solenoid is...",
      answers: [
        { text: "Zero", correct: false },
        { text: "Uniform", correct: true },
        { text: "Varying", correct: false },
        { text: "Dependent on the battery voltage", correct: false }
      ]
    },
    {
      id: 9,
      question: "The magnetic field lines inside a bar magnet...",
      answers: [
        { text: "Move from south to north", correct: false },
        { text: "Move from north to south", correct: true },
        { text: "Are stationary", correct: false },
        { text: "Move in a random pattern", correct: false }
      ]
    },
    {
      id: 10,
      question: "What is the direction of the magnetic field inside a solenoid carrying current?",
      answers: [
        { text: "Clockwise", correct: false },
        { text: "Counterclockwise", correct: false },
        { text: "Radial outward", correct: false },
        { text: "Along the axis of the solenoid", correct: true }
      ]
    },
    {
      id: 11,
      question: "What is the purpose of a magnetic compass?",
      answers: [
        { text: "To measure electric current", correct: false },
        { text: "To measure voltage", correct: false },
        { text: "To measure magnetic field", correct: false },
        { text: "To determine the direction of the Earth's magnetic field", correct: true }
      ]
    },
    {
      id: 12,
      question: "What is the effect of increasing the current flowing through a conductor on its magnetic field?",
      answers: [
        { text: "Decreases the magnetic field", correct: false },
        { text: "Increases the magnetic field", correct: true },
        { text: "Has no effect on the magnetic field", correct: false },
        { text: "Reverses the direction of the magnetic field", correct: false }
      ]
    },
    {
      id: 13,
      question: "The strength of the magnetic field produced by a current-carrying conductor depends on...",
      answers: [
        { text: "The material of the conductor", correct: false },
        { text: "The length of the conductor", correct: false },
        { text: "The cross-sectional area of the conductor", correct: false },
        { text: "All of the above", correct: true }
      ]
    },
    {
      id: 14,
      question: "What is the relation between current, number of turns, and magnetic field inside a solenoid?",
      answers: [
        { text: "B = μ₀NI", correct: true },
        { text: "B = μ₀N/I", correct: false },
        { text: "B = μ₀I/N", correct: false },
        { text: "B = μ₀N×I", correct: false }
      ]
    },
    {
      id: 15,
      question: "A charged particle moving in a magnetic field experiences a force that is...",
      answers: [
        { text: "Parallel to the magnetic field", correct: false },
        { text: "Antiparallel to the magnetic field", correct: false },
        { text: "Perpendicular to both the magnetic field and the particle's velocity", correct: true },
        { text: "In the direction of the particle's velocity", correct: false }
      ]
    },
    {
      id: 16,
      question: "The SI unit of magnetic dipole moment is...",
      answers: [
        { text: "Coulomb", correct: false },
        { text: "Ampere", correct: false },
        { text: "Joule", correct: false },
        { text: "Ampere-meter²", correct: true }
      ]
    },
    {
      id: 17,
      question: "What is the force experienced by a charged particle moving perpendicular to a magnetic field?",
      answers: [
        { text: "No force", correct: false },
        { text: "Maximum force", correct: true },
        { text: "Minimum force", correct: false },
        { text: "Depends on the particle's charge", correct: false }
      ]
    },
    {
      id: 18,
      question: "What is the direction of the force experienced by a positively charged particle moving perpendicular to a magnetic field?",
      answers: [
        { text: "Parallel to the magnetic field", correct: false },
        { text: "Antiparallel to the magnetic field", correct: false },
        { text: "Perpendicular to both the magnetic field and the particle's velocity", correct: true },
        { text: "In the direction of the particle's velocity", correct: false }
      ]
    },
    {
      id: 19,
      question: "What is the principle behind an electric motor?",
      answers: [
        { text: "Magnetic induction", correct: true },
        { text: "Static electricity", correct: false },
        { text: "Magnetic repulsion", correct: false },
        { text: "Gravitational pull", correct: false }
      ]
    },
    {
      id: 20,
      question: "What is the principle behind an electric generator?",
      answers: [
        { text: "Magnetic induction", correct: true },
        { text: "Static electricity", correct: false },
        { text: "Magnetic repulsion", correct: false },
        { text: "Gravitational pull", correct: false }
      ]
    },
    {
      id: 21,
      question: "What is the purpose of a transformer?",
      answers: [
        { text: "To measure current", correct: false },
        { text: "To measure voltage", correct: false },
        { text: "To convert electrical energy to mechanical energy", correct: false },
        { text: "To change the voltage of an alternating current", correct: true }
      ]
    },
    {
      id: 22,
      question: "What is the relation between the number of turns in the primary and secondary coils of a transformer?",
      answers: [
        { text: "Np = Ns", correct: false },
        { text: "Np/Ns = Vp/Vs", correct: true },
        { text: "Np = Vs", correct: false },
        { text: "Ns/Np = Is/Ip", correct: false }
      ]
    },
    {
      id: 23,
      question: "A bar magnet is cut into two equal halves. What happens to the magnetic poles?",
      answers: [
        { text: "Each half becomes a single pole magnet", correct: false },
        { text: "Each half has two poles", correct: true },
        { text: "The magnet loses its magnetism", correct: false },
        { text: "The magnetic poles reverse", correct: false }
      ]
    },
    {
      id: 24,
      question: "What is the angle between the magnetic field lines and the tangent to the field line at a point?",
      answers: [
        { text: "90 degrees", correct: true },
        { text: "0 degrees", correct: false },
        { text: "45 degrees", correct: false },
        { text: "180 degrees", correct: false }
      ]
    },
    {
      id: 25,
      question: "What is the purpose of a magnetic material in a transformer core?",
      answers: [
        { text: "To generate electrical energy", correct: false },
        { text: "To amplify electrical signals", correct: false },
        { text: "To enhance the magnetic field", correct: true },
        { text: "To regulate voltage", correct: false }
      ]
    },
  ];

  export default magnetismMCQs

  