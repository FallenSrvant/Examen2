from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from ToDO import views

router = routers.DefaultRouter()
router.register(r'ToDO',views.ToDOView,'ToDO')
# API version
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="To-Do API"))
]
