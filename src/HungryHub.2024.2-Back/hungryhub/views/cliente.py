from rest_framework.viewsets import ModelViewSet
from hungryhub.serializers import ClienteSerializer
from hungryhub.models import Cliente
from hungryhub.permissions import AllowPostWithoutAuthentication

class ClienteViewSet(ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = [AllowPostWithoutAuthentication]