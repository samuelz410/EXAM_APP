export const data = [
  // --- Original 5 (Updated answers to string keys) ---
  {
    question: "What is the primary purpose of React's useState hook?",
    option1: "To fetch data from an external REST API.",
    option2: "To directly manipulate the browser's HTML DOM elements.",
    option3: "To add and manage local state inside a functional component.",
    option4: "To automatically deploy the application to Vercel or Netlify.",
    answer: "option3"
  },
  {
    question: "Which CSS framework uses utility classes like flex, pt-4, and text-center directly in markup?",
    option1: "Bootstrap",
    option2: "Tailwind CSS",
    option3: "Sass",
    option4: "Styled Components",
    answer: "option2"
  },
  {
    question: "In modern JavaScript (ES6+), which method returns a new array transformed by a function?",
    option1: ".forEach()",
    option2: ".filter()",
    option3: ".reduce()",
    option4: ".map()",
    answer: "option4"
  },
  {
    question: "How does Next.js App Router handle page routing by default?",
    option1: "By configuring routes manually inside a routes.js file.",
    option2: "By automatically creating routes based on the folder structure in the app directory.",
    option3: "By registering each route in local storage.",
    option4: "By writing custom Express.js code for every page.",
    answer: "option2"
  },
  {
    question: "What does a 200 HTTP status code indicate when making an API request?",
    option1: "Bad Request",
    option2: "Unauthorized Access",
    option3: "Success (OK)",
    option4: "Internal Server Error",
    answer: "option3"
  },

  // --- 25 Additional Questions ---
  {
    question: "Which React hook is used to run side effects like fetching data or setting timers?",
    option1: "useReducer",
    option2: "useEffect",
    option3: "useCallback",
    option4: "useMemo",
    answer: "option2"
  },
  {
    question: "What is the Virtual DOM in React?",
    option1: "A direct link to the browser's real DOM elements.",
    option2: "A lightweight in-memory representation of the real DOM.",
    option3: "A third-party database used for storing React components.",
    option4: "A special CSS engine used for rendering animations.",
    answer: "option2"
  },
  {
    question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
    option1: "var",
    option2: "const",
    option3: "let",
    option4: "static",
    answer: "option3"
  },
  {
    question: "What is the purpose of the JSX syntax in React?",
    option1: "To write SQL queries inside JavaScript files.",
    option2: "To write HTML-like markup directly inside JavaScript code.",
    option3: "To style components using binary CSS instructions.",
    option4: "To manage database migrations automatically.",
    answer: "option2"
  },
  {
    question: "What does the CSS property 'display: flex' do?",
    option1: "Enables a 1D flexbox layout for aligning elements in rows or columns.",
    option2: "Makes an element invisible on mobile devices.",
    option3: "Turns text into italic font style automatically.",
    option4: "Loads custom SVG vector images into the background.",
    answer: "option1"
  },
  {
    question: "In JavaScript, what does the strictly equal operator (===) compare?",
    option1: "Values only, ignoring data types.",
    option2: "Both values and data types without implicit coercion.",
    option3: "Only memory references of objects.",
    option4: "Variable names in the global scope.",
    answer: "option2"
  },
  {
    question: "Which Tailwind CSS class applies a dark background color?",
    option1: "color-dark",
    option2: "bg-black",
    option3: "background-dark-100",
    option4: "dark-mode-enable",
    answer: "option2"
  },
  {
    question: "In React, why are 'keys' important when rendering lists using .map()?",
    option1: "They encrypt list item data for security.",
    option2: "They help React uniquely identify which items changed, were added, or removed.",
    option3: "They automatically apply CSS hover effects to each list item.",
    option4: "They sort array elements in alphabetical order.",
    answer: "option2"
  },
  {
    question: "What is Git primarily used for in software development?",
    option1: "Compiling JavaScript into machine code.",
    option2: "Hosting web application databases.",
    option3: "Distributed version control and tracking code changes.",
    option4: "Designing UI prototypes for mobile devices.",
    answer: "option3"
  },
  {
    question: "Which command initialises a new Node.js project and creates a package.json file?",
    option1: "npm start",
    option2: "npm init -y",
    option3: "git init",
    option4: "npx create-react-app",
    answer: "option2"
  },
  {
    question: "What does the JavaScript method Array.prototype.filter() return?",
    option1: "A new array containing only elements that satisfy the test condition.",
    option2: "The first single element that passes the test condition.",
    option3: "A boolean indicating if at least one item passed.",
    option4: "The modified original array in place.",
    answer: "option1"
  },
  {
    question: "What is the default port for local development in Vite?",
    option1: "3000",
    option2: "8080",
    option3: "5173",
    option4: "5000",
    answer: "option3"
  },
  {
    question: "What does the 'async' keyword in front of a JavaScript function do?",
    option1: "Forces the function to execute synchronously.",
    option2: "Makes the function automatically return a Promise.",
    option3: "Prevents the function from throwing any runtime errors.",
    option4: "Restricts the function to run only inside a web worker.",
    answer: "option2"
  },
  {
    question: "Which HTTP method is typically used to update an existing resource on a server?",
    option1: "GET",
    option2: "POST",
    option3: "PUT / PATCH",
    option4: "DELETE",
    answer: "option3"
  },
  {
    question: "In Tailwind CSS, which class sets flexbox child items to spread across available space?",
    option1: "flex-auto",
    option2: "flex-1",
    option3: "grid-cols-full",
    option4: "auto-grow",
    answer: "option2"
  },
  {
    question: "What does props stand for in React?",
    option1: "Properties passed down from a parent component to a child component.",
    option2: "Procedures used to update global component state.",
    option3: "Prototypical Object Structuring.",
    option4: "Programmed Response State.",
    answer: "option1"
  },
  {
    question: "Which JavaScript function converts a JSON string into a native JavaScript object?",
    option1: "JSON.stringify()",
    option2: "JSON.parse()",
    option3: "Object.assign()",
    option4: "Array.fromJSON()",
    answer: "option2"
  },
  {
    question: "What is TypeScript?",
    option1: "A completely new browser script language replacing JavaScript.",
    option2: "A strongly typed superset of JavaScript that compiles to plain JavaScript.",
    option3: "A database query language designed for React apps.",
    option4: "A CSS preprocessor similar to Sass.",
    answer: "option2"
  },
  {
    question: "In React, what happens when a component's state or props change?",
    option1: "The browser reloads the entire HTML page.",
    option2: "The component automatically re-renders.",
    option3: "The browser clears local storage.",
    option4: "The component gets unmounted permanently.",
    answer: "option2"
  },
  {
    question: "Which HTTP status code signifies that a requested resource was Not Found (404)?",
    option1: "500",
    option2: "401",
    option3: "404",
    option4: "302",
    answer: "option3"
  },
  {
    question: "Which CSS layout model is best suited for 2D two-dimensional (rows AND columns) grid layouts?",
    option1: "Flexbox",
    option2: "CSS Grid",
    option3: "Float layout",
    option4: "Inline-block position",
    answer: "option2"
  },
  {
    question: "What is the purpose of useRef hook in React?",
    option1: "To trigger component re-renders on value updates.",
    option2: "To persist mutable values across renders without causing a re-render or access DOM nodes directly.",
    option3: "To manage global Redux store state.",
    option4: "To handle async HTTP fetch requests automatically.",
    answer: "option2"
  },
  {
    question: "In JavaScript, what value is returned by default if a function has no explicit return statement?",
    option1: "null",
    option2: "0",
    option3: "undefined",
    option4: "false",
    answer: "option3"
  },
  {
    question: "Which npm command installs a package as a development dependency only?",
    option1: "npm install <package> --save-dev",
    option2: "npm install <package> --global",
    option3: "npm run dev <package>",
    option4: "npm build <package>",
    answer: "option1"
  },
  {
    question: "What does CORS stand for in web web development?",
    option1: "Cross-Origin Resource Sharing",
    option2: "Client-Oriented Routing System",
    option3: "Custom Object Response Service",
    option4: "Central Open Routing Standard",
    answer: "option1"
  }
];