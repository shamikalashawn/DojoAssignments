from flask import Flask, render_template, redirect, session
app = Flask(__name__)
app.secret_key = "ASecretIsThis"
counter = -1
@app.route('/')
def index():
    global counter
    counter = counter + 1
    session['counter'] = counter
    print 'counter is {}'.format(counter)
    return render_template('index.html')
@app.route('/plusTwo', methods=['POST'])
def plusTwo():
    global counter
    counter = counter + 1
    session['counter'] = counter
    print 'counter is now {}'.format(counter)
    return redirect('/')
@app.route('/reset', methods=['POST'])
def reset():
    global counter
    counter = -1
    session['counter'] = counter
    print 'counter has been reset to {}'.format(counter)
    return redirect('/')

app.run(debug=True)
