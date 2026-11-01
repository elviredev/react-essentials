import componentsImg from './assets/components.png'
import propsImg from './assets/config.png'
import jsxImg from './assets/jsx-ui.png'
import stateImg from './assets/state-mgmt.png'

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      "L'élément constitutif fondamental de l'interface utilisateur : composez l'interface utilisateur en combinant plusieurs composants.",
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Renvoie du code (potentiellement dynamique) de type HTML, servant à définir le balisage effectif qui sera rendu.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Rendez les composants configurables (et donc réutilisables) en leur transmettant des données d’entrée.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'Données gérées par React qui, lorsqu’elles sont modifiées, entraînent un nouveau rendu du composant et une mise à jour de l’interface utilisateur.',
  },
]

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Les composants constituent les briques élémentaires des applications React. Un composant est un module autonome (HTML + CSS éventuel + JS) qui génère un résultat.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      "JSX est une extension de syntaxe à JavaScript. Il s'apparente à un langage de modèles (template language), mais bénéficie de toute la puissance de JavaScript (il permet, par exemple, de générer du contenu dynamique).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Les composants acceptent des entrées arbitraires appelées « props ». Elles s’apparentent à des arguments de fonction.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'L’état (state) permet aux composants React de modifier leur rendu au fil du temps, en réaction aux actions de l’utilisateur, aux réponses réseau ou à tout autre élément.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
}
