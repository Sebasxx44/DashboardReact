import './navbar.scss'
import profile  from '/profile.jpeg'
import logo from '/grafico.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>

        <img src={logo} alt="" />

      </div>
      <div className='icons'>

        <img className="icon" src="/search.svg" alt="" />
        <img className="icon" src="/app.svg" alt="" />
        <img className="icon" src="/expand.svg" alt="" />

    <div className='notification'>
      <img src="/notifications.svg" alt="" />
      <span>1</span>
    </div>

    <div className="user">
      <img src={profile} alt="" />
      <span>Sebaz</span>
    </div>

    <img className="icon" src="/settings.svg" alt="" />

      </div>
    </div>
  )
}

export default Navbar