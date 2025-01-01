from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Cliente, Usuario

class UsuarioCreationForm(UserCreationForm):
  class Meta:
    model = Usuario
    fields = ('email', 'first_name', 'is_staff', 'is_active', 'is_superuser')

class UsuarioChangeForm(UserChangeForm):
  class Meta:
    model = Usuario
    fields = ('email', 'first_name', 'is_staff', 'is_active', 'is_superuser')

class UsuarioAdmin(BaseUserAdmin):
  form = UsuarioChangeForm
  add_form = UsuarioCreationForm

  list_display = ('email', 'first_name', 'is_staff', 'is_active', 'is_superuser')
  list_filter = ('is_staff', 'is_active', 'is_superuser')
  fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Informações Pessoais', {'fields': ('first_name',)}),
        ('Permissões', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Datas Importantes', {'fields': ['last_login']}),
    )
  add_fieldsets = (
      (None, {
          'classes': ('wide',),
          'fields': ('email', 'first_name', 'password1', 'password2', 'is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}
      ),
  )
  search_fields = ('email', 'first_name')
  ordering = ('email',)
  filter_horizontal = ('groups', 'user_permissions')

admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Cliente)