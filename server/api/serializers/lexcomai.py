from rest_framework import serializers

class LexcomSerializer(serializers.Serializer):
    very_bad = serializers.IntegerField()
    bad = serializers.IntegerField()
    normal = serializers.IntegerField()
    good = serializers.IntegerField()
    very_good = serializers.IntegerField