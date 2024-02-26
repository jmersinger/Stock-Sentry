from flask import render_template
from app import app

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/stocks/getstarted')
def get_started():
    return render_template('getstarted.html')

@app.route('/stocks/choosestocks')
def choose_stocks():
    return render_template('choosestocks.html')

@app.route('/stocks/mystocks')
def my_stocks():
    return render_template('mystocks.html')

@app.route('/about/about')
def about():
    return render_template('about.html')

@function.route("/")
def index():
    return app.send.static.file("index.html")

@function.route("/api", methods=["POST"])
def api():
    data = request.json
    print = ("Recieved Finnhub Webhook")
    return jsonify({"message": "Webhook recieved successfully"})

if __name__ == "__main__":
    function.run(port=5000)
