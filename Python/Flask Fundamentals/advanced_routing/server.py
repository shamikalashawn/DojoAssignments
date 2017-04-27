from flask import Flask, flash, redirect, request, render_template, session

app = Flask(__name__)
app.secret_key = "SleepySecret"

@app.route('/users/<username>')
def show_user_profile(username):
    return render_template('user.html', username=username)
app.run(debug=True)
