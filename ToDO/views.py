from rest_framework import viewsets, generics
from .serializer import toDOSerializer
from .models import ToDO
# Create your views here.

class ToDOView(viewsets.ModelViewSet):
    serializer_class = toDOSerializer
    queryset = ToDO.objects.all()
