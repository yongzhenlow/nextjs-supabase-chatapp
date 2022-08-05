import { useState } from 'react'
import type { Session } from '@supabase/supabase-js'

type ChatProps = {
  session: Session
}

const Chat = ({ session }: ChatProps) => {
  const [message, setMessage] = useState('')

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-50">
      <div className="flex flex-grow flex-col-reverse items-end text-slate-900 p-6">
        <div className="flex mt-6 flex-row w-full justify-end">
          <div className="w-2/3">
            <div className="rounded rounded-tr-none p-3 bg-blue-200">
              Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit.
              atque optio repellat harum alias sequi praesentium. Itaque minima
              possimus asperiores quisquam!
            </div>
            <div className="text-xs text-slate-600 m-1 text-right">
              5 mins ago
            </div>
          </div>
        </div>
        <div className="flex mt-6 flex-row w-full justify-start">
          <div className="w-2/3 rounded rounded-tl-none p-3 bg-slate-200">
            Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit.
            possimus asperiores quisquam!
          </div>
        </div>
        <div className="flex mt-6 flex-row w-full justify-end">
          <div className="w-2/3 rounded rounded-tr-none p-3 bg-blue-200">
            Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis, cum cumque libero dolore pariatur vitae, at totam, deserunt
            atque optio repellat harum alias sequi praesentium. Itaque minima
            possimus asperiores quisquam!
          </div>
        </div>
      </div>
      <form className="flex flex-row p-2 bg-slate-300">
        <input
          type="text"
          className="flex-grow bg-white text-slate-900 rounded p-2"
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button
          className="rounded bg-blue-800 text-white px-6 ml-3 hover:bg-blue-900 disabled:bg-slate-400"
          type="submit"
          disabled={!message.length}
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Chat
