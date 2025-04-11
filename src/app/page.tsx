import Resume from '@/components/Resume'
import { ThemeProvider } from '@/components/Resume/context/ThemeContext'
import ThemeToggle from '@/components/Resume/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-y-auto">
      <ThemeProvider>
        <Resume />
        <ThemeToggle />
      </ThemeProvider>
    </main>
  )
}