import { useState } from 'react'
import { supabase } from '../utils/supabase-client'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-row justify-center text-slate-700 text-center mt-10">
      <form
        action=""
        method=""
        className=""
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin(email)
        }}
      >
        <h1 className="text-2xl my-4">Chat App</h1>

        <p className="my-3">Sign in via magic link with your email below</p>

        <div className="my-3">
          <input
            className="form-input w-full rounded border text-slate-700 border-slate-400 py-3 px-3"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-3">
          <button
            className="block w-full rounded py-3 px-5 bg-teal-600 hover:bg-teal-700 text-white"
            disabled={loading}
          >
            <span>{loading ? 'Loading...' : 'Send magic link'}</span>
          </button>
        </div>
      </form>
    </div>
  )
}
