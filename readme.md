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

# File Structure

```js
.eslintignore
.gitignore
.prettierrc.json
eslint.config.mjs
package-lock.json
package.json
readme.md
src
   |-- app.ts
   |-- app
   |   |-- config
   |   |   |-- index.ts
   |   |-- errors
   |   |   |-- AppError.ts
   |   |   |-- handleCastError.ts
   |   |   |-- handleDuplicateError.ts
   |   |   |-- handleValidationError.ts
   |   |   |-- handleZodError.ts
   |   |-- interface
   |   |   |-- errorInterface.ts
   |   |   |-- index.d.ts
   |   |-- middlewares
   |   |   |-- auth.ts
   |   |   |-- globalErrorHandler.ts
   |   |   |-- notFound.ts
   |   |   |-- notFoundRoute.ts
   |   |   |-- validateRequest.ts
   |   |-- modules
   |   |   |-- auth
   |   |   |   |-- auth.controller.ts
   |   |   |   |-- auth.interface.ts
   |   |   |   |-- auth.route.ts
   |   |   |   |-- auth.services.ts
   |   |   |   |-- auth.utils.ts
   |   |   |   |-- auth.validation.ts
   |   |   |-- bike
   |   |   |   |-- bike.controller.ts
   |   |   |   |-- bike.interface.ts
   |   |   |   |-- bike.model.ts
   |   |   |   |-- bike.route.ts
   |   |   |   |-- bike.services.ts
   |   |   |   |-- bike.validation.ts
   |   |   |-- booking
   |   |   |   |-- booking.controller.ts
   |   |   |   |-- booking.interface.ts
   |   |   |   |-- booking.model.ts
   |   |   |   |-- booking.route.ts
   |   |   |   |-- booking.services.ts
   |   |   |   |-- booking.validation.ts
   |   |   |-- scratch
   |   |   |   |-- scratch.controller.ts
   |   |   |   |-- scratch.interface.ts
   |   |   |   |-- scratch.model.ts
   |   |   |   |-- scratch.route.ts
   |   |   |   |-- scratch.services.ts
   |   |   |   |-- scratch.validation.ts
   |   |   |-- user
   |   |   |   |-- user.constant.ts
   |   |   |   |-- user.controller.ts
   |   |   |   |-- user.interface.ts
   |   |   |   |-- user.model.ts
   |   |   |   |-- user.route.ts
   |   |   |   |-- user.services.ts
   |   |   |   |-- user.validation.ts
   |   |-- routes
   |   |   |-- index.ts
   |   |-- utils
   |   |   |-- catchAsync.ts
   |   |   |-- sendResponse.ts
   |-- server.ts
tsconfig.json
vercel.json

```

## Technology Stack

| Frontend          | Backend    | DevOps/ Deployment |
| ----------------- | ---------- | ------------------ |
| TypeScript        | TypeScript | Frontend: Vercel   |
| React             | Node.js    | Backend: Vercel    |
| Redux + RTK Query | Express.js |                    |
| Shadcn UI         | Mongoose   |                    |

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

## API Endpoints

### User/ Authentication

<details>
<summary>SignUp User</summary>

> Request Body

Endpoint: `{{bike-rental-url}}/auth/signup`

Method: `POST`

Access: `public`

```json
{
  "name": "admin 3",
  "email": "admin55@example.com",
  "password": "password123",
  "phone": "1234567890",
  "address": "123 Main St, Anytown",
  "role": "admin"
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
    "name": "admin 3",
    "email": "admin55@example.com",
    "phone": "1234567890",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "_id": "6768117611ef05e2107d1b4e",
    "createdAt": "2024-12-22T13:17:42.356Z",
    "updatedAt": "2024-12-22T13:17:42.356Z",
    "__v": 0
  }
}
```

</details>

<details>
<summary>Login User </summary>

Endpoint: `{{bike-rental-url}}/auth/login`

Method: `POST`

Access: `public`

> Request Body

```json
{
  "email": "admin2@example.com",
  "password": "password123"
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczNDk2OTQ1MiwiZXhwIjoxNzM3NTYxNDUyfQ.3Zzu1EYDQgjgME9zHGlGiAE1Os0kDgUHAoarC2-QjDQ",
  "data": {
    "_id": "668028096d51eca6fe6afcbb",
    "name": "admin now 06",
    "email": "admin2@example.com",
    "phone": "0987654321",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-29T15:28:09.881Z",
    "updatedAt": "2024-07-06T14:00:04.918Z",
    "__v": 0
  }
}
```

</details>

<details>
<summary>Get Profile </summary>

Endpoint: `{{bike-rental-url}}/auth/users/me`

Method: `GET`

Access: `Private (Headers Authorization)`

> Response:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User profile retrieved successfully",
  "data": {
    "_id": "668028096d51eca6fe6afcbb",
    "name": "admin now 06",
    "email": "admin2@example.com",
    "phone": "0987654321",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-29T15:28:09.881Z",
    "updatedAt": "2024-07-06T14:00:04.918Z",
    "__v": 0
  }
}
```

</details>
<details>
<summary> Update Profile</summary>

Endpoint: `{{bike-rental-url}}/auth/users/me`

Method: `PUT`

Access: `Private (Headers Authorization)`

> Request Body:

```json
{
  "name": "admin now 06",
  "phone": "0987654321"
  // Desired field that is supposed to update
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Profile updated successfully",
  "data": {
    "_id": "668028096d51eca6fe6afcbb",
    "name": "admin now 06",
    "email": "admin2@example.com",
    "phone": "0987654321",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-29T15:28:09.881Z",
    "updatedAt": "2024-12-23T16:03:24.672Z",
    "__v": 0
  }
}
```

</details>
