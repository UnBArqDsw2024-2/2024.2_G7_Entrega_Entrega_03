from rest_framework.viewsets import ModelViewSet
from hungryhub.serializers import LojaSerializer
from hungryhub.models import Loja
from hungryhub.permissions import AllowPostWithoutAuthentication

class LojaViewSet(ModelViewSet):
    queryset = Loja.objects.all()
    serializer_class = LojaSerializer
    permission_classes = [AllowPostWithoutAuthentication]
    