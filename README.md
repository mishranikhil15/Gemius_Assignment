

## Peanut Butter Website Documentation

This is the documentation for an peanut-butter website developed using Node.js, Express.js, and MongoDB. The website provides functionalities for user registration and authentication, product listing and management, shopping cart, and payment processing.

### Deployed Link
   - [Frontend Link](https://adorable-babka-78a1a3.netlify.app/index.html)
   - [Backend Link](https://giant-pink-dirndl.cyclic.app/)

### Prerequisites

To run the e-commerce website, make sure you have the following software installed on your system:

- Node.js
- MongoDB

### Installation

1. Clone the repository to your local machine:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   cd e-commerce-website
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:

     ```
     PORT=<server_port>
     MONGO_URL=<mongodb_connection_url>
     JWT_KEY=<jwt_secret_key>
     ```

     Replace `<server_port>` with the desired port number for running the server.
     Replace `<mongodb_connection_url>` with the MongoDB connection URL.
     Replace `<jwt_secret_key>` with a secret key used for JWT token generation.

5. Start the server:

   ```
   npm start
   ```

   The server should now be running on the specified port.

### API Endpoints

The e-commerce website provides the following API endpoints:

- `POST /users/register` (method: POST): Register a new user.
- `POST /users/login` (method: POST): Login an existing user.
- `GET /users` (method: GET): Get user details (requires authentication).
- `GET /category` (method: GET): Get all products from the category.
- `GET /category/filter` (method: GET): Filter products based on size.
- `GET /category/sort` (method: GET): Sort products based on price.
- `GET /category/search` (method: GET): Search for products by name.
- `GET /products` (method: GET): Get all products.
- `GET /products/seller` (method: GET): Get products added by the seller (requires authentication).
- `POST /products/addProducts` (method: POST): Add a new product (requires authentication and seller role).
- `PATCH /products/EditProducts/:id` (method: PATCH): Edit a product (requires authentication and seller role).
- `DELETE /products/DeleteProducts/:id` (method: DELETE): Delete a product (requires authentication and seller role).
- `GET /cart` (method: GET): Get user's cart (requires authentication).
- `POST /cart/addToCart` (method: POST): Add a product to the cart (requires authentication).
- `POST /cart/removeFromCart` (method: POST): Remove a product from the cart (requires authentication).
- `POST /payments/makePayment` (method: POST): Make a payment for the products in the cart (requires authentication).

### Middleware

The e-commerce website uses the following middleware functions:

- `authenticate`: Middleware for user authentication. It verifies the JWT token and adds the user ID and role to the request body.
- `authorise`: Middleware for user authorization. It checks if the user has the required role to access the endpoint.

### Database Models

The e-commerce website uses the following MongoDB models:

- `UserModel`: Represents a user with attributes like name, email, password, and role.
- `Homemodel`: Represents a home page with attributes like image, name, and type.
- `Categorymodel`: Represents a category with attributes like image, name, rating, price, type, brand, flavors, sizes, and quantity.
- `

Cartmodel`: Represents a cart with attributes like user ID and products array.

### External Packages and Dependencies

The e-commerce website relies on the following external packages and dependencies:

- `Node.js` (v14.17.0): JavaScript runtime environment.
- `Express.js` (v4.17.1): Web application framework for Node.js.
- `MongoDB` (v4.4.5): NoSQL database.
- `Mongoose` (v5.13.2): MongoDB object modeling tool.
- `jsonwebtoken` (v8.5.1): JSON Web Token implementation for Node.js.
- `bcryptjs` (v2.4.3): Library for hashing passwords.
- `dotenv` (v10.0.0): Module for loading environment variables from a `.env` file.
- `cors` (v2.8.5): Middleware for enabling Cross-Origin Resource Sharing.
- `razorpay` : External Package for Payment

