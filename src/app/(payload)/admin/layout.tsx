import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  // Check if admin is disabled via environment variable
  if (process.env.APP_ENV === 'production' && process.env.PAYLOAD_READONLY === 'true') {
    // Redirect to home page if admin is disabled
    redirect('/')
  }

  // If admin is enabled, render the children (admin interface)
  return <>{children}</> 
}