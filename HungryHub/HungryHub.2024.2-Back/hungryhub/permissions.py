from rest_framework.permissions import BasePermission, SAFE_METHODS

class AllowPostWithoutAuthentication(BasePermission):
    """
    Permite acesso não autenticado apenas para o método POST.
    """

    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        return request.user and request.user.is_authenticated