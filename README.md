
# 🔐 Password-Generator

A small-scale full-stack password generator built with **React**, **Node.js**, and **Express**. It allows users to generate secure, customizable passwords and provides real-time strength feedback using `zxcvbn`.

---

## Table of Contents 📝

- [Preview](#Preview)
- [Features](#Features)
- [Tech-Stack](#Tech-Stack)
- [Project Structure](#Project-Structure)
- [Installation](#Installation)
- [API Reference](#API-Reference)
- [Insights & Outcomes](#Insights & Outcomes)
## Preview 📷

![Password-Generator](https://raw.githubusercontent.com/codeprnv/password-generator/master/client/src/assets/screenshot.png)


## Features 🛠️

- ✅ Choose password length
- ✅ Include uppercase, lowercase, numbers, and symbols
- ✅ Backend-secure password generation using `crypto`
- ✅ Real-time strength analysis with [`zxcvbn`](https://www.npmjs.com/package/zxcvbn)
- ✅ Copy-to-clipboard with visual feedback
- ✅ **Fully responsive** UI using **Tailwind CSS**
- ✅ Mobile-first and clean modern design


## Tech Stack </>

### Frontend: 
- React + Vite
- Tailwind-CSS
- Shadcn UI

### Backend:
- Nodejs
- Expressjs


## Project-Structure 📂

```
password-generator/
├── client/ # Frontend (React)
│ ├── public/ # Static assets
│ └── src/
│ ├── components/ # UI components (Slider, Options, Display)
│ ├── context/ # Global context (PasswordContext)
│ ├── hooks/ # Custom hook (useGeneratePassword)
│ ├── App.tsx # Main app layout
│ ├── main.tsx # ReactDOM entry point
│ └── index.css # Tailwind & global styles
│
├── server/ # Backend (Express.js)
│ ├── generatePassword.js # Password generation logic using crypto
│ └── index.js # Express server setup and API route
│
├── .gitignore
├── package.json # Server dependencies
├── README.md
└── vite.config.ts # Vite config (client)
```
## Installation ⚙️

### 1. Clone the Repository

```bash
git clone https://github.com/codeprnv/password-generator.git
cd password-generator
```

### 2. Install the dependencies

- Frontend
```bash
cd client && npm install && cd ..
```

- Backend
```bash
cd server && npm install
```

### 3. Run the App

```bash
node index.js && cd .. && cd client && npm run dev
```
    
## API-Reference 🌐

#### Generate Password

```http
  POST /api/generatePassword
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `length` | `number` | **Required**. Length of the Password to be created |
| `uppercase` | `boolean` | Specifies whether to include uppercase characters in password or not |
| `lowercase` | `boolean` | Specifies whether to include lowercase characters in password or not |
| `numbers` | `boolean` | Specifies whether to include number characters in password or not |
| `symbols` | `boolean` | Specifies whether to include symbol characters in password or not |

### Request Body

```json
{
  "length": 12,
  "upperCase": true,
  "lowerCase": true,
  "numbers": true,
  "symbols": true
}
```

### Response

```json
{
  "password": "aZ9#vTb!2@Qw"
}
```


## Insights & Outcomes 🧠 

### 🔧 Problems Solved:
- Implemented a custom password generation algorithm that guarantees inclusion of all selected character types (uppercase, lowercase, numbers, symbols).
- Integrated real-time password strength analysis using zxcvbn.
- Ensured responsiveness and cross-device compatibility using Tailwind CSS.
- Implemented clipboard copy functionality with user feedback and visual indicators.

### 📚 What I Learned:

- How to create a secure password generation logic using Node's crypto module.
- Applied React hooks and Context API for clean state management across components.
- How to structure and build a small-scale full-stack project using React + Express.
## Authors

- Made with ❤️ by [@codeprnv](https://www.github.com/codeprnv)
