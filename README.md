# Car Rental Project

## Installation

1. **Backend Setup**

   ```bash
   cd Backend
   npm i
   docker compose up -d
   npx knex migrate:latest
   npx knex seed:run
   npm run dev
   ```

2. **Frontend Setup**
   ```bash
   cd Frontend
   npm i
   npm start
   ```

## Documentation for Car Rental API

### Backend

**Base URL:** http://localhost:5000/

- **Cars**

  - GET: `/cars`
  - POST: `/cars`
  - GET: `/cars/:id`
  - PATCH: `/cars/:id`
  - DELETE: `/cars/:id`

- **Orders**

  - GET: `/orders`
  - POST: `/orders`
  - GET: `/orders/:id`
  - PATCH: `/orders/:id`
  - DELETE: `/orders/:id`

- **Users**
  - GET: `/users`
  - POST: `/users`
  - GET: `/users/:id`
  - PATCH: `/users/:id`
  - DELETE: `/users/:id`

### Frontend

**Base URL:** http://localhost:3000/

- **Cars**

  - Table: `/cars`
  - Add: `/cars/add`
  - Edit: `/cars/edit/:id`

- **Orders**

  - Table: `/orders`
  - Add: `/orders/add`
  - Edit: `/orders/edit/:id`

- **Users**
  - Table: `/users`
  - Add: `/users/add`
  - Edit: `/users/edit/:id`

## Usage

1. Ensure both backend and frontend setups are running.
2. Access the respective endpoints to interact with the Car Rental application.
