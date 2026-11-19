import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import Navbar from "../components/Navebar";
import EventCard from "@/components/EventCard";
import { apiFetch } from "@/lib/api";

async function getUpcomingEvents() {
  try {
    const data = await apiFetch("/events?page=1&limit=3", { role: "student" });

    return data.items.filter((event) => event.isPublished);
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return [];
  }
}

export default async function Home() {
  const events = await getUpcomingEvents();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-600 px-8 py-16 md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-100">
              <Sparkles size={16} />
              Discover campus life
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Discover What's Happening on Campus
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-indigo-100 md:text-lg">
              Find workshops, technology events, creative sessions, and exciting
              activities happening around your campus.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                Explore Events
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/events/create"
                className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Create Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Stay connected
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Upcoming Events
            </h2>

            <p className="mt-2 text-slate-500">
              Explore the latest activities happening on campus.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            View All Events
            <ArrowRight size={18} />
          </Link>
        </div>

        {events.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <CalendarDays size={40} className="mx-auto mb-4 text-indigo-400" />

            <h3 className="text-lg font-bold text-slate-900">
              No upcoming events
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Check back later for exciting campus activities.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
          <p className="font-bold text-slate-900">
            Campus<span className="text-indigo-600">Events</span>
          </p>

          <p className="text-sm text-slate-500">
            © 2026 Campus Events. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
