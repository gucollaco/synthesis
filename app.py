from flask import Flask, render_template

app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"

@app.route('/')
def home():
    return render_template('home/home.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio/portfolio.html')

@app.route('/resume')
def resume():
    return render_template('resume/resume.html')

@app.route('/education')
def education():
    return render_template('education/education.html')

@app.route('/about')
def about():
    return render_template('about/about.html')

if __name__ == '__main__':
    app.run(debug=True)