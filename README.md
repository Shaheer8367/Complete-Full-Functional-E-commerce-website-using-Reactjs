<img width="2026" height="4833" alt="1758132479352" src="https://github.com/user-attachments/assets/c73f7596-1896-4f3e-b33d-e14aab446210" />



🛋️ Comforty Ecommerce App

A modern Ecommerce Web Application built with React + Vite, styled using TailwindCSS + DaisyUI, and includes features like routing, authentication check, and a responsive UI.

🚀 Features

⚡ Fast Development using Vite + React

🎨 Modern UI with TailwindCSS + DaisyUI

🛒 Ecommerce Ready components (Navbar, Banner, Products, Footer, etc.)

🔑 Authentication System (Login & Register pages with AuthCheck)

🖼️ Dynamic Banner Slider with React Slick

📱 Fully Responsive design (mobile → desktop)

🧩 Reusable Components for scalability

📂 Project Structure
src/
 ├── Components/
 │   ├── Navbar/         # Top navigation bar
 │   ├── Footer/         # Footer section
 │   └── SectionTitle/   # Reusable section title component
 │
 ├── Pages/
 │   ├── Home/           # Homepage
 │   ├── Auth/           # Auth Layout
 │   ├── Register/       # Register page
 │   └── Error/          # 404 Error page
 │
 ├── AuthCheck/
 │   └── AuthCheck.jsx   # Route protection
 │
 ├── assets/
 │   └── Banner/         # Banner images
 │
 ├── App.jsx
 └── main.jsx

⚙️ Installation & Setup

Clone this repo

git clone https://github.com/your-username/comforty-ecommerce.git
cd comforty-ecommerce


Install dependencies

npm install


Start development server

npm run dev


Open in browser:

http://localhost:5173

🔑 Authentication Flow

✅ Protected routes use AuthCheck

If a user is not logged in, they are redirected to /auth/login

If a user is logged in, they can access / and other private pages

📦 Available Scripts

npm run dev → Start development server

npm run build → Build for production

npm run preview → Preview production build

🛠️ Tech Stack

Frontend: React + Vite

Styling: TailwindCSS, DaisyUI

Icons: Lucide React

Carousel: React Slick


🔑 Login Page

📝 Register Page


👨‍💻 Author

Developed by Your Name

📧 Email: yourname@example.com

🌐 Portfolio: yourwebsite.com

📜 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute this project with attribution.
