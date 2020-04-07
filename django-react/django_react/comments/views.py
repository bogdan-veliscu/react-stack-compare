from django.shortcuts import render

from .models import Comment
from .serializers import CommentSerializer
from rest_framework import generics

# Create your views here.


class CommentListCreate(generics.ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
