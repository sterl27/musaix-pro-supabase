'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeSwitcher } from '@/components/theme-switcher'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) setError(error.message)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Theme Switcher */}
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
        
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent inline-block mb-2">
            Musaix Pro
          </Link>
          <p className="text-muted-foreground">Welcome back to your studio</p>
        </div>

        {/* Login Form */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-foreground">Login</h1>
          
          {error && (
            <div className="bg-destructive/10 border border-destructive/50 text-destructive rounded-lg p-3 mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-primary hover:underline transition">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 border-t border-border"></div>
            <span className="text-muted-foreground text-sm">OR</span>
            <div className="flex-1 border-t border-border"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button 
              onClick={handleGoogleLogin}
              variant="outline"
              className="w-full flex items-center justify-center gap-3"
            >
              <span>🔗</span> Continue with Google
            </Button>
          </div>

          {/* Register Link */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline transition font-medium">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
