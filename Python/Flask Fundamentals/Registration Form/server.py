from flask import Flask, request, redirect, render_template, session, flash
import re

app = Flask(__name__)
app.secret_key = "ImOnASecret"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'^[a-zA-Z]')
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/process', methods=['POST'])
def submit():
    if len(request.form['email']) < 5:
        flash('Email must be entered.', 'error')
    if len(request.form['first_name']) < 1:
        flash('First name must be entered.', 'error')
    if len(request.form['last_name']) < 1:
        flash('Last name must be entered.', 'error')
    if len(request.form['password']) < 8:
        flash('Password must be more than 8 characters.', 'error')
    if not NAME_REGEX.match(request.form['first_name']) or not NAME_REGEX.match(request.form['last_name']):
        flash('First and last name must only include letters.', 'error')
    if request.form['password'] != request.form['confirm_password']:
        flash('Confirm password must match password.', 'error')
    if not EMAIL_REGEX.match(request.form['email']):
        flash('Please input a valid email address such as joe@mail.com.', 'error')

    if '_flashes' in session:
        return redirect('/')
    else:
        flash('Thanks for submitting your information.', 'success')
        return redirect('/')
app.run(debug=True)
