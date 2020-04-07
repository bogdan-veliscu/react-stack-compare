from django.shortcuts import render

from .models import Todo
from .serializers import TodoSerializer
from rest_framework import generics

# Create your views here.


class TodoListCreate(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
