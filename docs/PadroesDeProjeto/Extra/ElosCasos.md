# Elos entre Desenvolvimento e Casos de Uso

## Introdução

Este documento tem como objetivo estabelecer os elos entre o desenvolvimento do projeto e os casos de uso, visando facilitar a execução das tarefas propostas e garantir que as necessidades dos stakeholders sejam atendidas de forma eficaz e eficiente. A criação desses elos permite uma rastreabilidade clara entre os casos de uso e as atividades de desenvolvimento, assegurando que cada funcionalidade seja implementada conforme os requisitos estabelecidos.

A rastreabilidade é um conceito amplamente discutido na engenharia de software, sendo essencial para a gestão de requisitos e a garantia de qualidade do produto final. Segundo Sommerville (2011), a rastreabilidade permite que os desenvolvedores acompanhem a evolução dos requisitos ao longo do ciclo de vida do software, assegurando que todas as funcionalidades desejadas pelos stakeholders sejam implementadas corretamente.

## Metodologia

Para criar os elos entre o desenvolvimento e os casos de uso, é necessário seguir uma metodologia que permita identificar as relações entre as tarefas propostas e as necessidades dos stakeholders. A metodologia proposta é a seguinte:

1. **Identificar os casos de uso**: o primeiro passo é identificar os casos de uso que serão desenvolvidas. Os casos de uso são representações de funcionalidades específicas que o sistema deve oferecer, detalhando as interações entre os usuários e o sistema.

2. **Identificar as tarefas de desenvolvimento**: o segundo passo é identificar as tarefas de desenvolvimento que serão executadas

3. **Criar os elos entre os casos de uso e as tarefas de desenvolvimento**: o terceiro passo é criar os elos entre casos de uso e as tarefas de desenvolvimento. Os elos podem ser criados de diversas formas, como por exemplo, uma tabela que relaciona casos de uso com as tarefas de desenvolvimento.

Os casos de uso do projeto além de seu diagrama e suas especificações foram elicitadas durante a [entrega anterior](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_02), e podem ser encontrados no seguinte documento: 

- [Diagrama de Casos de Uso - Geral](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_02/blob/main/docs/Modelagem/ModelagemOrganizacional).

Em relação as tarefas, utilizaremos as issues de desenvolvimento criadas no repositório do projeto e no GitHub Projects para criar os elos com os casos de uso. O quadro completo de issues pode ser encontrado [aqui](https://github.com/orgs/UnBArqDsw2024-2/projects/2).

Além disso, iremos adicionar a rastreabilidade das branches e pull requests com as issues de desenvolvimento, garantindo que as tarefas propostas foram implementadas corretamente e que casos de uso foram atensdidas.

### Template da tabela

*Obs: Devem ser adicionados os links de rastreabilidade para as issues, pull requests e casos de uso.*

<center>

| Caso de uso | Issue de Desenvolvimento | História de Usuário | Branch | Pull Request |
|-------------|--------------------------|---------------------|--------|--------------|
| *[UCXX]() - Nome do Caso de Uso* | *[Issue #XX]() - Título da issue* | *[USXX]() - Nome da História* | *[Nome da branch]()* | *[PR #XX]() - Título do pull request* |

**Autores**: [Felipe Amorim de Araújo](https://github.com/lipeaaraujo)

</center>

Os responsáveis por preencher a tabela são os membros do time, que devem garantir que os elos entre casos de uso e as tarefas de desenvolvimento sejam criados e mantidos atualizados. Esse processo será feito durante o desenvolvimento do projeto e as futuras entregas.

## Elos entre Desenvolvimento e Histórias de Usuário

| Caso de uso | Issue de Desenvolvimento | História de Usuário | Branch | Pull Request |
|-------------|--------------------------|---------------------|--------|--------------|
| [UC01](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc01) - Login	 | [Issue #13](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/13) - US02 - Login | [US02] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/ModelagemAgil/Backlog#us02) | [12-us01](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/12-us01) | [PR #28](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/28) - US01 e US02 - CRUD da Conta e Login |
| [UC02](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc02) - Editar perfil | [Issue #16] (https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/16) - US05 - Editar informações do perfil | [US05] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/Extra/ModelagemAgil/Backlog#us05) | [16-us05](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/16-US05) | [PR #XX]() -  |
| [UC03](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc03) - Buscar produtos	 | [Issue #19](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/19) - US09 - Buscar lojas/produtos (CRUD de lojas) | [US09] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#us09)| [19-us09](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/19-us09) | [PR #29](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/29) - US09 - Buscar lojas/produtos (CRUD de lojas) |
| [UC04](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc04) - Buscar lojas | [Issue #19](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/issues/19) - US09 - Buscar lojas/produtos (CRUD de lojas) | [US09] (https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#us09)| [19-us09](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/tree/19-us09) | [PR #29](https://github.com/UnBArqDsw2024-2/2024.2_G7_Entrega_Entrega_03/pull/29) - US09 - Buscar lojas/produtos (CRUD de lojas) |
| [UC05](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc05) - Comprar produtos | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC06](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc06) - Acompanhar pedido | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC07](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc07) - Visualizar histórico de pedidos | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC08](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc08) - Acessar suporte via chat | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC09](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc09) - Realizar avaliação | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC10](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc10) - Cadastrar cardápio | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC11](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc11) - Recebe pedidos | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC12](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc12) - Entregar pedido | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC13](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc13) - Recebe pedido da loja | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC14](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc14) - Localizar o cliente | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |
| [UC15](https://unbarqdsw2024-2.github.io/2024.2_G7_Entrega_Entrega_02/#/Modelagem/ModelagemOrganizacional/DiagramaCasosDeUsoGeral#uc15) - Localizar a loja | [Issue #XX]() -  | [USXX]() | []() | [PR #XX]() - |


## Referências

1. Sommerville, I. (2011). Software Engineering (9th Edition). Addison-Wesley.

## Histórico de Versões

| Versão | Data da alteração | Comentário | Autor(es) | Revisor(es) | Data de revisão |
|--------|-----------|-----------|-----------|-------------|-------------|
| 1.0 | 06/01/2025 | Criação do documento, introdução, metodologia e adiciona tabela | [Raquel Ferreira Andrade](https://github.com/raquel-andrade) |  |  |

