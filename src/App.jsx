import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import heroEnvelope from './assets/invite/hero-envelope-hands.png'
import ticketImage from './assets/invite/ticket-invitation.png'
import detailsPaper from './assets/invite/details-paper.png'
import gcashQR from './assets/invite/gcash-qr.png'

import tornSoft from './assets/ui/torn-strip.png'
import tornCloth from './assets/ui/torn-strip-2.png'
import tornRough from './assets/ui/torn-strip-3.png'

import burgundyFabric from './assets/fabric/burgundy-fabric.jpg'
import blackFabric from './assets/fabric/black-fabric.jpg'
import deepRedFabric from './assets/fabric/deep-red-fabric.jpg'

gsap.registerPlugin(ScrollTrigger)

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/zfppua56pNU7nuwG6?g_st=ic'
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpOPut6-OtwUfla5d82PkRMzWWruwC89ywZCC0ABcI9zj_nVEkinFEV9EoMMbOLP4/exec'

const tornVariants = {
  soft: tornSoft,
  cloth: tornCloth,
  rough: tornRough,
}

function SectionShell({ children, className = '' }) {
  return (
    <section
      className={`chapter-section relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 py-12 ${className}`}
    >
      <div className="chapter-content relative z-10 w-full">{children}</div>
    </section>
  )
}

function TornDivider({ variant = 'soft', flip = false, wide = false }) {
  return (
    <div className="torn-divider pointer-events-none relative z-20 -my-12 flex justify-center overflow-visible">
      <img
        src={tornVariants[variant]}
        alt=""
        aria-hidden="true"
        className={`torn-paper-img opacity-95 drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] ${
          wide ? 'w-[155%] max-w-[860px]' : 'w-[138%] max-w-[740px]'
        } ${flip ? 'rotate-180' : ''}`}
        loading="lazy"
      />
    </div>
  )
}

function ScrollCue({ label = 'Scroll' }) {
  return (
    <div className="mt-8 text-center">
      <p className="text-[9px] uppercase tracking-[0.42em] text-[#d9bd7f]/75">
        {label}
      </p>
      <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#d9bd7f]/70 to-transparent" />
    </div>
  )
}

function HeroSection() {
  return (
    <SectionShell className="text-center">
      <div className="mx-auto flex min-h-[88svh] w-full max-w-[440px] flex-col justify-center">
        <div>
          <h1 className="heading-serif text-[clamp(3.1rem,13vw,4.8rem)] uppercase leading-[0.88] tracking-[-0.055em] text-[#fff7ef]">
            Some things are <br /> meant for you
          </h1>

          <p className="script mt-7 text-[clamp(2rem,8vw,3rem)] text-[#fff7ef]">
            And Only You.
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          <img
            src={heroEnvelope}
            alt="Burgundy envelope with wax seal"
            className="hero-envelope w-[118vw] max-w-[610px] translate-x-[-8px]"
          />
        </div>

        <ScrollCue label="Scroll to open" />
      </div>
    </SectionShell>
  )
}

function TicketSection() {
  return (
    <SectionShell className="text-center">
      <div className="mx-auto w-full max-w-[410px]">
        <div className="relative mx-auto w-[92vw] max-w-[390px]">
          <img
            src={ticketImage}
            alt="Jay and Tin wedding invitation ticket"
            className="w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.45)]"
          />

          <div className="absolute inset-x-[9%] top-[10%] text-[#6b0f1a]">
            <p className="text-[clamp(0.78rem,3.4vw,0.98rem)] font-semibold italic leading-none">
              we invite you to the wedding of
            </p>

            <h2 className="script mt-[8%] text-[clamp(4.7rem,19vw,6.1rem)] leading-[0.78]">
              Jay & Tin
            </h2>

            <div className="mt-[12%] grid grid-cols-2 border-y border-[#7c1725]/75">
              <div className="flex min-h-[112px] flex-col items-center justify-center border-r border-[#7c1725]/75 py-3">
                <p className="heading-serif text-[clamp(0.9rem,3.8vw,1.1rem)] font-bold uppercase leading-none">
                  May
                </p>
                <p className="heading-serif text-[clamp(3.8rem,16vw,5rem)] font-bold leading-[0.82]">
                  29
                </p>
                <p className="heading-serif text-[clamp(0.9rem,3.8vw,1.1rem)] font-bold leading-none">
                  2026
                </p>
              </div>

              <div className="flex min-h-[112px] flex-col items-center justify-center px-2 py-3">
                <p className="text-[clamp(0.9rem,3.7vw,1.08rem)] font-semibold italic leading-[0.9]">
                  at 4:30 in the
                </p>
                <p className="text-[clamp(0.9rem,3.7vw,1.08rem)] font-semibold italic leading-[0.9]">
                  afternoon
                </p>
                <p className="heading-serif mt-4 text-[clamp(0.78rem,3vw,0.95rem)] font-bold uppercase tracking-[0.28em]">
                  Friday
                </p>
              </div>
            </div>

            <p className="mx-auto mt-[12%] max-w-[260px] text-[clamp(1rem,4vw,1.2rem)] font-semibold italic leading-[0.95]">
              Be in the venue at least 30mins before ceremony.
            </p>
          </div>
        </div>

        <ScrollCue label="Venue" />
      </div>
    </SectionShell>
  )
}

function CeremonySection() {
  return (
    <SectionShell className="text-center">
      <div className="mx-auto w-full max-w-[410px]">
        <p className="script text-[clamp(2.6rem,10vw,4rem)] leading-[0.86] text-[#fff7ef]">
          Wedding Ceremony &<br /> Reception Venue
        </p>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#fff7ef]">
          Lola’s Cafe, Morato
        </p>

        <div className="mx-auto mt-10 w-full max-w-[370px] overflow-hidden border border-[#e8d7c3]/45 shadow-[0_40px_90px_rgba(0,0,0,0.42)]">
          <iframe
            title="Lola’s Cafe Morato Map"
            src="https://www.google.com/maps?q=Lola%E2%80%99s%20Cafe%2C%2099%20Scout%20Lozano%20St%2C%20Diliman%2C%20Quezon%20City&output=embed"
            className="h-[52svh] max-h-[430px] min-h-[330px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-[#fff7ef]/80 px-10 py-3 text-[10px] uppercase tracking-[0.28em] text-[#fff7ef] transition hover:bg-[#fff7ef] hover:text-[#6b0f1a]"
        >
          View Map
        </a>

        <ScrollCue label="Attire" />
      </div>
    </SectionShell>
  )
}

function FabricSwatch({ image, label }) {
  return (
    <div className="swatch h-[88px] w-[88px] overflow-hidden rounded-full border border-[#d9bd7f]/55 shadow-[0_22px_45px_rgba(0,0,0,0.4)]">
      <img src={image} alt={label} className="h-full w-full object-cover" loading="lazy" />
    </div>
  )
}

function DressCodeSection() {
  return (
    <SectionShell className="text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <h3 className="script text-[clamp(4rem,15vw,5.6rem)] leading-none text-[#fff7ef]">
          Dress Code
        </h3>

        <p className="mt-3 text-[13px] uppercase tracking-[0.42em] text-[#d9bd7f]">
          Semi-Formal
        </p>

        <p className="mx-auto mt-10 max-w-[330px] text-[15px] italic leading-8 text-[#fff7ef]/90">
          We kindly request our guests to wear elegant semi-formal attire in colors
          that complement the warmth and romance of our celebration.
        </p>

        <p className="script mt-8 text-[clamp(2rem,8vw,3rem)] text-[#d9bd7f]">
          Deep & Elegant
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <FabricSwatch image={burgundyFabric} label="Burgundy fabric" />
          <FabricSwatch image={blackFabric} label="Black fabric" />
          <FabricSwatch image={deepRedFabric} label="Deep red fabric" />
        </div>

        <p className="mt-8 text-[10px] uppercase tracking-[0.34em] text-[#d9bd7f]">
          Burgundy · Black · Deep Red
        </p>

        <ScrollCue label="Gift" />
      </div>
    </SectionShell>
  )
}

function GiftGuideSection() {
  return (
    <SectionShell className="text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <h3 className="script text-[clamp(4.2rem,16vw,5.8rem)] leading-none text-[#fff7ef]">
          Gift Guide
        </h3>

        <p className="mx-auto mt-9 max-w-[320px] text-[15px] italic leading-8 text-[#fff7ef]/90">
          We are so blessed to have you share in our special day. Should you wish
          to bless us further, a monetary gift would be appreciated.
        </p>

        <div className="mx-auto mt-12 inline-block rounded-2xl bg-[#efe2d2] p-5 shadow-[0_40px_85px_rgba(0,0,0,0.42)]">
          <img src={gcashQR} alt="Gift QR code" className="w-[260px] max-w-[72vw]" />
        </div>

        <ScrollCue label="Details" />
      </div>
    </SectionShell>
  )
}

function DetailsSection() {
  return (
    <SectionShell className="text-center">
      <div className="relative mx-auto w-[90vw] max-w-[390px]">
        <img
          src={detailsPaper}
          alt=""
          aria-hidden="true"
          className="w-full drop-shadow-[0_40px_85px_rgba(0,0,0,0.42)]"
        />

        <div className="absolute inset-x-[9%] top-[10%] text-[#6b0f1a]">
          <h3 className="heading-serif text-[clamp(2.2rem,9vw,3.2rem)] uppercase tracking-[-0.05em]">
            Details
          </h3>

          <div className="mt-[11%] space-y-[9%] text-left">
            <div className="max-w-[58%]">
              <h4 className="heading-serif text-[clamp(0.9rem,3.6vw,1.12rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Can I bring a plus one?
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.45vw,0.78rem)] italic leading-[1.08]">
                Due to limited space at our venue, we can only accommodate those
                formally invited on the invitation.
              </p>
            </div>

            <div className="ml-auto max-w-[57%] text-right">
              <h4 className="heading-serif text-[clamp(0.9rem,3.6vw,1.12rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Are kids allowed?
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.45vw,0.78rem)] italic leading-[1.08]">
                We love your little ones. However, due to limited space, we
                decided to keep our wedding adults only.
              </p>
            </div>

            <div className="max-w-[58%]">
              <h4 className="heading-serif text-[clamp(0.9rem,3.6vw,1.12rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Unplugged Ceremony
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.45vw,0.78rem)] italic leading-[1.08]">
                As we say “I Do,” we ask our guests to put away their phones and
                be fully present with us.
              </p>
            </div>

            <div className="ml-auto max-w-[57%] text-right">
              <h4 className="heading-serif text-[clamp(0.9rem,3.6vw,1.12rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Parking
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.45vw,0.78rem)] italic leading-[1.08]">
                A pay parking building is located right beside Lola’s Cafe for
                your convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[#d9bd7f]/70">
            RSVP
          </p>
          <div className="mx-auto mt-3 h-9 w-px bg-gradient-to-b from-[#d9bd7f]/70 to-transparent" />
        </div>
      </div>
    </SectionShell>
  )
}

function RSVPSection() {
  const [form, setForm] = useState({
    fullName: '',
    attendance: 'Attending',
    guests: '1',
    guestNames: '',
    message: '',
  })

  const [status, setStatus] = useState({ loading: false, success: '', error: '' })

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setStatus({ loading: false, success: '', error: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.fullName.trim()) {
      setStatus({ loading: false, success: '', error: 'Please enter your full name.' })
      return
    }

    const guestCount = Number(form.guests)

    if (guestCount < 0 || guestCount > 2) {
      setStatus({ loading: false, success: '', error: 'Number of guests must be 0 to 2 only.' })
      return
    }

    setStatus({ loading: true, success: '', error: '' })

    try {
      const payload = new FormData()
      payload.append('fullName', form.fullName.trim())
      payload.append('attendance', form.attendance)
      payload.append('guests', String(guestCount))
      payload.append('guestNames', form.guestNames.trim())
      payload.append('message', form.message.trim())

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      })

      

      setForm({
        fullName: '',
        attendance: 'Attending',
        guests: '1',
        guestNames: '',
        message: '',
      })

      setStatus({
        loading: false,
        success: 'Thank you. Your RSVP has been beautifully received.',
        error: '',
      })
    } catch {
      setStatus({
        loading: false,
        success: '',
        error: 'Something went wrong. Please try submitting again.',
      })
    }
  }

  return (
    <SectionShell className="text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <p className="script text-[clamp(4rem,15vw,5.4rem)] leading-none text-[#fff7ef]">
          RSVP Here!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-[32px] border border-[#d9bd7f]/25 bg-[#efe2d2] px-6 py-8 text-left text-[#3b0d14] shadow-[0_40px_90px_rgba(0,0,0,0.45)]"
        >
          <input
            value={form.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            placeholder="Full Name"
            disabled={status.loading}
            className="mb-4 w-full rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          />

          <div className="mb-4 grid grid-cols-2 gap-3">
            {['Attending', 'Not Attending'].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => updateField('attendance', option)}
                disabled={status.loading}
                className={`rounded-xl px-3 py-3 text-[10px] uppercase tracking-[0.15em] ${
                  form.attendance === option
                    ? 'bg-[#6b0f1a] text-[#fff7ef]'
                    : 'bg-[#fffaf2] text-[#6b4a38]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <select
            value={form.guests}
            onChange={(event) => updateField('guests', event.target.value)}
            disabled={status.loading}
            className="mb-4 w-full rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          >
            <option value="0">0 Guest</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
          </select>

          <input
            value={form.guestNames}
            onChange={(event) => updateField('guestNames', event.target.value)}
            placeholder="Guest Names"
            disabled={status.loading}
            className="mb-4 w-full rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          />

          <textarea
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Message for the couple..."
            rows="4"
            disabled={status.loading}
            className="mb-4 w-full resize-none rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full rounded-full bg-[#6b0f1a] px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#fff7ef] disabled:opacity-60"
          >
            {status.loading ? 'Submitting...' : 'Submit RSVP'}
          </button>

          {status.success && (
            <p className="mt-5 text-center text-sm leading-6 text-[#6b0f1a]">
              {status.success}
            </p>
          )}

          {status.error && (
            <p className="mt-5 text-center text-sm leading-6 text-[#9f1d2f]">
              {status.error}
            </p>
          )}
        </form>
      </div>
    </SectionShell>
  )
}

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.chapter-section').forEach((section) => {
        const content = section.querySelector('.chapter-content')

        gsap.fromTo(
          content,
          { opacity: 0, y: 48, scale: 0.985 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 72%',
              once: true,
            },
          },
        )
      })

      gsap.utils.toArray('.torn-divider').forEach((divider, index) => {
        const paper = divider.querySelector('.torn-paper-img')

        gsap.fromTo(
          paper,
          { opacity: 0, y: 32, scale: 1.04 },
          {
            opacity: 0.95,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: divider,
              start: 'top 85%',
              once: true,
            },
          },
        )

        gsap.to(paper, {
          y: index % 2 === 0 ? -34 : -22,
          x: index % 2 === 0 ? -8 : 8,
          ease: 'none',
          scrollTrigger: {
            trigger: divider,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.to('.hero-envelope', {
        y: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-envelope',
          start: 'top 65%',
          end: 'bottom top',
          scrub: true,
        },
      })

      ScrollTrigger.refresh()
      window.addEventListener('load', ScrollTrigger.refresh)
    }, appRef)

    return () => {
      window.removeEventListener('load', ScrollTrigger.refresh)
      ctx.revert()
    }
  }, [])

  return (
    <main ref={appRef} className="min-h-screen bg-[#6b0f1a]">
      <div className="relative mx-auto max-w-[520px] overflow-hidden bg-[#6b0f1a] shadow-[0_0_90px_rgba(0,0,0,0.38)]">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,238,203,0.08),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(0,0,0,0.18),transparent_35%)]" />

        <HeroSection />

        <TicketSection />
        <TornDivider variant="cloth" wide />

        <CeremonySection />
        <TornDivider variant="rough" flip />

        <DressCodeSection />
        <TornDivider variant="soft" />

        <GiftGuideSection />
        <TornDivider variant="cloth" flip wide />

        <DetailsSection />
        <TornDivider variant="rough" />

        <RSVPSection />
      </div>
    </main>
  )
}

export default App