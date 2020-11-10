# Three-js Code Samples

Esse projeto é dedicado para pessoas que querem começar a brincar com 3d e não sabem por onde começar.

Provavelmente você já ouvir falar de React.
Provavelmente você já ouviu falar de webGL, ou de 'ThreeJS'

Esse projeto ama o threejs e também o react. Por isso ele usa um **renderer** chamado

**React-Three-Fiber**

O react-three-fiber vai juntar a biblioteca threejs com o React.

Dessa forma fica mais fácil componentizar os elementos do seu projeto, de sua scene 3d.

## Para começar a construir coisas daoras é só seguir o passo-a-passo de 3 Etapas

### 1) Crie seu novíssimo exemplo dentro do diretório **examples**

e.g.:

`banana/index.js`

### 2) Depois de codado, o Componente precisa ser registrado nas rotas

```js
// routes/index.js

// importando seu Novo Exemplo (ele é um Component)
import Sample from '../examples/sample';

// dentro do Switch no Route deve se atribuir um componente e uma rota para acessar o sample

<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Round} />
    <Route path="/sample-example" component={Sample} />
  </Switch>
</BrowserRouter>


```

### 3) Pronto, agora se você acessar essa rota você tem acesso ao seu novo exemplo, brinque, modifique, teste suas modificações e começe já a criar softwares interativos!

## Extra:

### Você pode se achar necessário criar seus próprios componentes de Iluminação da cena e de Ambiente da cena.

Possibilitando a criação de seus light groups personalizados para a cena.


Possibilitando a criação de seus ambientes personalizados.


(Alguns exemplos fazem uso de Lights e Ambient personalizado, porém isso acarreta na performance do projeto como um todo)


### Você pode achar os componentes default de iluminação e de Environment dentro da pasta componentes.

[ ] criar componente genérico para carregamento de models


[ ] criar componente genérico para sombras nas iluminações


[ ] criar componentes específicos para iluminações diferenciadas


[ ] criar componente de linhas guias para development-stage


[ ] criar componente de player de áudio threejs


[ ] criar qualquer componente dentro de components pode ser uma boa ideia, se ñ for algo muito específico cogite a criação desse efeito/comportamento dentro do diretório de **components**


### Algumas Libs e fontes de inspiração e consulta

Você pode estagnar aqui ou ir atrás da documentação das ferramentas e tecnologias disponíveis nesse projeto:

- ThreeJS - ThreeJS Docs & Threejsfundamentals
- ReactThreeFiber
- drei

O threejs é base, react-three-fiber é um facilitador e o drei é a cereja.

- Se for começar agora, foque nas documentações do threejs
- Se já tiver um *grasp* da documentação do threejs parta para a construção de novos exemplos usando o r3f
- Se se sentir a vontade para inventar coisas novas e fugir da cultura, use drei para efeitos mais dahoras. 

### Você pode ficar a vontade para criar qualquer componente e criar quantos exemplos quiser, use e re-use os exemplos que já existem. 

Não submeta alterações de exemplos que não são seus. 


Não altere componentes que não são seus. 


Faça um Clone do diretório do componente caso queira modifica-lo ao seu gosto, ou, de novo, se for algo muito específico, crie dentro da própria pasta do exemplo.


# Culture isn't your friend
