// app/components/PageLoader.tsx
'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageLoader() {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 1500) // Adjust timing
    return () => clearTimeout(timer)
  }, [pathname])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      {/* Your loader component */}
      <div className="spinner text-5xl text-amber-950 font-semibold ">LOVER OF SAHARA</div>
    </div>
  )
}