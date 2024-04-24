from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from .views import HomeAPIView, ProductPageAPIView, SearchResultsAPIView,CarouselApi,WiwakoDetailAPIView,SubmitFeedbackAPIView

urlpatterns = [
     path('home/', HomeAPIView.as_view(), name='home_api'),
     path('products/', ProductPageAPIView.as_view(), name='product_page_api'),
     path('search/', SearchResultsAPIView.as_view(), name='search_results_api'),
     path("carousel/",CarouselApi.as_view(),name="CAROUSEL"),
     path("products/<int:id>/",WiwakoDetailAPIView.as_view(),name='DETAIL'),
     path('submit-feedback/', SubmitFeedbackAPIView.as_view(), name='submit_feedback'),

]



if settings.DEBUG:
       urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)