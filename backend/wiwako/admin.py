from django.contrib import admin
from .models import Category, Wiwako,Feedback
from carousel.models import CarouselItem



@admin.register(Wiwako)
class WiwakoAdmin(admin.ModelAdmin):
    list_display = ['Geo_name', 'Eng_name', 'category',  'description', 'in_stock', 'Price']
    list_filter = ['category', 'in_stock']
    search_fields = ['Geo_name', 'Eng_name']
    list_per_page = 20


admin.site.register(Category)





@admin.register(CarouselItem)
class CarouselItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'wiwako', 'get_redirect_url')
    readonly_fields = ('get_redirect_url',)





admin.site.register(Feedback)