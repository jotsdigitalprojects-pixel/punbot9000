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

-   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript that enhances developer productivity.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[@google/genai](https://www.npmjs.com/package/@google/genai)**: The official SDK for interacting with the Google Gemini API.

## 🚀 Getting Started

This project is designed to be run in an environment that supports ES modules directly in the browser, like Google AI Studio or a simple static server.

### Prerequisites

-   A Google Gemini API Key. You can get one from the [Google AI Studio](https://aistudio.google.com/app/apikey).

### Running the Project

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/punbot-9000.git
    ```
2.  **API Key Setup:** This application is configured to use an environment variable `process.env.API_KEY`. When deploying or running in a development environment, you must provide this key. In Google AI Studio, this is managed for you. For other environments, you may need to configure this variable.

3.  **Serve the files:** You can use a simple static file server to run this project locally. For example, using `serve`:
    ```sh
    npx serve .
    ```
    Then, open your browser to the provided local address.

## 🚢 Deployment

Ready to share your PunBot with the world? For a step-by-step guide on deploying this application using GitHub and Vercel, please see our detailed deployment roadmap:

**➡️ [DEPLOYMENT.MD](./DEPLOYMENT.md)**
