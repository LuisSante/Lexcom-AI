from rest_framework import routers
from api.views.todo import TodoViewSet
from api.views.user import UserViewSet

router = routers.DefaultRouter(trailing_slash=False)

router.register(r"todo", TodoViewSet, basename="todo")
router.register(r"user" , UserViewSet, basename="user")

urlpatterns = router.urls
