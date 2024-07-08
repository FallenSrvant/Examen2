from rest_framework import serializers
from .models import ToDO

class toDOSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDO
        fields = '__all__'

class ToDOIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDO
        fields = ['id']

class ToDOIdTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDO
        fields = ['id', 'title']
