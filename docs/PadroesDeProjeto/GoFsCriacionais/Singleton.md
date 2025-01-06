# Singleton

## Introdução
  
O padrão criacional **Singleton** busca garantir que uma classe tenha apenas uma única instância e forneça um ponto global de acesso a ela, o que a faz ser muito utilizada em situações que exigem controle centralizado, como no gerenciamento de recursos.  Com uma implementação simples, o Singleton evita duplicação desnecessária e promove consistência no sistema.

## Metodologia

- **Processo de Trabalho**: A equipe utilizou uma abordagem modular, implementando o contexto de autenticação como um Singleton para garantir consistência em todo o aplicativo.
- **Ferramentas Utilizadas**: O projeto foi desenvolvido em `React Native`, com ferramentas de gerenciamento de estado nativas e bibliotecas como `expo-router` para navegação.
- **Justificativa**: O uso de `AuthContext` como Singleton elimina a necessidade de múltiplas instâncias, garantindo que o estado do usuário seja gerenciado centralmente e acessível a partir de qualquer parte da aplicação.

## Implementações no Código Fonte

### Componente de Input para Formulário

**Tecnologia:** `React Native`

O padrão **Singleton** é aplicado de forma implícita ao `AuthContext`, porque o contexto `AuthContext` garante que haja apenas uma instância desse contexto em toda a aplicação. Esse contexto fornece uma maneira global de acessar o estado de autenticação do usuário, permitindo que qualquer componente acesse o mesmo objeto de contexto, ou seja, uma única instância.

<details>
<summary><b>Implementação em Código</b></summary>

**Componente** [AuthProvider.jsx]()

![AuthProvider](assets/authprovider.png)

**Instância única do AuthProvider no RootLayout** [_layout.tsx]()

![Root Layout](assets/root-layout.png)

</details>

<center>

Autores: [Guilherme Westphal](https://github.com/west7)

</center>

### Singleton para acessar o estado do usuário no aplicativo

**Tecnologia:** `React Native`

O padrão **Singleton** é aplicado ao contexto de autenticação da aplicação, garantindo que o estado do usuário seja acessado de forma consistente. Aqui, o hook useAuth é utilizado para consumir o contexto AuthContext, que é gerenciado como uma única instância pela aplicação.

<details>
<summary><b>Implementação em Código</b></summary>

**Hook** [useAuth.ts](../../../src/HungryHub.2024.2-Front/hungryhub/src/context/AuthProvider.tsx)

![useAuth](assets/Singleton%20-%20Profile%20Componente.png)

**Uso em** [Profile.tsx](../../../src/HungryHub.2024.2-Front/hungryhub/src/app/(auth)/(tabs)/profile/profile.tsx)

![Profile](assets/Singleton%20-%20Profile.png)

</details>

<center>

Autores: [Kauan Eiras](https://github.com/kauaneiras)

</center>



<!-- ### Justificativa Técnica - Justificativas das decisões tomadas, incluindo análise de prós e contras. -->



<!-- ## Rastreabilidade Adicione uma seção para mapear decisões a requisitos ou justificativas técnicas.

| Decisão Relacionada               | Justificativa                                 | Elo     | Data       |
| --------------------------------- | --------------------------------------------- | ------- | ---------- |
| Escolha de arquitetura em camadas | Modularidade e separação de responsabilidades | [R01]() | 07/12/2024 | --> 

## Referências

1. HEWAWASAM, Lakindu. Using GoF design patterns with React. Blog Bits and Pieces, 4 maio 2023. Disponível em: https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147. Acesso em: 17 dez. 2024.
2. Dev Junior Alves. Como aplicar Design Patterns no React com hooks?!. Youtube, 23 maio 2024. Disponível em: https://www.youtube.com/watch?v=kK-4Cpt5_o4. Acesso em: 17 dez. 2024.
3. Dev Junior Alves. Como Aplicar Design Patterns do GoF em React.js com TypeScript?!. Youtube, 19 dezembro 2024. Disponível em: https://www.youtube.com/watch?v=t9wKmfFVgJQ. Acesso em: 02 jan. 2024.
4. AWAN, Talha. GOF Design Patterns in React JS. TecHighness. 21 maio 2022. Disponível em: https://www.techighness.com/post/gof-design-patterns-react-js/. Acesso em: 02 jan. 2024.

## Histórico de Versões

| Versão | Data da alteração | Comentário           | Autor(es)                                      | Revisor(es) | Data de revisão |
| ------ | ----------------- | -------------------- | ---------------------------------------------- | ----------- | --------------- |
| 1.0    | 27/12/2024        | Criação do documento | [Guilherme Westphall](https://github.com/west7) | [Kallyne Macedo Passos](https://github.com/kalipassos)  | 05/01/2025 |
| 1.1 | 27/12/2024 | Adição do exemplo do AuthProvider | [Guilherme Westphall](https://github.com/west7) |[Kallyne Macedo Passos](https://github.com/kalipassos)  | 05/01/2025 |
| 1.2 | 06/01/2024 | Adição do exemplo do AuthContext | [Kauan Eiras](https://github.com/kauaneiras) |[Guilherme Westphall](https://github.com/west7) | 06/01/2025 |