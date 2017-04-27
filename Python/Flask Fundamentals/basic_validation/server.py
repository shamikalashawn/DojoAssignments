from flask import Flask, redirect, render_template, session, flash, request
app = Flask(__name__)
app.secret_key = "Shhhhhhhh"
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/process', methods=['POST'])
def process():
    if len(request.form['name'] < 1):
        #display validation errors
        flash('Name cannot be empty!')
    else:
        #display success message
        flash('Success! Your name is {}'.format(request.form['name']))
    return redirect('/') #either way the application should return to the index and display the message
app.run(debug=True)
