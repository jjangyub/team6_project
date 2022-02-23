from django.urls import path
from boxoffice import views

urlpatterns = [
    path('list/',views.m_list, name='m_list'),

]
