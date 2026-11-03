/**
 * Composant enveloppant une structure JSX/HTML avec 2 slots (emplacements) différents
 * children : contenu principal des onglets
 * buttons : boutons des onglets
 * ButtonsContainer est une props utilisable en tant que composant personnalisé à l'intérieur du composant receveur (Tabs)
 * et dont la valeur peut être "menu" (par défaut), "div", "ul" ou {Section}
 */
export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  //   const ButtonsContainer = buttonsContainer
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}
