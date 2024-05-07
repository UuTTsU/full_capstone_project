#!/bin/sh

python manage.py makemigrations 
python manage.py migrate  
python manage.py collectstatic 
python manage.py runserver 

gunicorn backend.wsgi:application --bind 0.0.0:8000