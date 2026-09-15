import { Navigate, Route, Routes } from 'react-router'
import { PublicPage } from '../pages/PublicPage.jsx'
import { ProfilePage } from '../pages/ProfilePage.jsx'
import { ProjectsPage } from '../pages/ProjectsPage.jsx'
import { AboutPage } from '../pages/AboutPage.jsx'
import { ContactPage } from '../pages/ContactPage.jsx'
import { SiteLayout } from '../components/SiteLayout.jsx'

const publicPages = [
  { path: 'profile', title: 'Profile' },
  { path: 'projects', title: 'Projects' },
  { path: 'about', title: 'About' },
  { path: 'contact', title: 'Contact' },
]

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/profile" replace />} />
      <Route element={<SiteLayout />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {publicPages
          .filter(({ path }) => !['profile', 'projects', 'about', 'contact'].includes(path))
          .map(({ path, title }) => (
            <Route key={path} path={`/${path}`} element={<PublicPage title={title} />} />
          ))}
      </Route>
      <Route path="*" element={<PublicPage title="Page not found" />} />
    </Routes>
  )
}
