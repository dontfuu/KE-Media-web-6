import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Log to console (you can connect to Resend or other email service here)
    console.log('Contact form submission:', body)
    
    // TODO: Connect to your email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'contact@kemedia.com',
    //   to: 'hello@kemedia.com',
    //   subject: `New contact from ${body.name}`,
    //   html: `...`
    // })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
