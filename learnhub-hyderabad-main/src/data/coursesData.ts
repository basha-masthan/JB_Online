import {
  Zap,
  FlaskConical,
  Code2,
  Radio,
  Terminal,
  Cog,
  Building2,
  Hammer,
} from "lucide-react";

export const coursesData = {
  "eee": {
    name: "Electrical & Electronics Engineering",
    short: "EEE",
    icon: Zap,
    description: "Master the principles of electricity, electronics, and electromagnetism. Our online tuition covers everything from basic circuit theory to advanced power systems.",
    longDescription: "Our Electrical and Electronics Engineering (EEE) online tuition program is designed for students who want to excel in their university exams and gain practical knowledge. We focus on core subjects like Network Theory, Control Systems, Power Electronics, and Electrical Machines. Whether you are looking for home tuition in Hyderabad or a flexible online learning experience, our expert tutors simplify complex electromagnetic theories and mathematical models.",
    subjects: ["Network Analysis", "Control Systems", "Electrical Machines", "Power Systems", "Digital Electronics", "Microprocessors"],
    outcomes: ["Design and analyze electrical circuits", "Understand power generation and distribution", "Program microcontrollers for embedded systems"],
    seoTitle: "Best EEE Online Tuition & Home Tuition in Hyderabad",
    seoDescription: "Join JB Online Tuitions for top-rated Electrical & Electronics Engineering (EEE) tuition. Expert tutors for all subjects. Online and home tuitions available."
  },
  "chemical": {
    name: "Chemical Engineering",
    short: "Chemical",
    icon: FlaskConical,
    description: "Learn the art of converting raw materials into useful products through chemical processes. Expert guidance for unit operations and thermodynamics.",
    longDescription: "Chemical Engineering is a diverse field, and our online tuition helps you master the fundamentals of Mass Transfer, Heat Transfer, and Chemical Reaction Engineering. We provide specialized coaching for students in Hyderabad and beyond, ensuring a deep understanding of process control and thermodynamics. Our tutors use real-world examples to explain the physics and chemistry behind industrial processes.",
    subjects: ["Thermodynamics", "Mass Transfer", "Heat Transfer", "Fluid Mechanics", "Reaction Engineering", "Process Control"],
    outcomes: ["Understand chemical plant design", "Optimize industrial chemical processes", "Master thermodynamics and fluid dynamics"],
    seoTitle: "Expert Chemical Engineering Online Tuition | JB Online",
    seoDescription: "Get high-quality Chemical Engineering online tuition. Learn unit operations, thermodynamics, and more from experienced tutors. Home tuitions in Hyderabad."
  },
  "cse": {
    name: "Computer Science Engineering",
    short: "CSE",
    icon: Code2,
    description: "From algorithms to full-stack development. Our online tuition makes coding and computer architecture easy for everyone.",
    longDescription: "In the rapidly evolving world of Computer Science, our online tuition program keeps you ahead of the curve. We cover Data Structures, Algorithms, Operating Systems, and Database Management Systems. We also offer practical coding sessions in Java, C++, and Web Technologies. If you're looking for the best CSE home tuition in Hyderabad, our expert faculty provides personalized attention to help you ace your exams and interviews.",
    subjects: ["Data Structures", "Algorithms", "Operating Systems", "Computer Architecture", "Database Management", "Computer Networks"],
    outcomes: ["Write efficient algorithms", "Understand computer hardware and software interaction", "Build scalable database applications"],
    seoTitle: "Top Computer Science (CSE) Online Tuition - JB Online Tuitions",
    seoDescription: "Master CSE subjects with our expert online tuition. Learn Data Structures, Algorithms, and coding. Best home tuition for CSE in Hyderabad."
  },
  "ece": {
    name: "Electronics & Communication",
    short: "ECE",
    icon: Radio,
    description: "Explore the world of communication systems and VLSI design. Online tuition for signal processing and digital communication.",
    longDescription: "Our Electronics & Communication Engineering (ECE) online tuition focuses on the core pillars of communication and electronics. From Analog Circuits to VLSI Design and Signal Processing, our tutors break down complex mathematical transforms into understandable concepts. We provide comprehensive study materials and regular tests for students in Hyderabad seeking home tuitions or online coaching.",
    subjects: ["Signal Processing", "Digital Communication", "VLSI Design", "Analog Circuits", "Electromagnetic Waves", "Microcontrollers"],
    outcomes: ["Design communication systems", "Analyze signals and systems", "Understand semiconductor device physics"],
    seoTitle: "ECE Online Tuition | Electronics & Communication Engineering",
    seoDescription: "Join JB Online Tuitions for ECE online coaching. Expert help for VLSI, Signal Processing, and Communication subjects. Home tuition available."
  },
  "programming": {
    name: "C & Python (Open for Everyone)",
    short: "C & Python",
    icon: Terminal,
    description: "The perfect starting point for your tech journey. Learn the two most popular programming languages with expert guidance.",
    longDescription: "Coding is a superpower, and our C & Python online tuition is open to students of all branches and backgrounds. We start from the absolute basics and take you to an intermediate level where you can build your own projects. Our curriculum focuses on logic building, data structures, and practical application. Available as both online tuition and home tuition in Hyderabad.",
    subjects: ["Basic Logic & Syntax", "Functions & Modules", "Data Structures in Python", "Memory Management in C", "File Handling", "Object-Oriented Programming"],
    outcomes: ["Build logic for any programming language", "Write clean and efficient code", "Create basic software and scripts"],
    seoTitle: "Learn C & Python Online | Best Programming Tuition",
    seoDescription: "Start your coding journey with our C & Python online tuition. Easy-to-learn format for beginners. Home tuitions available in Hyderabad."
  },
  "mechanical": {
    name: "Mechanical Engineering",
    short: "Mechanical",
    icon: Cog,
    description: "Understand the mechanics of machines and thermal systems. Online tuition for Dynamics, Mechanics, and Design.",
    longDescription: "Mechanical Engineering requires strong visualization and mathematical skills. Our online tuition covers Engineering Mechanics, Thermodynamics, Strength of Materials, and Machine Design. Our expert tutors use 3D models and animations to help you understand mechanical systems. We offer the best mechanical engineering home tuition in Hyderabad with a focus on conceptual clarity.",
    subjects: ["Engineering Mechanics", "Thermodynamics", "Strength of Materials", "Machine Design", "Fluid Mechanics", "Heat Transfer"],
    outcomes: ["Analyze mechanical structures", "Understand thermal and power cycles", "Design machine components"],
    seoTitle: "Best Mechanical Engineering Online Tuition | JB Online",
    seoDescription: "Expert online tuition for Mechanical Engineering subjects. Thermodynamics, Mechanics, and Design. Professional home tutors in Hyderabad."
  },
  "civil": {
    name: "Civil Engineering",
    short: "Civil",
    icon: Building2,
    description: "Build the world of tomorrow. Online tuition for Structural Analysis, Geotechnical Engineering, and Surveying.",
    longDescription: "Civil Engineering is the backbone of infrastructure. Our online tuition helps you master Structural Analysis, Surveying, and Geotechnical Engineering. We focus on both theoretical concepts and practical applications required for university exams. If you need a civil engineering tutor in Hyderabad for home tuition or prefer online classes, JB Online Tuitions is your best choice.",
    subjects: ["Structural Analysis", "Geotechnical Engineering", "Fluid Mechanics", "Surveying", "Building Materials", "Transportation Engineering"],
    outcomes: ["Design stable structures", "Understand soil mechanics", "Plan and survey construction sites"],
    seoTitle: "Civil Engineering Online Tuition & Home Tuition",
    seoDescription: "Master Civil Engineering with JB Online Tuitions. Expert coaching for Structural Analysis and Surveying. Home tuitions in Hyderabad."
  },
  "metallurgy": {
    name: "Metallurgical & Material Science",
    short: "Metallurgy",
    icon: Hammer,
    description: "Dive deep into the study of metals and materials. Online tuition for physical metallurgy and extractive processes.",
    longDescription: "Metallurgical engineering is a specialized field, and our online tuition provides the expert guidance you need. We cover Physical Metallurgy, Thermodynamics of Materials, and Extractive Metallurgy. Our tutors help you understand the relationship between material properties and their atomic structure. Available as personalized online tuition or home tuition in Hyderabad.",
    subjects: ["Physical Metallurgy", "Thermodynamics of Materials", "Extractive Metallurgy", "Mechanical Behavior of Materials", "Corrosion Engineering", "Material Characterization"],
    outcomes: ["Understand material properties", "Optimize metal extraction processes", "Design new materials for industrial use"],
    seoTitle: "Metallurgy & Material Science Online Tuition | JB Online",
    seoDescription: "Get specialized online tuition for Metallurgical Engineering. Learn physical metallurgy and thermodynamics. Expert tutors in Hyderabad."
  }
};
