
```markdown
# EaZyRecipes

EaZyRecipes is a web application that allows users to view, add, search, and review recipes. This project was developed as part of a Database Management System (DBMS) course. The application uses a backend server to manage the recipes and reviews, and a frontend client to display and interact with the data.

## Features

- View a list of recipes
- View detailed information about a single recipe
- Add new recipes
- Search for recipes
- Add reviews to recipes
- User authentication (login and registration)

## Technologies Used

- Frontend: React, React Router, Axios, Font Awesome
- Backend: Python, Flask
- Database: MySQL (using XAMPP and phpMyAdmin)
- Styling: CSS, Bootstrap

## Installation
```
1. Clone the repository:
   ```sh
   git clone https://github.com/arjunsunil-boop/easy-recipe-app.git
   cd easy-recipe-app
   ```

2. Install the dependencies for the frontend:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

4. Navigate to the `Server` directory:
   ```sh
   cd Server
   ```

5. Install the dependencies for the backend:
   ```sh
   pip install -r requirements.txt
   ```

6. Set up the MySQL database using XAMPP:
   - Open XAMPP and start the Apache and MySQL modules.
   - Open phpMyAdmin by navigating to `http://localhost/phpmyadmin` in your browser.
   - Create a new database named `easyrecp`.
   - Import the `esyrecp.sql` file into the `easyrecp` database.

7. Start the backend server:
   ```sh
   python api.py
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the navigation bar to explore the different features of the application.
3. View recipes, add new recipes, search for recipes, and add reviews.

## Project Structure

### Root Directory

- `Server/`
  - `api.py`: Entry point for the backend server.
  - `esyrecp.sql`: SQL file to set up the database schema and initial data.

### Frontend

- `src/`
  - `components/`: Contains the React components for the application.
    - `Navbar.jsx`: Navigation bar component.
    - `ViewRecipes.jsx`: Component to view a list of recipes.
    - `ViewRecipeSingle.jsx`: Component to view detailed information about a single recipe.
    - `AddRecipes.jsx`: Component to add new recipes.
    - `UserLogin.jsx`: Component for user login.
    - `UserCreate.jsx`: Component for user registration.
  - `App.js`: Main application component.
  - `index.js`: Entry point for the React application.
  - `App.css`: Global styles for the application.
  - `Navbar.css`: Styles for the navigation bar.
  - `ViewRecipes.css`: Styles for the ViewRecipes component.
  - `ViewRecipeSingle.css`: Styles for the ViewRecipeSingle component.
  - `UserLogin.css`: Styles for the UserLogin component.

## Database

The project uses MySQL as the database to store recipes and reviews. The database schema includes tables for recipes and reviews, with appropriate relationships between them.

### Recipes Table

- `recipe_id`: Unique identifier for the recipe.
- `name`: Name of the recipe.
- `description`: Description of the recipe.
- `ingredients`: List of ingredients required for the recipe.
- `instructions`: Step-by-step instructions for preparing the recipe.
- `cooking_time`: Cooking time in minutes.
- `servings`: Number of servings.
- `recipe_img`: URL of the recipe image.

### Reviews Table

- `review_id`: Unique identifier for the review.
- `recipe_id`: Identifier of the recipe being reviewed.
- `rating`: Rating given to the recipe (1-5).
- `review_text`: Text of the review.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project was developed as part of a Database Management System (DBMS) course. Special thanks to the course instructors and teaching assistants for their guidance and support.
```

Feel free to customize the 

README.md

 file further based on your specific project details and requirements.
