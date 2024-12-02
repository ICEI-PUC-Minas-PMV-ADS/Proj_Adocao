# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">•	João Silva, Brasília - DF</th>
</tr> 
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Recém-casado, funcionário público, acaba de comprar uma casa em condomínio fechado</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Busca adotar um cachorro para crescer e criar junto com sua família; não faz distinção nem preferência de raça, embora goste bastante de vira-latas, porte médio a grande. </td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">•	Ana Costa, Anápolis - GO</th>
</tr> 
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Solteira, estudante, mora com os pais em uma casa com quintal. Tem diversos animais de estimação.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Doar a prole de sua cadela, uma mestiça de  Staffordshire com mastiff. Não sabendo quem é o progenitor, assume-se que os filhotes são mestiços com vira-lata</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">•	Juliana Lima, Lins - SP</th>
</tr> 
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Estudante universitária, divide um sobrado com algumas pessoas, no entanto não são permitidos animais de estimação. Um dia foi deixado à porta da república uma caixa de papelão com dois filhotes de gato, vira-latas.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Os estudantes colegas de Juliana concordaram em manter os filhotes apenas como lar temporário e precisam de um tutor definitivo em caráter de urgência. Ninguém tem tempo hábil para cuidar dos gatos, nem procurar muitas formas de adoção.</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<tr align=center>
<th colspan="2">•	Flavio Oliveira, Marilia -SP</th>
</tr> 
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Jovem, solteiro, mora sozinho, vive em apartamento, trabalha longas horas.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> Busca um animal de estimação que não sofra com sua ausência durante a semana, seja silencioso para não incomodar outros moradores, demande menos manutenção.</td>
</tr>
</tbody>
</table>



## Histórias de Usuários

|EU COMO               | QUERO/PRECISO        |PORQUE                 |
|----------------------------|---------------------------|----------------------------------|
|Eu,João, como adotante      | Desejo adotar um animal, próximo a localização onde moro, independente de raça ou outras características.  |Para alcançar um nível pessoal de realização; não compactuar com crimes ambientais, diminuir o fluxo de animais de rua.|
|Eu, Ana, como doadora |Quero encontrar um tutor responsável para entregar os animais disponíveis, e que possa buscá-los onde moro.  |Os cães para adoção vêm da prole da minha cachorra, porém só consigo mantê-los como lar temporário, não tenho como viajar para entregar o animal.    |
|Eu, como Equipe da PetMatch |Quero ser um facilitador no processo de doação de animais; dar alternativas para animais abandonados na rua, conectando aqueles que não podem cuidar de um animal com tutores em potencial. |Preocupados com causas ambientais e de proteção aos animais, vejo no site uma forma de agilizar e descomplicar processos de adoção de pets, compatíveis com a vida conectada da sociedade atual. De maneira responsável, indo contra o comércio de reprodução e venda ilegal de animais.


## Requisitos do Projeto



### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  O site deve prover o cadastro de usuários Master responsáveis pelo processo adoção. Usuários comuns devem poder se cadastrar no site.  | Alta | 
| RF-02 |O sistema deve permitir o cadastro de pets para adoção pelo usuário Master, contendo informações como espécie, raça, porte, condições de saúde, temperamento, fotos. | Alta |
|RF-03 | O sistema deve permitir a visualização de uma lista de pets disponíveis para adoção, com filtros para espécie, raça e localização, contendo informações detalhadas como condições de saúde, temperamento, fotos.  |Alta  |
|RF-04  |O sistema deve permitir que o usuário salve ou "favorite" animais de interesse para visualizar mais tarde.  |Média  |
|RF-05  |O sistema deve exigir que o adotante ao escolher um animal para adoção preencha um formulário contendo suas informações como nome, endereço, e formas de contato (email/telefone). |Alta  |
|RF-07  |O sistema deve permitir que o usuário Master edite ou remova um pet cadastrado, se necessário.   |Média |   
|RF-08  |O sistema deve permitir que o cliente faça o cadastramento de um Pet para adoção, que será incluido ou não somente pelo usuário Master, após análise.   |Alta |
<br>
**Prioridade: Alta / Média / Baixa. 


### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01| O sistema deve garantir a segurança dos dados dos usuários, implementando criptografia para senhas e comunicação entre cliente e servidor. | Alta |
|RNF- 02| O tempo de carregamento das páginas, especialmente ao visualizar a lista de pets para adoção, deve ser inferior a 3 segundos para uma boa experiência. | Alta |
|RNF-03 | O sistema deve estar disponível 99,9% do tempo, garantindo alta disponibilidade para os usuários. | Média |
|RNF-04 |O site deve ser compatível com os principais navegadores, incluindo Chrome, Firefox, Safari e Edge. | Média| 
|RNF- 05 |O processo de confirmação de e-mail deve ocorrer em até 2 minutos após o cadastro. |Alta|  
|RNF-06 | As fotos dos pets devem ser otimizadas para carregar rapidamente sem comprometer a qualidade. |Baixa |


**Prioridade: Alta / Média / Baixa. 

