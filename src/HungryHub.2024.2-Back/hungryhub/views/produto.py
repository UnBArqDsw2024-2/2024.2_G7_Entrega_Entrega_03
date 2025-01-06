from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from hungryhub.serializers import ProdutoSerializer
from hungryhub.models import Produto

class ProdutoViewSet(ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticated]