from os import read
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer, CharField, ValidationError
from django.contrib.auth.models import User
from hungryhub.models import Cliente, Loja, Usuario
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

        token['user_id'] = user.id

        return token

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        user = authenticate(username=email, password=password)
        
        if not user:
            raise ValidationError('Invalid email or password')
        
        data = super().validate(attrs)
        data['user_id'] = self.user.id

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