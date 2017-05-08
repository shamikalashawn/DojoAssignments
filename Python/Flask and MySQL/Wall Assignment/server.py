from flask import Flask, flash, request, render_template, redirect, session
from mysqlconnection import MySQLConnector
import datetime
import re
from flask_bcrypt import Bcrypt


app = Flask(__name__)
app.secret_key = 'SecretKeeper'

mysql = MySQLConnector(app, 'wall_assignment')

bcrypt = Bcrypt(app)


EMAIL_REGEX = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    user = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'password': request.form['password']
    }

    user_check_query = "SELECT id, email FROM users WHERE email=:email"
    user_check = mysql.query_db(user_check_query, user)

    if len(user['first_name']) < 2:
        flash('First name must be at least two characters.', 'error')
    if len(user['last_name']) < 2:
        flash('Last name must be at least two characters.', 'error')
    if not EMAIL_REGEX.match(user['email']) or len(user['email']) < 5:
        flash('Please enter a valid email address.', 'error')
    if len(user['password']) < 8:
        flash('Password must be at least 8 characters.', 'error')
    if user['password'] != request.form['password_confirmation']:
        flash('Password confirmation must match password.', 'error')
    if len(user_check) != 0:
        flash('Please enter a different email address.', 'error')
    if len(user['first_name']) == 0 or len(user['last_name']) == 0 or len(user['email']) == 0 or len(user['password']) == 0 or len(request.form['password_confirmation']) == 0:
        flash('All fields must be entered.', 'error')

    if '_flashes' in session:
        return redirect('/')

    user['password'] = bcrypt.generate_password_hash(user['password'])

    add_query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES(:first_name, :last_name, :email, :password, now(), now())"

    add_id = mysql.query_db(add_query, user)

    print add_id
    session['id'] = add_id
    user_id = {
        'id': add_id
    }

    user_query = "SELECT first_name FROM users WHERE id=:id"
    user = mysql.query_db(user_query, user_id)


    return render_template('wall.html', user=user[0])


@app.route('/login', methods=['POST'])
def login():
    user = {
        'email': request.form['email'],
        'password': request.form['password']
    }

    if len(user['email']) == 0 or len(user['password']) == 0:
        flash('All fields must be entered.', 'error')

    user_check_query = "SELECT id, first_name, email, password FROM users WHERE email=:email"
    user_check = mysql.query_db(user_check_query, user)
    if not user_check or not bcrypt.check_password_hash(user_check[0]['password'], user['password']):
            flash('Email or password is incorrect. Please try again.', 'error')

    if '_flashes' in session:
        return redirect('/')

    session['id'] = user_check[0]['id']
    return redirect('/wall')

@app.route('/message', methods=['POST'])
def message():
    if int(request.form['user_id']) != int(session['id']):
        flash('Please log in to post a message.', 'error')
        return redirect('/')
    if len(request.form['message']) == 0:
        flash('Please enter message.', 'error')
        return redirect('/wall')

    message_content = {
        'message': request.form['message'],
        'user_id': request.form['user_id']
    }
    add_message_query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, now(), now())"

    mysql.query_db(add_message_query, message_content)
    return redirect('/wall')

@app.route('/comment', methods=['POST'])
def comment():
    if int(request.form['user_id']) != int(session['id']):
        flash('Please log in to post a comment.', 'error')
        return redirect('/')
    if len(request.form['comment']) == 0:
        flash('Please enter comment.', 'error')
        return redirect('/wall')

    comment_content = {
        'comment': request.form['comment'],
        'user_id': request.form['user_id'],
        'message_id': request.form['message_id']
    }
    add_comment_query = "INSERT INTO comments (user_id, comment, message_id, created_at, updated_at) VALUES (:user_id, :comment, :message_id, now(), now())"

    mysql.query_db(add_comment_query, comment_content)
    return redirect('/wall')

@app.route('/logoff')
def logoff():
    session.clear()
    return redirect('/')

@app.route('/wall')
def wall():
    if 'id' in session:
        user_query = "SELECT id, first_name FROM users WHERE id=:id"
        user_id ={
            'id': session['id']
        }
        user = mysql.query_db(user_query, user_id)

        all_messages_query = "SELECT messages.id, user_id, message, DATE_FORMAT(messages.created_at, '%M %d, %Y %h:%i %p') AS 'timestamp', CONCAT(users.first_name, ' ', users.last_name) AS 'name' FROM messages JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC"

        all_messages = mysql.query_db(all_messages_query)

        all_comments_query = "SELECT message_id, comment,  DATE_FORMAT(comments.created_at, '%M %d, %Y %h:%i %p') AS 'timestamp', CONCAT(users.first_name, ' ', users.last_name) AS 'name' FROM comments JOIN users ON comments.user_id = users.id ORDER BY comments.created_at"

        all_comments = mysql.query_db(all_comments_query)

        return render_template('wall.html', user=user[0], messages=all_messages, comments=all_comments)
    else:
        flash('Please register or log-in.', 'error')
        return redirect('/')

@app.route('/user/<id>')
def showUser(id):
    if session['id'] != int(id):
        return redirect('/')

    user_query = "SELECT id, first_name, last_name, email FROM users WHERE id=:id"
    user_id ={
        'id': id
    }
    user = mysql.query_db(user_query, user_id)
    return render_template('user.html', user=user[0])

@app.route('/user/<id>/edit', methods=['POST'])
def edit(id):
    #Confirm user accessing page is logged in to that account
    if session['id'] != int(id):
        return redirect('/')

    original_user_query = "SELECT id, email, first_name, last_name FROM users WHERE id=:id"

    original_user_id = {
        'id': id
    }

    original_user = mysql.query_db(original_user_query, original_user_id)

    #Edited information user input
    new_user_info = {
        'first_name': request.form['fname'],
        'last_name': request.form['lname'],
        'email': request.form['email'],
        'id': id
    }

    user_check_query = "SELECT id, email FROM users WHERE email=:email"

    user_check = mysql.query_db(user_check_query, new_user_info)

    #Validation on edited information
    if len(new_user_info['first_name']) < 2:
        flash('First name must be at least two characters.', 'error')
    if len(new_user_info['last_name']) < 2:
        flash('Last name must be at least two characters.', 'error')
    if not EMAIL_REGEX.match(new_user_info['email']) or len(new_user_info['email']) < 5:
        flash('Please enter a valid email address.', 'error')
    if len(new_user_info['first_name']) == 0 or len(new_user_info['last_name']) == 0 or len(new_user_info['email']) == 0:
        flash('All fields must be entered.', 'error')
    #need to determine if email entered is either the same (then allow it to pass on and do not update it) or if it is repeated in the data (in which case need to flash that they need to enter a different email address.)
    if len(user_check) != 0 and user_check[0]['email'] != original_user[0]['email']:
        flash('Please enter a valid email address.', 'error')

    #Check for errors in input
    if '_flashes' in session:
        return redirect('/user/' + str(id))

    #Query to edit user content
    edit_query = "UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email updated_at = now() WHERE id = :id"

    #Function to edit user content which returns nothing
    mysql.query_db(edit_query, new_user_info)

    #Updated user info from the database for the webpage
    updated_user_query = "SELECT id, email, first_name, last_name FROM users WHERE id=:id"
    original_user_id = {
        'id': id
    }
    updated_user = mysql.query_db(updated_user_query, original_user_id)
    return render_template('user.html', user=updated_user[0])

@app.route('/delete')
def delete():
    #Remove email address from user so that person cannot log in again unless they register.
    delete_query = "UPDATE users SET email = NULL, password = NULL WHERE id=:id"

    #Set user's email and password to null
    mysql.query_db(delete_query, session)
    return redirect('/')

app.run(debug=True)
