
# Metodologia

Esta seção descreve a organização da equipe para a execução das tarefas do projeto e as ferramentas utilizadas para a manutenção dos códigos e demais artefatos.


## Gerenciamento de Projeto
A metodologia ágil escolhida para o desenvolvimento deste projeto foi o SCRUM, pois como citam Amaral, Fleury e Isoni (2019, p. 68), seus benefícios são a

“visão clara dos resultados a entregar; ritmo e disciplina necessários à execução; definição de papéis e responsabilidades dos integrantes do projeto (Scrum Owner, Scrum Master e Team); empoderamento dos membros da equipe de projetos para atingir o desafio; conhecimento distribuído e compartilhado de forma colaborativa; ambiência favorável para crítica às ideias e não às pessoas.”

### Divisão de Papéis

A equipe utiliza o Scrum como base para definição do processo de desenvolvimento.
- Scrum Master: Vitoria Vaz Luiz
- Product Owner: Dennis Daccach 
- Equipe de Desenvolvimento: Dennis Daccach, Ilmara Helen Maruno, João Emmanuel, Karine Mikaelle Dias Pereira, Vitoria Vaz Luiz.

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu 
> Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

### Processo


- Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista. 
- To Do: Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando. 
- Doing: Quando uma tarefa tiver sido iniciada, ela é movida para cá. 
- Done: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.

  O quadro kanban do grupo no GitHub pode ser acessado através do link: https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/1424, conforme imagem abaixo:
  
 ![image](https://github.com/user-attachments/assets/0e863c72-647d-4555-9e4e-06a23073e6fb)



> **Links Úteis**:
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)



### Etiquetas
<p>As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:</p>

<ul>
  <li>Bug (Erro no código)</li>
  <li>Desenvolvimento (Development)</li>
  <li>Documentação (Documentation)</li>
  <li>Gerência de Projetos (Project Management)</li>
  <li>Infraestrutura (Infrastructure)</li>
  <li>Testes (Tests)</li>
</ul>

<figure> 
  <img src="https://user-images.githubusercontent.com/100447878/164068979-9eed46e1-9b44-461e-ab88-c2388e6767a1.png"
    <figcaption>Figura 3 - Tela do esquema de cores e categorias</figcaption>
</figure> 
  
### Ferramentas

No desenvolvimento do projeto, utilizamos um conjunto de ferramentas e ambientes de trabalho que facilitam a colaboração, a organização e o fluxo de trabalho da equipe. Esses recursos foram escolhidos de forma a atender às demandas específicas do projeto e promover uma execução eficiente.

### Ferramentas e Ambientes de Trabalho

#### **1. Ambiente de Desenvolvimento e Gestão de Código-Fonte**
- **Visual Studio Code (VSC):** Foi a principal ferramenta de desenvolvimento utilizada pela equipe. O VSC, com sua ampla gama de extensões e integração nativa com o GitHub, permitiu o gerenciamento eficiente do código-fonte e a colaboração entre os membros do time.
- **GitHub:** Utilizamos um repositório central no GitHub para armazenar e versionar o código-fonte do projeto. A plataforma proporcionou controle de versão, revisão de código (pull requests) e rastreamento de alterações, garantindo a integridade e a consistência do código ao longo do desenvolvimento.

#### **2. Comunicação e Organização da Equipe**
- **Microsoft Teams:** Realizamos encontros regulares no Teams para discussões e alinhamentos sobre o progresso do projeto. As reuniões permitiram a resolução de dúvidas, a definição de estratégias e a tomada de decisões coletivas.
- **WhatsApp:** Utilizamos o WhatsApp para comunicação ágil e informal entre os membros da equipe. A ferramenta foi essencial para troca rápida de informações, agendamento de reuniões e alinhamentos pontuais.

#### **3. Processo e Gestão de Times**
Adotamos um modelo colaborativo, com tarefas distribuídas entre os membros da equipe, definindo prazos claros e responsabilidades. O GitHub também foi utilizado como suporte para organizar as tarefas, utilizando sua funcionalidade de issues e projetos (boards). Essa abordagem permitiu uma visão clara do andamento do projeto, priorização de atividades e acompanhamento das entregas.

Esse conjunto de ferramentas e métodos proporcionou um ambiente integrado e eficiente, garantindo a produtividade e a sinergia entre os membros da equipe ao longo do desenvolvimento do projeto.

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| AMBIENTE                            | PLATAFORMA                         | LINK DE ACESSO                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | [https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t11-proj_adocao/tree/main/codigo-fonte]               
| Documentos do projeto               | GitHub                             | [https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t11-proj_adocao/tree/main/documentos                           |
| Projeto de Interface                | Canva                              | [https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t11-proj_adocao/blob/main/documentos/04-Projeto%20de%20Interface.md                            |
| Gerenciamento do Projeto            | GitHub Projects                    | [http://....](https://github.com/user-attachments/assets/6ceded99-0625-4653-beda-7e17a477ef2d)                            |

### Estratégia de Organização de Codificação 

Todos os artefatos relacionados a implementação e visualização dos conteúdos do projeto do site deverão ser inseridos na pasta [codigo-fonte](http://https://github.com/ICEI-PUC-Minas-PMV-ADS/WebApplicationProject-Template-v2/tree/main/codigo-fonte). Consulte também a nossa sugestão referente a estratégia de organização de codificação a ser adotada pela equipe de desenvolvimento do projeto.
