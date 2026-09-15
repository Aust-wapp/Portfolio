import { Link, Outlet } from 'react-router'
import { Navigation } from './Navigation.jsx'
export function SiteLayout() {
  return <div className={'site-layout'}>
    <header className={'site-header'}><Link className={'site-brand'} to={'/profile'}>AJ John</Link><Navigation /></header>
    <main className={'site-main'}><Outlet /></main>
    <footer className={'site-footer'}><p>Developer portfolio</p></footer>
  </div>
}
