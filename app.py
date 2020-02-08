import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"

@app.route('/', strict_slashes=False)
def home():
    return render_template('home/home.html')

@app.route('/portfolio', strict_slashes=False)
def portfolio():
    return render_template('portfolio/portfolio.html')

@app.route('/journey', strict_slashes=False)
def journey():
    return render_template('journey/journey.html')

@app.route('/about', strict_slashes=False)
def about():
    return render_template('about/about.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run()