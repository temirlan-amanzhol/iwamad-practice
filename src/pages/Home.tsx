import ProfileCard from '../components/ProfileCard.tsx'
import type { ContactLink } from '../types.ts'

type HomeProps = {
  contactLinks: ContactLink[]
}

function Home({ contactLinks }: HomeProps) {
  return (
    <>
      <ProfileCard
        name="Temirlan"
        role="Marketer and aspiring web developer, Almaty"
        bio="I run NonStandrt, a small agency that makes Instagram ads, Reels and SMM for local businesses. Now I'm learning front-end development to build websites for our clients myself."
        avatarUrl="https://github.com/temirlan-amanzhol.png"
        links={contactLinks}
      />

      <section className="card">
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
    </>
  )
}

export default Home
