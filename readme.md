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

## Here is how all of these feature connects

[View the Miro Embed](https://miro.com/app/live-embed/uXjVLzaox_o=/?moveToViewport=-3254,-1695,9038,4672&embedId=242706421924)

<!-- <iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVLzaox_o=/?moveToViewport=-3254,-1695,9038,4672&embedId=242706421924" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe> -->

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

## Bikes

<details>
<summary> Create Bike/ Insert Bike</summary>

Endpoint: `{{bike-rental-url}}/bikes`

Method: `POST`

Access: Private (Headers Authorization)

Request Body:

> Request Body:

```json
{
  "name": "Mountain Bike 41",
  "description": "4 is A durable mountain bike for rough terrains.",
  "pricePerHour": 15,
  "cc": 250,
  "year": 2022,
  "model": "X3",
  "brand": "Yamaha"
}
```

> Response - 200

```json

```

</details>

<details>
<summary> Get All Bikes</summary>

Endpoint: `{{bike-rental-url}}/bikes`

Method: GET

Access: Public

Request Body:

> Request Body:

```json

```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Bikes retrieved successfully",
  "data": [
    {
      "_id": "666cbbec39ae46edcd0b23f2",
      "name": "Mountain Bike 2",
      "description": "A durable mountain bike for rough terrains.",
      "pricePerHour": 20,
      "isAvailable": true,
      "cc": 250,
      "year": 2022,
      "model": "X2",
      "brand": "Yamaha",
      "createdAt": "2024-06-14T21:53:48.028Z",
      "updatedAt": "2024-10-02T18:40:57.479Z",
      "__v": 0,
      "imageUrl": "https://media.cnn.com/api/v1/images/stellar/prod/230419133455-velotric-thunder-1-ebike-lead-cnnu.jpg?c=original"
    },
    {
      "_id": "668016803c8e081e411236cf",
      "name": "Mountain Bike 4",
      "description": "4 is A durable mountain bike for rough terrains.",
      "pricePerHour": 15,
      "isAvailable": true,
      "cc": 250,
      "year": 2022,
      "model": "X3",
      "brand": "Yamaha",
      "createdAt": "2024-06-29T14:13:20.894Z",
      "updatedAt": "2024-10-01T18:00:29.778Z",
      "__v": 0,
      "imageUrl": "https://sklarbikes.com/cdn/shop/products/Adam-Sklar-and-His-Super-Something-Gravel-Bike-1.jpg?v=1708229654"
    },
    {
      "_id": "66802be1da74876e74a40ee1",
      "name": "Mountain Bike 4",
      "description": "4 is A durable mountain bike for rough terrains.",
      "pricePerHour": 15,
      "isAvailable": true,
      "cc": 250,
      "year": 2022,
      "model": "X3",
      "brand": "Yamaha",
      "createdAt": "2024-06-29T15:44:33.666Z",
      "updatedAt": "2024-10-02T19:40:37.841Z",
      "__v": 0,
      "imageUrl": "https://arkel.ca/cdn/shop/collections/Terratributa_Bertrand_Lemeunier_Orca_handlebar_bag_WEB_Large_ce24dba4-1d43-4e1d-b7c0-53425239ea16.jpg?v=1678988762&width=2400"
    },
    {
      "_id": "66802bfeda74876e74a40ee4",
      "name": "Mountain Bike 4",
      "description": "4 is A durable mountain bike for rough terrains.",
      "pricePerHour": 15,
      "isAvailable": true,
      "cc": 250,
      "year": 2022,
      "model": "X3",
      "brand": "Yamaha",
      "createdAt": "2024-06-29T15:45:02.890Z",
      "updatedAt": "2024-06-29T15:45:02.890Z",
      "__v": 0,
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdWQJi6l6P8SOoWzuyyvDbzHgQvMo57iLVgg&s"
    },
    {
      "_id": "66f06608ca4725d410d367d3",
      "name": "sdfdfd",
      "description": "sfsdfsf",
      "pricePerHour": 200,
      "isAvailable": true,
      "cc": 2220,
      "year": 2020,
      "model": "dzdgdg",
      "brand": "Kawasaki",
      "createdAt": "2024-09-22T18:46:32.644Z",
      "updatedAt": "2024-10-01T16:30:48.257Z",
      "__v": 0,
      "imageUrl": "https://c02.purpledshub.com/uploads/sites/39/2022/10/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg"
    },
    {
      "_id": "66f066993cca95f6ab706467",
      "name": "sdfdfd",
      "description": "sfsdfsf",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      "pricePerHour": 200,
      "isAvailable": false,
      "cc": 2220,
      "year": 2020,
      "model": "dzdgdg",
      "brand": "Kawasaki",
      "createdAt": "2024-09-22T18:48:57.952Z",
      "updatedAt": "2024-10-02T19:50:23.824Z",
      "__v": 0
    },
    {
      "_id": "66f06e7d3cca95f6ab706479",
      "name": "new add update",
      "description": "dfsdfsdf",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      "pricePerHour": 100,
      "isAvailable": true,
      "cc": 100,
      "year": 2024,
      "model": "fgff",
      "brand": "Kawasaki",
      "createdAt": "2024-09-22T19:22:37.781Z",
      "updatedAt": "2024-10-02T19:27:36.912Z",
      "__v": 0
    }
  ]
}
```

</details>

<details>
<summary> Update Bike</summary>

Endpoint: `{{bike-rental-url}}/bikes/:id` id ⇒ bikeId

Method: `PUT`

Access: Private (Headers Authorization)

Request Body:

> Request Body:

```json
{
  "pricePerHour": 30
  // Any desired filed that is supposed to update
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Bike updated successfully",
  "data": {
    "_id": "666cbc0639ae46edcd0b23f5",
    "__v": 0,
    "createdAt": "2024-12-23T16:50:28.755Z",
    "isAvailable": true,
    "pricePerHour": 30,
    "updatedAt": "2024-12-23T16:50:28.755Z"
  }
}
```

</details>

<details>
<summary> Delete Bike</summary>

Endpoint: `{{bike-rental-url}}/bikes/:id` id ⇒ bikeId

Method: `DELETE`

Access: Private (Headers Authorization)

Request Body:

> Request Body:

```json

```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Bike deleted successfully",
  "data": {
    "_id": "666cbc0639ae46edcd0b23f5",
    "__v": 0,
    "createdAt": "2024-12-23T16:50:28.755Z",
    "isAvailable": true,
    "pricePerHour": 30,
    "updatedAt": "2024-12-23T16:50:28.755Z"
  }
}
```

</details>

## Bookings/ Rentals

<details>
<summary> Create New Booking</summary>

Endpoint: `{{bike-rental-url}}/rentals`

Method: `POST`

Access: Private (Headers Authorization)

Request Body:

> Request Body:

```json
{
  "bikeId": "666cbbec39ae46edcd0b23f2",
  "startTime": "2024-06-14T09:00:00Z"
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Rental created successfully",
  "data": {
    "userId": "66e70bddea2a86de6d61a2f3",
    "bikeId": "666cbbec39ae46edcd0b23f2",
    "startTime": "2024-06-14T09:00:00.000Z",
    "returnTime": null,
    "totalCost": 100,
    "isReturned": false,
    "_id": "67699a53316ec9adb0c1fc12",
    "createdAt": "2024-12-23T17:13:55.139Z",
    "updatedAt": "2024-12-23T17:13:55.139Z",
    "__v": 0
  }
}
```

</details>

<details>
<summary> Get All Bookings For Users</summary>

Endpoint: `{{bike-rental-url}}/rental`

Method: `GET`

Access: Private (Headers Authorization)

Request Body:

> Request Body:

```json

```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "ALL bike to be returned successful",
  "data": [
    {
      "_id": "66fda3ff862569feff14a025",
      "userId": {
        "_id": "66e70bddea2a86de6d61a2f3",
        "name": "user",
        "email": "user1@gmail.com",
        "phone": "123456789",
        "address": "sdfsf",
        "role": "user",
        "createdAt": "2024-09-15T16:31:25.539Z",
        "updatedAt": "2024-09-15T16:31:25.539Z",
        "__v": 0
      },
      "bikeId": {
        "_id": "66f066993cca95f6ab706467",
        "name": "sdfdfd",
        "description": "sfsdfsf",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
        "pricePerHour": 200,
        "isAvailable": false,
        "cc": 2220,
        "year": 2020,
        "model": "dzdgdg",
        "brand": "Kawasaki",
        "createdAt": "2024-09-22T18:48:57.952Z",
        "updatedAt": "2024-10-02T19:50:23.824Z",
        "__v": 0
      },
      "startTime": "2024-10-02T19:50:00.000Z",
      "returnTime": null,
      "totalCost": 100,
      "isReturned": false,
      "createdAt": "2024-10-02T19:50:23.853Z",
      "updatedAt": "2024-10-02T19:50:23.853Z",
      "__v": 0
    },
    {
      "_id": "67699a53316ec9adb0c1fc12",
      "userId": {
        "_id": "66e70bddea2a86de6d61a2f3",
        "name": "user",
        "email": "user1@gmail.com",
        "phone": "123456789",
        "address": "sdfsf",
        "role": "user",
        "createdAt": "2024-09-15T16:31:25.539Z",
        "updatedAt": "2024-09-15T16:31:25.539Z",
        "__v": 0
      },
      "bikeId": {
        "_id": "666cbbec39ae46edcd0b23f2",
        "name": "Mountain Bike 2",
        "description": "A durable mountain bike for rough terrains.",
        "pricePerHour": 20,
        "isAvailable": false,
        "cc": 250,
        "year": 2022,
        "model": "X2",
        "brand": "Yamaha",
        "createdAt": "2024-06-14T21:53:48.028Z",
        "updatedAt": "2024-12-23T17:13:55.091Z",
        "__v": 0,
        "imageUrl": "https://media.cnn.com/api/v1/images/stellar/prod/230419133455-velotric-thunder-1-ebike-lead-cnnu.jpg?c=original"
      },
      "startTime": "2024-06-14T09:00:00.000Z",
      "returnTime": null,
      "totalCost": 100,
      "isReturned": false,
      "createdAt": "2024-12-23T17:13:55.139Z",
      "updatedAt": "2024-12-23T17:13:55.139Z",
      "__v": 0
    }
  ]
}
```

</details>

<details>
<summary> Return Bike</summary>

Endpoint: `{{bike-rental-url}}/rentals/:id/return` id ⇒ bikeId

Method: `PUT`

Access: Private (Headers Authorization)

Request Body:

> Request Body:

```json

```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Bike returned successfully",
  "data": {
    "_id": "66fda3ff862569feff14a025",
    "userId": "66e70bddea2a86de6d61a2f3",
    "bikeId": {
      "_id": "66f066993cca95f6ab706467",
      "name": "sdfdfd",
      "description": "sfsdfsf",
      "imageUrl": "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D",
      "pricePerHour": 200,
      "isAvailable": true,
      "cc": 2220,
      "year": 2020,
      "model": "dzdgdg",
      "brand": "Kawasaki",
      "createdAt": "2024-09-22T18:48:57.952Z",
      "updatedAt": "2024-12-23T17:19:40.455Z",
      "__v": 0
    },
    "startTime": "2024-10-02T19:50:00.000Z",
    "returnTime": "2024-12-23T17:19:40.454Z",
    "totalCost": 393200,
    "isReturned": true,
    "createdAt": "2024-10-02T19:50:23.853Z",
    "updatedAt": "2024-12-23T17:19:40.484Z",
    "__v": 0
  }
}
```

</details>
