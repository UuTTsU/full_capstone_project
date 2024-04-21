from django.db import models

class Category(models.Model):
    CATEGORY_CHOICES = [
        ('category1', 'Category1'),
        ('category2', 'Category2'),
        ('category3', 'Category3'),
        ('pepper', 'Pepper'),
        ('dwarf_tomatoes', 'Dwarf tomatoes'),
        ('basilica', 'Basilica'),
    ]

    title = models.CharField(max_length=100, choices=CATEGORY_CHOICES, primary_key=True)

    def __str__(self):
        return self.title
