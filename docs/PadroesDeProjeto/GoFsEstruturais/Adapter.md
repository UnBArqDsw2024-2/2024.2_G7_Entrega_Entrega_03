# Adapter

## Introdução

O padrão estrutural **Adapter** é utilizado para integrar interfaces incompatíveis entre sistemas ou componentes, permitindo que eles funcionem juntos. No contexto de desenvolvimento em React Native, o Adapter pode ser representado por componentes que mapeiam dados ou configuram propriedades para garantir compatibilidade com bibliotecas ou APIs.

## Metodologia

- **Processo de Trabalho**: A equipe utilizou a abordagem modular para implementar o Adapter, garantindo que componentes reutilizáveis pudessem se integrar facilmente a diferentes interfaces de entrada.
- **Ferramentas Utilizadas**: Ferramentas como `React Native`, `StyleSheet`, e componentes de interface nativos foram utilizados para criar o componente de adaptação.
- **Justificativa**: O padrão Adapter foi empregado para conectar propriedades customizadas ao comportamento esperado do componente `Switch`, permitindo maior flexibilidade e integração sem modificar o componente base.

## Implementações no Código Fonte

### Componente Switch com Adapter

**Tecnologia:** `React Native`

O componente `Switch` é configurado como um Adapter, adaptando as propriedades recebidas (como `value` e `onValueChange`) para atender às necessidades de um comportamento específico. Ele ajusta cores e estilos com base no estado (`true` ou `false`), integrando dados do aplicativo à interface de forma eficiente.

<details>
<summary><b>Implementação no Código</b></summary>

![Adapter - NotificationToggle](assets/Adapter%20-%20NotificationToggle.tsx.png)

</details>

<center>

Autor: [Kauan Eiras](https://github.com/kauaneiras)

</center>

## Justificativa Técnica

- A utilização do padrão Adapter neste contexto permite maior reutilização e personalização de componentes, reduzindo a necessidade de reimplementação.
- O componente `Switch` é adaptado para funcionar com diferentes estados e estilos, garantindo consistência visual e comportamental no aplicativo.

## Referências

1. Gamma, Erich, et al. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994.
2. React Documentation. Switch Component. Disponível em: [https://reactnative.dev/docs/switch](https://reactnative.dev/docs/switch). Acesso em: 06 jan. 2025.

---

## Histórico de Versões

| Versão | Data da alteração | Comentário                     | Autor(es)                                      | Revisor(es) | Data de revisão |
|--------|-------------------|-------------------------------|-----------------------------------------------|-------------|-----------------|
| 1.0 | 17/12/2024 | Criação do documento | [Guilherme Westphall](https://github.com/west7) | [Kauan Eiras](https://github.com/kauaneiras) | 06/01/2025 |
| 1.1    | 06/01/2025        | Adicionado exemplo no código  | [Kauan Eiras](https://github.com/kauaneiras) | | |