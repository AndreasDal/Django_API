"""_summary_"""

from django.urls import path
# from . import views
from .views import ItemList

urlpatterns = [
   path('api/items/', ItemList.as_view(), name='item-list'),
]