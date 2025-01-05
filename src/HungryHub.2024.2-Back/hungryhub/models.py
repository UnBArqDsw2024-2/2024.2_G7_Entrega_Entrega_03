from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import re
from django.core.exceptions import ValidationError

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


    def update_attributes(self, email=None, first_name=None, password=None):
        
        #validação do email
        if email:
            
            #regex para verificar a validação do email
            email_regex = r"^[a-z0-9._%+-]+@[a-z0-9.-]+\.com(\.br)?$"
            if not re.fullmatch(email_regex, email):
                raise ValidationError("Este email não é válido.")
            
            #verifica se o email já existe no banco de dados Uuário
            if Usuario.objects.exclude(id=self.id).filter(email=email).exists():
                raise ValidationError("Este email já pertence a um usuário.")
            self.email = email

        #validação do nome
        if first_name:
            
            #verifica se o nome contem símbulos ou números
            name_regex = r"^([A-ZÁÉÍÓÚÃÕÂÊÔ][a-záéíóúãõâêôç]+)(\s(de\s|da\s|do\s|das\s|dos\s)?([A-ZÁÉÍÓÚÃÕÂÊÔ][a-záéíóúãõâêôç]+))*$"
            if not re.fullmatch(name_regex, first_name):
                raise ValidationError("Este email não é válido.")

        #validação da senha
        if password:
            
            #verifica se a senha atual é diferente da senha antiga
            if password == self.password:
                raise ValidationError("A senha atual não deve ser igual à sua senha anterior.")
            
            #verifica se a senha foi deixada em branco
            if password.strip() == "":
                raise ValidationError("Insira uma senha.")
            self.set_password(password)

        #salvando o modelo
        self.save()

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name = 'Usuário'
        verbose_name_plural = 'Usuários'

class Cliente(Usuario):
    cpf = models.CharField(max_length=11, unique=True)
    phone = models.CharField(max_length=11)
    
    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'