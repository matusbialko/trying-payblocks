import { draftMode } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function GET(): Promise<Response> {
  const draft = await draftMode()
  draft.disable()
  return new Response('Draft mode is disabled')
}
