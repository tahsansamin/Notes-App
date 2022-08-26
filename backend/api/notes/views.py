from django.shortcuts import render

from .serializers import NoteSerializer
from .models import Note
from rest_framework import viewsets
from rest_framework import generics




class NotesViewset(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()

    
    
