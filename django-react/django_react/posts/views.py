from django.shortcuts import render

# Create your views here.

from .models import Post
from .serializers import PostSerializer
from rest_framework import generics


class PostListCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
