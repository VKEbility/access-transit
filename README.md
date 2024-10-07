# Access Transit

>[AccessTransit](https://access-transit.onrender.com) bridges critical gaps in transit accessibility by leveraging crowd-sourced data to deliver accurate, real-time updates on the operational status of of elevators and escalators in the NYC-MTA transit system. Giving users the tools necessary to safely and efficiently plan their journeys, AccessTransit enables users to view, report, and update the status of these features, see alerts, search for stations, and save favorite locations and settings. 
>
> In addition, a gamified leaderboard feature rewards user engagement, offering "Hero" status for their contributions to reporting and status updates. With multilingual text support, AccessTransit aims to create a more inclusive commuting experience, empowering users to travel independently and confidently, regardless of their physical or linguistic needs.

## Team

  - __Product Owner__: Eileen Rodriguez
  - __Scrum Master__: Kelly Xiong Chen
  - __Development Team Members__: Eileen Rodriguez, Kelly Xiong Chen, Jahmari Maxwell

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Roadmap](#press-release)
1. [Contributing](#contributing)

## Usage

> Usage instructions for getting the app up and running locally

```sh
git clone https://github.com/VKEbility/access-transit.git
cd access-transit
```

## Requirements

- [Node](https://nodejs.org/en) (v14+)
- [PostgreSQL](https://www.postgresql.org/) (v12+)
- [Express](https://expressjs.com/) (v4.17.1+)
- [Knex](https://knexjs.org/) (v0.95+)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Vite React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

## Development

### Installing Dependencies

From within the root directory, **kickstart the application**: Install dependencies for both the frontend and server, build the frontend, and set up the database by running migrations and seeds.
  ```sh
  npm run kickstart
  ```

### Tasks

The following tasks can be executed to manage and develop the Access Transit application:

#### Frontend Tasks

1. **Start Frontend Development Server**: Start the Vite development server for the frontend.

    ```sh
    npm run dev:frontend
    ```

2. **Build Frontend**: Compile the frontend application for production

    ```sh
    npm run build:frontend
    ```

3. **Preview Built Frontend**: Preview the production build of the frontend application.

    ```sh
    npm run preview
    ```

#### Server Tasks

1. **Start Server in Development Mode**: Use Nodemon to start the server in development mode, which automatically restarts on code changes.

    ```sh
    npm run dev
    ```

2. **Start Server**: Start the server in production mode.

    ```sh
    npm start
    ```

3. **Migrate Database**: Apply all pending database migrations.

    ```sh
    npm run migrate
    ```

4. **Rollback Last Migration**: Revert the last migration applied to the database.

    ```sh
    npm run migrate:rollback
    ```
    
5. **Create New Migration**: Generate a new migration file for database changes.

    ```sh
    npm run migrate:make
    ```

6. **Seed Database**: Populate the database with initial data using seed files.

    ```sh
    npm run seed
    ```

7. **Create New Seed**: Generate a new seed file for adding sample data.

    ```sh
    npm run seed:make
    ```

8. **Connect to PostgreSQL**: Open a connection to the PostgreSQL database using the specified user and database name.

    ```sh
    psql -U postgres -d access_transit_db
    ```

## Roadmap

Click to accesd [Press Release](https://github.com/orgs/VKEbility/./PRESS-RELEASE.md) and view the [project](https://github.com/VKEbility/.github) roadmap [here](https://github.com/orgs/VKEbility/projects/3).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## Style Guide

This project adheres to the [JavaScript Standard Style](https://www.npmjs.com/package/standard).