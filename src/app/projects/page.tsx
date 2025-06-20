'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Automated Quiz Generator',
    description: 'A C++ app that dynamically creates quizzes and exports them to PDF using hpdf.',
    tech: ['C++', 'OOP', 'PDF'],
  },
  {
    title: 'AI Note Summarizer (Desktop)',
    description: 'A desktop app using OCR and NLP to summarize typed and handwritten notes.',
    tech: ['Python', 'OpenCV', 'NLP'],
  },
  {
    title: 'AI Note Summarizer (Mobile)',
    description: 'A Kotlin Android app that summarizes typed notes and extracts key points.',
    tech: ['Kotlin', 'NLP', 'Android'],
  },
  {
    title: 'Class Management System',
    description: 'Python CLI system using CSV to manage students, grades, and admins.',
    tech: ['Python', 'CSV', 'CLI'],
  },
  {
    title: 'Library Management System',
    description: 'Full-stack PHP, JS, MySQL system to manage a digital library using XAMPP.',
    tech: ['PHP', 'MySQL', 'JS'],
  },
  {
    title: 'TruthLens Fake News Detector',
    description: 'Mobile app using ensemble ML + SHAP with DistilBERT for fake news detection.',
    tech: ['Kotlin', 'ML', 'SHAP'],
  },
  {
    title: 'ESP32 WiFi File Transfer',
    description: 'Custom interface on ESP32 to share files wirelessly between connected devices.',
    tech: ['C++', 'ESP32', 'Web'],
  },
  {
    title: 'Red-Blue Nim AI Game',
    description: 'Minimax-powered game with standard and misère mode and unbeatable AI bot.',
    tech: ['C++', 'AI', 'Game Theory'],
  },
  {
    title: 'Rebex FTP File Sharer',
    description: 'C# desktop app using Rebex Tiny Server to share files over network.',
    tech: ['C#', 'FTP', 'Desktop'],
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-400">These are my creations — part logic, part magic 🧙‍♂️</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-400/20 transition-all"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-700 px-2 py-1 rounded text-gray-100">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
