import os
from flask import Flask, request, render_template, redirect, url_for, flash
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "dev-secret-key")

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)


@app.route("/", methods=["GET"])
def index():
    return render_template("form.html")


@app.route("/submit", methods=["POST"])
def submit():
    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    message = request.form.get("message", "").strip()

    if not name or not email:
        flash("이름과 이메일은 필수입니다.")
        return redirect(url_for("index"))

    try:
        response = (
            supabase.table("submissions")
            .insert({
                "name": name,
                "email": email,
                "message": message,
            })
            .execute()
        )
        flash("제출이 완료되었습니다!")
    except Exception as e:
        flash(f"오류가 발생했습니다: {e}")

    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))