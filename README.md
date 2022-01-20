# shopify-backend-challenge-summer2022
The challenge is to build an inventory tracking web application with CRUD operations and one additional feature. I chose to implement a push button feature to export product data to a CSV. Built with ExpressJS for the backend, MongoDB for the data management, and EJS view engine for the front end

---

#### [Try the demo application on heroku](https://shopify-challenge-summer2022.herokuapp.com/) or

#### Run the application on your local machine by following these steps

1. Make sure that the following has been installed on your local machine
    * NodeJS and npm - [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. To check if nodeJS and npm has been installed successfully, run the following commands in a command prompt
```
node -v
npm -v
```
these commands should return the version numbers for node and npm, respectively.

3. Open node.js command prompt and navigate to the directory of the project and install all packages using the command below
```
npm install
```

4. Once packages are installed, run this command next to start the application
```
npm start
```

5. If you encounter an error stating that the port is already being used, follow these steps.
    1. Open the server.js file on the root folder of the project.
    1. Change the port (currently set to 3000) to another number.
    1. Save the changed file.
    1. Re-run command on step 4

6. Open http://localhost:3000/ on your browser. (if port was changed on step 5, replace 3000 with the port number used)


