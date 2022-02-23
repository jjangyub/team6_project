from django.urls import path
from boxoffice import views
from django.views.generic.base import TemplateView

# 127.0.0.1:8000/movie/
urlpatterns = [
    path('list/',TemplateView.as_view(template_name='list.html'), name='movieList'),
]
