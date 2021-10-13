Insurance project.

Implements login page functionality:
- reading the data input from the user
- querying the API based on that data
- receiving login token
- based on the login token, retrieving the policy data from the API


NPM used:
- Axios to fetch the data
- cookie parser to store the logged in user token in cookies and pass it via cookies between controllers
- pug.js for front end
- node.js and express.js for back end

Estimated time spent:
apx 7-8h.
I've split the task in bits: 
-design login and policy pages, 
-adding working server and routes, 
-adding fetch functionality
-refactoring and cleaning

Next steps would be:
-implement error handling by creating a middleware and additiona template for rendering error messages
