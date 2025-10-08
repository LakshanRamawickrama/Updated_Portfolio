import { Contact } from '../Contact'
import { ThemeProvider } from '../ThemeProvider'
import { Toaster } from '@/components/ui/toaster'

export default function ContactExample() {
  return (
    <ThemeProvider>
      <Contact />
      <Toaster />
    </ThemeProvider>
  )
}