import { decodeNote } from '../../../lib/utils'

export default function ViewNote({ params }: { params: { note: string } }) {
  const noteText = decodeNote(params.note)
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full text-center">
        <h2 className="text-xl font-bold mb-4 text-purple-700">Paylaşılan Not</h2>
        <p className="text-gray-800 whitespace-pre-wrap">{noteText}</p>
      </div>
    </main>
  )
}