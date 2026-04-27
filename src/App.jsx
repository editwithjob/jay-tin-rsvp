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
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzpOPut6-OtwUfla5d82PkRMzWWruwC89ywZCC0ABcI9zj_nVEkinFEV9EoMMbOLP4/exec'

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
        <h1 className="font-['Times_New_Roman'] text-[clamp(2.7rem,10vw,4rem)] font-normal uppercase leading-[0.98] tracking-[-0.06em] text-[#fff7ef]">
          Some things are
          <br />
          meant for you
        </h1>

        <p className="script mt-7 text-[clamp(2rem,8vw,3rem)] leading-none text-[#fff7ef]">
          And only you.
        </p>

        <div className="mt-16 flex justify-center">
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
    <section className="chapter-section relative flex min-h-[100svh] items-center justify-center overflow-hidden px-0 py-0 text-center">
      <div className="chapter-content relative z-10 flex min-h-[100svh] w-full items-center justify-center">
        <div className="relative left-1 mx-auto w-[94vw] max-w-[395px]">
          <img
            src={ticketImage}
            alt="Jay and Tin wedding invitation ticket"
            className="w-full"
          />

          <div className="absolute inset-x-[9%] top-[10%] text-center text-[#6b0f1a]">
            <p className="text-[clamp(0.72rem,3vw,0.9rem)] font-semibold italic leading-none">
              We invite you to the wedding of
            </p>

            <h2 className="luxury-script mt-[7%] text-[clamp(4rem,15vw,5.3rem)] leading-[0.82] tracking-[-0.04em] text-[#6b0f1a]">
              Jay & Tin
            </h2>

            <div className="mt-[9%] grid min-h-[112px] grid-cols-2 border-y border-[#7c1725]/75">
{/* LEFT DATE */}
<div className="flex flex-col items-center justify-center border-r border-[#7c1725]/75 px-2 text-center">

  <p className="heading-serif m-0 translate-y-[3px] text-[clamp(0.68rem,2.6vw,0.82rem)] font-bold uppercase leading-none">
    May
  </p>

<p className="heading-serif m-0 -translate-y-[6px] text-[clamp(3rem,11vw,3.6rem)] font-bold leading-[0.78]">
  29
</p>

  <p className="heading-serif m-0 translate-y-[6px] text-[clamp(0.68rem,2.6vw,0.82rem)] font-bold leading-none tracking-[0.08em]">
    2026
  </p>

</div>

              {/* RIGHT DETAILS */}
              <div className="flex flex-col items-center justify-center px-3 text-center">
                <div className="leading-[0.95]">
                  <p className="m-0 text-[clamp(0.76rem,2.9vw,0.9rem)] font-semibold italic">
                    at 4:30 in the
                  </p>

                  <p className="m-0 text-[clamp(0.76rem,2.9vw,0.9rem)] font-semibold italic">
                    afternoon
                  </p>
                </div>

                <p className="heading-serif m-0 mt-3 text-[clamp(0.62rem,2.35vw,0.78rem)] font-bold uppercase tracking-[0.18em]">
                  Friday
                </p>
              </div>
            </div>

            <p className="mx-auto mt-[8%] max-w-[250px] text-[clamp(0.82rem,3.25vw,0.98rem)] font-semibold italic leading-[0.95]">
              Be in the venue at least 30mins before ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
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
          Strictly Formal
        </p>

        <p className="mx-auto mt-10 max-w-[330px] text-[15px] italic leading-8 text-[#fff7ef]/90">
          We would love for our guests to join in our wedding palette by wearing
          Black or Wine Red attire, helping create a timeless and cohesive
          celebration.
        </p>

        <p className="script mt-8 text-[clamp(2rem,8vw,3rem)] text-[#d9bd7f]">
          Dress Elegantly!
        </p>

        <div className="mt-10 flex justify-center gap-5">
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
    <SectionShell className="text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <h3 className="script text-[clamp(4.2rem,16vw,5.8rem)] leading-none text-[#fff7ef]">
          Gift Guide
        </h3>

        <p className="mx-auto mt-9 max-w-[320px] text-[15px] italic leading-8 text-[#fff7ef]/90">
          We are so blessed to have you share in our special day. Should you wish
          to bless us further, a monetary gift would be much more appreciated.
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
    <section className="chapter-section relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#5f0711] px-0 py-0 text-center">
      <div className="chapter-content relative h-[100svh] w-full overflow-hidden bg-[#5f0711]">
        <img
          src={detailsPaper}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-10 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-x-[7%] top-[10%] z-20 text-[#6b0f1a]">
          <h3 className="heading-serif text-[clamp(2.7rem,11vw,3.85rem)] uppercase tracking-[-0.05em]">
            Details
          </h3>

          <div className="mt-[13%] space-y-[8%] text-left">
            <div className="max-w-[64%]">
              <h4 className="heading-serif text-[clamp(1rem,4vw,1.25rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                Can I bring a plus one?
              </h4>
              <p className="mt-2 text-[clamp(0.76rem,3vw,0.92rem)] italic leading-[1.05]">
                Due to limited space at our venue, we can only accommodate those
                formally invited on the invitation.
              </p>
            </div>

            <div className="ml-auto max-w-[64%] text-right">
              <h4 className="heading-serif text-[clamp(1rem,4vw,1.25rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                Are kids allowed?
              </h4>
              <p className="mt-2 text-[clamp(0.76rem,3vw,0.92rem)] italic leading-[1.05]">
                We love your little ones. However, due to the limited space at
                our venue, we decided to keep our wedding adults only. We
                encourage you to use this as a date night to get out and have
                fun!
              </p>
            </div>

            <div className="max-w-[64%]">
              <h4 className="heading-serif text-[clamp(1rem,4vw,1.25rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                Unplugged Ceremony
              </h4>
              <p className="mt-2 text-[clamp(0.76rem,3vw,0.92rem)] italic leading-[1.05]">
                As we say “I Do,” we ask our beloved guests to put away their
                phones and cameras, and be fully present in the meaningful
                moment with us. While our I Do’s are unplugged, our reception is
                not.
              </p>
            </div>

            <div className="ml-auto max-w-[64%] text-right">
              <h4 className="heading-serif text-[clamp(1rem,4vw,1.25rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                Parking
              </h4>
              <p className="mt-2 text-[clamp(0.76rem,3vw,0.92rem)] italic leading-[1.05]">
                To make your arrival easy, a pay parking building is located
                right beside Lola’s Cafe.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[6%] left-1/2 z-20 -translate-x-1/2">
          <p className="text-[9px] uppercase tracking-[0.45em] text-[#d9bd7f]/70">
            RSVP
          </p>
          <div className="mx-auto mt-3 h-9 w-px bg-gradient-to-b from-[#d9bd7f]/70 to-transparent" />
        </div>
      </div>
    </section>
  )
}

function RSVPSection() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    attendance: 'Attending',
    message: '',
  })

  const [status, setStatus] = useState({
    loading: false,
    success: '',
    error: '',
  })

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setStatus({ loading: false, success: '', error: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!form.fullName.trim()) {
      setStatus({
        loading: false,
        success: '',
        error: 'Please enter your full name.',
      })
      return
    }

    if (!form.email.trim()) {
      setStatus({
        loading: false,
        success: '',
        error: 'Please enter your email address.',
      })
      return
    }

    setStatus({ loading: true, success: '', error: '' })

    try {
      const payload = new FormData()
      payload.append('fullName', form.fullName.trim())
      payload.append('email', form.email.trim())
      payload.append('attendance', form.attendance)
      payload.append('message', form.message.trim())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      })

      setForm({
        fullName: '',
        email: '',
        attendance: 'Attending',
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
            type="text"
            value={form.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            placeholder="Full Name"
            disabled={status.loading}
            className="mb-4 w-full rounded-xl bg-[#fffaf2] px-4 py-3 text-sm outline-none"
          />

          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="Email Address"
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
        opacity: 1,
        y: -28,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-envelope',
          start: 'top 65%',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.fromTo(
        '.hero-envelope',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          delay: 0.45,
          ease: 'power3.out',
        },
      )

      ScrollTrigger.refresh()
      window.addEventListener('load', ScrollTrigger.refresh)
    }, appRef)

    return () => {
      window.removeEventListener('load', ScrollTrigger.refresh)
      ctx.revert()
    }
  }, [])

  return (
    <main ref={appRef} className="min-h-screen bg-[#5f0711]">
      <div className="relative mx-auto max-w-[520px] overflow-hidden bg-[#5f0711] shadow-[0_0_90px_rgba(0,0,0,0.38)]">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,238,203,0.07),transparent_28%),radial-gradient(circle_at_50%_82%,rgba(0,0,0,0.2),transparent_35%)]" />

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