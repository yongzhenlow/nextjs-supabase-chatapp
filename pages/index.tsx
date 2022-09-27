import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from 'utils/supabase-client'
import Auth from 'components/Auth'
import Chat from 'components/Chat'

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setSession(session)
    }

    fetchSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return subscription.unsubscribe
  }, [])

  return session === null ? (
    <Auth />
  ) : (
    <Chat key={session.user?.id} session={session} />
  )
}

export default Home
