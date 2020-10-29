from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^department/$', views.department_api),
    url(r'^department/([0-9]+)$', views.department_api),
    url(r'^employee/$', views.employee_api),
    url(r'^employee/([0-9]+)$', views.employee_api),
]
