### STEP 1

Create separate folders for backend and frontend to organize server-side and client-side code.

```bash
mkdir backend && mkdir frontend
```

### STEP 2

Navigate into the backend folder where the server-side code will be built.

```bash
cd backend
```

### STEP 3

Initialize a new npm project to manage backend dependencies and scripts.

```bash
npm init -y
```

### STEP 4

Install essential packages: Express for server, Nodemon for live server reloads, CORS for cross-origin requests, and Prisma for database ORM.

```bash
npm i express nodemon cors prisma
```

### STEP 5

Install Prisma as a development dependency to help with database schema migrations and client generation.

```bash
npm install prisma --save-dev
```

### STEP 6

Initialize Prisma in the backend with PostgreSQL as the datasource, outputting generated client files to a shared folder.

```bash
npx prisma init --datasource-provider postgresql --output ../generated/prisma
```

### STEP 7

Generate the Prisma client based on the schema for use in the backend code.
NOTE : BEFORE GENERATE MAKE SURE THAT YOU HAVE THE SCHEMA

```bash
npx prisma generate
```

### STEP 8

Push the Prisma schema changes to the database to create/update tables accordingly.

```bash
npx prisma db push
```

### STEP 9

Install the Prisma client as a runtime dependency to interact with the database.

```bash
npm i @prisma/client
```

### STEP 10 — Add dev script in `package.json`

Add a development script to automatically restart the backend server on file changes using Nodemon.

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

### STEP 11

Run the backend development server to start the API server locally.

```bash
npm run dev
```

---

### Optional Cleanup

Clear the npm cache forcefully to resolve potential caching issues.

```bash
npm cache clean --force
```

---

## Authentication Setup Steps

This section covers steps to set up authentication in the backend and frontend of the TODO app using `better-auth` and Prisma.

### Backend Authentication Setup

Set up authentication package, generate necessary files, and update database.

```bash
cd backend
npm install better-auth
npx @better-auth/cli generate
npx prisma generate
npx prisma db push
```

### Frontend Authentication Setup

Install the authentication package in the frontend for client-side auth handling.

```bash
cd frontend
npm install better-auth
```
