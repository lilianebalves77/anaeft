
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      console.error('Web3Forms: variável de ambiente em falta.')
      return NextResponse.json(
        { success: false, message: 'Configuração do formulário em falta.' },
        { status: 500 }
      )
    }

    const body = await request.json()

    const nome = String(body.nome ?? '').trim()
    const email = String(body.email ?? '').trim()
    const whatsapp = String(body.whatsapp ?? '').trim()
    const motivo = String(body.motivo ?? '').trim()
    const preferencia = String(body.preferencia ?? 'E-mail').trim()

    if (!nome || !email || !motivo) {
      return NextResponse.json(
        { success: false, message: 'Preenche os campos obrigatórios.' },
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
        from_name: 'Site Ana Margarida | Terapeuta EFT',
        name: nome,
        email,
        whatsapp,
        preferencia,
        message: `Nome: ${nome}\nE-mail: ${email}\nWhatsApp: ${whatsapp || 'Não informado'}\nPreferência de contacto: ${preferencia}\n\nMensagem:\n${motivo}`,
      }),
    })

    const responseText = await response.text()

    console.log('Web3Forms HTTP status:', response.status)
    console.log('Web3Forms resposta:', responseText.slice(0, 1000))

    let result: { success?: boolean }

    try {
      result = JSON.parse(responseText)
    } catch {
      console.error('Web3Forms devolveu uma resposta que não é JSON.')
      return NextResponse.json(
        { success: false, message: 'Resposta inválida do serviço de envio.' },
        { status: 502 }
      )
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { success: false, message: 'Não foi possível enviar a mensagem. Tenta novamente.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(
      'Erro na API de contacto:',
      error instanceof Error ? error.message : 'Erro desconhecido'
    )

    return NextResponse.json(
      { success: false, message: 'Ocorreu um erro. Tenta novamente mais tarde.' },
      { status: 500 }
    )
  }
}

