import { useState } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { PROFILE } from "../data";

const ContactSection = () => {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const message = String(f.get("message") || "").trim();
    const er = {};
    if (!name) er.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) er.email = "Please enter a valid email.";
    if (message.length < 10) er.message = "Message should be at least 10 characters.";
    setErrors(er);
    if (Object.keys(er).length) return;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio enquiry from " + name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input = "w-full rounded-2xl bg-white/5 border border-white/15 px-5 py-4 text-[#D7E2EA] placeholder:text-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors";

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-28">
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center leading-none" style={{ fontSize: "clamp(2.6rem, 11vw, 160px)" }}>
          Let&apos;s talk
        </h2>
        <p className="text-[#D7E2EA] text-center font-light mt-6 mb-14 max-w-xl mx-auto md:text-lg">
          Open to internships, collaborations and interesting problems. Drop a message and I&apos;ll get back to you.
        </p>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <FadeIn y={30} className="flex flex-col gap-4">
          {[
            { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
            { icon: Github, label: "GitHub · Gaurav-Patil-13", href: PROFILE.github },
            { icon: Linkedin, label: "LinkedIn · Gaurav Patil", href: PROFILE.linkedin },
            { icon: Instagram, label: "Instagram · gaurav_patil_45_", href: PROFILE.instagram },
          ].map(({ icon: I, label, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121212] p-5 text-[#D7E2EA] hover:border-[#B600A8]/70 transition-colors break-all">
              <I size={22} className="flex-shrink-0 text-[#B600A8]" /> {label}
            </a>
          ))}
        </FadeIn>

        <FadeIn y={30}>
          <form onSubmit={submit} noValidate className="flex flex-col gap-4">
            {[
              { n: "name", p: "Your name", t: "text" },
              { n: "email", p: "Your email", t: "email" },
            ].map((f) => (
              <div key={f.n}>
                <input name={f.n} type={f.t} placeholder={f.p} aria-label={f.p} className={input} />
                {errors[f.n] && <p className="text-[#ff7a7a] text-sm mt-1.5 px-2">{errors[f.n]}</p>}
              </div>
            ))}
            <div>
              <textarea name="message" rows={5} placeholder="Your message" aria-label="Your message" className={input} />
              {errors.message && <p className="text-[#ff7a7a] text-sm mt-1.5 px-2">{errors.message}</p>}
            </div>
            <button type="submit" className="self-start rounded-full text-white font-medium uppercase tracking-widest px-10 py-4 hover:scale-105 transition-transform" style={{ background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)", outline: "2px solid white", outlineOffset: "-3px" }}>
              Send message
            </button>
            {sent && <p className="text-[#D7E2EA]/70 text-sm">Your email app should open with the message ready to send.</p>}
          </form>
        </FadeIn>
      </div>

      <footer className="max-w-5xl mx-auto mt-24 py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#D7E2EA]/60 text-sm">
        <span>© {new Date().getFullYear()} Gaurav Patil</span>
        <div className="flex gap-5">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-white">Email</a>
        </div>
      </footer>
    </section>
  );
};
export default ContactSection;
