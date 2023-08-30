const mathMCQs = [
  {
    id: 1,
    question: "What is the derivative of the constant function f(x) = 5?",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "5", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 2,
    question: "What is the sum of the angles in a triangle?",
    answers: [
      { text: "180 degrees", correct: true },
      { text: "90 degrees", correct: false },
      { text: "270 degrees", correct: false },
      { text: "360 degrees", correct: false }
    ]
  },
  {
    id: 3,
    question: "What is the quadratic formula used to solve?",
    answers: [
      { text: "Linear equations", correct: false },
      { text: "Quadratic equations", correct: true },
      { text: "Cubic equations", correct: false },
      { text: "Exponential equations", correct: false }
    ]
  },
  {
    id: 4,
    question: "What is the value of sin(90 degrees)?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "-1", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 5,
    question: "What is the value of log₁₀(1)?",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "10", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 6,
    question: "What is the range of the function f(x) = x²?",
    answers: [
      { text: "All real numbers", correct: false },
      { text: "Positive real numbers", correct: true },
      { text: "Negative real numbers", correct: false },
      { text: "Non-negative real numbers", correct: false }
    ]
  },
  {
    id: 7,
    question: "What is the value of e², where 'e' is the base of natural logarithms?",
    answers: [
      { text: "2", correct: false },
      { text: "e", correct: false },
      { text: "4", correct: false },
      { text: "e²", correct: true }
    ]
  },
  {
    id: 8,
    question: "What is the integral of x³ with respect to x?",
    answers: [
      { text: "x⁴/4", correct: true },
      { text: "3x²", correct: false },
      { text: "4x³", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 9,
    question: "What is the domain of the function f(x) = √x?",
    answers: [
      { text: "All real numbers", correct: false },
      { text: "Positive real numbers", correct: true },
      { text: "Negative real numbers", correct: false },
      { text: "Non-negative real numbers", correct: true }
    ]
  },
  {
    id: 10,
    question: "What is the value of tan(45 degrees)?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "Undefined", correct: false },
      { text: "√2", correct: false }
    ]
  },
  {
    id: 11,
    question: "What is the slope-intercept form of a linear equation?",
    answers: [
      { text: "y = mx + b", correct: true },
      { text: "ax² + bx + c = 0", correct: false },
      { text: "y = a|x - h| + k", correct: false },
      { text: "y = e^x", correct: false }
    ]
  },
  {
    id: 12,
    question: "What is the value of cos(0 degrees)?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "-1", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 13,
    question: "What is the nth term of an arithmetic sequence?",
    answers: [
      { text: "aₙ = a₁ + (n - 1)d", correct: true },
      { text: "aₙ = a₁ x r^(n - 1)", correct: false },
      { text: "aₙ = a₁ + (n + 1)d", correct: false },
      { text: "aₙ = a₁ x r^n", correct: false }
    ]
  },
  {
    id: 14,
    question: "What is the value of ∫(2x + 3) dx?",
    answers: [
      { text: "x² + 3x + C", correct: false },
      { text: "x² + 3", correct: false },
      { text: "x² + 3x", correct: true },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 15,
    question: "What is the value of logₐ(a)", 
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "a", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 16,
    question: "Which type of sequence is defined by adding a fixed number to each term to get the next term?",
    answers: [
      { text: "Arithmetic sequence", correct: true },
      { text: "Geometric sequence", correct: false },
      { text: "Fibonacci sequence", correct: false },
      { text: "Recursive sequence", correct: false }
    ]
  },
  {
    id: 17,
    question: "What is the value of log₁₀(10,000)?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "4", correct: false },
      { text: "10", correct: false }
    ]
  },
  {
    id: 18,
    question: "Which trigonometric identity relates sine and cosine?",
    answers: [
      { text: "Pythagorean identity", correct: false },
      { text: "Reciprocal identity", correct: false },
      { text: "Co-function identity", correct: true },
      { text: "Double angle identity", correct: false }
    ]
  },
  {
    id: 19,
    question: "What is the derivative of sin(x) with respect to x?",
    answers: [
      { text: "cos(x)", correct: true },
      { text: "sin(x)", correct: false },
      { text: "-cos(x)", correct: false },
      { text: "-sin(x)", correct: false }
    ]
  },
  {
    id: 20,
    question: "Which type of triangle has all sides of equal length?",
    answers: [
      { text: "Scalene triangle", correct: false },
      { text: "Isosceles triangle", correct: false },
      { text: "Equilateral triangle", correct: true },
      { text: "Right triangle", correct: false }
    ]
  },
  {
    id: 21,
    question: "What is the fundamental theorem of calculus?",
    answers: [
      { text: "The derivative of a constant is zero.", correct: false },
      { text: "Integration by parts formula.", correct: false },
      { text: "The limit of a sum is the integral of a function.", correct: false },
      { text: "The integral of a function is the antiderivative of its derivative.", correct: true }
    ]
  },
  {
    id: 22,
    question: "What is the value of sec(0 degrees)?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "-1", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 23,
    question: "What is the equation of a circle with center (h, k) and radius r?",
    answers: [
      { text: "(x - h)² + (y - k)² = r", correct: true },
      { text: "(x + h)² + (y + k)² = r", correct: false },
      { text: "x² + y² = r", correct: false },
      { text: "x² - y² = r", correct: false }
    ]
  },
  {
    id: 24,
    question: "What is the value of ∫e^x dx?",
    answers: [
      { text: "e^x + C", correct: true },
      { text: "x^2 + C", correct: false },
      { text: "ln(x) + C", correct: false },
      { text: "Undefined", correct: false }
    ]
  },
  {
    id: 25,
    question: "What is the value of cot(π/4)?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "Undefined", correct: false },
      { text: "√2", correct: false }
    ]
  },
  ];

  
  export default mathMCQs