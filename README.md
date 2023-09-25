# Full Stack App

## Purpose

This is a full-stack app for the purpose of displaying the following abilities:

- API design (using RESTful API)
- Database creation and schema design
- Login/auth/session management
- React development
- Integration of component libraries.

Specifically, I started this to play with some tools I have not previously used. The following technologies and tools will be used in the final product:

- Bun 1.0 (node.js alternative)
- Prisma with SQLite for local database
- Express.js
- React
- Vite
- TODO: Comoponent library
- TODO: Auth0
- TODO: Zod

## Getting Started

To spin up this process, you'll need to have Bun 1.0 installed on your machine. You can install it with this command:

```bash
curl -fsSL https://bun.sh/install | bash
```

Once that is run, in your terminal from the root directory, do

```bash
cd api
bun start
```

To generate your database, you'll need to run

```bash
bun prisma migrate dev --name init
```

## Database operations

Until the frontend is up and running, create new records in the database with the following `curl` commmand:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe", "userName":"doe.a.deer","password":"secure"}' http://localhost:3001/new-user
```

You can replace the various information with your own.

## TODO list

### Frontend:

- Build frontend application using react/vite/ts
- Build form on react app
- Connect to API
- Create Login screen
- Create user profile screen on
- Create logout button
- Select UI library to use

### Backend:

- Create `POST` login endpoint
- Create `POST` logout endpoint
- Session management (cookie) to track login session.
- Connect to Auth0 for user authentication
  - remove password from DB.
- Create `GET` fetch user data endpoint
- Organize file structure to modularize API operations
