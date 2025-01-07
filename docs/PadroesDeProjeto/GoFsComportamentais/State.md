# State

## Introdução

O padrão comportamental **State** permite que um objeto altere seu comportamento de acordo com mudanças em seu estado interno, oferecendo maior flexibilidade na definição de comportamentos dinâmicos em componentes de software. Esse padrão é amplamente utilizado em interfaces de usuário para reagir a mudanças de estado e atualizar a aparência ou funcionalidade do sistema. No contexto do projeto, o padrão State é representado pelo botão "Salvar modificações", que altera sua aparência e comportamento com base no estado interno `loading`.

## Metodologia

- **Processo de Trabalho**: A equipe implementou o padrão State em diversas partes do código. Um desses casos foi para controlar o comportamento dinâmico do botão de salvamento, garantindo uma transição fluida entre os estados de "carregando" e "pronto para salvar".
- **Ferramentas Utilizadas**: O desenvolvimento foi realizado com `React Native`, utilizando estados gerenciados por `useState` e estilização com `StyleSheet`.
- **Justificativa**: O padrão State foi aplicado para permitir que o botão respondesse dinamicamente às mudanças no estado `loading`, melhorando a experiência do usuário ao fornecer feedback visual imediato.

## Exemplo de Implementação no Projeto

O botão "Salvar modificações" no arquivo [profile_data.tsx](../../../src/HungryHub.2024.2-Front/hungryhub/src/app/(auth)/(tabs)/profile/profile_data.tsx) é um exemplo claro do padrão State. Ele altera sua aparência e funcionalidade de acordo com o estado `loading`.

## Implementações no Código Fonte

### Botão "Salvar modificações"

**Tecnologia:** `React Native`

O componente `TouchableOpacity` implementa o padrão State ao ajustar sua estilização e o texto exibido com base no estado interno `loading`. Quando `loading` é `true`, o botão é desativado e exibe o texto "Salvando...". Quando `loading` é `false`, ele é ativado e exibe "Salvar modificações".

<details>
<summary><b>Implementação no Código</b></summary>

![State - AccountDetails](assets/State%20-%20AccountDetails.png)

</details>

<center>

**Autor: [Kauan Eiras](https://github.com/kauaneiras)**

</center>

### Justificativa Técnica

- **Prós**:
  - **Feedback visual**: Melhora a experiência do usuário, indicando claramente o estado do botão.
  - **Flexibilidade**: Facilita a adição de novos estados ou comportamentos sem alterar a estrutura principal do componente.
  - **Manutenção**: O encapsulamento do comportamento em estados simplifica a leitura e o ajuste do código.

- **Contras**:
  - Pode introduzir complexidade adicional em cenários onde há muitos estados possíveis.
  - O gerenciamento inadequado dos estados pode levar a comportamentos inesperados.

## Referências

1. Gamma, Erich, et al. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994.
2. React Native Documentation. TouchableOpacity Component. Disponível em: [https://reactnative.dev/docs/touchableopacity](https://reactnative.dev/docs/touchableopacity). Acesso em: 06 jan. 2025.
3. React Documentation. Managing State. Disponível em: [https://react.dev/learn/state](https://react.dev/learn/state). Acesso em: 06 jan. 2025.

## Histórico de Versões

| Versão | Data da alteração | Comentário              | Autor(es)                                    | Revisor(es) | Data de revisão |
|--------|-------------------|------------------------|---------------------------------------------|-------------|-----------------|
| 1.0    | 06/01/2025        | Criação do documento   | [Kauan Eiras](https://github.com/kauaneiras) |     [Bruno Araújo](https://github.com/cva)         |      06/01/2025 |