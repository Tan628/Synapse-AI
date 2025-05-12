🤖 Synapse-AI Chatbot

A conversational web application powered by the MERN stack and Gemini AI, designed to automate customer support and deliver real-time Q&A with natural-language understanding.

Project Description
Synapse-AI is an AI-driven chatbot built on MongoDB, Express, React, and Node.js. By integrating Google’s Gemini AI model, Synapse-AI can parse user intents, maintain context over long conversations, and provide accurate, contextually relevant responses.
Key benefits and use cases include:

Customer Support Automation: Reduce human workload by handling FAQs and basic troubleshooting.

Real-Time Q&A: Instant, 24/7 availability for user inquiries.

Knowledge Base Integration: Seamlessly pulls data from your docs or product manuals.

Scalable & Secure: Built for production with JWT-based auth, rate limiting, and horizontal scaling.

📚 Table of Contents
Features

System Architecture

Tech Stack

Project Structure

Installation

Screenshots

Usage

Contributing

Authors

License

Features
🔒 Secure Authentication – OTP email login via Nodemailer + JWT sessions

💬 Real-time Chat – WebSocket-powered live messaging

💾 Persistent History – MongoDB stores full conversation logs

📈 Scalable Design – Horizontal scaling ready, stateless services

🤖 Gemini AI Integration – Contextual, natural-language responses

📱 Responsive UI – Works seamlessly on desktop and mobile

System Architecture
Synapse-AI follows a classic client-server pattern:

css
Copy
Edit
[React Frontend]  ↔  [Express/Node.js API]  ↔  [MongoDB Atlas]
                             ↓
                       [Gemini AI API]

Tech Stack
Frontend: React, Vite, Tailwind CSS, React Router

Backend: Node.js, Express, Axios, Nodemailer

Database: MongoDB Atlas

AI/ML: Google Gemini AI (via REST API)
