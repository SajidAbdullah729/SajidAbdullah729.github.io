'use client'

import { useEffect } from 'react'

export default function AOSInit() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      })
    })
  }, [])

  return null
}

