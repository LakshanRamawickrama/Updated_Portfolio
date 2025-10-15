import { Header } from '../Header'
import { ThemeProvider } from '../ThemeProvider'

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 p-8">
          <h1 className="text-2xl font-bold">Header Example</h1>
          <p>Scroll down to see the header background change</p>
          <div className="h-screen flex items-center justify-center bg-muted/30 mt-8 rounded-lg">
            <p>Scroll content to test header behavior</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}