from django.db import models
from django.conf import settings
from django.db import models

# Create your models here.

from django.contrib.auth import get_user_model
User = get_user_model()


class Todo(models.Model):
    user = models.ForeignKey(User, related_name="todos",
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    completed = models.BooleanField()
