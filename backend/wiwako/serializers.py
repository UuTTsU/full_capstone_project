
from rest_framework import serializers
from .models import Wiwako, Photo
from carousel.models import CarouselItem

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['image']

class WiwakoSerializer(serializers.ModelSerializer):
    photos = PhotoSerializer(many=True, required=False)

    class Meta:
        model = Wiwako
        fields = ['id', 'Eng_name', 'Geo_name', 'description', 'in_stock', 'Price', 'category', 'photos']

    def create(self, validated_data):
        photos_data = validated_data.pop('photos', None)
        wiwako = Wiwako.objects.create(**validated_data)
        if photos_data:
            for photo_data in photos_data:
                Photo.objects.create(wiwako=wiwako, **photo_data)
        return wiwako



class CarouselItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarouselItem
        fields = ['id', 'title', 'photo', 'wiwako']






