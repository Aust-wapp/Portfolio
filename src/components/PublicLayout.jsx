import { Link, Outlet } from 'react-router'
import { Navigation } from './Navigation.jsx'

export function PublicLayout() {
  return (
    <div className={'public-layout'}>
      <aside className={'public-sidebar'}>
        <Link className={'sidebar-brand'} to={'/'} aria-label={'AJ John home'}>
          <span className={'sidebar-avatar'} aria-hidden={'true'}>AJ</span>
          <span className={'sidebar-name'}>AJ John</span>
          <span className={'sidebar-caption'}>Developer portfolio</span>
        </Link>
        <Navigation />
        <div className={'sidebar-action'}>
          <span className={'sidebar-action__label'}>Have a project in mind?</span>
          <Link className={'sidebar-action__link'} to={'/contact'}>Get in touch</Link>
        </div>
      </aside>
      <div className={'public-content'}>
        <main className={'site-main'}><Outlet /></main>
        <footer className={'site-footer'}><p>AJ John · Developer portfolio</p></footer>
      </div>
    </div>
  )
}
