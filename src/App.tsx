import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Skills from './pages/Skills.tsx'
import SkillDetail from './pages/SkillDetail.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import type { ContactLink, NavItem, Skill } from './types.ts'

const navLinks: NavItem[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'skills', label: 'Skills', to: '/skills' },
  { id: 'contact', label: 'Contact', to: '/contact' },
  { id: 'register', label: 'Register', to: '/register' },
]

const email = 'tioma218@gmail.com'

const contactLinks: ContactLink[] = [
  { id: 'email', label: 'Email', href: `mailto:${email}` },
  { id: 'github', label: 'GitHub', href: 'https://github.com/temirlan-amanzhol' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/nonstandrt' },
]

const skills: Skill[] = [
  { id: 'meta-ads', name: 'Meta / Instagram advertising' },
  { id: 'reels', name: 'Reels and TikTok video production' },
  { id: 'smm', name: 'SMM for small and medium businesses' },
  { id: 'html-css', name: 'HTML5 semantics and CSS layout' },
  { id: 'javascript', name: 'JavaScript basics' },
  { id: 'react-ts', name: 'React and TypeScript basics' },
  { id: 'react-router', name: 'React Router and Context' },
  { id: 'react-forms', name: 'Controlled forms and validation (this week\'s focus)' },
]

function App() {
  return (
    <Routes>
      {/* One layout route: Header and Footer stay, only the <Outlet /> part changes */}
      <Route element={<Layout title="Temirlan" navLinks={navLinks} />}>
        <Route index element={<Home contactLinks={contactLinks} />} />
        <Route path="skills" element={<Skills skills={skills} />} />
        <Route path="skills/:id" element={<SkillDetail skills={skills} />} />
        <Route
          path="contact"
          element={
            <Contact
              email={email}
              links={contactLinks.filter((link) => link.id !== 'email')}
            />
          }
        />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
