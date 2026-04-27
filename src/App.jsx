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

import lolasCafe from './assets/invite/lolas-cafe2.png'

gsap.registerPlugin(ScrollTrigger)

const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/zfppua56pNU7nuwG6?g_st=ic'
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbynDN3bH-QNx6-ve6tErtnxXMwqdecezWJnSEy9Wkz1TUGfkfb0nSMIlHAe-T1d_qE/exec'

const tornVariants = {
  soft: tornSoft,
  cloth: tornCloth,
  rough: tornRough,
}

// 1. REVISED: Removed the forced min-h-[100svh] and adjusted padding 
// to naturally lessen the margin/gap between standard sections
function SectionShell({ children, className = '', id = '' }) {
  return (
    <section
      id={id}
      className={`chapter-section relative flex items-center justify-center overflow-hidden px-5 py-24 ${className}`}
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
        className={`torn-paper-img opacity-95 ${
          wide ? 'w-[155%] max-w-[860px]' : 'w-[138%] max-w-[740px]'
        } ${flip ? 'rotate-180' : ''}`}
        loading="lazy"
      />
    </div>
  )
}

function ScrollCue({ label = 'Scroll' }) {
  return (
    <div className="scroll-cue mt-8 text-center opacity-0">
      <p className="text-[9px] uppercase tracking-[0.42em] text-[#d9bd7f]/75">
        {label}
      </p>
      <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#d9bd7f]/70 to-transparent" />
    </div>
  )
}

function HeroSection() {
  return (
    // Added explicit min-h-[100svh] here to keep the hero section full screen
    <SectionShell id="hero-section" className="min-h-[100svh] text-center">
      <div className="mx-auto flex min-h-[88svh] w-full max-w-[440px] flex-col justify-center">
        
        <h1 className="hero-text mx-auto max-w-[390px] font-['Times_New_Roman'] text-[clamp(2.15rem,8vw,3.35rem)] font-normal uppercase leading-[0.96] tracking-[-0.06em] text-[#fff7ef] opacity-0">
          <span className="block whitespace-nowrap">Some things are</span>
          <span className="block whitespace-nowrap">meant for you</span>
        </h1>

        <p className="hero-text script mt-7 text-[clamp(2rem,8vw,3rem)] leading-none text-[#fff7ef] opacity-0">
          And only you.
        </p>

        <div className="mt-16 flex justify-center">
          <img
            src={heroEnvelope}
            alt="Burgundy envelope with wax seal"
            className="hero-envelope w-[118vw] max-w-[610px] translate-x-[-8px] opacity-0"
          />
        </div>

        <ScrollCue label="Scroll to open" />
      </div>
    </SectionShell>
  )
}

function TicketSection() {
  return (
    // Pushed right up under the hero section, no horizontal padding
    <section className="chapter-section relative flex items-center justify-center overflow-hidden px-0 pb-20 pt-8 text-center">
      <div className="chapter-content relative z-10 flex w-full items-center justify-center">
        
        {/* MAXIMUM SIZE: Full width of the container (up to 520px), zero margins, zero offsets */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <img
            src={ticketImage}
            alt="Jay and Tin wedding invitation ticket"
            className="w-full"
          />

          <div className="absolute inset-x-[9%] top-[10%] text-center text-[#6b0f1a]">
            {/* Scaled up the text 'clamp' sizes to perfectly fit the new massive ticket */}
            <p className="text-[clamp(0.8rem,3.8vw,1.1rem)] font-semibold italic leading-none">
              We invite you to the wedding of
            </p>

            <h2 className="luxury-script mt-[7%] text-[clamp(4.8rem,18vw,7rem)] leading-[0.82] tracking-[-0.04em] text-[#6b0f1a]">
              Jay & Tin
            </h2>

            <div className="mt-[9%] grid min-h-[112px] grid-cols-2 border-y border-[#7c1725]/75">
              <div className="flex flex-col items-center justify-center border-r border-[#7c1725]/75 px-2 text-center">
                <p className="heading-serif m-0 translate-y-[3px] text-[clamp(0.8rem,3.5vw,1rem)] font-bold uppercase leading-none">
                  May
                </p>

                <p className="heading-serif m-0 -translate-y-[6px] text-[clamp(3.8rem,14vw,5rem)] font-bold leading-[0.78]">
                  29
                </p>

                <p className="heading-serif m-0 translate-y-[6px] text-[clamp(0.8rem,3.5vw,1rem)] font-bold leading-none tracking-[0.08em]">
                  2026
                </p>
              </div>

              <div className="flex flex-col items-center justify-center px-3 text-center">
                <div className="leading-[0.95]">
                  <p className="m-0 text-[clamp(0.9rem,4vw,1.15rem)] font-semibold italic">
                    at 4:30 in the
                  </p>

                  <p className="m-0 text-[clamp(0.9rem,4vw,1.15rem)] font-semibold italic">
                    afternoon
                  </p>
                </div>

                <p className="heading-serif m-0 mt-3 text-[clamp(0.75rem,3vw,0.95rem)] font-bold uppercase tracking-[0.18em]">
                  Friday
                </p>
              </div>
            </div>

            <p className="mx-auto mt-[8%] max-w-[280px] text-[clamp(0.95rem,4vw,1.2rem)] font-semibold italic leading-[0.95]">
              Be in the venue at least 30mins before ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('May 29, 2026 16:30:00 GMT+0800').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

function CeremonySection() {
  return (
    // Add flex-col to stack the top text block, full-width image, and bottom button block
    <section className="chapter-section relative flex flex-col items-center justify-center overflow-hidden bg-[#5f0711] px-0 py-24 text-center">
      
      {/* WIDTH-LIMITED TOP CONTENT BLOCK */}
      <div className="chapter-content relative w-full max-w-[520px]">
        <div className="px-5">
          <p className="script mx-auto text-[clamp(2.25rem,8.5vw,3.4rem)] leading-[0.88] text-[#fff7ef]">
            Wedding Ceremony &<br /> Reception Venue
          </p>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#fff7ef]">
            Lola’s Cafe, Tomas Morato
          </p>
        </div>
      </div>

      {/* FULL-WIDTH IMAGE CONTAINER (Moved outside of width-limited div) */}
      <div className="mt-10 w-full overflow-hidden">
        <img
          src={lolasCafe}
          alt="Lola’s Cafe Morato venue"
          // Keep object-cover for full-section-width image
          className="w-full object-cover grayscale"
          loading="lazy"
        />
      </div>

      {/* WIDTH-LIMITED BOTTOM CONTENT BLOCK */}
      <div className="chapter-content relative w-full max-w-[520px]">
        <div className="px-5">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-[#fff7ef]/80 px-10 py-3 text-[10px] uppercase tracking-[0.28em] text-[#fff7ef] transition hover:bg-[#fff7ef] hover:text-[#6b0f1a]"
          >
            View Map
          </a>
        </div>
      </div>

    </section>
  )
}

function FabricSwatch({ image, label }) {
  return (
    <div className="swatch h-[88px] w-[88px] overflow-hidden rounded-full border border-[#d9bd7f]/55 ">
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

        <p className="mx-auto max-w-[340px] text-center text-[15px] leading-[1.8] text-[#fff7ef]">
          We would love for our guests
          <br />
          to join in our wedding palette by wearing
          <br />
          <span className="font-semibold">Black</span> or <span className="font-semibold">Wine Red</span> attire,
          <br />
          helping create a timeless 
          <br />
          and cohesive celebration.
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
        <h2 className="script text-[clamp(3rem,12vw,4.5rem)] text-[#fff7ef]">
          Gift Guide
        </h2>

        <p className="mx-auto mt-6 max-w-[340px] text-center text-[15px] leading-[1.8] text-[#fff7ef]">
          With all the blessings that God poured out
          <br />
          on us we cannot ask for more.
          <br />
          Your presence and prayers are all we request.
          <br />
          But if you desire to bless us,
          <br />
          monetary gifts are what we suggest.
        </p>

        <div className="mx-auto mt-12 inline-block rounded-2xl bg-[#efe2d2] p-5 shadow-[0_40px_85px_rgba(0,0,0,0.42)]">
          <img src={gcashQR} alt="Gift QR code" className="w-[260px] max-w-[72vw]" />
        </div>
      </div>
    </SectionShell>
  )
}

function DetailsSection() {
  const observerRefs = useRef([]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('May 29, 2026 16:30:00 GMT+0800').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <section className="chapter-section relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#5f0711] px-0 py-0 text-center">
      <div className="chapter-content relative h-[100svh] w-full overflow-hidden bg-[#5f0711]">
        
        <img
          src={detailsPaper}
          alt=""
          className="absolute left-1/2 top-0 h-full w-[112%] max-w-none -translate-x-1/2 object-fill"
        />

        <div 
          className="absolute inset-x-[7%] top-[8%] z-20 max-h-[82vh] overflow-y-auto text-[#6b0f1a] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          
          {/* FIXED: Changed to text-center and removed ml-[15%] from the second paragraph */}
          <div 
            ref={addToRefs} 
            className="mb-16 pt-10 text-center opacity-0 transition-opacity duration-1000 ease-out"
          >
            <p className="script text-[clamp(4.5rem,15vw,7rem)] leading-[0.75]">
              Wedding
            </p>
            <p className="script text-[clamp(4.5rem,15vw,7rem)] leading-[0.75]">
              Details
            </p>
          </div>

          <div className="pb-[35vh] text-left">
            
            <div className="space-y-[15%]">
              
              <div ref={addToRefs} className="max-w-[90%] opacity-0 transition-opacity duration-1000 ease-out">
                <h4 className="heading-serif text-[clamp(1.2rem,6vw,1.6rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                  Can I bring a plus one?
                </h4>
                <p className="mt-4 text-[clamp(1.05rem,5.5vw,1.3rem)] italic leading-[1.15]">
                  Due to limited space at our venue, we can only accommodate those formally invited on the invitation.
                </p>
              </div>

              <div ref={addToRefs} className="ml-auto max-w-[90%] text-right opacity-0 transition-opacity duration-1000 ease-out">
                <h4 className="heading-serif text-[clamp(1.2rem,6vw,1.6rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                  Are kids allowed?
                </h4>
                <p className="mt-4 text-[clamp(1.05rem,5.5vw,1.3rem)] italic leading-[1.15]">
                  We love your little ones. However, due to the limited space at our venue, we decided to keep our wedding adults only. We encourage you to use this as a date night to get out and have fun!
                </p>
              </div>

              <div ref={addToRefs} className="max-w-[90%] opacity-0 transition-opacity duration-1000 ease-out">
                <h4 className="heading-serif text-[clamp(1.2rem,6vw,1.6rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                  Unplugged ceremony
                </h4>
                <p className="mt-4 text-[clamp(1.05rem,5.5vw,1.3rem)] italic leading-[1.15]">
                  As we say “I Do”, we ask our beloved guests to put away their phones and cameras, and be fully present in the meaningful moment with us.
                </p>
                <p className="mt-4 text-[clamp(1.05rem,5.5vw,1.3rem)] italic leading-[1.15]">
                  While our I Do’s are unplugged, our reception is not.
                </p>
              </div>

              <div ref={addToRefs} className="ml-auto max-w-[90%] text-right opacity-0 transition-opacity duration-1000 ease-out">
                <h4 className="heading-serif text-[clamp(1.2rem,6vw,1.6rem)] font-bold uppercase leading-[0.95] tracking-[0.04em]">
                  Parking
                </h4>
                <p className="mt-4 text-[clamp(1.05rem,5.5vw,1.3rem)] italic leading-[1.15]">
                  To make your arrival easy, a pay parking building is located right beside Lola’s Cafe.
                </p>
              </div>

              <div 
                ref={addToRefs} 
                className="pt-6 text-center opacity-0 transition-opacity duration-1000 ease-out"
              >
                <p className="script text-[clamp(3.2rem,12vw,4.5rem)] leading-none text-[#6b0f1a]">
                  Counting the Days
                </p>
                
                <div className="mt-6 flex justify-center gap-2 text-[#6b0f1a]">
                  <div className="flex w-[60px] flex-col items-center">
                    <span className="heading-serif text-[clamp(2.2rem,8.5vw,3rem)] leading-none tracking-tight">
                      {timeLeft.days}
                    </span>
                    <span className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#d9bd7f]">Days</span>
                  </div>
                  
                  <span className="heading-serif text-2xl text-[#d9bd7f]/70 translate-y-1">:</span>
                  
                  <div className="flex w-[55px] flex-col items-center">
                    <span className="heading-serif text-[clamp(2.2rem,8.5vw,3rem)] leading-none tracking-tight">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#d9bd7f]">Hrs</span>
                  </div>
                  
                  <span className="heading-serif text-2xl text-[#d9bd7f]/70 translate-y-1">:</span>
                  
                  <div className="flex w-[55px] flex-col items-center">
                    <span className="heading-serif text-[clamp(2.2rem,8.5vw,3rem)] leading-none tracking-tight">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#d9bd7f]">Mins</span>
                  </div>
                  
                  <span className="heading-serif text-2xl text-[#d9bd7f]/70 translate-y-1">:</span>
                  
                  <div className="flex w-[55px] flex-col items-center">
                    <span className="heading-serif text-[clamp(2.2rem,8.5vw,3rem)] leading-none tracking-tight">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="mt-2 text-[8px] font-bold uppercase tracking-[0.25em] text-[#d9bd7f]">Secs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
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
    } catch (error) {
      console.error('RSVP submit error:', error)

      setStatus({
        loading: false,
        success: '',
        error: 'Something went wrong. Please try submitting again.',
      })
    }
  }

  return (
    // Maintained min-h-[100svh] here 
    <SectionShell className="min-h-[100svh] text-center">
      <div className="mx-auto w-full max-w-[390px]">
        <p className="script mx-auto max-w-[360px] text-[clamp(3.15rem,11.5vw,4.35rem)] leading-[0.88] text-[#fff7ef]">
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
      const tl = gsap.timeline();

      tl.to('.hero-text', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2 
      })
      .to('.hero-envelope', {
        opacity: 1,
        duration: 3,
        ease: 'power2.out'
      }, '-=0.5')
      .to('.scroll-cue', {
        opacity: 1,
        duration: 1
      });

      gsap.utils.toArray('.chapter-section').forEach((section, index) => {
        if (section.id === 'hero-section') return;

        const content = section.querySelector('.chapter-content')

        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 72%',
                once: true,
              },
            },
          )
        }
      })

      gsap.utils.toArray('.torn-divider').forEach((divider, index) => {
        const paper = divider.querySelector('.torn-paper-img')

        gsap.fromTo(
          paper,
          { opacity: 0 },
          {
            opacity: 0.95,
            duration: 1,
            ease: 'power2.out',
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
      <div className="relative mx-auto max-w-[520px] overflow-hidden bg-[#5f0711]">
        <HeroSection />

        <TicketSection />
        
        <CountdownSection />

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