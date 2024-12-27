# Singleton

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

### Justificativa Técnica

<!-- - Justificativas das decisões tomadas, incluindo análise de prós e contras. -->

## Rastreabilidade

<!-- Adicione uma seção para mapear decisões a requisitos ou justificativas técnicas.

| Decisão Relacionada               | Justificativa                                 | Elo     | Data       |
| --------------------------------- | --------------------------------------------- | ------- | ---------- |
| Escolha de arquitetura em camadas | Modularidade e separação de responsabilidades | [R01]() | 07/12/2024 | --> 

## Referências

1. 

## Histórico de Versões

| Versão | Data da alteração | Comentário           | Autor(es)                                      | Revisor(es) | Data de revisão |
| ------ | ----------------- | -------------------- | ---------------------------------------------- | ----------- | --------------- |
| 1.0    | 27/12/2024        | Criação do documento | [Guilherme Westphal](https://github.com/west7) |             |                 |
| 1.1 | 27/12/2024 | Adição do exemplo do AuthProvider | [Guilherme Westphal](https://github.com/west7) | | |