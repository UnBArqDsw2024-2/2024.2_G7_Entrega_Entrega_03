from os import read
from django.core.exceptions import ObjectDoesNotExist
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer, CharField, ValidationError
from django.contrib.auth.models import User
from hungryhub.models import Cliente, Produto, Usuario
from django.contrib.auth import authenticate


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
    
class ProdutoSerializer(ModelSerializer):
    class Meta:
        model = Produto
        fields = ['id', 'name', 'description', 'price', 'category']
        extra_kwargs = {
            'name': {'required': True},
            'description': {'required': True},
            'price': {'required': True},
            'category': {'required': True},
        }
    
    def validate(self, data):
        # if self.instance is None:
        #     if Produto.objects.filter(name=data['name']).exists():
        #         raise ValidationError({'name': 'Já existe um produto com este nome.'})
        return data
    
    def create(self, validated_data):
        produto = Produto(**validated_data)
        produto.save()
        return produto
    
    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance