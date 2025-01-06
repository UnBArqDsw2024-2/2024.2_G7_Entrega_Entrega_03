from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from hungryhub.serializers import ProdutoSerializer
from hungryhub.models import Produto

class ProdutoViewSet(ModelViewSet):
    # Filtra os produtos de acordo com a loja do usuário autenticado
    def get_queryset(self):
        store = self.request.query_params.get('store')
        print(store)
        if store:
            return Produto.objects.filter(store=store)
        return super().get_queryset()
    
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [IsAuthenticated]