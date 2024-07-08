from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from ToDO import views

router = routers.DefaultRouter()
router.register(r'ToDO',views.ToDOView,'ToDO')
router.register(r'ToDO-ids', views.ToDOIDListView, 'ToDO-ids')
router.register(r'ToDO-id-titles', views.ToDOIdTitleListView, 'ToDO-id-titles')
router.register(r'ToDO-unresolved', views.ToDOUnresolvedView, 'ToDO-unresolved')
router.register(r'ToDO-resolved', views.ToDOResolvedView, 'ToDO-resolved')
# API version
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="To-Do API"))
]
