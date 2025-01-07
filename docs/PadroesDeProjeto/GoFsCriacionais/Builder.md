# Builder

## Introdução

O padrão de projeto **Builder** é um padrão criacional utilizado para construir objetos complexos por meio de uma abordagem incremental e flexível. Ele é ideal para situações em que a composição de um objeto pode variar dependendo de diferentes configurações. 

No projeto, o componente **Header** pode ser associado ao padrão Builder, pois é composto por múltiplas partes configuráveis (título, botão de voltar e ícones), permitindo a criação de diferentes variações de cabeçalhos de maneira modular e reutilizável.

## Metodologia

- **Processo de Trabalho**: Foi adotada uma abordagem modular para construir componentes de interface reutilizáveis, possibilitando uma configuração flexível de cada instância do componente.
- **Ferramentas Utilizadas**: O projeto foi desenvolvido em `React Native`, com o uso de componentes funcionais e propriedades para controle granular da composição do cabeçalho.
- **Justificativa**: A associação com o padrão Builder permite a construção de um componente **Header** flexível e configurável, promovendo a reutilização de código e facilitando sua manutenção.

## Implementações no Código Fonte

### Componente Header

**Tecnologia:** `React Native`

O **Header** é composto por múltiplas partes: um botão de voltar configurável via `onBack`, um título dinâmico, e ícones à direita. A modularidade e flexibilidade do componente permitem associá-lo ao padrão Builder, já que cada parte é construída e configurada de forma incremental.

<details>
<summary><b>Implementação em Código</b></summary>

![Builder - Header](assets/Builder%20-%20Header.png)

**Uso em [profile_data](../../../src/HungryHub.2024.2-Front/hungryhub/src/app/(auth)/(tabs)/profile/profile_data.tsx)**

![Builder - Uso](assets/Builder%20-%20Header%20Uso.png)

</details>

<center>

Autores: [Kauan Eiras](https://github.com/kauaneiras)

</center>

## Justificativa Técnica

- **Prós**:
    - O padrão Builder permite construção gradual e flexível do cabeçalho do aplicativo com diferentes combinações de elementos.
    - Facilita criação de variações do header, mantendo código limpo.
    - Melhora legibilidade ao dividir configuração em etapas claras.

- **Contras**:
  -  Pode ser excessivo para headers simples.
  -  Adiciona complexidade de código inicial.
  -  Requer mais arquivos/estrutura que uma implementação direta.

## Referências

1. Gamma, Erich, et al. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994.
2. HEWAWASAM, Lakindu. Using GoF design patterns with React. Blog Bits and Pieces, 4 maio 2023. Disponível em: [https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147](https://blog.bitsrc.io/using-gof-design-patterns-with-react-c334f3ea3147). Acesso em: 17 dez. 2024.
3. Dev Junior Alves. Como aplicar Design Patterns no React com hooks?!. Youtube, 23 maio 2024. Disponível em: [https://www.youtube.com/watch?v=kK-4Cpt5_o4](https://www.youtube.com/watch?v=kK-4Cpt5_o4). Acesso em: 17 dez. 2024.
4. AWAN, Talha. GOF Design Patterns in React JS. TecHighness. 21 maio 2022. Disponível em: [https://www.techighness.com/post/gof-design-patterns-react-js/](https://www.techighness.com/post/gof-design-patterns-react-js/). Acesso em: 02 jan. 2024.

---

## Histórico de Versões

| Versão | Data da Alteração | Comentário                                      | Autor(es)                                      | Revisor(es)         | Data de Revisão |
|--------|-------------------|------------------------------------------------|-----------------------------------------------|---------------------|-----------------|
| 1.0    | 06/01/2025        | Criação do Documento                           | [Kauan Eiras](https://github.com/kauaneiras) | [Guilherme Westphall](https://github.com/west7) | 06/01/2025 |
| 1.1    | 06/01/2025        | Justificativa técnica                           | [Kallyne Macedo Passos](https://github.com/kalipassos) | [Guilherme Westphall](https://github.com/west7) | 06/01/2025 |