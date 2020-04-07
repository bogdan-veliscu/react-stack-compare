from django.db import models

from django.utils import timezone
# Create your models here.

from django.contrib.auth import get_user_model
User = get_user_model()


class Comment(models.Model):
    post = models.ForeignKey(
        "posts.Post", related_name='comments', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    date_created = models.DateTimeField(default=timezone.now())
