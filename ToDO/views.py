from rest_framework import viewsets, generics
from .serializer import toDOSerializer, ToDOIdSerializer
from .models import ToDO
# Create your views here.

class ToDOView(viewsets.ModelViewSet):
    serializer_class = toDOSerializer
    queryset = ToDO.objects.all()

class ToDOIdListAPIView(generics.ListAPIView):
    queryset = ToDO.objects.all()
    serializer_class = ToDOIdSerializer