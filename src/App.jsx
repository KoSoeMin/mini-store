import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <section className="w-full max-w-2xl rounded-lg border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="flex items-center gap-4">
          <img className="h-12 w-12" src={viteLogo} alt="Vite logo" />
          <img className="h-12 w-12" src={reactLogo} alt="React logo" />
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            React + Vite + Tailwind CSS
          </p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Mini Store is ready.
          </h1>
          <p className="text-lg text-slate-300">
            This page is styled with Tailwind utility classes from regular
            JavaScript React components.
          </p>
        </div>

        <button
          type="button"
          className="mt-8 rounded-md bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-slate-900"
          onClick={() => setCount((currentCount) => currentCount + 1)}
        >
          Count is {count}
        </button>
      </section>
    </main>
  )
}

export default App
