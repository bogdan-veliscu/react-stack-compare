from django.urls import path
from . import views

urlpatterns = [
    path('api/photos/', views.PhotoListCreate.as_view()),
]
