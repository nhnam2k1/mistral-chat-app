# Mistral Chat App (Next.js + Public API)
A simple chat interface built with Next.js that connects to the Mistral public API for AI responses.

## Features
- Clean and minimal chat UI  
- Modular structure using separate components  
- Works with any Mistral model  

## Tech Stack
- Next.js 14+  
- JavaScript  

## Setup

1. **Clone the project**
git clone https://github.com/your-username/mistral-chat.git
cd mistral-chat

2. **Install dependencies**
npm install

3. **Create a .env.local file**
MISTRAL_API_KEY=your_mistral_api_key_here
MISTRAL_API_URL=https://api.mistral.ai/v1/chat/completions
MISTRAL_MODEL=mistral-large-latest

4. **Run the app**
npm run dev

5. **Open in browser**
http://localhost:3000