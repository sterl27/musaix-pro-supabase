import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function ConfirmPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="space-y-4">
          <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="text-3xl font-bold">Email Confirmed!</h1>
          <p className="text-muted-foreground">
            Your email has been successfully verified. You can now access all features of your account.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/login">Back to Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}