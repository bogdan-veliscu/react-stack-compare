from django.db import models
# from albums import Album

# Create your models here.


class Photo(models.Model):
    album = models.ForeignKey(
        "albums.Album", related_name='photos', on_delete=models.CASCADE)
    title = models.TextField()
    url = models.TextField()
    thumbnail_url = models.TextField()
