# HungryHub

## Back

1. Entre na pasta do projeto:

```bash
    cd HungryHub/HungryHub.2024.2-Back
```

2. Crie um ambiente virtual com o comando:

```bash
    python3 -m venv ambv
```

3. Ative o ambiente virtual com o comando:

```bash
    source ambv/bin/activate #linux
    .\ambv\Scripts\activate #windows
``` 
4. Instale as dependências do projeto com o comando:

```bash
    pip install -r requirements.txt
```
5. No primeiro acesso execute o comando:

```bash
    python manage.py migrate
```

6. Execute a aplicação com o comando:

```bash
    python manage.py runserver
```

Os endpoints disponíveis estão em:
`localhost:8000/api/swagger`

## Front

1. Entre na pasta do projeto:
   
```bash
    cd HungryHub/HungryHub.2024.2-Front/hungryhub
```

2. Instale as dependências do projeto com o comando:

```bash
    npm install
```

3. Para executar o frontend com o expo basta executar o seguinte comando:

```bash
    npx expo start
```
Após isso, basta escanear o QR Code com o aplicativo `Expo Go` no seu celular, rodar em um emulador ou até mesmo pelo navegador.