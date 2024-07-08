from rest_framework import viewsets, generics
from .serializer import toDOSerializer,ToDOIDSerializer, ToDOIdTitleSerializer
from .models import ToDO
# Create your views here.

class ToDOView(viewsets.ModelViewSet):
    serializer_class = toDOSerializer
    queryset = ToDO.objects.all()

class ToDOIDListView(viewsets.ModelViewSet):
    serializer_class = ToDOIDSerializer
    queryset = ToDO.objects.all()

class ToDOIdTitleListView(viewsets.ModelViewSet):
    serializer_class = ToDOIdTitleSerializer
    queryset = ToDO.objects.all()

class ToDOUnresolvedView(viewsets.ModelViewSet):
    serializer_class = toDOSerializer
    queryset = ToDO.objects.filter(done=False)

class ToDOResolvedView(viewsets.ModelViewSet):
    serializer_class = toDOSerializer
    queryset = ToDO.objects.filter(done=True)
