from django.urls import path
from . import views

urlpatterns = [
    path('api/todos/', views.TodoListCreate.as_view()),
]
