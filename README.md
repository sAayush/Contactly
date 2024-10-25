# Angular + .NET Project

This project is a web application built with an Angular frontend and a .NET backend. It provides a responsive user interface with data management functionality, and requires a setup of both Angular and .NET environments to run locally.

---

## Table of Contents

- [Angular + .NET Project](#angular--net-project)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)

---

## Prerequisites

Ensure you have the following installed:

1. **Node.js** - Download and install [Node.js](https://nodejs.org/).
2. **Angular CLI** - Install globally by running:
   ```bash
   npm install -g @angular/cli
   ```

3. .NET SDK - Download and install .NET SDK.
4. Visual Studio and Visual Studio Code - for development and debugging.

## Installation

Step 1: Clone the repository
```bash
   git clone https://github.com/your-username/your-repository.git
   cd folder
   ```
Step 2: Install Angular dependencies
Navigate to the Angular project folder - frontend/contactly.
```bash
    cd folder
    npm install
```
Step 3: Restore .NET packages
Navigate back to the root directory of the project then to backend- backend/contactly.
```bash
dotnet restore
```
Step 4: Databse Setup
Be in Backend directory and run these commands
```bash
Add-Migration "Initial Migration"
Update-Database
```

## Running the Application

1. Running the .NET Backend
From the root of the backend project folder (where the .csproj file is located), run:

```bash
dotnet build
dotnet run
```
2. Running the Angular Frontend
Open a new terminal, navigate to the ClientApp or frontend folder, and run:
```bash
ng serve
```
The frontend application should now be available at http://localhost:4200.

1. Accessing the Application
Visit http://localhost:4200 in your browser. The Angular frontend should communicate with the .NET backend to fetch data a

**Technologies Used**
- Angular - Frontend framework
- .NET Core - Backend framework