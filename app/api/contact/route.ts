
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''

    if (!contentType.includes('application/json')) {
      return NextResponse.json(
        { success: false, message: 'Formato inválido.' },
        { status: 415 }
      )
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error('Web3Forms: configuração em falta.')

      return NextResponse.json(
        { success: false, message: 'Serviço temporariamente indisponível.' },
        { status: 500 }
      )
    }

    
    const contentLength = Number(request.headers.get('content-length') || 0)

    if (contentLength > 16_384) {
      return NextResponse.json(
        { success: false, message: 'Pedido demasiado grande.' },
        { status: 413 }
      )
    }

    const rawBody = await request.text()

    if (new TextEncoder().encode(rawBody).length > 16_384) {
      return NextResponse.json(
        { success: false, message: 'Pedido demasiado grande.' },
        { status: 413 }
      )
    }

    let body: unknown

    try {
      body = JSON.parse(rawBody)
    } catch {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos.' },
        { status: 400 }
      )
    }


   
    if (
      !body ||
      typeof body !== 'object' ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        { success: false, message: 'Dados inválidos.' },
        { status: 400 }
      )
    }

    const data = body as Record<string, unknown>

   

const nome = typeof data.nome === 'string' ? data.nome.trim() : ''
const email = typeof data.email === 'string' ? data.email.trim() : ''
const motivo = typeof data.motivo === 'string' ? data.motivo.trim() : ''
const consentimento = data.consentimento === true

    if (
      !consentimento ||
      !nome ||
      nome.length > 100 ||
      !email ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !motivo ||
      motivo.length > 3000
    ) {
      return NextResponse.json(
        { success: false, message: 'Verifica os campos do formulário.' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nova mensagem do site — ${nome}`,
        from_name: 'Ana Margarida | Terapeuta EFT',
        name: nome,
        email,
        message: `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${motivo}`,
      }),
      signal: AbortSignal.timeout(10000),
      cache: 'no-store',
    })

    const result = await response.json().catch(() => null)

    if (!response.ok || !result?.success) {
      console.error(
        'Web3Forms: envio não confirmado. HTTP',
        response.status
      )

      return NextResponse.json(
        { success: false, message: 'Não foi possível enviar. Tenta novamente.' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  } catch (error) {
    console.error(
      'Erro na API de contacto:',
      error instanceof Error ? error.message : 'Erro desconhecido'
    )

    return NextResponse.json(
      {
        success: false,
        message: 'Ocorreu um erro. Tenta novamente mais tarde.',
      },
      { status: 500 }
    )
  }
}


