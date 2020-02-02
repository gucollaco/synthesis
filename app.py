import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"

@app.route('/')
def home():
    return render_template('home/home.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio/portfolio.html')

@app.route('/journey')
def journey():
    return render_template('journey/journey.html')

@app.route('/about')
def about():
    return render_template('about/about.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run()