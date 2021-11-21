from flask import Flask, render_template, request

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

@app.route("/confirmacion", methods=["POST"])
def confirmacion():
    title = "Confirmación"
    data = {
        "servicio": request.form.get("servicio"),
        "nombre": request.form.get("nombre"),
        "apellidos": request.form.get("apellidos"),
        "correo": request.form.get("correo"),
        "fecha": request.form.get("fecha"),
        "hora": request.form.get("hora"),
        "cantAdultos": request.form.get("cantAdultos"),
        "cantNinios": request.form.get("cantNinios"),
        "total": request.form.get("total")
    }
    return render_template("confirmacion.html", title=title, data=data)

if __name__ == "__main__":
    app.run(debug=True)