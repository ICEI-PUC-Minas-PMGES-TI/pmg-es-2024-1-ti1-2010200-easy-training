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

Easy Training é uma aplicação Web que cria fichas personalizadas para os usuários, considerando suas limitações e seus objetivos específicos, além de contato direto com personal trainers.

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

 ## História 1- 
 
 Entrevista 1:

 Diogo de Resende Marcelino

 15 anos

 Estudante

 Faz academia a 2 anos

 O que você gostaria que fosse feito sobre o apoio das academias aos alunos ?

-gostaria que a academia tivesse mais personal-trainers para acompanhar e orientar todos alunos

O que você gostaria que mudasse sobre as fichas de treino das academias ?

-que elas fossem especializadas de acordo com meus objetivos e menos desgastantes fisicamente

O que você gostaria que mudasse sobre o apoio que os personal trainers oferecem ?

-que eles fossem mais atentos as atividades dos alunos.
 
## História do usuário 1:

Como membro de uma academia, eu quero poder testar novas fichas para melhorar meus resultados na academia através de novos treinos sem desgaste físico.


 ## História 2 -
 
 Entrevista 2 -
 
 Lucas Valente 
 
20 anos 

Estudante 

Faz academia há 6 anos

Você acha que é necessário personal? 
Não é necessário personal, seria um gasto desnecessário, para cada exercício, no aplicativo teria um pequeno vídeo explicando a execução correta.

O que você gostaria no aplicativo?
Eu quero que tenha marcações de peso, para focar na progressão de carga, para a cada treino eu não regrida.

O que eu gostaria? 
Tempo de descanso recomendado.

## História do Usuário 2:

Como membro de uma academia, eu quero apoio e instruções que me ajudem na execução dos exercícios para evitar execuções incorretas e obter melhores resultados com as cargas adequadas.


##  História 3 -
 
 Entrevista 3:
 
 Claudia Maria de Resende
 
 54 anos

 Secretária de Educação

 Não frequenta academias

O que você espera sobre o apoio das academias com iniciantes ?

-Orientação de como atingir os objetivos e acompanhamento constante dos profissionais para evitar possíveis lesões e incentivo para os iniciantes.

O que você espera das fichas de treino das academias ?

- Que elas sejam personalizadas e acompanhem o ritmo dos alunos.
  
O que você espera do apoio dos personal treiners ?

- olhar atento aos alunos para evitar lesões e atenção individual de acordo com as habilidades de cada um.

## História do Usuário 3 :

Como alguém que pretende iniciar na academia, eu quero fichas específicos que me ajudem a alcançar meus objetivos, além de ter maior cuidado e atenção dos personal trainers.

## Requisitos

## Requisitos Funcionais:

-Cadastro dos usuários: alunos e personal-trainers.

-Fichas personalizadas de acordo com a necessidades e limitações dos usuários.

-Cronômetro e marcador de tempo para a realização dos exercícios

-Salvar fichas escolhidas no perfil do usuário


## Requisitos não funcionais:


-O sistema deverá executar em qualquer plataforma.

-O sistema deverá ter alta disponibilidade.

-O sistema deverá apresentar alta responsividade em qualquer dispositivo (de mobile a grandes telas).

-O sistema deverá ser desenvolvido utilizando HTML, CSS e JavaScript.

-O sistema não apresentará nenhum tipo de dado privativo dos usuários

-O sistema deverá atender as normas legais, tais como padrões e leis.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/7a80df4d-68ff-400d-87aa-f52722d29960)




## User Flow

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/d044ffa3-6296-4355-a9b1-90d5b29f3905)
User flow das telas do site 



## Wireframes


![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/377db988-60f0-4d9c-8f86-a07def1f5bea)

PROTÓTIPO TELA INICIAL

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/4c70e720-f19c-42a2-b819-bd67e77ea999)

PROTÓTIPO TELA DE CADASTRO 

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/c8f79ce2-c418-4348-abd3-df24ab21c2af)

PROTÓTIPO TELA DAS FICHAS

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/80e2c676-00c6-4abb-b8ba-4eaa5845a152)

PROTÓTIPO TELA DE LOGIN

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/161259842/49084808-d91e-4987-8139-187d8661948a)

PROTÓTIPO TELA DE CONTATOS


# Telas da aplicação

TELA INICIAL 
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/fb173526-0cef-4944-9de2-c7ea96ca3fd6)

TELA DE CADASTRO 
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/7b64d4e5-9916-43cc-8d6f-36af84e19ef4)

TELA DE LOGIN
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/33522d93-46ae-4b82-ae43-ef789145b122)

TELA DE PERFIL
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/f7027eca-1116-474c-81d0-7cd2973f9639)

TELA DA GERAÇÃO DAS FICHAS
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/58593f2d-40fc-4ca4-b6a4-099381acc577)

TELA DA FICHA GERADA
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/7a13feac-8fc5-4529-81d3-2b14234a56e7)

TELA DE CONTATOS
![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/0f29d196-5532-4878-8bf6-0ba505fb85e3)

## Gestão de Projetos

 Nesta parte do documento, você deve apresentar  o processo de trabalho baseado nas metodologias ágeis, a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a gestão de configuração do projeto via GitHub.

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-easy-training/assets/162399153/1e2ecfc0-9ceb-4c0f-a5c0-c1400672d003)

