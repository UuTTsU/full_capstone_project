# Generated by Django 5.0.3 on 2024-04-24 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wiwako', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField()),
            ],
        ),
    ]
