import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 })
    }

    // TODO: integrate email sending here (SendGrid/SMTP). Example env vars:
    // process.env.SENDGRID_API_KEY, process.env.TO_EMAIL, process.env.FROM_EMAIL
    // If you don't need email, you can store to DB here.

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Internal server error' }, { status: 500 })
  }
}
