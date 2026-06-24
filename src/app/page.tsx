/*
 * COLD OUTREACH REDESIGN SAMPLE
 * This is a non-production demo created to pitch a redesign to "6 to 9 Dental".
 * It contains placeholder images and stats for demonstration purposes.
 */

import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { TrustBadge } from "@/components/TrustBadge";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col pt-24 lg:pt-0">
      <Navbar />

      <section className="flex-grow flex items-center max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* LEFT COLUMN: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full mt-15 px-3 py-1 text-sm font-semibold text-primary bg-primary/10 ring-1 ring-inset ring-primary/20 mb-6">
              Open 6 Days a Week
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-[47px] font-extrabold tracking-tight leading-[1.1]">
              <span className="text-text-slate block">Same-Day Dental Care</span>
              <span className="text-gray-500 text-3xl sm:text-4xl lg:text-[38px] mt-2 block">Open Evenings & Weekends</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Experience warm, family-friendly dentistry where your comfort comes first. We welcome walk-ins and emergencies, offering compassionate same-day care when you need it most. ¡Se Habla Español!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto text-center rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Book an Appointment
              </a>
              <a
                href="#"
                className="w-full sm:w-auto text-center rounded-full px-8 py-3.5 text-base font-semibold text-text-slate hover:bg-gray-100 transition-colors"
              >
                View Treatments <span aria-hidden="true">→</span>
              </a>
            </div>

            <TrustBadge />
          </div>

          <div className="relative w-full mt-10 aspect-square sm:aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <Image
              src="/images/heroImage.png"
              alt="Dentist with Patient"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />

            {/* Optional Floating Card */}
            <div className="absolute -bottom-8 right-4 sm:bottom-16 sm:right-8 lg:-right-4 bg-white rounded-xl shadow-xl p-4 sm:p-5 flex items-center gap-4 ring-1 ring-black/5 max-w-[280px] z-10">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                🦷
              </div>
              <div>
                {/* PLACEHOLDER DATA */}
                <div className="flex items-center text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <p className="text-sm font-bold text-text-slate mt-1">4.9/5 Rating</p>
                <p className="text-xs text-gray-500">200+ Happy Patients</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
