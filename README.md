# PunBot 9000 🤖

Welcome to the official repository for PunBot 9000, your friendly neighborhood AI comedian! This web application is designed to deliver a quick, clean, and cheerful joke with the simple press of a button.

> "Why don't scientists trust atoms? Because they make up everything!"

## ✨ About The Project

PunBot 9000 is a simple, beautifully designed single-page application whose sole mission is to generate family-friendly jokes and puns. It's a demonstration of how to integrate the powerful Google Gemini API into a modern web application to create engaging, dynamic content.

### Features

-   **One-Click Jokes:** Get a new, random, family-friendly joke every time you click the button.
-   **Sleek & Responsive UI:** A clean, modern interface that looks great on any device, from desktops to mobile phones.
-   **Loading & Error States:** A polished user experience that handles API loading and potential errors gracefully.
-   **Powered by Gemini:** Leverages the creativity of Google's Gemini model to generate unique and witty puns.

## 🛠️ Tech Stack

This project is built with a modern, efficient, and scalable frontend stack:

-   **[Vite](https://vitejs.dev/)**: A next-generation frontend tooling for fast development and optimized builds.
-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript that enhances developer productivity.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development (via CDN).
-   **[@google/genai](https://www.npmjs.com/package/@google/genai)**: The official SDK for interacting with the Google Gemini API.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (which includes npm) installed on your machine.
-   A Google Gemini API Key. You can get one from the [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Local Development

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/punbot-9000.git
    cd punbot-9000
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **API Key Setup:** Create a new file named `.env` in the root of your project folder and add your API key to it like this:
    ```
    VITE_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```
    The `.gitignore` file is already configured to prevent this file from being committed to GitHub.

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    Open your browser and navigate to the local URL provided (usually `http://localhost:5173`).

## 🚢 Deployment

Ready to share your PunBot with the world? For a step-by-step guide on deploying this application using GitHub and Vercel, please see our detailed deployment roadmap:

**➡️ [DEPLOYMENT.MD](./DEPLOYMENT.md)**