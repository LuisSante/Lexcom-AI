from rest_framework import viewsets
from core.models import Todo
from api.serializers.todo import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    model_class = Todo
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
