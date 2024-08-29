import './Navigation.scss'

export function Navigation() {
  return (
    <nav>
      <img src='./src/assets/logo.svg'></img>
      <ul>
        <li a href="#">Charts</li>
        <li a href="#">Daily</li>
        <li a href="#">Tracker</li>
      </ul>
      <button>Contacts</button>
    </nav>
  )
}
