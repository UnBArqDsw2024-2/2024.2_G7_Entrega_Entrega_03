# Elos entre Desenvolvimento e Cenários

## Introdução

Este documento tem como objetivo estabelecer os elos entre o desenvolvimento do projeto e os cenários produzidos, visando facilitar a execução das tarefas propostas e garantir que as necessidades dos stakeholders sejam atendidas de forma eficaz e eficiente. A criação desses elos permite uma rastreabilidade clara entre os cenários e as atividades de desenvolvimento, assegurando que cada funcionalidade seja implementada conforme os requisitos estabelecidos.

A rastreabilidade é um conceito amplamente discutido na engenharia de software, sendo essencial para a gestão de requisitos e a garantia de qualidade do produto final. Segundo Sommerville (2011), a rastreabilidade permite que os desenvolvedores acompanhem a evolução dos requisitos ao longo do ciclo de vida do software, assegurando que todas as funcionalidades desejadas pelos stakeholders sejam implementadas corretamente.

## Metodologia

Para criar os elos entre o desenvolvimento e os cenários, é necessário seguir uma metodologia que permita identificar as relações entre as tarefas propostas e as necessidades dos stakeholders. A metodologia proposta é a seguinte:

1. **Identificar os cenários**: o primeiro passo é identificar os cenários que foram produzidos com base na baseline do projeto. Os Cenários são sequências de eventos que ocorrem durante uma utilização particular de um sistema, demonstrando as interações e realidade de como o sistema será utilizado a partir da visão do usuário.

2. **Identificar as tarefas de desenvolvimento**: o segundo passo é identificar as tarefas de desenvolvimento que serão executadas

3. **Criar os elos entre os cenários e as tarefas de desenvolvimento**: o terceiro passo é criar os elos entre os cenários e as tarefas de desenvolvimento. Os elos podem ser criados de diversas formas, como por exemplo, uma tabela que relaciona cenários com as tarefas de desenvolvimento.

Os cenários produzidos do projeto foram elaborados durante a [entrega anterior](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_02), e podem ser encontrados no seguinte documento: 

- [Cenários Produzidos](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios).

Em relação as tarefas, utilizaremos as issues de desenvolvimento criadas no repositório do projeto e no GitHub Projects para criar os elos com os cenários. O quadro completo de issues pode ser encontrado [aqui](https://github.com/orgs/UnBArqDsw2024-2/projects/2).

Além disso, iremos adicionar a rastreabilidade das branches e pull requests com as issues de desenvolvimento, garantindo que as tarefas propostas foram implementadas corretamente e que cenários foram atendidos.

### Template da tabela

*Obs: Devem ser adicionados os links de rastreabilidade para as issues, pull requests e cenários.*

<center>

| Cenário | Issue de Desenvolvimento | História de Usuário | Branch | Pull Request |
|-------------|--------------------------|---------------------|--------|--------------|
| *[UCXX]() - Nome do Cenário* | *[Issue #XX]() - Título da issue* | *[USXX]()* | *[Nome da branch]()* | *[PR #XX]() - Título do pull request* |

**Autores**: [Felipe Amorim de Araújo](https://github.com/lipeaaraujo), [Raquel Ferreira Andrade](https://github.com/raquel-andrade)

</center>

Os responsáveis por preencher a tabela são os membros do time, que devem garantir que os elos entre os cenários e as tarefas de desenvolvimento sejam criados e mantidos atualizados. Esse processo será feito durante o desenvolvimento do projeto e as futuras entregas.

## Elos entre Desenvolvimento e Cenários

| Cenário | Issue de Desenvolvimento | História de Usuário | Branch | Pull Request |
|-------------|--------------------------|---------------------|--------|--------------|
| [CN01](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente cadastra uma conta	 | [Issue #13](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/13) - US02 - Login | [US02] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/ModelagemAgil/Backlog#us02) | [12-us01](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/12-us01) | [PR #28](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/28) - US01 e US02 - CRUD da Conta e Login |
| [CN02](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente faz login | [Issue #13](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/13) - US02 - Login | [US02] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/ModelagemAgil/Backlog#us02) | [12-us01](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/12-us01) | [PR #28](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/28) - US01 e US02 - CRUD da Conta e Login |
| [CN03](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente pesquisa um produto	 | [Issue #19](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/19) - US09 - Buscar lojas/produtos (CRUD de lojas) | [US09] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/ModelagemAgil/Backlog#us09)| [19-us09](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/19-us09) | [PR #29](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/29) - US09 - Buscar lojas/produtos (CRUD de lojas) |
| [CN04](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente verifica produtos de uma loja | [Issue #18](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/18) - US07 - Visualizar produtos (CRUD de Produto) | [US07] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/ModelagemAgil/Backlog#us07)| [18-us07](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/18-us07) | [PR #31](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/31) - US07 - Visualizar produtos (CRUD de Produto) |
| [CN05](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente adiciona item aos favoritos | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN06](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente remove item dos favoritos | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN07](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente solicita suporte | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN08](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente adiciona produto ao carrinho | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN09](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente remove produto ao carrinho | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN10](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente finaliza compra | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN11](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente acompanha pedido | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN12](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente acessa histórico de pedidos | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN13](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente avalia entregador | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [CN14](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/Cenarios/cenarios) - Cliente avalia loja | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |



## Referências

1. Sommerville, I. (2011). Software Engineering (9th Edition). Addison-Wesley.

## Histórico de Versões

| Versão | Data da alteração | Comentário | Autor(es) | Revisor(es) | Data de revisão |
|--------|-----------|-----------|-----------|-------------|-------------|
| 1.0 | 06/01/2025 | Criação do documento, introdução, metodologia e adiciona tabela | [Raquel Ferreira Andrade](https://github.com/raquel-andrade) | 06/01/2025 | [Felipe Amorim de Araújo](https://github.com/lipeaaraujo) |

