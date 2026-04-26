import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import heroEnvelope from './assets/invite/hero-envelope-hands.png'
import ticketImage from './assets/invite/ticket-invitation.png'
import detailsPaper from './assets/invite/details-paper.png'
import gcashQR from './assets/invite/gcash-qr.png'

import burgundyFabric from './assets/fabric/burgundy-fabric.jpg'
import blackFabric from './assets/fabric/black-fabric.jpg'
import deepRedFabric from './assets/fabric/deep-red-fabric.jpg'

gsap.registerPlugin(ScrollTrigger)

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/zfppua56pNU7nuwG6?g_st=ic'
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzpOPut6-OtwUfla5d82PkRMzWWruwC89ywZCC0ABcI9zj_nVEkinFEV9EoMMbOLP4/exec'

function SectionShell({ children, className = '' }) {
  return (
    <section
      className={`chapter-section relative flex min-h-[92svh] items-center justify-center overflow-hidden px-5 py-10 ${className}`}
    >
      <div className="chapter-content relative z-10 w-full">{children}</div>
    </section>
  )
}

function ScrollCue() {
  return (
    <div className="mt-7 text-center">
      <p className="text-[9px] uppercase tracking-[0.42em] text-[#d9bd7f]/75">
        Scroll to open
      </p>
      <div className="mx-auto mt-3 h-9 w-px bg-gradient-to-b from-[#d9bd7f]/70 to-transparent" />
    </div>
  )
}

function HeroSection() {
  return (
    <SectionShell className="hero-section min-h-[100svh] text-center">
      <div className="mx-auto flex min-h-[88svh] w-full max-w-[440px] flex-col justify-center">
        <div className="hero-copy">
          <h1 className="font-['Times_New_Roman',serif] text-[clamp(2.75rem,11vw,4rem)] uppercase leading-[0.92] tracking-[-0.04em] text-[#fff7ef]">
            Some things are
            <br />
            Meant for you
          </h1>

          <p className="script mt-7 text-[clamp(2rem,7vw,2.8rem)] leading-none text-[#fff7ef]">
            And only you.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src={heroEnvelope}
            alt="Burgundy envelope with wax seal"
            className="hero-envelope w-[116vw] max-w-[620px] translate-x-[-8px]"
          />
        </div>

        <ScrollCue />
      </div>
    </SectionShell>
  )
}

function TicketSection() {
  return (
    <SectionShell className="ticket-section min-h-[94svh] text-center">
      <div className="mx-auto w-full max-w-[420px]">
        <div className="relative mx-auto w-[94vw] max-w-[405px]">
          <img
            src={ticketImage}
            alt="Jay and Tin wedding invitation ticket"
            className="w-full drop-shadow-[0_36px_75px_rgba(0,0,0,0.45)]"
          />

          <div className="absolute inset-x-[10%] top-[10%] text-[#6b0f1a]">
            <p className="text-[clamp(0.72rem,3vw,0.9rem)] font-semibold italic leading-none">
              we invite you to the wedding of
            </p>

            <h2 className="script mt-[7%] text-[clamp(4.1rem,17vw,5.65rem)] leading-[0.78]">
              Jay & Tin
            </h2>

            <div className="mt-[10%] grid grid-cols-2 border-y border-[#7c1725]/75">
              <div className="flex min-h-[96px] flex-col items-center justify-center border-r border-[#7c1725]/75 py-3">
                <p className="heading-serif text-[clamp(0.78rem,3.3vw,1rem)] font-bold uppercase leading-none">
                  May
                </p>
                <p className="heading-serif text-[clamp(3.35rem,14vw,4.55rem)] font-bold leading-[0.82]">
                  29
                </p>
                <p className="heading-serif text-[clamp(0.78rem,3.3vw,1rem)] font-bold leading-none">
                  2026
                </p>
              </div>

              <div className="flex min-h-[96px] flex-col items-center justify-center px-2 py-3">
                <p className="text-[clamp(0.78rem,3.2vw,0.98rem)] font-semibold italic leading-[0.9]">
                  at 4:30 in the
                </p>
                <p className="text-[clamp(0.78rem,3.2vw,0.98rem)] font-semibold italic leading-[0.9]">
                  afternoon
                </p>
                <p className="heading-serif mt-3 text-[clamp(0.66rem,2.6vw,0.82rem)] font-bold uppercase tracking-[0.26em]">
                  Friday
                </p>
              </div>
            </div>

            <p className="mx-auto mt-[9%] max-w-[250px] text-[clamp(0.82rem,3.35vw,1rem)] font-semibold italic leading-[0.95]">
              Be in the venue at least 30mins before ceremony.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}

function CeremonySection() {
  return (
    <SectionShell className="venue-section text-center">
      <div className="mx-auto w-full max-w-[410px]">
        <p className="script text-[clamp(2.55rem,10vw,3.9rem)] leading-[0.86] text-[#fff7ef]">
          Wedding Ceremony &<br /> Reception Venue
        </p>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#fff7ef]">
          Lola’s Cafe, Morato
        </p>

        <div className="mx-auto mt-9 w-full max-w-[370px] overflow-hidden border border-[#e8d7c3]/45 shadow-[0_34px_80px_rgba(0,0,0,0.42)]">
          <iframe
            title="Lola’s Cafe Morato Map"
            src="https://www.google.com/maps?q=Lola%E2%80%99s%20Cafe%2C%2099%20Scout%20Lozano%20St%2C%20Diliman%2C%20Quezon%20City&output=embed"
            className="h-[48svh] max-h-[405px] min-h-[310px] w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href={GOOGLE_MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-block border border-[#fff7ef]/80 px-10 py-3 text-[10px] uppercase tracking-[0.28em] text-[#fff7ef] transition hover:bg-[#fff7ef] hover:text-[#5a0b10]"
        >
          View Map
        </a>
      </div>
    </SectionShell>
  )
}

function FabricSwatch({ image, label }) {
  return (
    <div className="swatch h-[86px] w-[86px] overflow-hidden rounded-full border border-[#d9bd7f]/55 shadow-[0_20px_42px_rgba(0,0,0,0.4)]">
      <img src={image} alt={label} className="h-full w-full object-cover" loading="lazy" />
    </div>
  )
}

function DressCodeSection() {
  return (
    <SectionShell className="dress-section text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <h3 className="script text-[clamp(3.9rem,15vw,5.4rem)] leading-none text-[#fff7ef]">
          Dress Code
        </h3>

        <p className="mt-4 text-[13px] uppercase tracking-[0.42em] text-[#d9bd7f]">
          Strictly Formal
        </p>

        <p className="mx-auto mt-9 max-w-[330px] text-[15px] italic leading-8 text-[#fff7ef]/90">
          We would love for our guests to join in our wedding palette by wearing
          black or wine red attire, helping create a timeless and cohesive
          celebration.
        </p>

        <p className="script mt-8 text-[clamp(2rem,8vw,3rem)] text-[#d9bd7f]">
          Dress Elegantly!
        </p>

        <div className="mt-9 flex justify-center gap-5">
          <FabricSwatch image={burgundyFabric} label="Burgundy fabric" />
          <FabricSwatch image={blackFabric} label="Black fabric" />
          <FabricSwatch image={deepRedFabric} label="Deep red fabric" />
        </div>

        <p className="mt-8 text-[10px] uppercase tracking-[0.34em] text-[#d9bd7f]">
          Burgundy · Black · Deep Red
        </p>
      </div>
    </SectionShell>
  )
}

function GiftGuideSection() {
  return (
    <SectionShell className="gift-section text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <h3 className="script text-[clamp(4.1rem,16vw,5.7rem)] leading-none text-[#fff7ef]">
          Gift Guide
        </h3>

        <p className="mx-auto mt-8 max-w-[320px] text-[15px] italic leading-8 text-[#fff7ef]/90">
          We are so blessed to have you share in our special day. Should you wish
          to bless us further, a monetary gift would be much more appreciated.
        </p>

        <div className="mx-auto mt-10 inline-block rounded-2xl bg-[#efe2d2] p-5 shadow-[0_34px_80px_rgba(0,0,0,0.42)]">
          <img src={gcashQR} alt="Gift QR code" className="w-[255px] max-w-[72vw]" />
        </div>
      </div>
    </SectionShell>
  )
}

function DetailsSection() {
  return (
    <SectionShell className="details-section min-h-[100svh] text-center">
      <div className="relative mx-auto w-[96vw] max-w-[430px]">
        <img
          src={detailsPaper}
          alt=""
          aria-hidden="true"
          className="w-full scale-[1.04] drop-shadow-[0_36px_80px_rgba(0,0,0,0.42)]"
        />

        <div className="absolute inset-x-[10%] top-[9%] text-[#6b0f1a]">
          <h3 className="heading-serif text-[clamp(2.35rem,9.5vw,3.35rem)] uppercase tracking-[-0.05em]">
            Details
          </h3>

          <div className="mt-[10%] space-y-[8%] text-left">
            <div className="max-w-[58%]">
              <h4 className="heading-serif text-[clamp(0.92rem,3.7vw,1.15rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Can I bring a plus one?
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.55vw,0.8rem)] italic leading-[1.08]">
                Due to limited space at our venue, we can only accommodate those
                formally invited on the invitation.
              </p>
            </div>

            <div className="ml-auto max-w-[57%] text-right">
              <h4 className="heading-serif text-[clamp(0.92rem,3.7vw,1.15rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Are kids allowed?
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.55vw,0.8rem)] italic leading-[1.08]">
                We love your little ones. However, due to the limited space at
                our venue, we decided to keep our wedding adults only. We
                encourage you to use this as a date night to get out and have fun!
              </p>
            </div>

            <div className="max-w-[58%]">
              <h4 className="heading-serif text-[clamp(0.92rem,3.7vw,1.15rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Unplugged Ceremony
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.55vw,0.8rem)] italic leading-[1.08]">
                As we say “I Do”, we ask our beloved guests to put away their
                phones and cameras, and be fully present in the meaningful moment
                with us. While our I Do’s are unplugged, our reception is not.
              </p>
            </div>

            <div className="ml-auto max-w-[57%] text-right">
              <h4 className="heading-serif text-[clamp(0.92rem,3.7vw,1.15rem)] font-bold uppercase leading-[0.95] tracking-[0.05em]">
                Parking
              </h4>
              <p className="mt-2 text-[clamp(0.62rem,2.55vw,0.8rem)] italic leading-[1.08]">
                To make your arrival easy, a pay parking building is located
                right beside Lola’s Cafe.
              </p>
            </div>
          </div>

          <p className="mt-[8%] text-[9px] uppercase tracking-[0.45em] text-[#d9bd7f]/75">
            RSVP
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

function RSVPSection() {
  const [form, setForm] = useState({
    fullName: '',
    attendance: 'Attending',
    email: '',
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

    if (!form.email.trim()) {
      setStatus({ loading: false, success: '', error: 'Please enter your email address.' })
      return
    }

    setStatus({ loading: true, success: '', error: '' })

    try {
      const payload = new FormData()
      payload.append('fullName', form.fullName.trim())
      payload.append('attendance', form.attendance)
      payload.append('email', form.email.trim())
      payload.append('message', form.message.trim())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      })

      setForm({
        fullName: '',
        attendance: 'Attending',
        email: '',
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
    <SectionShell className="rsvp-section min-h-[100svh] text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <p className="script text-[clamp(4rem,15vw,5.4rem)] leading-none text-[#fff7ef]">
          RSVP Here!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-9 rounded-[32px] border border-[#d9bd7f]/25 bg-[#efe2d2] px-6 py-8 text-left text-[#3b0d14] shadow-[0_36px_85px_rgba(0,0,0,0.45)]"
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

          <input
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="Email Address"
            type="email"
            disabled={status.loading}
            className="mb-4 w-full rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          />

          <textarea
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Message for the couple..."
            rows="5"
            disabled={status.loading}
            className="mb-5 w-full resize-none rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
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
      gsap.fromTo(
        '.hero-copy > *',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.05,
          stagger: 0.2,
          ease: 'power3.out',
        },
      )

      gsap.fromTo(
        '.hero-envelope',
        { opacity: 0, y: 46, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.9,
          delay: 0.65,
          ease: 'power3.out',
        },
      )

      gsap.utils.toArray('.chapter-section:not(.hero-section)').forEach((section) => {
        const content = section.querySelector('.chapter-content')

        gsap.fromTo(
          content,
          { opacity: 0, y: 38, scale: 0.99 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
              once: true,
            },
          },
        )
      })

      gsap.to('.hero-envelope', {
        y: -22,
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
    <main ref={appRef} className="min-h-screen bg-[#4f080d]">
      <div className="relative mx-auto max-w-[520px] overflow-hidden bg-[#4f080d] shadow-[0_0_90px_rgba(0,0,0,0.38)]">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,238,203,0.07),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(0,0,0,0.22),transparent_36%)]" />

        <HeroSection />
        <TicketSection />
        <CeremonySection />
        <DressCodeSection />
        <GiftGuideSection />
        <DetailsSection />
        <RSVPSection />
      </div>
    </main>
  )
}

export default App