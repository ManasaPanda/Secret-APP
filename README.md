# 🔐 Secret-APP

**Secret-APP** is a fun and lightweight web application built with Node.js that lets users share confidential messages via a unique one-time-use link. Once the message is viewed, it is automatically deleted—perfect for sending sensitive information securely without worrying about permanent storage.

---

## ✨ Features

- 🔒 **One-Time Secret Links**: Messages are available only once. After viewing, the message is deleted forever.
- 🧹 **Auto-Cleanup**: No need to delete secrets manually—they disappear on their own after being accessed.
- 📁 **File-Based Storage**: Avoids the complexity of databases by saving secrets in a local JSON file.
- ⚡ **Fast & Lightweight**: No frameworks on the frontend, and minimal dependencies on the backend.
- 💅 **Simple & Clean UI**: User-friendly interface with a modern look for quick interaction.
- 🚀 **Deploy-Ready**: Easily deploy it to platforms like AWS, Render, or on a personal VPS.

---

## 🛠 Tech Stack & Why

| Tech      | Purpose                                                                 |
|-----------|-------------------------------------------------------------------------|
| Node.js   | Backend runtime to handle HTTP requests efficiently                     |
| Express   | Lightweight web framework for building REST APIs                        |
| UUID      | Generates unique IDs for secret links                                   |
| HTML/CSS  | Used for building the frontend interface                                |
| JavaScript (Vanilla) | Handles frontend logic without relying on any frameworks     |
| JSON File | Serves as lightweight local storage for secrets                         |

---

## 🚀 Getting Started

### 🔧 Installation & Setup

1. **Clone the repository**
   git clone https://github.com/your-username/secret-app.git
   cd secret-app
2. **Install dependencies**
    npm install
3. **start the server**
    npm start