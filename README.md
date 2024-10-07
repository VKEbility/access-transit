# Access Transit

>[AccessTransit](https://access-transit.onrender.com) addresses critical gaps in transit accessibility by leveraging crowd-sourced data to provide accurate, real-time updates on the operational status of elevators and escalators in the NYC-MTA transit system. By giving users the tools to plan their journeys safely and efficiently, AccessTransit empowers them to:
>
>   - View, report, and update the status of elevators and escalators.
>   - Receive alerts and notifications.
>   - Search for stations and save favorite locations and settings.
>
> Additionally, a gamified leaderboard feature incentivizes user engagement, offering "Hero" status to those who actively contribute to reporting and updating transit accessibility statuses. With multilingual text support, AccessTransit aims to create an inclusive commuting experience that empowers users to travel independently and confidently, regardless of their physical or linguistic needs.

## Team

  - __Product Owner__: Eileen Rodriguez
  - __Scrum Master__: Kelly Xiong Chen
  - __Development Team Members__: Eileen Rodriguez, Kelly Xiong Chen, Jahmari Maxwell

## Table of Contents
- [Usage](#usage)
- [Requirements](#requirements)
- [Development](#development)
  - [Installing Dependencies](#installing-dependencies)
  - [Tasks](#tasks)
    - [Frontend Tasks](#frontend-tasks)
    - [Server Tasks](#server-tasks)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Style Guide](#style-guide)

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
- [Vite React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

## Development

Refer to our [Product Specification](https://docs.google.com/document/d/e/2PACX-1vTVktXWTfonkMrDNs0RZ-p8WDVq-HeregZaOeq-kfQjxno33cEiwK5COL5ykhuLpQ-61KNoNOTQgDro/pub) and [Press Release](https://github.com/VKEbility/access-transit/blob/main/PRESS_RELEASE.md) for more details about the project's features and goals. Follow the steps below to get started!

### Installing Dependencies

From within the root directory, **kickstart the application**: Install dependencies for both the frontend and server, build the frontend, and set up the database by running migrations and seeds.
  ```sh
  npm run kickstart
  ```

### Tasks

Manage and develop the AccessTransit application with the following commands:

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

Stay up-to-date with our progress and latest developments by exploring our [Scrum Board](https://github.com/orgs/VKEbility/projects/3).

## Contributing

We welcome contributions! As part of AccessTransit's commitment to Tech for Good, we believe that collaboration not only fosters innovative solutions but also makes a big difference in the lives of our users. Whether you are a developer, designer, or user, any input is valuable in making this project better.

To contribute, please review our [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines on how to get involved. You can help by reporting issues, suggesting features, submitting pull requests, or improving documentation. Together, we can create a more accessible and user-friendly transit experience for all.

Thank you for considering contributing to AccessTransit!

## Style Guide

This project adheres to the [JavaScript Standard Style](https://www.npmjs.com/package/standard).