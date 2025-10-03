import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function ErrorPage({
  searchParams,
}: {
  searchParams: { message?: string; error?: string }
}) {
  const errorMessage = searchParams.message || searchParams.error || 'An unexpected error occurred'

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="space-y-4">
          <AlertCircle className="mx-auto h-16 w-16 text-destructive" />
          <h1 className="text-3xl font-bold">Authentication Error</h1>
          <p className="text-muted-foreground">
            {errorMessage}
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/login">Try Again</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}