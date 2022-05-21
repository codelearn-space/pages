import logo from './assets/logo.png';

function Navbar(){
  return (
    <div>
      <nav className="flex w-full h-16 bg-brand-900">
        <div>
          <img src={logo} alt="logo" className="h-full ml-16 py-1" />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;