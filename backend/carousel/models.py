from django.db import models
from PIL import Image
from config.wiwako.models import Wiwako
import os


def carousel_photo_path(instance, filename):
    return f"carousel/{instance.title}/{filename}"

class CarouselItem(models.Model):
    title = models.CharField(max_length=100)
    photo = models.ImageField(upload_to=carousel_photo_path)
    wiwako = models.ForeignKey(Wiwako, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        if self.photo:
            try:
                img = Image.open(self.photo.path)
                if img.height > 500 or img.width > 500:
                    output_size = (500, 500)
                    img.thumbnail(output_size)
                    img.save(self.photo.path)
            except Exception as e:

                print(f"An error occurred while processing the image: {e}")

    def get_redirect_url(self):
        return f"{self.wiwako.id}/"
