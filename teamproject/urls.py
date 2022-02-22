
from django.contrib import admin
from django.urls import path,include
from django.views.generic.base import TemplateView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',TemplateView.as_view(template_name='index.html'), name='home'),
    path('admin/', admin.site.urls),  # Admin page
]
