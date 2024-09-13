import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div className='navbarContainer'>
      <ul>
        <li>
          <Link to='/'>Ayush. </Link>
        </li>
        <li>
          <ul>
            <li>
              <Link to='/projects'>Projects </Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
            </li>
            <li>
              <a
                href='https://drive.google.com/file/d/13L1Wu-BR0ewUoHYI_tsr9Vn3isjh7Qo3/view?usp=sharing'
                target='_blank'
              >
                Resume
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
