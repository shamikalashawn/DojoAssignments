from flask import Flask, flash, redirect, render_template, request, session

app = Flask(__name__)
app.secret_key = "NinjaSecrets"
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/ninja')
def ninja():
    return render_template('ninja.html')
@app.route('/ninja/<ninja_color>')
def ninja_color(ninja_color):
    return render_template('ninja.html', color=ninja_color)
app.run(debug=True)
