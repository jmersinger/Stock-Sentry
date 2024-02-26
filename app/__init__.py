from flask import Flask, request, jsonify
from app import app

function = Flask(__name__)


from app import routes