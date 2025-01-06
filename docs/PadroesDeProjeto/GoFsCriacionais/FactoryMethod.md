# Factory Method

## Introdução

<!-- Inclua os seguintes elementos:

- **Objetivo**: Descrever o propósito deste documento.
- **Contexto**: Breve explicação sobre o projeto e sua importância.
- **Escopo**: Delimitação do conteúdo abordado neste documento. -->

O Factory Method é um padrão de projeto criacional que oferece uma abordagem flexível para criação de objetos, delegando a instanciação às subclasses. No projeto, este padrão foi aplicado para gerenciar a criação de componentes de interface, especificamente em formulários de entrada, listas de resultados de pesquisa e seções de produto, permitindo uma manutenção simplificada do código.

## Metodologia

<!-- Explique como as decisões foram tomadas, as ferramentas utilizadas, e justifique escolhas arquiteturais.

- **Processo de Trabalho**: Descrição do método utilizado pela equipe (ex.: Scrum, Kanban).
- **Ferramentas Utilizadas**: Ferramentas empregadas na criação deste artefato (ex.: LucidChart, GitHub).
- **Justificativa**: Razões para as escolhas metodológicas e tecnológicas. -->

O padrão Factory Method foi implementado em três principais áreas do aplicativo:

Componentes de Input: Desenvolveu-se uma fábrica de inputs que gera diferentes tipos de campos (texto, senha, email) baseados em propriedades recebidas. A factory abstrai a complexidade de criação e permite adicionar novos tipos de input sem modificar o código existente.
Lista de Resultados de Pesquisa: Implementou-se uma adaptação do Factory Method para renderizar diferentes tipos de itens em uma FlatList (restaurantes, produtos, promoções). A fábrica determina qual componente deve ser renderizado baseado no tipo do item recebido, mantendo o código organizado e extensível.
Seções de Produtos: Desenvolveu-se uma fábrica de seções para a criação de diferentes áreas na tela inicial do aplicativo considerando a dinamicidade do aplicativo e possibilitando a criação de seções para atender momentos determinados como feriados e datas comemorativas.

## Implementações no Código Fonte

<!-- Descreva como o padrão foi implementado no projeto, incluindo código e diagramas. -->


### Componente de Input para Formulário

**Tecnologia:** `React Native`

Criação de um componente de input para formulário, que pode ser utilizado para criar inputs de diversos tipos, como text, password, email, etc. O componente é criado a partir de um factory method, que recebe um tipo de input a partir de props e retorna o componente correspondente.

<details>
<summary><b>Implementação em Código</b></summary>

**Componente [InputFactory.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/12-us01/src/HungryHub.2024.2-Front/hungryhub/src/components/InputFactory.tsx)**:

![InputFactory](./assets/inputfactory.png)

**Implementação do InputFactory no [FormInput.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/12-us01/src/HungryHub.2024.2-Front/hungryhub/src/components/FormInput.tsx)**:

![FormInput](./assets/form-input.png)

**Utilização no [Register.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/12-us01/src/HungryHub.2024.2-Front/hungryhub/src/app/(public)/register.tsx)**:

![Formulário](./assets/implementacao-inputfactory.png)

</details>

<center>

Autores: [Felipe Amorim de Araújo](https://github.com/lipeaaraujo)

</center>

### Componentes para Lista de Pesquisa

**Tecnologia:** `React Native`

O componente de FlatList é utilizado para exibir uma lista de itens na tela de pesquisa. Para cada item da lista, é utilizado um factory method para criar o componente correspondente, de acordo com o tipo de item. O componente não simula exatamente o padrão Factory Method, mas é uma adaptação do conceito para a criação de componentes.

<details>
<summary><b>Implementação em Código</b></summary>

**[FlatList na Tela de Pesquisa](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/19-us09/src/HungryHub.2024.2-Front/hungryhub/src/app/(auth)/(tabs)/search.tsx)**:

![factory-searchitem](./assets/factory-searchitem.png)

</details>

<center>

Autores: [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Bruno Cunha Vasconcelos de Araújo](https://github.com/brunocva), [Leonardo Sobrinho de Aguiar](https://github.com/Leonardo0o0), [Raquel Ferreira Andrade](https://github.com/raquel-andrade), [Wolfgang Friedrich Stein](https://github.com/Wolffstein)

</center>

### Componentes para Seções de Produtos

**Tecnologia:** `React Native`

Nesse componente, houve a implementação do padrão factory method para a criação de diferentes seções na tela inicial do aplicativo. Cada factory é responsável por criar uma seção com características únicas, podendo ser recomendações com priorização de avaliação alta, por exemplo. O uso desse padrão facilita a adição de novos tipos de seção no futuro.

<details>
<summary><b>Implementação em Código</b></summary>

**Componente [ProductSectionFactory.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/2e14635d78cec6fe56c077d691d46e6996ae38e9/src/HungryHub.2024.2-Front/hungryhub/src/components/ProductSectionFactory.tsx)**:

![factory-section](./assets/factory-section.png)

**Utilização no [index.tsx](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/blob/2e14635d78cec6fe56c077d691d46e6996ae38e9/src/HungryHub.2024.2-Front/hungryhub/src/app/(auth)/(tabs)/index.tsx)**:

![factory-productsectionfactory](./assets/implementacao-productsectionfactory.png)

</details>

<center>

Autores: [Kallyne Macedo Passos](https://github.com/kalipassos)

</center>


<!-- ### Justificativa Técnica
- Justificativas das decisões tomadas, incluindo análise de prós e contras. -->


<!-- ## Rastreabilidade Adicione uma seção para mapear decisões a requisitos ou justificativas técnicas.

| Decisão Relacionada | Justificativa | Elo | Data |
| -- | -- | -- | -- |
| Escolha de arquitetura em camadas | Modularidade e separação de responsabilidades | [R01]() | 07/12/2024 | -->

## Referências

1. HEWAWASAM, Lakindu. Using GoF design patterns with React. Blog Bits and Pieces, 4 maio 2023. Disponível em: https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147. Acesso em: 17 dez. 2024.
2. Dev Junior Alves. Como aplicar Design Patterns no React com hooks?!. Youtube, 23 maio 2024. Disponível em: https://www.youtube.com/watch?v=kK-4Cpt5_o4. Acesso em: 17 dez. 2024.
3. Dev Junior Alves. Como Aplicar Design Patterns do GoF em React.js com TypeScript?!. Youtube, 19 dezembro 2024. Disponível em: https://www.youtube.com/watch?v=t9wKmfFVgJQ. Acesso em: 02 jan. 2024.
4. AWAN, Talha. GOF Design Patterns in React JS. TecHighness. 21 maio 2022. Disponível em: https://www.techighness.com/post/gof-design-patterns-react-js/. Acesso em: 02 jan. 2024.

## Histórico de Versões

| Versão | Data da alteração | Comentário | Autor(es) | Revisor(es) | Data de revisão |
|--------|-----------|-----------|-----------|-------------|-------------|
| 1.0 | 17/12/2024 | Criação do documento | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo) | [Kallyne Macedo Passos](https://github.com/kalipassos) | 05/01/2025 |
| 1.1 | 17/12/2024 | Adição do exemplo de InputFactory | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo) | [Kallyne Macedo Passos](https://github.com/kalipassos) | 05/01/2025 |
| 1.2 | 02/01/2025 | Adicionando referências | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo) | [Kallyne Macedo Passos](https://github.com/kalipassos) | 05/01/2025 |
| 1.2 | 05/01/2025 | Adição do exemplo da lista de pesquisa | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Raquel Ferreira Andrade](https://github.com/raquel-andrade) |[Kallyne Macedo Passos](https://github.com/kalipassos)  | 05/01/2025 |
| 1.2 | 05/01/2025 | Adição da introdução, metodologia e seção para produtos | [Kallyne Macedo Passos](https://github.com/kalipassos) | [Gabryel Nicolas S de Sousa](https://github.com/gabryelns) | 06/01/2025 |