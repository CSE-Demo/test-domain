import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { name, email } = await request.json()

  const cookieStore = await cookies()
  cookieStore.set('name', name)
  cookieStore.set('email', email)

  const message = `Hello ${name}! Your email address is ${email}.`
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
