# PayShop E-Commerce Platform

A full-featured e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### Environment Variables

Create a .env file in the root directory and add the following:

NODE_ENV = development
PORT = 5000
MONGO_URI = your_mongodb_uri
JWT_SECRET = your_jwt
PAYPAL_CLIENT_ID = your_paypal_client_id

### Installation Steps

1. Clone the repository
bash
git clone <repository-url>

2. Install Dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
```

3. Run the Application
```bash
# Run both frontend & backend in development
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

### Database Seeder

Use the following commands to seed the database with sample users and products:

```bash
# Import sample data
npm run data:import

# Destroy all data
npm run data:destroy
```

## Project Structure

```
├── backend/
│   ├── data/
│   ├── middleware/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── slices/
│   │   └── App.js
│   └── package.json
├── .env
└── package.json
```

## Technology Stack

### Frontend
- React 18
- React Bootstrap
- Redux Toolkit
- React Router DOM
- Axios
- React-Helmet-Async
- PayPal React SDK

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication
- Bcrypt
- Multer

## Sample Users

```bash
Admin User:
Email: admin@email.com
Password: 123456

Regular User:
Email: john@email.com
Password: 123456
```

## Available Scripts

```bash
npm run dev          # Run frontend & backend in development
npm run server       # Run backend only
npm run client       # Run frontend only
npm run data:import  # Import sample data
npm run data:destroy # Destroy sample data
npm run build        # Create production build
```

## Development

1. Set up MongoDB locally or use MongoDB Atlas
2. Configure environment variables in .env
3. Run development servers:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## Production Deployment

1. Create a production build
```bash
npm run build
```

2. Set environment variables for production
3. Deploy to your hosting platform

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, please open an issue in the repository.

## Acknowledgments

- Create React App
- React Bootstrap
- MongoDB Atlas
- PayPal API Integration