# Culture isn't my friend readme

# pcoi

Esse projeto é dedicado para pessoas que querem começar a brincar com 3d e não sabem por onde começar.

Provavelmente você já ouvir falar de React.
Provavelmente você já ouviu falar de webGL, ou de 'ThreeJS'

Esse projeto ama o threejs e também o react. Por isso ele usa um **renderer** chamado

**React-Three-Fiber**

O react-three-fiber vai juntar a biblioteca threejs com o React.

Dessa forma fica mais fácil componentizar os elementos do seu projeto, de sua scene 3d.

## Para começar a construir coisas daoras é só seguir as três etapas

Antes de começar certifique-se da instalação do node, e também um gerenciador de pacotes.

### 0 _

Rode o comando de **instalação de depêndencias** e ao final **inicie o servidor local** em [localhost:3000](http://localhost:3000) com o **script *start*** que se encontra dentro do arquivo *package.json* 

### 1 _

Crie seu novíssimo exemplo dentro do diretório **examples**

e.g.:

`banana/index.js`

### 2 _

Depois de codado, o Componente precisa ser registrado nas rotas

```jsx
// routes/index.js

// importando seu 'Novo Exemplo' (ele é um Component)
import Sample from '../examples/sample';

// dentro do Switch no Route deve se atribuir 
// um componente e uma rota para acessar o sample

<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Round} />
    <Route path="/sample-example" component={Sample} />
  </Switch>
</BrowserRouter>

```

### 3 _

Pronto, agora se você acessar essa rota você tem acesso ao seu novo exemplo, brinque, modifique, teste suas modificações e começe já a criar softwares interativos! 

---

## Algumas Libs e fontes de inspiração e consulta

Você pode estagnar aqui ou ir atrás da documentação das ferramentas e tecnologias disponíveis nesse projeto

> Links that should be always on opened tabs

- [ThreeJS **Docs**](https://threejs.org/docs/) & Guide [**https://threejsfundamentals.org/**](https://threejsfundamentals.org/)
- [ReactThreeFiber](https://github.com/pmndrs/react-three-fiber) & [**Docs**](https://inspiring-wiles-b4ffe0.netlify.app/) - [**Tutorials**](https://alligator.io/react/react-with-threejs) & Code Samples  **→ [Paul Henschel's CodeSandBox](https://codesandbox.io/u/drcmda)**
- **[drei storybook](https://drei-storybook.netlify.app/)**

---

Se for começar agora, foque nas documentações do threejs

Se já tem um *grasp* do que é uma camera, grupos de luzes, geometries e materials: 
Parte para a construção de novos exemplos usando o r3f

Se se sentir a vontade para inventar coisas novas e fugir da cultura, use drei para efeitos mais dahoras.

---

### Você pode se achar necessário criar seus próprios componentes de Iluminação da cena e componentes de Environment da cena.

- Possibilitando a criação de seus light groups personalizados para a cena.
- Possibilitando a criação de seus ambientes personalizados.
- (Alguns exemplos fazem uso de Lights e Environment personalizado (porém isso acarreta na performance do projeto como um todo)

# Design até o momento

```jsx
/*
		Routes armazenam as rotas, o roteamento será feito através do react-router-dom
		Cada rota renderiza um componente
*/
```

![https://i.imgur.com/cvUpgFg.gif](https://i.imgur.com/cvUpgFg.gif)

---

Você pode achar os componentes default de iluminação e de Environment dentro da pasta componentes.

- [ ]  criar componente genérico para carregamento de models
- [ ]  criar componente genérico para sombras nas iluminações
- [ ]  criar componentes específicos para iluminações diferenciadas
- [ ]  criar componentes de linhas guias para development-stage
- [ ]  Criar GUI eficiente para development-stage
- [ ]  criar componente de player de áudio threejs
- [ ]  **criar qualquer componente dentro de components pode ser uma boa ideia**
- [ ]  cogite a criação desse efeito/comportamento personalizado de ambiente e iluminação dentro do diretório de **components/custom**

---

## *Obs. relevante para participar do desenvolvimento*

Você pode ficar a vontade para **criar** **qualquer** **componente** e criar **quantos** **exemplos** **quiser**, use e re-use os exemplos que já existem, brinque e construa coisas.

- Não submeta alterações de exemplos que não são seus.
    - (ao invés disso clone os exemplos para criar os seus próprios *artistic frames)*

- Novos componentes serão salvos na seguinte diretório: **src/components/Componente/custom**. 
Isso funcionará tanto para ***Ambient*** (que eu deveria mudar o nome para Environment) quanto para ***Lights***. Após feito a criação pode ser alterado o ***index.js*** do Componente desejado.

# *Projetos*

Na guia de projetos do repositório é possível encontrar os desenvolvimentos atuais de cada dia do projeto e também o que está acompanhar o que está vindo *em breve.*

# See ya.

*Culture isn't your [friend](https://twitter.com/iagokrt) 🐦 Shall we?*
