from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from flask_marshmallow import Marshmallow
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'esyrecp'
mysql = MySQL(app)

@app.route("/add_recipe", methods=["POST"])
def add_recipe():
    _json = request.json
    name = _json['name']
    description = _json.get('description')
    servings = _json.get('servings')
    cooking_time = _json.get('cooking_time')
    recipe_img = _json.get('recipe_img')  # Assuming recipe_img is provided in the JSON payload
    instructions = _json.get('instructions')  # Assuming instructions is a list of dictionaries with 'step_number' and 'description'
    ingredients = _json.get('ingredients')  # Assuming ingredients is a list of dictionaries with 'name', 'quantity', and 'unit'
    
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO recipes(Name, Description, Servings, Cooking_Time, Recipe_Img) VALUES(%s, %s, %s, %s, %s)", 
                   (name, description, servings, cooking_time, recipe_img))
    recipe_id = cursor.lastrowid
    
    for instruction in instructions:
        step_number = instruction.get('step_number')
        instruction_description = instruction.get('description')
        cursor.execute("INSERT INTO instructions(Recipe_ID, Step_Number, Description) VALUES(%s, %s, %s)", 
                       (recipe_id, step_number, instruction_description))
    
    for ingredient in ingredients:
        ingredient_name = ingredient.get('name')
        quantity = ingredient.get('quantity')
        unit = ingredient.get('unit')
        
        # Check if the ingredient already exists in the ingredients table
        cursor.execute("SELECT Ingredient_ID FROM ingredients WHERE Name = %s", (ingredient_name,))
        ingredient_row = cursor.fetchone()
        
        if ingredient_row:
            ingredient_id = ingredient_row[0]
        else:
            cursor.execute("INSERT INTO ingredients(Name) VALUES(%s)", (ingredient_name,))
            ingredient_id = cursor.lastrowid
        
        cursor.execute("INSERT INTO recipe_ingredients(Recipe_ID, Ingredient_ID, Quantity, Unit) VALUES(%s, %s, %s, %s)", 
                       (recipe_id, ingredient_id, quantity, unit))
    
    mysql.connection.commit()
    cursor.close()
    return jsonify("Recipe, instructions, and ingredients added successfully")

@app.route("/recipes", methods=["GET"])
def get_all_recipes():
    cursor = mysql.connection.cursor()
    
    # Get all recipes
    cursor.execute("SELECT Recipe_ID, Name, Description, Servings, Cooking_Time, Rating, Recipe_img FROM recipes")
    recipes_rows = cursor.fetchall()
    
    recipes = []
    for recipe_row in recipes_rows:
        recipe_id = recipe_row[0]
        recipe = {
            'recipe_id': recipe_id,
            'name': recipe_row[1],
            'description': recipe_row[2],
            'servings': recipe_row[3],
            'cooking_time': recipe_row[4],
            'rating': recipe_row[5],
            'recipe_img': recipe_row[6]  # Assuming Recipe_Image is stored as a binary blob
        }
        
        # Get instructions for the current recipe
        cursor.execute("SELECT Step_Number, Description FROM instructions WHERE Recipe_ID = %s ORDER BY Step_Number", (recipe_id,))
        instructions_rows = cursor.fetchall()
        instructions = [{'step_number': row[0], 'description': row[1]} for row in instructions_rows]
        
        # Get ingredients for the current recipe
        cursor.execute("""
            SELECT i.Name, ri.Quantity, ri.Unit 
            FROM recipe_ingredients ri
            JOIN ingredients i ON ri.Ingredient_ID = i.Ingredient_ID
            WHERE ri.Recipe_ID = %s
        """, (recipe_id,))
        ingredients_rows = cursor.fetchall()
        ingredients = [{'name': row[0], 'quantity': row[1], 'unit': row[2]} for row in ingredients_rows]
        
        recipe['instructions'] = instructions
        recipe['ingredients'] = ingredients
        
        recipes.append(recipe)
    
    cursor.close()
    return jsonify(recipes)


@app.route("/search_recipe", methods=["POST"])
def search_recipe():
    _json = request.json
    searchkey = _json['name']
    
    cursor = mysql.connection.cursor()
    query = "SELECT Recipe_ID, Name, Description, Servings, Cooking_Time, Rating, Recipe_Img FROM recipes WHERE Name LIKE %s"
    
    # Get all matching recipes
    cursor.execute(query, (searchkey + '%',))
    recipes_rows = cursor.fetchall()
    
    if not recipes_rows:
        cursor.close()
        return jsonify({"error": "No recipes found"}), 404
    
    recipes = []
    for recipe_row in recipes_rows:
        recipe_id = recipe_row[0]
        recipe = {
            'recipe_id': recipe_row[0],
            'name': recipe_row[1],
            'description': recipe_row[2],
            'servings': recipe_row[3],
            'cooking_time': recipe_row[4],
            'rating': recipe_row[5],
            'recipe_img': recipe_row[6]  # Assuming Recipe_Image is stored as a binary blob
        }
        
        # Get instructions for the recipe
        cursor.execute("SELECT Step_Number, Description FROM instructions WHERE Recipe_ID = %s ORDER BY Step_Number", (recipe_id,))
        instructions_rows = cursor.fetchall()
        instructions = [{'step_number': row[0], 'description': row[1]} for row in instructions_rows]
        
        # Get ingredients for the recipe
        cursor.execute("""
            SELECT i.Name, ri.Quantity, ri.Unit 
            FROM recipe_ingredients ri
            JOIN ingredients i ON ri.Ingredient_ID = i.Ingredient_ID
            WHERE ri.Recipe_ID = %s
        """, (recipe_id,))
        ingredients_rows = cursor.fetchall()
        ingredients = [{'name': row[0], 'quantity': row[1], 'unit': row[2]} for row in ingredients_rows]
        
        recipe['instructions'] = instructions
        recipe['ingredients'] = ingredients
        
        recipes.append(recipe)
    
    cursor.close()
    return jsonify(recipes)

@app.route("/recipe/<int:recipe_id>", methods=["GET"])
def get_recipe(recipe_id):
    cursor = mysql.connection.cursor()
    
    # Get the recipe details
    cursor.execute("SELECT Recipe_ID, Name, Description, Servings, Cooking_Time, Rating, Recipe_Img FROM recipes WHERE Recipe_ID = %s", (recipe_id,))
    recipe_row = cursor.fetchone()
    
    if not recipe_row:
        cursor.close()
        return jsonify({"error": "Recipe not found"}), 404
    
    recipe = {
        'recipe_id': recipe_row[0],
        'name': recipe_row[1],
        'description': recipe_row[2],
        'servings': recipe_row[3],
        'cooking_time': recipe_row[4],
        'rating': recipe_row[5],
        'recipe_img': recipe_row[6]  # Assuming Recipe_Image is stored as a binary blob
    }
    
    # Get instructions for the recipe
    cursor.execute("SELECT Step_Number, Description FROM instructions WHERE Recipe_ID = %s ORDER BY Step_Number", (recipe_id,))
    instructions_rows = cursor.fetchall()
    instructions = [{'step_number': row[0], 'description': row[1]} for row in instructions_rows]
    
    # Get ingredients for the recipe
    cursor.execute("""
        SELECT i.Name, ri.Quantity, ri.Unit 
        FROM recipe_ingredients ri
        JOIN ingredients i ON ri.Ingredient_ID = i.Ingredient_ID
        WHERE ri.Recipe_ID = %s
    """, (recipe_id,))
    ingredients_rows = cursor.fetchall()
    ingredients = [{'name': row[0], 'quantity': row[1], 'unit': row[2]} for row in ingredients_rows]
    
    recipe['instructions'] = instructions
    recipe['ingredients'] = ingredients
    
    cursor.close()
    return jsonify(recipe)


@app.route("/login", methods=["POST"])
def checklogin():
       
        _json = request.json
        cursor = mysql.connection.cursor()
        username = _json['username']
        password = _json['password']
        cursor.execute("SELECT Password FROM users WHERE Username = %s", (username,))
        user_row = cursor.fetchone()
        
        if user_row and user_row[0] == password:
            cursor.close()
            return jsonify({"message": "Login successful"})
        else:
            cursor.close()
            return jsonify({"error": "Invalid username or password"}), 401
        
@app.route("/create_user", methods=["POST"])
def create_user():
    _json = request.json
    cursor = mysql.connection.cursor()
    username = _json['username']
    password = _json['password']
    
    try:
        cursor.execute("INSERT INTO users (Username, Password) VALUES (%s, %s)", (username, password))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"message": "User created successfully"})
    except Exception as e:
        cursor.close()
        return jsonify({"error": str(e)}), 500        
        
        
@app.route("/add_review", methods=["POST"])
def add_review():
    _json = request.json
    recipe_id = _json['Recipe_ID']
    rating = _json['Rating']
    review_text = _json['Review_Text']
    
    cursor = mysql.connection.cursor()
    
    try:
        cursor.execute("INSERT INTO user_reviews (Recipe_ID, Rating, Review_Text) VALUES (%s, %s, %s)", 
                       (recipe_id, rating, review_text))
        mysql.connection.commit()
        cursor.close()
        return jsonify({"message": "Review added successfully"})
    except Exception as e:
        cursor.close()
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

if __name__ == "__main__":
    app.run(debug=True)





