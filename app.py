from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    title = "Inicio"
    return render_template("index.html", title=title)

@app.route("/servicios")
def servicio():
    title = "Servicios"
    return render_template("servicios.html", title=title)

@app.route("/galeria")
def galeria():
    title = "Galería"
    return render_template("galeria.html", title=title)

@app.route("/bootstrap")
def bootstrap():
    title = "Bootstrap"
    return render_template("bootstrap.html", title=title)

@app.route("/reservar")
def reservar():
    title = "Reservar"
    return render_template("reservar.html", title=title)

if __name__ == "__main__":
    app.run(debug=True)