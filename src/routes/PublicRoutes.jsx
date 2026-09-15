import { Navigate, Route, Routes } from 'react-router'
import { PublicPage } from '../pages/PublicPage.jsx'
import { HomePage } from '../pages/HomePage.jsx'
import { ProjectsPage } from '../pages/ProjectsPage.jsx'
import { AboutPage } from '../pages/AboutPage.jsx'
import { ContactPage } from '../pages/ContactPage.jsx'
import { PublicLayout } from '../components/PublicLayout.jsx'

export function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path={'/profile'} element={<Navigate to={'/'} replace />} />
        <Route path={'/projects'} element={<ProjectsPage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Route>
      <Route path={'*'} element={<PublicPage title={'Page not found'} />} />
    </Routes>
  )
}
