from flask import Flask, render_template, redirect, request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result', methods=['POST'])
def result():
    name = request.form['name']
    location = request.form['location']
    favLanguage = request.form['favLanguage']
    comment = request.form['comment']
    return render_template('result.html', name=name, location=location, favLanguage = favLanguage, comment=comment)

app.run(debug=True)
