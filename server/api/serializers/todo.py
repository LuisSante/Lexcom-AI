from rest_framework import serializers
from core.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="id", read_only=True)

    class Meta:
        model = Todo
        fields = ("key", "id", "title", "description", "completed")