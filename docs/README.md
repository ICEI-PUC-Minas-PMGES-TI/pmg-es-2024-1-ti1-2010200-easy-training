# Documentação do Projeto (TIDocs)

Esta pasta armazena a documentação do projeto para a disciplina de **Trabalho Interdisciplinar 1** dos cursos de Tecnologia da Informação da **[PUC Minas](https://pucminas.br)**. Essa documentação é estruturada na forma de um site que fica disponível por meio do GitHub Pages e pode ser incluído, também, no site da solução hospedada. Um [exemplo publicado do TIDocs](https://webtech-puc-minas.github.io/ti1-template/) está disponível por meio do repositório do **[WebTech PUC Minas](https://github.com/webtech-pucminas)**.

A documentação do projeto inclui as seguintes seções:

1. Introdução
2. Contexto
3. Concepção
4. Metodologia
5. Solução
6. FAQ (Questões frequentes)
7. Referências Bibliográficas

O template para o site é estruturado e permite que a equipe evolua a documentação do projeto à medida que avance no desenvolvimento.

# Orientações gerais

Esta seção traz explicações breves sobre o conjunto de artefatos que precisam ser incluídos na documentação do projeto com uma conjunto de links importantes para que se entenda como criar cada coisa. 

## Problema

Os problemas que a aplicação busca solucionar são os desafios enfrentado pelos membros de academia na tentativa de alcançarem seus objetivos, tanto pela dificuldade de adaptação e continuidade dentro desse espaço por conta de fichas genéricas e pouco orientadas por profissionais, que podem, a longo prazo, dificultar o desenvolvimento e busca pelos objetivos, com treinos pouco eficientes que podem também acarretar em lesões.

## Objetivos

O objetivo geral da aplicação é facilitar e potencializar o desenvolvimento dos frequentadores de academias do Brasil através da aplicação, por meio de fichas de treino específicas para cada usuário, com seus determinados objetivos e limitações para alcançá-los, oferecendo também, o apoio de profissionais de educação física para instruílos e oferecer um acompanhamento direto com os usuários, tendo como finalidade ofertar maior praticidade e cuidado com os alunos durante a prática de exercícios.
Objetivos específicos:
1- Desenvolver um sistema de criação de fichas de treino personalizadas, que receba parâmetros específicos como altura, peso, objetivo, limitações e restrições dos usuários e gere fichas bem estruturadas e adequadas para cada um deles.
2- Reduzir lesões e outros problemas físicos ocasionadas por fichas mal implementadas, mal instruidas ou mal preparadas de acordo com os objetivos e entraves para o desenvolvimento dos alunos.

## Justificativa

A criação desse software é motivada pela necessidade crescente dos usuários de ter fichas menos genéricas e pouco efetivas para seus objetivos, aliadas a falta de orientação de personal trainers na escolha e execução de determinados exercícios, gerando uma insatisfação coletiva dos membros de academias, principalmente de grandes redes, que pelo grande número de frequentadores, tendem a padronizar seus treinos e ofertar pouco auxílio individual aos alunos.
Diante desse cenário, a aplicação visa oferecer soluções personalizadas e eficazes para cada um dos usuários a fim de otimizar os treinos, levando em conta suas limitações e possíveis lesões.
O público alvo da aplicação seriam os usuários de academia em geral, abrangendo tanto iniciantes quanto pessoas que ja estejam mais avançadas nessa atividade, com essa amplitude, o software pode fornecer a diversos tipos de pessoas treinos eficazes e acompanhamento ideal durante seus treinos.
Esse projeto de software utiliza como base a persona e a pesquisa qualitativa, desenvolvidas durante o processo de Design Thinking para ilustrar sua aplicação nesse contexto.




## Público-Alvo

O público alvo do aplicativo seriam os usuários de academias, entusiastas, atletas amadores, e iniciantes na prática de exercícios, respeitando suas dificuldades e limitações, abrangendo a população geral interessada na prática de atividades físicas. Além disso, o aplicativo também é direcionado a personal trainers e outros profissionais de educação física, que podem se cadastrar para oferecer orientação e instrução aos usuários.


## Personas


![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/79308f4b-2d03-4f77-8a35-11de628db135)

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/af5c209f-58ac-49b0-9e94-6254f2ccf658)

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/ad86a77c-8a40-44cc-81b6-57d3ef765988)



## Histórias de Usuários

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

**Links Úteis**:

- [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
- [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

Requisitos Funcionais:

-Cadastro dos usuários: alunos e personal-trainers
-Fichas personalizadas de acordo com a necessidades e limitações dos usuários
-Chat para contato dos alunos com os profissionais
-Avaliação das fichas publicadas pelos profissionais pelos usuários

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/7a80df4d-68ff-400d-87aa-f52722d29960)


Os requisitos de um projeto são classificados em dois grupos:

- [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
  correspondem a uma funcionalidade que deve estar presente na plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro (ex: suporte a dispositivos iOS e Android).

Lembre-se que cada requisito deve corresponder à uma e somente uma característica alvo da sua solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.

**Links Úteis**:

- [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
- [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## User Flow

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/d044ffa3-6296-4355-a9b1-90d5b29f3905)
User flow das telas do site 



## Wireframes


![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/377db988-60f0-4d9c-8f86-a07def1f5bea)

PROTÓTIPO TELA INICIAL

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/4c70e720-f19c-42a2-b819-bd67e77ea999)

PROTÓTIPO TELA DE CADASTRO 

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/c8f79ce2-c418-4348-abd3-df24ab21c2af)

PROTÓTIPO TEDA DAS FICHAS

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/80e2c676-00c6-4abb-b8ba-4eaa5845a152)

PROTÓTIPO TELA DE LOGIN

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/49084808-d91e-4987-8139-187d8661948a)

PROTÓTIPO TELA DE CONTATOS



## Gestão de Projetos

 Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.

Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

**Links Úteis**:

- [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
- [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
- [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
- [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)