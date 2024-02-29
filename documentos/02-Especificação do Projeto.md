# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Arquitetura e Tecnologias

o	Descreva brevemente a arquitetura definida para o projeto e as tecnologias a serem utilizadas. Sugere-se a criação de um diagrama de componentes da solução.

## Project Model Canvas

![project-model-canvas.png](img/project-model-canvas.png)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001 | O sistema deve permitir que o usuário tenha acesso ao catálogo das velas aromáticas | ALTA |
|RF-002| O sistema deve permitir que o usuário escolha o aroma, quantidade e modelo das velas, bem como para qual finalidade/tipo de evento  | ALTA |
|RF-003| O sistema deve permitir que o usuário realize o pedido e o pagamento de velas aromáticas | ALTA | 
|RF-004| O sistema deve permitir o cadastro de usuários | ALTA |
|RF-005| O sistema deve permitir o login de usuários  | ALTA |
|RF-006| O sistema deve permitir a atualização dos dados dos usuários cadastrados | MÉDIA |
|RF-007| O sistema deve permitir que o usuário entre em contato de forma direta com o vendedor via WhatsApp a qualquer momento para sanar dúvidas | ALTA |
|RF-008| O sistema deve informar ao usuário o prazo de entrega de 5 dias úteis de limite | MÉDIA |
|RF-009| O sistema deve redirecionar o usuário e o pedido já finalizado ao WhatsApp do vendedor  | ALTA |
|RF-010| O sistema deve notificar ao usuário via e-mail quando o seu pedido for recebido pelo vendedor, bem como em processo de confecção e enviado | MÉDIA |
|RF-011| O sistema deve permitir que o administrador realize o gerenciamento das velas (CRUD)  | ALTA |
|RF-012| O sistema deve permitir que o administrador tenha acesso a gestão dos pedidos feitos  | ALTA |
|RF-013| O sistema deve permitir que o administrador receba via WhatsApp o chat do cliente com o pedido já finalizado | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser feito usando práticas de UX e IxD | ALTA | 
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel  | ALTA | 
|RNF-003| O sistema deve ser disponibilizado publicamente no GitHub |  ALTA | 
|RNF-004| O sistema deve facilitar e agilizar as vendas do parceiro |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Deve ser desenvolvido um módulo de back-end |


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

![UseCaseDiagram1.png](img/UseCaseDiagram1.png)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t5-flamme/assets/103009155/c01e3f75-6c53-44f4-a2fa-1cddcbe0d5c9)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
