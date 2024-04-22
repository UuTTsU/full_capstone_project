#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
from django.contrib.auth.management.commands.createsuperuser import Command as BaseCommand
class Command(BaseCommand):
    help = 'Create a superuser with only username and password fields'
    def handle(self, *args, **options):
        username = 'admin'
        password = None
        if options['interactive']:
            password = self.get_input_data('Password', options['username'])
        self.UserModel._default_manager.db_manager('default').create_superuser(username=username, password=password)
    def get_input_data(self, prompt, default):
        data = input(prompt + ': ')
        if not data:
            return default
        return data
    def execute(self, *args, **options):
        return super().execute(*args, **options)
if __name__ == '__main__':
    main()