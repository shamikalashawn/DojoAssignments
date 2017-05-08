from flask import Flask, render_template, redirect, session, flash, request
from datetime import datetime
from mysqlconnection import MySQLConnector
import re
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = 'I<3AllSecrets'
mysql = MySQLConnector(app, 'usersdb')

bcrypt = Bcrypt(app)

EMAIL_REG = re.compile(r'^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]*$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    user_info = {
        'fname': request.form["fname"],
        'lname': request.form["lname"],
        'email': request.form["email"],
        'password': request.form['password'],
        'password_confirmation': request.form['password_confirmation']
    }
    user_check_query = "SELECT id, email FROM usersdb.users WHERE email = :email"
    user_check = mysql.query_db(user_check_query, user_info)

    if len(user_info['fname']) == 0:
        flash('First name must be entered.')
    elif len(user_info['fname']) <= 2:
        flash('First name must be longer than two characters.')
    if not user_info['fname'].isalpha() or not user_info['lname'].isalpha():
        flash('First and last name must only contain letters of the alphabet.')
    if len(user_info['lname']) == 0:
        flash('Last name must be entered.')
    elif len(user_info['lname']) <= 2:
        flash('Last name must be longer than two characters.')
    if not EMAIL_REG.match(user_info['email']):
        flash('Please submit a valid email such as jack@coding.com.')
    if len(user_info['password']) < 8:
        flash('Password must be at least 8 characters long.')
    if user_info['password'] != user_info['password_confirmation']:
        flash('Password must match password confirmation.')
    if len(user_info['password_confirmation']) == 0:
        flash('Please confirm password.')
    if len(user_check) != 0:
        flash('Please use a different email address.')

    if "_flashes" in session:
        return redirect('/')

    user_info['password'] = bcrypt.generate_password_hash(user_info['password'])

    add_user_query = 'INSERT INTO usersdb.users (first_name, last_name, email, hashpass) VALUES(:fname, :lname, :email, :password)'
    add_user = mysql.query_db(add_user_query, user_info)
    attempt = "Registration"
    return render_template('success.html', attempt=attempt)

@app.route('/login', methods=['POST'])
def login():
    user_info = {
        'email': request.form['email'],
        'password': request.form['password']
    }

    user_query = "SELECT id, email, hashpass FROM usersdb.users WHERE email = :email"

    user = mysql.query_db(user_query, user_info)
    if user:
        if not EMAIL_REG.match(user_info['email']):
            flash('Please submit a valid email such as jack@coding.com.')
        if len(user_info['password']) < 8:
            flash('Password must be at least 8 characters long.')
        if not bcrypt.check_password_hash( user[0]['hashpass'], user_info['password']):
            flash('Password is incorrect.')
    else:
        flash('Please enter a valid email.')
    if "_flashes" in session:
        return redirect('/')

    attempt = "Login"
    return render_template('success.html', attempt=attempt)

app.run(debug=True)
