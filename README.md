# 🚀 Express API Boilerplate

A minimal and clean **Express.js boilerplate** for building RESTful APIs with **Node.js + TypeScript**.  
Includes a ready-to-use project structure, middleware setup, error handling, and developer tools (ESLint + Prettier).

---

## 📦 Features
- ⚡ Express.js + TypeScript
- 🎯 Centralized config with `.env` support
- 🛡️ Middlewares: CORS, JSON parser, NotFound, ErrorHandler
- 📂 Organized architecture: `controllers`, `routes`, `services`, `models`, `middlewares`, `utils`
- 🧹 Linting & formatting with ESLint + Prettier
- 🔧 Aliases for cleaner imports (`@routes`, `@controllers`, etc.)
- 🧪 Health check route (`/api/health`)

---

## 🛠️ Getting Started

```bash
# Clone repo
git clone https://github.com/Rubio-06/express-api-boilerplate.git
cd express-api-boilerplate

# Install dependencies
npm install

# Start in dev mode
npm run dev
```

The server will start on `http://localhost:3000` by default. You can change the port in the `.env` file.