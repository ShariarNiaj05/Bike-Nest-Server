# Bike Nest (Server)

Welcome to the Bike Nest! This application allows users to rent bikes seamlessly. Below you will find instructions to set up and run the application locally, along with details about the project.

## **Project Description**

### **Purpose:**

The Bike Nest web application is purposed for the development of an effective, user-friendly platform where users can view, book, and manage bike rentals with ease. This system integrates both frontend and backend functionalities to provide a modern web application that caters to customers, ensures easy administration, and enables secure transactions.

### **Objectives:**

1. **User Convenience**: Simplify the process of renting bikes with an intuitive interface.
2. **Efficient Management**: Provide administrators to manage inventory, users, and rentals effectively.
3. **Responsiveness**: Ensure the platform is accessible across devices, offering a seamless experience on desktops, tablets, and mobiles.

### **Goals:**

1. **Enable a hassle-free bike rental experience** for users, from browsing to booking and payment.
2. **Streamline operations** for administrators, allowing quick updates to bike inventory and rental statuses.
3. **Build trust and credibility** through detailed pages, such as "About Us" and customer testimonials.
4. Improve user retention with personalized dashboards and user account management.
5. Provide error handling and friendly messages for seamless navigation, even in case of issues.
6. Offer scalability to integrate future features like geolocation, notifications, or multilingual support.

### **Features**

### **1. Public Pages**

- **Home Page**: Hero section, featured bikes, testimonials.
- **About Us**: Mission, team profiles, milestones, and contact details.
- **Bike Listing and Details**: Filterable bike catalog with detailed bike profiles.
- **Authentication**: User-friendly sign-up/login interfaces.

### **2. Private/User Features**

- **Dashboard**: Personalized interface displaying rentals, payments, and quick access to profile.
- **Profile Management**: Update personal details easily.
- **Rental History**: Tabs for paid and unpaid rentals with payment features.

### **3. Admin Features**

- **Bike Management**: Add, edit, or remove bikes, and filter them by attributes like model or availability.
- **User Management**: Promote users to admin roles or deactivate inactive accounts.
- **Rental Handling**: Process bike returns and calculate costs automatically.
- **Coupon Management**: Create and track coupon usage.

### **4. Extra Features**

- Responsive design with a dark mode toggle.
- Side-by-side bike comparison tool for customers.
- Micro-animations for smooth interactions.
- Comprehensive error handling and custom 404 pages.

<!-- ------------------ -->

## Setup and Installation

Follow The Instructions To Run The Application Locally

### Step:1 **Clone the repository**

```bash
  git clone https://github.com/ShariarNiaj05/Bike-Nest-Server.git
```

### Step:2 **Change the directory**

```bash
  cd Bike-Nest-Server
```

Or simply navigate to the folder and open VS Code in that directory.

### Step:3 **Install node modules and all the dependencies**

```bash
  npm i / npm install
```

### Step:4 **.env file setup**

```bash
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=<Your_mongodb_database_url>
```

### Step:5 **Run the project**

```bash
   npm run dev
```

The server will start running on http://localhost:5000
