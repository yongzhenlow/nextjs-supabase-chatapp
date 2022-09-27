import { useState } from 'react'
import { supabase } from 'utils/supabase-client'
import type { ChangeEvent, FormEvent } from 'react'

const Auth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // @todo handle validation here
    if (isLoading || !email?.length) {
      return false
    }

    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container max-w-md mx-auto mt-10 px-6 text-slate-900 text-center">
      <div className="rounded border border-slate-200 p-10">
        <h1 className="font-medium text-2xl mb-6">Login to Chat</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <label className="block">
            <span>
              Get a magic link sent to your email that&rsquo;ll sign you in
              instantly
            </span>
            <input
              className="block mt-3 w-full rounded border text-slate-900 border-slate-400 py-3 px-3"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </label>

          <button
            className="block w-full rounded py-3 px-5 text-white bg-blue-800 hover:bg-blue-700 disabled:bg-slate-400"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Send Magic Link'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
