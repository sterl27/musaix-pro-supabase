import { ForgotPasswordForm } from '@/components/forgot-password-form'

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground">
            Enter your email address and we&apos;ll send you a reset link
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  )
}