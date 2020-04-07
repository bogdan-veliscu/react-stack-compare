from django.shortcuts import render
from .models import Album
from .serializers import AlbumSerializer
from rest_framework import generics

# Create your views here.


class AlbumListCreate(generics.ListCreateAPIView):
    queryset = Album.objects.all()
