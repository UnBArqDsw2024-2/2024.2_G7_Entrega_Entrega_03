# Composite

## Introdução

O padrão estrutural **Composite** permite tratar objetos individuais e composições de objetos de forma uniforme. Ele é amplamente utilizado em interfaces de usuário para compor layouts e elementos hierárquicos, como menus e cabeçalhos. No contexto do projeto, o padrão Composite é representado pelo componente `Header`, que combina múltiplos elementos (botão de voltar, título e ícones) para formar um único componente coeso.

## Metodologia

- **Processo de Trabalho**: A equipe utilizou uma abordagem modular para implementar o padrão Composite no componente `Header`, permitindo que seus subcomponentes fossem reutilizados em diferentes partes do projeto.
- **Ferramentas Utilizadas**: O desenvolvimento foi realizado com `React Native`, utilizando `StyleSheet` para estilização e `TouchableOpacity` e `Icon` para funcionalidade.
- **Justificativa**: O padrão Composite foi empregado para garantir consistência e reusabilidade, além de facilitar a manutenção e a extensão do componente.

## Implementações no Código Fonte

### Componente Header

**Tecnologia:** `React Native`

O componente `Header` utiliza uma composição de múltiplos elementos para criar uma interface funcional e estilizada. Ele combina um botão de voltar, um título e uma seção de ícones, todos organizados de maneira hierárquica.

<details>
<summary><b>Implementação no Código</b></summary>

![Header Component](./assets/Composite%20-%20Header.png)

</details>

Autor: [Kauan Eiras](https://github.com/kauaneiras)


### Justificativa Técnica

- **Prós**:
  - Modularidade: Subcomponentes podem ser reutilizados em outras partes do projeto.
  - Extensibilidade: Novos elementos podem ser adicionados ao `Header` sem modificar sua estrutura básica.
  - Consistência: Garante que a interface mantenha um padrão visual e funcional.

- **Contras**:
  - Complexidade inicial na definição da hierarquia de subcomponentes.
  - Pode exigir mais recursos para renderização devido à composição hierárquica.

## Referências

1. Gamma, Erich, et al. *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley, 1994.
2. React Native Documentation. View Component. Disponível em: [https://reactnative.dev/docs/view](https://reactnative.dev/docs/view). Acesso em: 06 jan. 2025.

## Histórico de Versões

| Versão | Data da alteração | Comentário | Autor(es) | Revisor(es) | Data de revisão |
|--------|-----------|-----------|-----------|-------------|-------------|
| 1.0 | 17/12/2024 | Criação do documento | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo) | [Gabryel Nicolas S de Sousa](https://github.com/gabryelns) | 06/01/2025 |
| 1.1 | 06/01/2025 | Adicionado exemplo no código  | [Kauan Eiras](https://github.com/kauaneiras) | [Gabryel Nicolas S de Sousa](https://github.com/gabryelns) | 06/01/2025 |