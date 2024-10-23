import { cookies } from 'next/headers'
 
export async function GET(request: Request) {
  const token = generateToken()
  
  const cookieStore = await cookies()
  cookieStore.set('token', token)
 
  return new Response(token, {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  })
}

function generateToken() {
  // generate a random token with 32 characters
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let token = ''
  for (let i = 0; i < 32; i++) {
    token += chars[Math.floor(Math.random() * chars.length)]
  }
  return token
}
