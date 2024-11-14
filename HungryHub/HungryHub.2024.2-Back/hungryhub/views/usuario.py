from rest_framework.viewsets import ModelViewSet
from hungryhub.serializers import UsuarioSerializer
from hungryhub.models import Usuario
from hungryhub.permissions import AllowPostWithoutAuthentication

class UsuarioViewSet(ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [AllowPostWithoutAuthentication]