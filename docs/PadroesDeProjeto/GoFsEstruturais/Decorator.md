# Decorator

## Introdução

O padrão **Decorator** é uma solução estrutural que permite adicionar funcionalidades extras a um objeto de forma dinâmica, evitando modificações em sua estrutura original. Essa abordagem é ideal em projetos que requerem extensibilidade e modularidade, pois facilita a evolução do código sem comprometer a base já existente. 

No projeto, o padrão **Decorator** foi aplicado para enriquecer a experiência do usuário em componentes visuais. Elementos como badges de desconto ou indicadores de novidade foram adicionados dinamicamente a cards e botões, garantindo flexibilidade e uma interface intuitiva. Essa técnica assegura que novos comportamentos possam ser incorporados sem a necessidade de alterar diretamente os componentes fundamentais.

## Metodologia

- **Abordagem Modular**: O padrão **Decorator** foi utilizado para encapsular funcionalidades adicionais, promovendo a separação de responsabilidades e reduzindo o acoplamento entre os componentes.
- **Ferramentas Utilizadas**: A implementação foi realizada com **React Native** e **TypeScript**, explorando a composição de componentes para criar wrappers que adicionam novos comportamentos visualmente ricos.
- **Justificativa**: A escolha do padrão **Decorator** possibilitou a criação de componentes mais flexíveis e reutilizáveis, permitindo que funcionalidades como a exibição de descontos ou estados dinâmicos fossem adicionadas sem alterar a base de código original. Isso resultou em um código mais organizado, escalável e fácil manutenção.

## Exemplo de Implementação no Projeto

### Decorator em ProductCard React Native

**Tecnologia:** **React Native**

Decorator implementado para adicionar funcionalidades visuais dinâmicas aos cards de produto, como a indicação de descontos no produto. Permite extensão de características sem modificar o componente base.

<details>
<summary><b>Implementação no código</b></summary>

**[Decorator.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/553596b858fe00bc8a2990a2b171e84cf9c2539d/src/HungryHub.2024.2-Front/hungryhub/src/components/ProductCard.tsx)**:

![Decorator](assets/decorator.png)


</details>

<center>

Autor: [Kallyne Macedo Passos](https://github.com/kalipassos)

</center>

### Decorator em ProfileButton React Native

**Tecnologia:** `React Native`

O padrão **Decorator** é observado no componente `ProfileButton`, onde diferentes comportamentos e estilos são adicionados dinamicamente ao botão, dependendo da propriedade `isLogout`. Esse comportamento permite adicionar funcionalidades ou modificações visuais sem alterar a estrutura base do componente.

<details>

<summary><b>Implementação no Código</b></summary>

![Decorator - ProfileButton](assets/Decorator%20-%20ProfileButton.png)

</details>

<center>

Autor: [Kauan Eiras](https://github.com/kauaneiras)

</center>

## Referências

1. HEWAWASAM, Lakindu. Using GoF design patterns with React. Blog Bits and Pieces, 4 maio 2023. Disponível em: https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147. Acesso em: 17 dez. 2024.
2. Dev Junior Alves. Como Aplicar Design Patterns do GoF em React.js com TypeScript?!. Youtube, 19 dezembro 2024. Disponível em: https://www.youtube.com/watch?v=t9wKmfFVgJQ. Acesso em: 02 jan. 2024.
3. AWAN, Talha. GOF Design Patterns in React JS. TecHighness. 21 maio 2022. Disponível em: https://www.techighness.com/post/gof-design-patterns-react-js/. Acesso em: 02 jan. 2024.

## Histórico de Versões

| Versão | Data da alteração | Comentário | Autor(es) | Revisor(es) | Data de revisão |
|--------|-----------|-----------|-----------|-------------|-------------|
| 1.0 | 05/01/2025 | Criação do documento |  [Kallyne Macedo Passos](https://github.com/kalipassos) | [Kauan Eiras](https://github.com/kauaneiras) | 06/01/2025 |
| 1.1 | 06/01/2025 | Adição de exemplo de implementação no projeto | [Kauan Eiras](https://github.com/kauaneiras) |
| 1.2 | 06/01/2025 | Adição de introdução e metodologia | [Bruno Araújo](https://github.com/brunocva) |