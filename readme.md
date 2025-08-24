# 🛍️ E-Commerce Website

An online shopping platform built with modern web technologies, featuring a user-friendly interface, admin dashboard, and Supabase SQL database integration.

## 🚀 Features

* ✅ User Authentication (Sign Up / Login)
* ✅ Browse Products by Categories
* ✅ Add to Cart / Remove from Cart
* ✅ Place Orders with Order Tracking
* ✅ Admin Dashboard to Manage Products
* ✅ Responsive UI (Desktop + Mobile Friendly)
* ✅ Database powered by **Supabase (SQL)**
* ✅ Optimized Database Schema (up to **3NF normalization**)

## 🖥️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend / Database:** Supabase (PostgreSQL)
* **Authentication:** Supabase Auth
* **Version Control:** Git & GitHub

## 📂 Project Structure

```
📦 e-commerce-website
 ┣ 📂 public        # Static assets (images, icons, etc.)
 ┣ 📂 src
 ┃ ┣ 📂 components  # UI Components
 ┃ ┣ 📂 pages       # Pages (Home, Cart, Checkout, Admin, etc.)
 ┃ ┗ 📂 utils       # Helper functions
 ┣ 📂 database
 ┃ ┗ schema.sql     # Supabase SQL schema
 ┣ 📜 index.html    # Entry point
 ┣ 📜 style.css     # Global styles
 ┣ 📜 app.js        # Main JS file
 ┗ 📜 README.md
```

## 🗄️ Database Schema (Supabase - PostgreSQL)

* **Users** → (id, full\_name, email, password, role)
* **Products** → (id, name, description, price, category, stock, created\_at)
* **Orders** → (id, user\_id, total\_amount, status, created\_at)
* **Order\_Items** → (id, order\_id, product\_id, quantity)
* **Categories** → (id, name)

> Schema is normalized up to **3NF** for efficient queries and data integrity.

## ⚡ Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/e-commerce-website.git
   cd e-commerce-website
   ```

2. Open `index.html` in your browser for the frontend.

3. Setup **Supabase Database**

   * Create a new Supabase project.
   * Import `database/schema.sql` into your Supabase SQL editor.
   * Update API keys in `app.js`.

4. Run the project locally (with Live Server or similar).

## 📸 Screenshots

*(Add screenshots of homepage, cart, and admin dashboard here)*

## 🌐 Live Demo

👉 [Demo Link](#) *(add your deployment link if available)*

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, make changes, and submit a PR.

## 📜 License

This project is licensed under the **MIT License**.
