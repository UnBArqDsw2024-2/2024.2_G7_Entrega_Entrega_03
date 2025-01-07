# solução para retornar apenas os endereços de um determinado usuário
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from hungryhub.serializers import AddressSerializer
from hungryhub.models import Address

class AddressViewSet(ModelViewSet):
    # Filtra os endereços para mostrar apenas os que pertencem ao usuário autenticado
    def get_queryset(self):
        user = self.request.user
        if user:
            return Address.objects.filter(user=user)  # Filtra os endereços do usuário autenticado
        return super().get_queryset()
        

    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    permission_classes = [IsAuthenticated]  # Garante que o usuário está autenticado

# from rest_framework.viewsets import ModelViewSet
# from hungryhub.serializers import AddressSerializer
# from hungryhub.models import Address

# class AddressViewSet(ModelViewSet):
#     queryset = Address.objects.all()
#     serializer_class = AddressSerializer