import { Outlet } from 'react-router'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import type { NavItem } from '../types.ts'

type LayoutProps = {
  title: string
  navLinks: NavItem[]
}

function Layout({ title, navLinks }: LayoutProps) {
  return (
    <>
      <Header title={title} links={navLinks} />
      <main>
        <Outlet />
      </main>
      <Footer owner={title} year={2026} note="Built for IWaMAD, Week 05." />
    </>
  )
}

export default Layout
