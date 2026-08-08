# Job Portal App with MERN Stack

A comprehensive job portal application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to browse job listings, apply for jobs, and manage their applications seamlessly.

## Features

- **User Authentication:** Secure authentication using JWT (JSON Web Tokens) for both job seekers and employers.
- **Job Listings:** Browse through a wide range of job listings fetched from MongoDB.
- **Application Management:** Job seekers can manage their job applications, and employers can view and manage received applications.
- **Responsive Design:** Ensures a seamless experience across all devices.

## Technologies Used

- **Frontend:** React.js, React Router, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens), Bcrypt (for password hash)
- **Image Upload:** Cloudinary for storing and managing uploaded images
- **Deployment:** Vercel (frontend), Render(backend), MongoDB Atlas (database)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Before running the application, make sure you have the following:

- Node.js v22.2.0 or higher
- A MongoDB Atlas account (or a local MongoDB server)
- A Cloudinary account for image storage
- Git installed on your system

## MongoDB Atlas Setup

This application uses MongoDB to store users, jobs, applications, and other application data.

If you want to connect the application to **your own MongoDB Atlas database**, follow the steps below.

### 1. Create a MongoDB Atlas Account

Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create an account or sign in to your existing account.

### 2. Create a New Project

After logging in:

1. Create a new project.
2. Give your project a suitable name, such as `Job Portal`.
3. Click **Create Project**.

### 3. Create a MongoDB Cluster

Inside your project:

1. Click **Create** or **Build a Database**.
2. Select the **Free (M0)** cluster tier if you are using the application for development or testing.
3. Select your preferred cloud provider and region.
4. Give your cluster a name.
5. Click **Create**.

MongoDB Atlas will now create your database cluster.

### 4. Create a Database User

You need to create a database user that the backend can use to connect to MongoDB.

1. Go to **Database Access** from the left sidebar.
2. Click **Add New Database User**.
3. Enter a username and password.
4. Under **Database User Privileges**, select an appropriate permission such as:
   - `Read and write to any database`
5. Click **Add User**.

> **Important:** Remember the username and password. They will be required when creating the MongoDB connection string.

### 5. Configure Network Access

MongoDB Atlas allows you to control which IP addresses can connect to your database.

Go to:

**Security → Network Access**

Click **Add IP Address**.

For development purposes, you can select:

```text
Allow Access from Anywhere

### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/exclusiveabhi/react-job-portal.git
   ```
2. Install NPM packages:

   ```sh
   cd react-job-portal
   cd backend
   npm install
   cd..
   cd frontend
   npm install
   ```

3. ## If you don't want to change the`.env` credentials skip step 4 and move to step 5.

4. Set up environment variables:

   - Create a `config.env` file after creating a `config folder` in the backend directory, containing the following variables:

   ```env
   PORT=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   CLOUDINARY_CLOUD_NAME=
   FRONTEND_URL=
   DB_URL=
   JWT_SECRET_KEY=
   JWT_EXPIRE=
   COOKIE_EXPIRE=
   ```

   Replace each value with your specific configuration details.

5. Run the application backend (make sure you are in `/backend` directory) :

   ```sh
   node server.js
   ```

6. Run the application frontend (make sure you are in `/frontend` directory) :
   ```sh
   npm run dev
   ```
7. Open your browser and navigate to `http://localhost:5173` to view the app.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request (`we will merge within 24 hour`)

## Please give a star ⭐ to the repository if you like it.

## Contact

Abhishek Rajput - [GitHub](https://github.com/exclusiveabhi)

Project Link: [https://github.com/exclusiveabhi/react-job-portal.git](https://github.com/exclusiveabhi/react-job-portal.git)
