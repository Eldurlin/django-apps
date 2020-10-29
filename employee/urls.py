from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from . import views

urlpatterns = [
    url(r'^department/$', views.department_api),
    url(r'^department/([0-9]+)$', views.department_api),
    url(r'^employee/$', views.employee_api),
    url(r'^employee/([0-9]+)$', views.employee_api),
    url(r'^save_file/$', views.save_file),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)