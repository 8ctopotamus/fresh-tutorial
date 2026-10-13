import { useSignal } from "@preact/signals"
import { useEffect } from 'preact/hooks'

export function Countdown() {
  const count = useSignal(10)

  useEffect(() => {
    const timer = setInterval(() => {
      if (count.value <= 0) {
        clearInterval(timer)
      }
      count.value -= 1
      return () => clearInterval(timer)
    }, 1000)
  }, [])

  if (count.value <= 0) {
    return <p>Countdown: 🎉</p>
  }

  return <p>Countdown: {count}</p>
}