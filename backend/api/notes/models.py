from operator import mod
from django.db import models

# Create your models here.

class Note(models.Model):
    title =  models.CharField(max_length=120)
    description = models.CharField(max_length=600)
    def __str__(self):
        return self.title



