'use client'

import { Toaster as ReactHotToaster } from 'react-hot-toast'
import { useTheme } from 'next-themes'

export function Toaster() {
  const { theme } = useTheme()

  return (
    <ReactHotToaster
      position="top-center"
      toastOptions={{
        className: '!bg-background !text-foreground !border !border-border',
        style: {
          borderRadius: '0.5rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          fontSize: '0.875rem',
        },
        success: {
          className: '!bg-green-50 !text-green-800 !border-green-200',
          iconTheme: {
            primary: 'rgb(22 163 74)',
            secondary: 'white',
          },
        },
        error: {
          className: '!bg-red-50 !text-red-800 !border-red-200',
          iconTheme: {
            primary: 'rgb(220 38 38)',
            secondary: 'white',
          },
        },
        loading: {
          className: '!bg-blue-50 !text-blue-800 !border-blue-200',
        },
        duration: 5000,
      }}
    />
  )
}