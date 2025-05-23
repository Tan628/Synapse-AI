# MERN Chatbot

A full-stack chatbot application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project features user authentication, email activation, password reset, and a simple chatbot interface.

---

## Features

- **User Registration & Login**  
  Secure authentication with JWT and password hashing.

- **Email Activation**  
  Users must activate their account via an email link (uses Gmail App Password).

- **Password Reset**  
  Users can reset their password via email.

- **Chatbot Interface**  
  Simple chat UI for interacting with the bot.

- **MongoDB Database**  
  Stores users and chat messages.

---

## Project Structure

```
MERN_Chatbot-main/
├── chatserver/         # Backend (Node.js, Express, MongoDB)
├── chat-frontend/      # Frontend (React)
```

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/Tan629-D3V/Synapse-AI
cd MERN_Chatbot-main
```

---

### 2. Backend Setup (`chatserver`)

1. Install dependencies:
    ```sh
    cd chatserver
    npm install
    ```

2. Create a `.env` file in `chatserver/` with the following:
    ```
    Db_url=your_mongodb_connection_string
    Password=your_gmail_app_password
    Activation_sec=your_activation_secret
    ```

    - **Db_url:** MongoDB connection string (local or Atlas)
    - **Password:** Gmail App Password (not your Gmail login password)
    - **Activation_sec:** Any secret string for account activation

3. Start the backend server:
    ```sh
    npm start
    ```
    The server runs on `http://localhost:5000` by default.

---

### 3. Frontend Setup (`chat-frontend`)

1. Install dependencies:
    ```sh
    cd ../chat-frontend
    npm install
    ```

2. Start the frontend development server:
    ```sh
    npm run dev
    ```
    The app runs on `http://localhost:5173` by default.

---

## Usage

- Register a new account.
- Check your email for an activation link.
- Log in after activation.
- Start chatting with the bot!

---

## Environment Variables

**Backend (`chatserver/.env`):**
```
Db_url=your_mongodb_connection_string
Password=your_gmail_app_password
Activation_sec=your_activation_secret
```

---

## Deployment

- **Backend:** Deploy to services like Render, Heroku, or any VPS.
- **Frontend:** Deploy to Vercel, Netlify, or similar.
- **Database:** Use MongoDB Atlas for cloud hosting.

---

## Security Notes

- Never commit your `.env` file or sensitive credentials.
- Always use app passwords for Gmail, not your real password.
- Use strong secrets for JWT and activation.

---

## License

This project is licensed under the MIT License.

---

## Credits

- Built with [MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React](https://react.dev/), and [Node.js](https://nodejs.org/).
