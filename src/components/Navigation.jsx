import { useState } from 'react'
import { NavLink } from 'react-router'

const navigationItems = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={'public-navigation'} aria-label={'Public navigation'}>
      <button className={'menu-button'} type={'button'} aria-expanded={isMenuOpen}
        aria-controls={'public-navigation-links'} onClick={() => setIsMenuOpen((open) => !open)}>
        <span className={'menu-button__icon'} aria-hidden={'true'} />
        <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
      </button>
      <div id={'public-navigation-links'} className={`navigation__links ${isMenuOpen ? 'navigation__links--open' : ''}`}>
        {navigationItems.map(({ label, to }) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link--active' : ''}`}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
