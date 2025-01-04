# Facade

## Introdução

<!-- Inclua os seguintes elementos:

- **Objetivo**: Descrever o propósito deste documento.
- **Contexto**: Breve explicação sobre o projeto e sua importância.
- **Escopo**: Delimitação do conteúdo abordado neste documento. -->

## Metodologia

<!-- Explique como as decisões foram tomadas, as ferramentas utilizadas, e justifique escolhas arquiteturais.

- **Processo de Trabalho**: Descrição do método utilizado pela equipe (ex.: Scrum, Kanban).
- **Ferramentas Utilizadas**: Ferramentas empregadas na criação deste artefato (ex.: LucidChart, GitHub).
- **Justificativa**: Razões para as escolhas metodológicas e tecnológicas. -->

## Implementações no Código Fonte

<!-- Descreva como o padrão foi implementado no projeto, incluindo código e diagramas. -->



### Função `handleLogin` na tela de Login

**Tecnologia:** `React Native`

A função `handleLogin` atua como uma fachada para o processo de login. Ela encapsula a complexidade da lógica de autenticação, incluindo a construção do objeto UserLogin, a chamada da função `loginUser`, o tratamento de erros e a navegação do usuário em uma única função. Os detalhes internos são escondidos do restante do componente.


<details>
<summary><b>Implementação em Código</b></summary>

**Função** [handleLogin]()

![handleLogin](./assets/userservice-login.png)

</details>

Autores: [Guilherme Westphall](https://github.com/west7)

### Encapsulamento de chamadas de API do `user.service`

**Tecnologia:** `React Native`

Encapsulamento de chamadas de API do serviço de usuário em um único arquivo, facilitando a manutenção e a reutilização do código, por meio de um arquivo de fachada (**Facade**) que contém os métodos de chamada da API. O serviço de usuário é responsável por fazer as chamadas de operações CRUD (Create, Read, Update, Delete) do usuário e autenticação para a API.

<details>
<summary><b>Implementação em Código</b></summary>

**Serviço [user.service.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/12-us01/src/HungryHub.2024.2-Front/hungryhub/src/api/services/user.service.tsx)**:

![user.service.tsx](./assets/userservice.png)

**Utilização na tela de registro [register.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/12-us01/src/HungryHub.2024.2-Front/hungryhub/src/app/(public)/register.tsx)**:

![register.tsx](./assets/userservice-register.png)

**Utilização na tela de login [login.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/12-us01/src/HungryHub.2024.2-Front/hungryhub/src/app/(public)/login.tsx)**:

![login.tsx](./assets/userservice-login.png)

</details>

<center>

Autores: [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Lucas Martins Gabriel](https://github.com/martinsglucas), [Guilherme Westphall de Queiroz](https://github.com/west7)

</center>

### Encapsulamento de chamadas de API do `store.service`

**Tecnologia:** `React Native`

Encapsulamento de chamadas de API do serviço de loja em um único arquivo, facilitando a manutenção e a reutilização do código, por meio de um arquivo de fachada (**Facade**) que contém os métodos de chamada da API. O serviço de loja é responsável por fazer as chamadas de operações CRUD (Create, Read, Update, Delete) da loja para a API.

<details>
<summary><b>Implementação em Código</b></summary>

**Serviço [store.service.tsx]()**:

![store.service.tsx](assets/servico-store.png)

**Utilização na tela de detalhes da loja [[storeId].tsx]()**:

![[storeId].tsx]()

</details>

<center>

Autores: [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Leonardo Sobrinho de Aguiar](https://github.com/Leonardo0o0), [Raquel Ferreira Andrade](https://github.com/raquel-andrade)

</center>

### Justificativa Técnica

<!-- - Justificativas das decisões tomadas, incluindo análise de prós e contras. -->

## Rastreabilidade

<!-- Adicione uma seção para mapear decisões a requisitos ou justificativas técnicas.

| Decisão Relacionada               | Justificativa                                 | Elo     | Data       |
| --------------------------------- | --------------------------------------------- | ------- | ---------- |
| Escolha de arquitetura em camadas | Modularidade e separação de responsabilidades | [R01]() | 07/12/2024 | --> 

## Referências

1. HEWAWASAM, Lakindu. Using GoF design patterns with React. Blog Bits and Pieces, 4 maio 2023. Disponível em: https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147. Acesso em: 02 jan. 2025.
2. Dev Junior Alves. Como aplicar Design Patterns no React com hooks?!. Youtube, 23 maio 2024. Disponível em: https://www.youtube.com/watch?v=kK-4Cpt5_o4. Acesso em: 02 jan. 2025.
3. AWAN, Talha. GOF Design Patterns in React JS. TecHighness. 21 maio 2022. Disponível em: https://www.techighness.com/post/gof-design-patterns-react-js/. Acesso em: 02 jan. 2025.

## Histórico de Versões

| Versão | Data da alteração | Comentário                   | Autor(es)                                       | Revisor(es) | Data de revisão |
| ------ | ----------------- | ---------------------------- | ----------------------------------------------- | ----------- | --------------- |
| 1.0    | 27/12/2024        | Criação do documento         | [Guilherme Westphall](https://github.com/west7) |             |                 |
| 1.1    | 27/12/2024        | Adição da função handleLogin | [Guilherme Westphall](https://github.com/west7) |             |                 |# Facade
| 1.2 | 02/01/2025 | Adição da implementação do serviço de usuário | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Lucas Martins Gabriel](https://github.com/martinsglucas), [Guilherme Westphall de Queiroz](https://github.com/west7) |  |  |
| 1.3 | 04/01/2025 | Adição da implementação do serviço de loja | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Leonardo Sobrinho de Aguiar](https://github.com/Leonardo0o0), [Raquel Ferreira Andrade](https://github.com/raquel-andrade) |  |  |