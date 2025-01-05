from os import read
from django.core.exceptions import ObjectDoesNotExist
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer, CharField, ValidationError
from django.contrib.auth.models import User
from hungryhub.models import Cliente, Usuario, Address
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
