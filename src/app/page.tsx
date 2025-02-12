import Resume from '@/components/Resume'
import { ThemeProvider } from '@/components/Resume/context/ThemeContext'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <ThemeProvider>
        <Resume />
      </ThemeProvider>
    </main>
  )
}