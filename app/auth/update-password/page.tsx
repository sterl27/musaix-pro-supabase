import { UpdatePasswordForm } from '@/components/update-password-form'

export default function UpdatePasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Update Password</h1>
          <p className="text-muted-foreground">
            Enter your new password below
          </p>
        </div>
        <UpdatePasswordForm />
      </div>
    </div>
  )
}