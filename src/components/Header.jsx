import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'why', label: 'Why experiment' },
  { id: 'landscape', label: 'Tools and trade-offs' },
  { id: 'baseline', label: 'Baseline ROI' },
  { id: 'sources', label: 'Sources' },
]

export default function Header() {
  const [activeId, setActiveId] = useState('why')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const ids = LINKS.map(link => link.id)
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const handleHashChange = () => {
      const id = window.location.hash.replace('#', '')
      if (ids.includes(id)) setActiveId(id)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0.1, 0.35, 0.6],
      },
    )

    sections.forEach(section => observer.observe(section))

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <header>
        <div className="tag">Developer Workflow Experiment</div>
        <h1>
          AI Tooling Field Notes<br />
          <em>What helps in real development work?</em>
        </h1>
        <p className="subtitle">Hands-on comparison of tools, trade-offs, and daily workflow impact · March 2026</p>
      </header>
      <nav className="top-nav" aria-label="Page sections">
        {LINKS.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? 'active' : ''}
          >
            {link.label}
          </a>
        ))}
        <button
          className="theme-toggle"
          onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </nav>
    </>
  )
}
