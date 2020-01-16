#!/bin/bash
. ./env.sh
export FLASK_DEBUG=1
export FLASK_ENV=development
python app.py
