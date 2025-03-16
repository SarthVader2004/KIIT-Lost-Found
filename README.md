
KIIT Lost and Found

A web application designed to help students at KIIT University report and retrieve lost items efficiently. This platform allows users to post lost/found items, search for reported items, and connect with others to reclaim their belongings.

🚀 Features

User Authentication – Secure login/signup via Supabase.

Post Lost & Found Items – Upload images, descriptions, and contact details.

Search & Filter – Find lost items using categories and keywords.

Notifications & Updates – Get notified when an item matching your post is found.

Secure Communication – Contact finders directly through the platform.

🛠 Tech Stack

Frontend

🟢 React – JavaScript library for building user interfaces.

🔵 TypeScript – Ensures type safety and better code maintainability.

⚡ Vite – Fast development build tool.

🎨 Tailwind CSS – Utility-first CSS framework for styling.

🏗 Shadcn UI – Component library built on Radix UI and Tailwind.

🎬 Framer Motion – Animations for UI enhancements.

🔀 React Router DOM – Handles routing in the application.

🔳 Lucide React – Icon library for a modern UI.

🔄 React Query (TanStack Query) – Handles data fetching and state management.

Backend

🗄 Supabase – Open-source Firebase alternative providing:

📌 PostgreSQL database for data storage.

🔑 User authentication system.

🖼 Storage buckets for file uploads (images).

🔒 Row-level security policies for data protection.

🎯 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/your-username/kiit-lost-found.git
cd kiit-lost-found

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root directory and add your Supabase credentials:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4️⃣ Run the Development Server

npm run dev

Visit http://localhost:5173/ in your browser.

🏗 Deployment

To deploy the project, use Vercel or Netlify:

npm run build

Upload the dist/ folder to your hosting provider.

🤝 Contribution

Want to improve this project? Feel free to fork the repository, create a new branch, and submit a pull request.

📜 License

This project is licensed under the MIT License.

