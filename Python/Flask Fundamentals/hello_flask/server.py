from flask import Flask, render_template, redirect, session, flash, request
from datetime import datetime
from mysqlconnection import MySQLConnector
import re
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.secret_key = 'I<3Secrets'
mysql = MySQLConnector(app, 'usersdb')

bcrypt = Bcrypt(app)

rightnow = datetime.now()
EMAIL_REG = re.compile(r'^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]*$')

print mysql.query_db('SELECT * FROM usersdb.users')


@app.route('/')
def hello():
    query_all = 'SELECT * FROM usersdb.users'
    all_users = mysql.query_db(query_all)
    return render_template('index.html', all_users=all_users)

@app.route('/user', methods=['POST'])
def addUser():
    user_info ={
        'fname': request.form["fname"],
        'lname': request.form["lname"],
        'email': request.form["email"],
        'password': request.form['password'],
    }
    if len(user_info['fname']) <= 2:
        flash('First name must be longer than two characters.')
    if len(user_info['lname']) <= 2:
        flash('Last name must be longer than two characters.')
    if not EMAIL_REG.match(user_info['email']):
        flash('Please submit a valid email such as jack@coding.com.')
    if len(user_info['password']) < 8:
        flash('Password must be at least 8 characters long.')

    if "_flashes" in session:
        return redirect('/')

    user_info['password'] = bcrypt.generate_passowrd_hash(user_info['password'])


    add_user_query = 'INSERT INTO usersdb.users (first_name, last_name, email, hashpass) VALUES(:fname, :lname, :email, :password)'
    add_user = mysql.query_db(add_user_query, user_info)
    return redirect('/')

@app.route('/user/<id>')
def showUser(id):
    one_user_query = "SELECT id, first_name, last_name, email FROM users WHERE id = :id"
    one_user_data = {
        "id": id
    }
    one_user = mysql.query_db(one_user_query, one_user_data)
    return render_template('user.html', user=one_user[0])

@app.route('/user/update/<id>')
def showUpdate(id):
    one_user_query = "SELECT id, first_name, last_name, email FROM users WHERE id = :id"
    one_user_data = {
        "id": id
    }
    one_user = mysql.query_db(one_user_query, one_user_data)
    return render_template('edit.html', user=one_user[0])

@app.route('/user/update/<id>', methods=['POST'])
def update(id):
    update_query = "UPDATE users set first_name = :fname, last_name = :lname, email = :email, updated_at = now() WHERE id = :id"
    update_date = {
        'fname': request.form['fname'],
        'lname': request.form['lname'],
        'email': request.form['email'],
        'id': id
    }
    mysql.query_db(update_query, update_date)
    return redirect('/user/'+id)

@app.route('/user/delete/<id>', methods=['GET'])
def deletecheck(id):
    one_user_query = "SELECT id, first_name, last_name, email FROM users WHERE id = :id"
    one_user_data = {
        "id": id
    }
    one_user = mysql.query_db(one_user_query, one_user_data)
    return render_template('delete.html', user=one_user[0])

@app.route('/user/delete', methods=['POST'])
def delete():
    delete_query = "DELETE FROM users WHERE id = :id"
    delete_data = {
        'id': request.form['user_id']
    }
    mysql.query_db(delete_query, delete_data)
    flash('User has been successfully deleted.')
    return redirect('/')

@app.route('/check', methods=['POST'])
def checkPassword():
    check_query = "SELECT id, hashpass FROM users WHERE email = :email"
    check_data = {
        'email': request.form['email']
    }
    user_info = mysql.query_db(check_query, check_data)

    if user_info[0]['hashpass'] == request.form['password']:
        flash('Yes password matches!')
    else:
        flash("Password entered is incorrect.")
    return redirect('/user'+str(user_info[0]['id']))

@app.route('/clear')
def clearSession():
    delete_all_query = 'DELETE FROM usersdb.users'
    delete_all_users = mysql.query_db(delete_all_query)
    return redirect('/')
app.run(debug=True)
