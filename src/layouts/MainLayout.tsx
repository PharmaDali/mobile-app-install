import { Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  )
}
