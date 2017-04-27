from flask import Flask, flash, redirect, render_template, request, session

from mysqlconnection import MySQLConnector

import datetime

import re

app = Flask(__name__)
app.secret_key = 'Shhhhhheeep'
mysql = MySQLConnector(app, 'email_addresses')
EMAIL_REGEX = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = {
        'email': request.form['email']
    }
    if not EMAIL_REGEX.match(request.form['email']) or len(request.form['email']) < 5:
        flash('Email not valid', 'error')
        return redirect('/')
    else:
        add_query = "INSERT INTO email_addresses (email, created_at, updated_at) VALUES (:email, now(), now())"
        add_email = mysql.query_db(add_query, data)
        all_query = "SELECT * FROM email_addresses"
        all_emails = mysql.query_db(all_query)
        return render_template('success.html', all_emails=all_emails, email=data['email'])

@app.route('/delete', methods=['POST'])
def delete():
    data = {
        'delete_email_id': request.form['delete_email']
    }
    delete_query = "DELETE FROM email_addresses WHERE id = :delete_email_id"
    delete_email = mysql.query_db(delete_query, data)
    all_query = "SELECT * FROM email_addresses"
    all_emails = mysql.query_db(all_query)
    return render_template('success.html', all_emails=all_emails)

app.run(debug=True)
