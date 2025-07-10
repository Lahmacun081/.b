export function encodeNote(text: string): string {
  return Buffer.from(encodeURIComponent(text)).toString('base64')
}

export function decodeNote(encoded: string): string {
  try {
    return decodeURIComponent(Buffer.from(encoded, 'base64').toString())
  } catch {
    return '[Geçersiz Not]'
  }
}