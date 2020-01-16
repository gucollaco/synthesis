#!/bin/bash
. ./env.sh
export FLASK_DEBUG=0
export FLASK_ENV=production
python app.py
