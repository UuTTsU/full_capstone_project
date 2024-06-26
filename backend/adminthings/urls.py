from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from .views import CustomLoginView,AddWiwakoProduct, UpdateWiwakoProduct,AddWiwakoCarousel,UpdateWiwakoCarousel,RetriveComments,UpdateComments
urlpatterns = [
     path('',CustomLoginView.as_view(),name='login'),
     path('admin-user-add-prodcut/',AddWiwakoProduct.as_view(),name='add-product'),
     path('admin-user-update_wiwako/<int:pk>/', UpdateWiwakoProduct.as_view(), name='update_wiwako'),
     path('admin-user-add-carousel/',AddWiwakoCarousel.as_view(),name='CAROUSEL'),
     path("admin-user-update-carousel/<int:pk>/",UpdateWiwakoCarousel.as_view(),name="UPDATECAROSUEL"),
     path("admin-user-see-comments",RetriveComments.as_view(),name="retrivecomments"),
     path("admin-user-update-comments/<int:pk>/",UpdateComments.as_view(),name='updatecomments'),
]
if settings.DEBUG:
       urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)