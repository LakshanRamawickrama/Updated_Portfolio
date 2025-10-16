import { Sun, Moon, Laptop } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Cycle through themes: light → dark → system → light …
  const handleToggle = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const renderIcon = () => {
    if (theme === 'light') return <Sun className="h-[1.2rem] w-[1.2rem]" />
    if (theme === 'dark') return <Moon className="h-[1.2rem] w-[1.2rem]" />
    return <Laptop className="h-[1.2rem] w-[1.2rem]" /> // system mode icon
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      data-testid="button-theme-toggle"
      aria-label="Toggle theme"
    >
      {renderIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
