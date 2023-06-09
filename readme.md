# ToDo App

This is a simple ToDo app built with React on the frontend and Node.js with Express and Sequelize on the backend. It allows users to add, edit, complete and delete tasks.

## Technologies

- React
- Axios
- Node.js
- Express
- Sequelize
- PostgreSQL

## Getting Started

1. Clone the repository: `git clone https://github.com/FabianGenell/todo-fullstack/`
2. Install dependencies: `npm install`
3. Set up a PostgreSQL database and create a `.env` file with the following environment variables:
   ```
   USER=
   PASSWORD=
   DB_NAME=
   HOST=
   PORT=
   JWT_SECRET=
   ```
4. Start the server: `npm run dev` - same command applies both for server and client.

## Usage
- Login or create and account
- Add a new task by typing into the input field and pressing enter or clicking the plus button
- Complete a task by ticking the box next to it
- Edit a task by clicking on it or the pen icon and making changes in the input field
- Delete a task by clicking the delete button next to it

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
