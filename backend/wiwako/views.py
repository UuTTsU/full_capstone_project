from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
# from rest_framework.response import Response
from .models import Wiwako
from carousel.models import CarouselItem
from .serializers import WiwakoSerializer, CarouselItemSerializer
from django.db.models import Q
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import AllowAny
# from rest_framework.views import APIView







class Pagination(PageNumberPagination):
     page_size = 3
     page_size_query_param = 'page_size'
     max_page_size = 1000


class HomeAPIView(ListAPIView):
    queryset = Wiwako.objects.all()[:3]
    serializer_class = WiwakoSerializer
    permission_classes = [AllowAny]

class CarouselApi(ListAPIView):
    queryset = CarouselItem.objects.all()
    serializer_class = CarouselItemSerializer
    permission_classes = [AllowAny]

class WiwakoDetailAPIView(RetrieveAPIView):
    queryset = Wiwako.objects.all()
    serializer_class = WiwakoSerializer
    lookup_field = 'id'
    permission_classes = [AllowAny]


class ProductPageAPIView(ListAPIView):
    serializer_class = WiwakoSerializer
    pagination_class = Pagination
    permission_classes = [AllowAny]

    def get_queryset(self):
        category_name = self.request.GET.get('category')
        queryset = Wiwako.objects.all().order_by("-id")
        
        if category_name:
            queryset = queryset.filter(category__title=category_name)
        
        
        return queryset

class SearchResultsAPIView(ListAPIView):
     serializer_class = WiwakoSerializer
     pagination_class = Pagination
     permission_classes = [AllowAny]

     def get_queryset(self):
         query = self.request.GET.get('query')
         queryset = Wiwako.objects.all().order_by("-id")
        
         if query:
            queryset = queryset.filter(
                 Q(Geo_name__icontains=query) | Q(Eng_name__icontains=query)
             )
        
         return queryset