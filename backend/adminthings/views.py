from rest_framework import generics, status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from wiwako.models import Wiwako
from carousel.models import CarouselItem
from wiwako.serializers import WiwakoSerializer, CarouselItemSerializer,FeedbackSerializer
from rest_framework.views import APIView
from wiwako.models import Feedback

class CustomLoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'})
        else:
            return Response({'error': 'Invalid username or password'})
class AddWiwakoProduct(generics.CreateAPIView):
    queryset = Wiwako.objects.all()
    serializer_class = WiwakoSerializer
    permission_classes = [IsAdminUser]
class AddWiwakoCarousel(generics.CreateAPIView):
    queryset = CarouselItem.objects.all()
    serializer_class = CarouselItemSerializer
    permission_classes = [IsAdminUser]
class UpdateWiwakoCarousel(generics.RetrieveUpdateDestroyAPIView):
    queryset = CarouselItem.objects.all()
    serializer_class = CarouselItemSerializer
    permission_classes = [IsAdminUser]
class UpdateWiwakoProduct(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wiwako.objects.all()
    serializer_class = WiwakoSerializer
    permission_classes = [IsAdminUser]
class RetriveComments(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAdminUser]
class UpdateComments(generics.RetrieveUpdateDestroyAPIView):
    queryset  = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAdminUser]
    

