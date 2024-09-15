# Expense GQL

## Description

**Expense GQL** is a full-stack MERN application for managing personal expenses. The application provides an intuitive interface to track transactions and visualize expense data. It uses GraphQL for flexible and efficient data querying, with a modern UI styled with Tailwind CSS. Features include user authentication, CRUD operations, data visualization, and real-time notifications.

---

## Features

- **GraphQL API**: Built with Apollo Server for efficient and flexible data management.
- **User Authentication and Authorization**: Implemented using Passport.js for secure user access.
- **CRUD Operations**: Allows users to create, read, update, and delete transactions.
- **Data Visualization**: Transaction data is visualized with interactive charts powered by Chart.js and React Chart.js.
- **Notifications**: Customizable notifications and toasts using React Hot Toast.
- **Routing**: Managed with React Router Dom for smooth navigation across pages.
- **Caching**: Optimizes performance with Apollo Client’s caching mechanism.
- **Styling**: UI designed with Tailwind CSS and enhanced using Exterity UI for a responsive user interface.

---

## Technologies Used

### Backend:
- **Node.js**: JavaScript runtime used for building the GraphQL API server.
- **Express**: Web framework for building robust API endpoints.
- **Apollo Server**: A GraphQL server library for managing GraphQL APIs.
- **MongoDB**: NoSQL database used to store user and transaction data.
- **Mongoose**: ODM (Object Data Mapper) for MongoDB.

### Authentication:
- **Passport.js**: Middleware for authentication and authorization.

### Frontend:
- **React**: JavaScript library for building the user interface.
- **Apollo Client**: Used for fetching and managing data from the GraphQL API.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Exterity UI**: Pre-built UI components for responsive design.
- **React Chart.js**: React wrapper for Chart.js, used to create interactive charts.
- **React Hot Toast**: For displaying customizable notifications and toasts.
- **React Router Dom**: Provides navigation and routing functionality.
- **React Icons**: Collection of icons for enhancing UI.

---

## Setup Instructions

### Prerequisites

Ensure that you have the following installed:
- **Node.js** (v14.x or higher)
- **MongoDB** (v4.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/expense-gql.git
   cd expense-gql
