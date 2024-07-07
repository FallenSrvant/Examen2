from rest_framework import serializers
from .models import ToDO

class toDOSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDO
        # fields = ('id','title','description','done')
        fields = '__all__'


class ToDOIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDO
        fields = ['id']
