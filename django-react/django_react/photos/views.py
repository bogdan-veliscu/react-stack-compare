from django.shortcuts import render

# Create your views here.

from .models import Photo
from .serializers import PhotoSerializer
from rest_framework import generics


class PhotoListCreate(generics.ListCreateAPIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
