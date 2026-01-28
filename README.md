# MazingiraAI

**MazingiraAI** is your gateway to real-time climate insights. It is a dynamic hub designed to provide actionable climate knowledge, personalized sustainability guidance, and breaking news on climate change. By leveraging conversational AI and real-time data, MazingiraAI guides users towards a resilient and sustainable tomorrow.

"Mazingira" is Swahili for _Environment_.

---

## 🚀 Key Features

- **🤖 AI Climate Companion**: A 24/7 conversational AI that answers your questions about climate change, sustainability, and environmental stewardship.
- **🌍 Real-Time Climate Map**: An interactive map powered by OpenWeatherMap that provides instant weather summaries (Humidity, Pressure, Temperature) and insights for any location.
- **📰 Climate News & Blogs**: A curated collection of articles delving into the intricate facets of climate change, offering solutions and inspiration.
- **💡 Personalized Guidance**: Tailored insights to help you navigate the complexities of sustainability with confidence.

---

## 🛠️ Technology Stack

### Frontend

- **React**: UI library for building the interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Leaflet & React-Leaflet**: Interactive JavaScript library for mobile-friendly interactive maps.
- **Axios**: For making HTTP requests to the backend.

### Backend

- **Flask**: Python micro-framework for the API.
- **PostgreSQL**: Relational database for storing user data, chats, and logs.
- **SQLAlchemy**: ORM for database interactions.
- **Flask-JWT-Extended**: For secure user authentication.
- **Gunicorn**: WSGI HTTP Server for production deployment.

### DevOps

- **Docker**: Containerization for consistent development and production environments.
- **Docker Compose**: Orchestration for multi-container local development.

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js** (v16 or higher)
- **Docker Desktop** (running)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/MazingiraAI.git
cd MazingiraAI
```

### 2. Start the Backend (Flask + DB)

The backend is Dockerized for easy setup. It includes the Flask app and a PostgreSQL database.

```bash
cd backend
# This runs the database and the flask app (in debug mode)
docker compose up --build
```

_The Backend API will be available at `http://localhost:4000`._

### 3. Start the Frontend (React)

Open a new terminal tab and navigate to the frontend directory.

```bash
cd frontend
# Install dependencies (only needed the first time)
npm install

# Start the development server
npm start
```

_The Frontend will be available at `http://localhost:3000`._

---

## 📦 Deployment

### Backend (Railway/Render)

The backend is configured for deployment on platforms like **Railway** or **Render**.

- **Dockerfile**: Includes production settings (using Gunicorn).
- **Environment Variables**: Ensure you set `DB_URL` and `SECRET_KEY` in your deployment provider.

### Frontend (Vercel/Netlify)

The frontend is a standard React app and can be deployed easily on Vercel.

- Build command: `npm run build`
- Output directory: `build`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
