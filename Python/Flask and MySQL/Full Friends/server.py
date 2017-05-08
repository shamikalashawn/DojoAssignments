from flask import Flask, flash, request, render_template, redirect, session
from mysqlconnection import MySQLConnector
import datetime
import re

app = Flask(__name__)
app.secret_key = 'ShushKabob'
mysql = MySQLConnector(app, 'full_friends')
EMAIL_REGEX = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

@app.route('/')
def index():
    query_all = 'SELECT * FROM full_friends.friends'
    all_users = mysql.query_db(query_all)
    return render_template('index.html', all_users=all_users)

@app.route('/friends', methods=['POST'])
def create():
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email'],
    }
    if len(data['fname']) < 2:
        flash('First name must be longer than 2 characters', 'error')
    if len(data['lname']) < 2:
        flash('Last name must be longer than 2 characters', 'error')
    if not EMAIL_REGEX.match(data['email']) or len(data['email']) < 5:
        flash('Email not valid', 'error')

    if '_flashes' in session:
        return redirect('/')

    add_query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES(:fname, :lname, :email, now(), now())"
    add_friend = mysql.query_db(add_query, data)
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit(id):
    edit_query = "SELECT id, first_name, last_name, email FROM friends WHERE id = :id"
    data = {
        "id": id
    }
    edit_user = mysql.query_db(edit_query, data)
    print edit_user
    return render_template('edit.html', user=edit_user[0])

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    data = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email'],
        'id': id
    }
    if len(data['fname']) < 2:
        flash('First name must be longer than 2 characters', 'error')
    if len(data['lname']) < 2:
        flash('Last name must be longer than 2 characters', 'error')
    if not EMAIL_REGEX.match(data['email']) or len(data['email']) < 5:
        flash('Email not valid', 'error')

    if '_flashes' in session:
        return redirect('/')

    update_query = "UPDATE friends SET first_name=:fname, last_name=:lname, email=:email WHERE id=:id"
    update_friends = mysql.query_db(update_query, data)
    return redirect('/')

@app.route('/friends/<id>/delete/', methods=['POST'])
def destroy(id):
    delete_query = "DELETE FROM friends WHERE id = :id"
    delete_data = {
        'id': id
    }
    mysql.query_db(delete_query, delete_data)
    flash('User has been successfully deleted.', 'error')
    return redirect('/')

app.run(debug=True)
