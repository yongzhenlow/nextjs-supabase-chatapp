import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from 'utils/supabase-client'
import Auth from 'components/Auth'
import Chat from 'components/Chat'

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    const sub = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return sub.data?.unsubscribe
  }, [])

  return session === null ? (
    <Auth />
  ) : (
    <Chat key={session.user?.id} session={session} />
  )
}

export default Home
