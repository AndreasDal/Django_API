from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response

class ItemList(APIView):
   """ docstring here.."""
   def get(self, request):
      """Handle GET request to return a list of items."""
      # Example data, replace with your actual data retrieval logic
      items = [
         {"id": 1, "name": "Item 1"},
         {"id": 2, "name": "Item 2"},
      ]
      return Response(items)
