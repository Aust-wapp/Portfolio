import { NavLink } from 'react-router'
const items = [{ label: 'Profile', to: '/profile' }, { label: 'Projects', to: '/projects' }, { label: 'About', to: '/about' }, { label: 'Contact', to: '/contact' }]
export function Navigation() {
  return <nav className={'navigation'} aria-label={'Main navigation'}><div className={'navigation__links'}>
    {items.map(({ label, to }) => <NavLink key={to} to={to} className={({ isActive }) => `navigation__link ${isActive ? 'navigation__link--active' : ''}`}>{label}</NavLink>)}
  </div></nav>
}
