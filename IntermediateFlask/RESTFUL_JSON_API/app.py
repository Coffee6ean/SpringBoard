from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from models import db, connect_db, Todo
from Keys.secrets import RESTFUL_APP_KEY

app = Flask(__name__)

app.app_context().push()

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///todos_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = RESTFUL_APP_KEY

connect_db(app)

def fill_app():
    from seed import initialize_app, seed_data
    initialize_app()
    seed_data()

fill_app()      

# ROUTES 
@app.route('/')
def index_page():
    todos = Todo.query.all()
    return render_template('index.html', todos=todos)

@app.route('/api/todos')
def list_todos():
    all_todos = [todo.serialize() for todo in Todo.query.all()]
    return jsonify(todos=all_todos)

@app.route('/api/todos/<int:id>')
def get_todo(id):
    todo = Todo.query.get_or_404(id)
    return jsonify(todo=todo.serialize())

@app.route('/api/todos', methods=['POST'])
def create_todo():
    # Assumes that the title is being passed in
    new_todo = Todo(title=request.json['title'])
    db.session.add(new_todo)
    db.session.commit()

    response_json = jsonify(todo=new_todo.serialize())

    return (response_json, 201)

@app.route('/api/todos/<int:id>', methods=['PATCH'])
def update_todo(id):
    todo = Todo.query.get_or_404(id)
    todo.title = request.json.get('title', todo.title)
    todo.done = request.json.get('done', todo.done)
    db.session.commit()

    return jsonify(todo=todo.serialize())

@app.route('/api/todos/<int:id>', methods=['DELETE'])
def delete_todo(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()

    return jsonify(message='Deleted')
