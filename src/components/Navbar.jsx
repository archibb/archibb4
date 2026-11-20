
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const navItems = [
  { id: 'home', no: '00', label: 'HOME'},
  { id: 'about', no: '01', label: 'ABOUT'},
  { id: 'education', no: '02', label: 'EDUCATION'},
  { id: 'skills', no: '03', label: 'SKILLS'},
  { id: 'contact', no: '04', label: 'CONTACT'},
]

function Navbar () {

  const [open, setOpen] = useState(false)   
  const close = () => setOpen(false)

  return (
    <header className={open ? 'nav open' : 'nav'}>
      <a className="logo" href="#home" onClick={close}> ARCH<span className="ibb">IBB </span> </a>

      <button className="nav-toggle" 
        aria-expanded={open} 
        aria-controls="nav-panel" 
        onClick={() => setOpen(!open)}>

          <span> INDEX </span>
          <FaBars aria-hidden="true" />

      </button>

      <nav id="nav-panel" className="nav-panel" aria-label="Main">

        <ul>
            {navItems.map((item) => (
              <li key={item.id}> 
                <a className="nav-links" href={'#' + item.id} onClick={close}>
                  <span className="nav-no"> {item.no} </span>
                  <span className="nav-label"> {item.label} </span>
                </a> 
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar