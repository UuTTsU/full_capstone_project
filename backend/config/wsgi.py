import os
from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise
from backend import application as MyWSGIApp
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
application = get_wsgi_application()
application = MyWSGIApp()
application = WhiteNoise(application, root='full_capstone_project/backend/staticfiles')