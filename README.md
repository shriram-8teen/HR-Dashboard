#  HR Dashboard

A minimal, responsive HR Dashboard built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**.  
It provides a clean UI to view and manage employee data — ideal for assignments, admin panels, or lightweight internal tools.

---

##  Features

-  **Dark/Light Mode Toggle**
-  **Employee List with Details**
-  **Search Functionality**
-  **View & Promote Employee Actions**
- **Responsive Design**
-  **TailwindCSS Theming**
-  Built using the latest **Next.js App Router**

---

## Tech Stack

- **Next.js 15 (App Directory)**
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **ESLint + Prettier**
- **PostCSS**

---
## Project Structure
```bash
flam-hr-dashboard/
├── app/
│ ├── layout.tsx # App shell with ThemeToggle + layout
│ ├── page.tsx # Main dashboard page
│ ├── globals.css # Global styles
│ └── hooks/
│ └── useDarkMode.ts # Custom hook for theme toggle
├── components/
│ ├── ThemeToggle.tsx # Toggle for dark/light mode
│ ├── EmployeeCard.tsx # Card UI for each employee
│ ├── EmployeeModal.tsx # View & Promote modal
│ └── DepartmentFilter.tsx # Filter employees by department
├── public/
│ └── employees.json # Static employee data (mock)
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

##  Getting Started
### Install Dependencies
   npm install
### Run the Development Server
   npm run dev
## 1. Clone the Repository

```bash
git clone https://github.com/shriram-8teen/HR-Dashboard.git
cd HR-Dashboard
Now visit 👉 http://localhost:3000


