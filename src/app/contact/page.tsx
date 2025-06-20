'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <section className="py-20 px-6 bg-gray-950 text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          Whether you want to collaborate, ask something technical, or just say <i>salam</i> —
          drop me a message. I’ll read every word.
        </p>

        <form
          action="https://formspree.io/f/mjkrozjq"
          method="POST"
          className="space-y-4 text-left"
        >
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Muhammad Bin Nasir"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm">Your Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
