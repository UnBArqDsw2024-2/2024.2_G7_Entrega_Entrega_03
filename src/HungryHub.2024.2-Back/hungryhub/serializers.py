from os import read
from django.core.exceptions import ObjectDoesNotExist
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer, CharField, ValidationError
from django.contrib.auth.models import User
from hungryhub.models import Cliente, Produto, Loja, Usuario, Address
from django.contrib.auth import authenticate
import re


class UsuarioSerializer(ModelSerializer):
    password = CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = ['id', 'first_name', 'email', 'is_active', 'is_staff', 'is_superuser', 'password']
        read_only_fields = ['is_active', 'is_staff', 'is_superuser']
        extra_kwargs = {
            'email': {'required': True},
        }
    
    def validate(self, data):
        if self.instance is None:
            if Usuario.objects.filter(email=data['email']).exists():
                raise ValidationError({'email': 'Já existe um usuário com este email.'})
            
            # Verifica se o nome é composto apenas por letras e seguindo as regras da lingua portuguesa
            name_regex = r"^([A-ZÁÉÍÓÚÃÕÂÊÔ][a-záéíóúãõâêôç]+)(\s(de\s|da\s|do\s|das\s|dos\s)?([A-ZÁÉÍÓÚÃÕÂÊÔ][a-záéíóúãõâêôç]+))*$"
            if not re.fullmatch(name_regex, data['first_name']):
               raise ValidationError("Este nome não é válido.")
            
        return data

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = Usuario(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        return token

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        user = authenticate(username=email, password=password)
        
        if not user:
            raise ValidationError('Invalid email or password')
        
        data = super().validate(attrs)

        try:
            cliente = Cliente.objects.get(id=self.user.id)
        except ObjectDoesNotExist:
            raise ValidationError('Cliente não encontrado')

        data['user'] = {
            'id': self.user.id,
            'email': self.user.email,
            'first_name': self.user.first_name,
            'cpf': cliente.cpf,
            'phone': cliente.phone
        }

        return data
    
class ClienteSerializer(ModelSerializer):
    password = CharField(write_only=True, required=True)
    
    class Meta:
        model = Cliente
        fields = ['id', 'first_name', 'email', 'is_active', 'is_staff', 'is_superuser', 'password', 'cpf', 'phone']
        read_only_fields = ['is_active', 'is_staff', 'is_superuser']
        extra_kwargs = {
            'email': {'required': True},
            'cpf': {'required': True},
            'phone': {'required': True},
        }
        
    def validate(self, data):
        if self.instance is None:
            if Cliente.objects.filter(email=data['email']).exists():
                raise ValidationError({'email': 'Já existe um cliente com este email.'})
            if Cliente.objects.filter(cpf=data['cpf']).exists():
                raise ValidationError({'cpf': 'Já existe um cliente com este CPF.'})
            
        # Verifica se o email está na forma padrão user@email.com(.br)
            email_regex = r"^[a-z0-9._%+-]+@[a-z0-9.-]+\.com(\.br)?$"
            if not re.fullmatch(email_regex, data['email']):
                raise ValidationError("Este email não é válido.")

        # Verifica se a senha atual é diferente da senha antiga
            if data['password'] == self.password:
                raise ValidationError("A senha atual não deve ser igual à sua senha anterior.")
        
        # Verifica se a senha foi deixada em branco
            if data['password'].strip() == "":
                raise ValidationError("A senha não deve ser deixada em branco.")
            
        # Verifica se o nome é composto apenas por letras e seguindo as regras da lingua portuguesa
            name_regex = r"^([A-ZÁÉÍÓÚÃÕÂÊÔ][a-záéíóúãõâêôç]+)(\s(de\s|da\s|do\s|das\s|dos\s)?([A-ZÁÉÍÓÚÃÕÂÊÔ][a-záéíóúãõâêôç]+))*$"
            if not re.fullmatch(name_regex, data['first_name']):
               raise ValidationError("Este nome não é válido.")
        return data
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        cliente = Cliente(**validated_data)
        cliente.set_password(password)
        cliente.save()
        return cliente
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance
    
class LojaSerializer(ModelSerializer):
    password = CharField(write_only=True, required=True)
    
    class Meta:
        model = Loja
        fields = '__all__'
        read_only_fields = ['is_active', 'is_staff', 'is_superuser']
        extra_kwargs = {
            'email': {'required': True},
            'cnpj': {'required': True},
        }
        
    def validate(self, data):
        if self.instance is None:
            if Loja.objects.filter(email=data['email']).exists():
                raise ValidationError({'email': 'Já existe um usuário com este email.'})
            if Loja.objects.filter(cnpj=data['cnpj']).exists():
                raise ValidationError({'cnpj': 'Já existe uma loja com este CNPJ.'})
        return data
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        store = Loja(**validated_data)
        store.set_password(password)
        store.save()
        return store
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance

class LojaSerializer(ModelSerializer):
    password = CharField(write_only=True, required=True)
    
    class Meta:
        model = Loja
        fields = '__all__'
        read_only_fields = ['is_active', 'is_staff', 'is_superuser']
        extra_kwargs = {
            'email': {'required': True},
            'cnpj': {'required': True},
        }
        
    def validate(self, data):
        if self.instance is None:
            if Loja.objects.filter(email=data['email']).exists():
                raise ValidationError({'email': 'Já existe um usuário com este email.'})
            if Loja.objects.filter(cnpj=data['cnpj']).exists():
                raise ValidationError({'cnpj': 'Já existe uma loja com este CNPJ.'})
        return data
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        store = Loja(**validated_data)
        store.set_password(password)
        store.save()
        return store
    
    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.set_password(password)
        instance.save()
        return instance
    
class ProdutoSerializer(ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'name', 'description', 'price', 'category', 'store']
        read_only_fields = ['id', 'store']
        extra_kwargs = {
            'name': {'required': True},
            'description': {'required': True},
            'price': {'required': True},
            'category': {'required': True},
            'store': {'required': True},
        }
       
    def create(self, validated_data):
        store = self.context['request'].store
        validated_data['store'] = store
        
        produto = Produto(**validated_data)
        produto.save()
        return produto
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'estado', 'cidade', 'cep', 'rua', 'user']  
        read_only_fields = ['id', 'user']  
        extra_kwargs = {
            'cidade': {'required': True},
            'estado': {'required': True},
            'cep': {'required': True},
            'rua': {'required': True},
        }

       
    def create(self, validated_data):
        # Obtém o usuário autenticado do contexto da requisição
        user = self.context['request'].user

        # Adiciona o usuário autenticado ao campo 'user' no validated_data
        validated_data['user'] = user

        # Cria e salva a instância do Address
        return Address.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # Atualiza os campos do objeto `instance` com os novos valores de `validated_data`
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        # Salva o objeto atualizado no banco de dados
        instance.save()

        return instance
