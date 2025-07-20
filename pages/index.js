import './index.css'
import logo from '/logo.png'
import bg from '/bg.jpg'

function App() {
  return (
    <div className="app">
      <div className="overlay">
        <img src={logo} alt="Aloha RP" className="logo" />
        <h1 className="slogan">Реальность, в которую хочется нырнуть</h1>

        <nav className="menu">
          <a href="#">Главная</a>
          <a href="#">О сервере</a>
          <a href="#">Галерея</a>
          <a href="#">Запуск</a>
          <a href="#" className="cta">Начать играть</a>
        </nav>
      </div>
    </div>
  )
}

export default App