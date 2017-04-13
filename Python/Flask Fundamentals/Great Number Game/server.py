from flask import Flask, redirect, request, render_template, session
import random

app = Flask(__name__)
app.secret_key = "SecretGarden"
@app.route('/')
def index():
    session['number'] = random.randrange(0,101)
    print 'the number is '
    print session['number']
    return render_template('index.html')
    session['guess'] = request.form['guess']
@app.route('/guess', methods=['POST'])
def guess():
    session['guess'] = request.form['guess']
    print 'guess: '
    print session['guess']
    print 'the number is '
    print session['number']
    if int(session['guess']) < session['number']:
        return render_template('tooLow.html')
    elif int(session['guess']) > session['number']:
        return render_template('tooHigh.html')
    elif int(session['guess']) == session['number']:
        return render_template('right.html')
@app.route('/play', methods=['POST'])
def playAgain():
    return redirect('/')
app.run(debug=True)
