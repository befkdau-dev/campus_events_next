import Link from "next/link";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";

export default function EventCard({ event }) {
  const formattedDate = new Date(event.eventDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/50">
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-slate-100">
        <CalendarDays
          size={48}
          className="text-indigo-400 transition group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold capitalize text-indigo-600">
            {event.category}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              event.isPublished
                ? "bg-green-50 text-green-600"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {event.isPublished ? "Published" : "Draft"}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-slate-900 transition group-hover:text-indigo-600">
          {event.title}
        </h3>

        <p className="mb-5 line-clamp-2 text-sm leading-6 text-slate-500">
          {event.description}
        </p>

        <div className="space-y-3 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} className="text-indigo-500" />
            {formattedDate}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={16} className="text-indigo-500" />
            {event.location}
          </div>
        </div>

        <Link
          href={`/events/${event.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 py-3 text-sm font-semibold text-slate-700 transition hover:bg-indigo-600 hover:text-white"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
