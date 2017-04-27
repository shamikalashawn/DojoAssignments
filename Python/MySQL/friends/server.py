from flask import Flask, flash, request, render_template, redirect, session
from mysqlconnection import MySQLConnector
import datetime

app = Flask(__name__)
app.secret_key = 'HushHushSomebodysCallinMyName'

mysql = MySQLConnector(app, 'friendsdb')

@app.route('/')
def index():
    query = "SELECT * FROM friends"  # define your query
    friends = mysql.query_db(query)  # run query with query_db()
    return render_template('index.html', all_friends=friends) # pass data to our template

@app.route('/friends/<friend_id>')
def show(friend_id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': friend_id}
    friends = mysql.query_db(query, data)
    return render_template('index.html', one_friend=friends[0])


@app.route('/friends', methods=['POST'])
def create():
    #add a friend to the database
    friend = {
        "first_name": request.form['first_name'],
        "last_name": request.form['last_name'],
        "occupation": request.form['occupation'],
    }
    add_query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES(:first_name, :last_name, :occupation, now(), now())"
    add_friend = mysql.query_db(add_query, friend)
    return redirect('/')

@app.route('/update_friend/<friend_id>', methods=['POST'])
def update(friend_id):
    query = "UPDATE friends
             SET first_name = :first_name, last_name = :last_name, occupation = :occupation
             WHERE id = :id"
    data = {
             'first_name': request.form['first_name'],
             'last_name':  request.form['last_name'],
             'occupation': request.form['occupation'],
             'id': friend_id
           }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/remove_friend/<friend_id>', methods=['POST'])
def delete(friend_id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
