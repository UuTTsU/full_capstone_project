from django.db import models
from categories.models import Category

class Photo(models.Model):
    image = models.ImageField(upload_to="wiwakebi_photos/")
    wiwako = models.ForeignKey('Wiwako', on_delete=models.CASCADE, related_name='photos')

class Wiwako(models.Model):
    Eng_name = models.CharField(max_length=50)
    Geo_name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    in_stock = models.BooleanField(default=True)
    Price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.Geo_name
