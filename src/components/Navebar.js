import Link from "next/link";
import { CalendarDays, Menu, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <CalendarDays size={22} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Campus<span className="text-indigo-600">Events</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-indigo-600">
            Home
          </Link>

          <Link
            href="/events"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            Events
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/events/create"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            Create Event
          </Link>
        </div>

        <button
          className="rounded-lg p-2 text-slate-700 md:hidden"
          aria-label="Open navigation"
        >
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
