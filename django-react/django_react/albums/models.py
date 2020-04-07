from django.db import models

# Create your models here.

from django.contrib.auth import get_user_model
User = get_user_model()


class Album(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(max_length=100)
