![Ghost](https://img.shields.io/badge/ghost-000?style=for-the-badge&logo=ghost&logoColor=%23F7DF1E)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

# NextJS + Supabase Chat App

Demo app created for the article [Building a Chat App with NextJS + Supabase](https://www.yzlow.com/build-a-chat-app-with-nextjs-supabase/).

## Setup env

Create a file `.env.local` with your Supabase API credentials. See [article](https://www.yzlow.com/build-a-chat-app-with-nextjs-supabase/) above for the steps on how to setup the database schema for your Supabase project.

```
NEXT_PUBLIC_SUPABASE_URL=example_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=example_supabase_anonkey
```

## Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
