import Header from './components/Header.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import SkillItem from './components/SkillItem.tsx'
import Footer from './components/Footer.tsx'

type Skill = {
  id: string
  name: string
}

type Link = {
  id: string
  label: string
  href: string
}

const navLinks: Link[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'goals', label: 'Goals', href: '#goals' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

const contactLinks: Link[] = [
  { id: 'email', label: 'Email', href: 'mailto:tioma218@gmail.com' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/temirlan-amanzhol' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/nonstandrt' },
]

const skills: Skill[] = [
  { id: 'meta-ads', name: 'Meta / Instagram advertising' },
  { id: 'reels', name: 'Reels and TikTok video production' },
  { id: 'smm', name: 'SMM for small and medium businesses' },
  { id: 'html-css', name: 'HTML5 semantics and CSS layout' },
  { id: 'javascript', name: 'JavaScript basics' },
  { id: 'react-ts', name: 'React and TypeScript basics (this week\'s focus)' },
]

function App() {
  return (
    <>
      <Header title="Temirlan" links={navLinks} />

      <main>
        <ProfileCard
          name="Temirlan"
          role="Marketer and aspiring web developer, Almaty"
          bio="I run NonStandrt, a small agency that makes Instagram ads, Reels and SMM for local businesses. Now I'm learning front-end development to build websites for our clients myself."
          avatarUrl="https://github.com/temirlan-amanzhol.png"
          links={contactLinks}
        />

        <section id="skills" className="card">
          <h2>Skills</h2>
          {skills.length > 0 ? (
            <ul className="skills">
              {skills.map((skill) => (
                <SkillItem key={skill.id} name={skill.name} />
              ))}
            </ul>
          ) : (
            <p className="empty-state">No skills added yet.</p>
          )}
        </section>

        <section id="goals" className="card">
          <h2>Goals</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Current level</th>
                  <th>Goal by end of semester</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HTML &amp; CSS</td>
                  <td>Beginner</td>
                  <td>Build a full responsive site for my agency</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td>Beginner</td>
                  <td>Add real interactivity: forms, filters, galleries</td>
                </tr>
                <tr>
                  <td>Deployment</td>
                  <td>GitHub Pages</td>
                  <td>Deploy client sites with Vite and Vercel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="contact" className="card">
          <h2>Contact</h2>
          <p>
            Email: <a href="mailto:tioma218@gmail.com">tioma218@gmail.com</a>
          </p>
        </section>
      </main>

      <Footer owner="Temirlan" year={2026} note="Built for IWaMAD, Week 03." />
    </>
  )
}

export default App
