# Observer

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

### useContext do AuthProvider

O padrão **Observer** é implementado implicitamente aqui pelo uso do React Context com hooks. Através do `useContext` e `AuthContext.Provider`, quando o estado de autenticação do usuário (por exemplo, `user` ou `isLoading`) muda, qualquer componente que utilize o contexto será re-renderizado automaticamente para refletir a mudança. Esse comportamento é fundamental no padrão Observer, onde múltiplos componentes "observam" o estado e reagem a mudanças nele.

<details>
<summary><b>Implementação no código</b></summary>

**Contexto observa os valores do AuthContext.Provider**

![AuthContext](assets/authcontext.png)

</details>
<!-- TODO: Adicionar exemplos da tela de Login e Register quando integrado -->

### Signals do Django

O padrão **Observer** é implementado explicitamente aqui através do uso de `signals` do Django. Quando um novo `Cliente` é criado, o sinal `post_save` é emitido e o método `add_user_to_group` é chamado. Esse método adiciona o novo `Cliente` ao grupo `Clientes`, garantindo que o cliente tenha as permissões corretas.

<details>
<summary><b>Implementação no código</b></summary>

**Implementação no [signals.py](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/main/src/HungryHub.2024.2-Back/hungryhub/signals.py)**

![add_user_to_group](assets/signals.png)

</details>

<center>

Autores: [Lucas Martins Gabriel](https://github.com/martinsglucas)

</center>


### Observer nos Favoritos

O padrão **Observer** é implementado na funcionalidade de favoritos através de uma estrutura que permite que múltiplos componentes da aplicação "observem" e reajam a mudanças no estado dos produtos favoritos. O `FavoriteProvider` atua como o subject (observável) principal, mantendo o estado dos favoritos e comunnicando os observers (componentes que utilizam o hook useFavorites) sobre qualquer alteração.

<details>
<summary><b>Implementação no código</b></summary>

**[FavoriteProvider.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/2e14635d78cec6fe56c077d691d46e6996ae38e9/src/HungryHub.2024.2-Front/hungryhub/src/app/patterns/FavoriteObserver.tsx)**:

![Favorite Provider](assets/favoriteprovider.png)

**Uso no componente [ProductHeader.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/2e14635d78cec6fe56c077d691d46e6996ae38e9/src/HungryHub.2024.2-Front/hungryhub/src/components/ProductHeader.tsx)**:

![Favorite Provider](assets/favoriteobserver.png)

</details>

Autor: [Kallyne Macedo Passos](https://github.com/kalipassos)

### Justificativa Técnica

<!-- - Justificativas das decisões tomadas, incluindo análise de prós e contras. -->

## Rastreabilidade

<!-- Adicione uma seção para mapear decisões a requisitos ou justificativas técnicas.

| Decisão Relacionada               | Justificativa                                 | Elo     | Data       |
| --------------------------------- | --------------------------------------------- | ------- | ---------- |
| Escolha de arquitetura em camadas | Modularidade e separação de responsabilidades | [R01]() | 07/12/2024 | --> 

## Referências

1. HEWAWASAM, Lakindu. Using GoF design patterns with React. Blog Bits and Pieces, 4 maio 2023. Disponível em: https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147. Acesso em: 17 dez. 2024.
2. Dev Junior Alves. Como Aplicar Design Patterns do GoF em React.js com TypeScript?!. Youtube, 19 dezembro 2024. Disponível em: https://www.youtube.com/watch?v=t9wKmfFVgJQ. Acesso em: 02 jan. 2024.
3. AWAN, Talha. GOF Design Patterns in React JS. TecHighness. 21 maio 2022. Disponível em: https://www.techighness.com/post/gof-design-patterns-react-js/. Acesso em: 02 jan. 2024.

## Histórico de Versões

| Versão | Data da alteração | Comentário           | Autor(es)                                       | Revisor(es) | Data de revisão |
| ------ | ----------------- | -------------------- | ----------------------------------------------- | ----------- | --------------- |
| 1.0    | 27/12/2024        | Criação do documento | [Guilherme Westphall](https://github.com/west7) |  [Kallyne Macedo Passos](https://github.com/kalipassos)           |    05/01/2025             |
| 1.1    | 05/01/2025        | Adição do uso nos signals | [Lucas Martins Gabriel](https://github.com/martinsglucas) |[Kallyne Macedo Passos](https://github.com/kalipassos) |     05/01/2025         |                
| 1.2    | 05/01/2025        | Adição do uso nos favoritos | [Kallyne Macedo Passos](https://github.com/kalipassos) |              |                 | 