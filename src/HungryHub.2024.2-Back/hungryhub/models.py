from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.forms import CharField

class UsuarioManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('O e-mail deve ser fornecido.')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        if password:
            user.set_password(password)
        else:
            raise ValueError('A senha deve ser fornecida.')
        user.save(using=self._db)
        return user
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        return self.create_user(email, password, **extra_fields)

class Usuario(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    first_name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name']

    objects = UsuarioManager()

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

class CategoriaLoja(models.TextChoices):
    FAST_FOOD = 'FF', 'Fast Food',
    PIZZARIA = 'PZ', 'Pizzaria',
    RESTAURANTE = 'RT', 'Restaurante',
    CAFETERIA = 'CF', 'Cafeteria',
    PADARIA = 'PD', 'Padaria',
  
class Loja(Usuario):
    cnpj = models.CharField(max_length=14, unique=True)
    telefone = CharField(max_length=11)
    categoria = models.CharField(
        max_length=2, 
        choices=CategoriaLoja.choices, 
        default=CategoriaLoja.RESTAURANTE
    )
    