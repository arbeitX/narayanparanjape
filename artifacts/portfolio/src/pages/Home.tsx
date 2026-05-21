import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import Logo from "@/components/Logo";
import { 
  Phone, 
  MapPin, 
  Shield, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Award,
  ArrowRight,
  CheckCircle2,
  Share2,
  MessageCircle,
  ExternalLink,
  BookOpen,
  Mail
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t, language, toggleLanguage } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/919226892222";
  const websiteUrl = "https://ttmscredit.co.in/";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-primary text-lg md:text-xl tracking-tight flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
            <Logo size={40} />
            <span className="hidden sm:inline">Narayan Paranjape</span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-foreground/80">
              <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">{t('nav.about')}</button>
              <button onClick={() => scrollTo('plans')} className="hover:text-primary transition-colors">{t('nav.plans')}</button>
              <button onClick={() => scrollTo('benefits')} className="hover:text-primary transition-colors">{t('nav.benefits')}</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-primary transition-colors">{t('nav.contact')}</button>
            </div>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-full bg-secondary/20 text-primary font-semibold text-sm hover:bg-secondary/30 transition-colors border border-secondary/30 flex items-center gap-2"
            >
              <span className={language === 'en' ? 'text-primary' : 'text-primary/50'}>EN</span>
              <span className="text-primary/30">|</span>
              <span className={language === 'mr' ? 'text-primary' : 'text-primary/50'}>मराठी</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden px-4">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-sm font-semibold mb-6 border border-secondary/30">
                {t('hero.welcome')}
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tight leading-tight">
                {t('hero.name')}
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-foreground/80 mb-6 font-medium">
                {t('hero.title')}
              </motion.p>
              
              <motion.div variants={fadeUp} className="bg-white p-4 rounded-xl shadow-sm border border-border inline-block mx-auto mb-10 max-w-2xl">
                <p className="text-sm md:text-base text-foreground/90 font-medium">
                  {t('hero.org')}
                </p>
                <a href={websiteUrl} target="_blank" rel="noreferrer" className="text-primary text-sm font-semibold mt-2 inline-flex items-center gap-1 hover:underline">
                  ttmscredit.co.in <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => scrollTo('plans')} className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  {t('hero.invest')} <ArrowRight className="w-5 h-5" />
                </button>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold text-lg hover:bg-[#20b858] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" /> {t('hero.whatsapp')}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white px-4 border-y border-border/50">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="aspect-[3/4] rounded-2xl bg-primary/10 border-8 border-white shadow-xl relative overflow-hidden flex items-center justify-center">
                   {/* Placeholder for Photo */}
                   <div className="text-center p-6">
                     <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                       <Briefcase className="w-10 h-10 text-primary" />
                     </div>
                     <p className="text-primary font-bold text-xl">Mr. N. Paranjape</p>
                     <p className="text-sm text-foreground/60 mt-2">Class 1 Officer (Retd.)</p>
                   </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('about.title')}</h2>
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
                  <p>{t('about.desc1')}</p>
                  <p>{t('about.desc2')}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Award, text: t('about.highlight1') },
                    { icon: Shield, text: t('about.highlight2') },
                    { icon: TrendingUp, text: t('about.highlight3') },
                    { icon: CheckCircle2, text: t('about.highlight4') }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-background p-3 rounded-lg border border-border">
                      <item.icon className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-sm md:text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Plans Section */}
        <section id="plans" className="py-20 bg-white px-4 border-t border-border">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('plans.title')}</h2>
              <p className="text-lg text-foreground/70">{t('plans.subtitle')}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-border overflow-hidden mb-6">
              <div className="grid grid-cols-2 bg-primary text-white p-4 font-semibold text-lg">
                <div>{t('plans.duration')}</div>
                <div className="text-right">{t('plans.rate')}</div>
              </div>
              
              <div className="divide-y divide-border">
                {[
                  { duration: t('plans.months12'), rate: "10.00% p.a." },
                  { duration: t('plans.months24'), rate: "10.50% p.a." },
                  { duration: t('plans.months36'), rate: "11.50% p.a." }
                ].map((plan, i) => (
                  <div key={i} className="grid grid-cols-2 p-5 text-lg items-center hover:bg-slate-50 transition-colors">
                    <div className="font-medium">{plan.duration}</div>
                    <div className="text-right font-bold text-primary">{plan.rate}</div>
                  </div>
                ))}
                
                {/* Highlighted 60 months */}
                <div className="grid grid-cols-2 p-5 text-lg items-center bg-secondary/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                  <div className="font-bold text-primary flex flex-col sm:flex-row sm:items-center gap-2">
                    {t('plans.months60')}
                    <span className="text-xs uppercase bg-secondary text-primary px-2 py-0.5 rounded-full font-bold inline-block w-fit">
                      {t('plans.best')}
                    </span>
                  </div>
                  <div className="text-right font-black text-2xl text-primary">12.50% p.a.</div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
              <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-primary">{t('plans.note')}</p>
                <p className="text-sm text-foreground/70 mt-1">Source: Tirumalla Tirupati Multistate Co-operative Credit Society Ltd.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white px-4 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">{t('benefits.title')}</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: t('benefits.card1.title'), desc: t('benefits.card1.desc') },
                { icon: TrendingUp, title: t('benefits.card2.title'), desc: t('benefits.card2.desc') },
                { icon: Users, title: t('benefits.card3.title'), desc: t('benefits.card3.desc') },
                { icon: MapPin, title: t('benefits.card4.title'), desc: t('benefits.card4.desc') }
              ].map((benefit, i) => (
                <div key={i} className="bg-background p-6 rounded-2xl border border-border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-background px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">{t('success.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[t('success.card1'), t('success.card2'), t('success.card3')].map((story, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-border shadow-sm relative">
                  <div className="text-4xl text-secondary/30 absolute top-4 left-4 font-serif">"</div>
                  <p className="relative z-10 text-foreground/80 italic leading-relaxed pt-4">
                    {story}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Referral */}
        <section className="py-16 bg-primary text-white px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="container mx-auto max-w-3xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('referral.title')}</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {t('referral.desc')}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-colors">
              <Share2 className="w-5 h-5" /> {t('referral.share')}
            </a>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-white px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-foreground/70 mb-10">{t('contact.desc')}</p>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <a href="tel:+919226892222" className="flex flex-col items-center justify-center p-8 bg-background border border-border rounded-2xl hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-primary mb-1">{t('contact.phone')}</h3>
                <p className="text-foreground/60">+91 92268 92222</p>
              </a>
              
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-8 bg-background border border-border rounded-2xl hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="font-bold text-xl text-[#25D366] mb-1">{t('contact.whatsapp')}</h3>
                <p className="text-foreground/60">+91 92268 92222</p>
              </a>
            </div>
            
            <div className="bg-background p-6 rounded-2xl border border-border inline-block text-left max-w-2xl w-full">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-primary mb-2">Visit Us</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {t('contact.address')}
                  </p>
                  <a href={websiteUrl} target="_blank" rel="noreferrer" className="text-secondary font-semibold mt-4 inline-block hover:underline">
                    Visit Official Website &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Literary Works Section */}
        <section id="poetry" className="py-20 bg-background px-4 border-t border-border">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="text-center mb-12">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold mb-4 border border-amber-200">
                  <BookOpen className="w-4 h-4" />
                  {t('poetry.badge')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('poetry.title')}</h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t('poetry.subtitle')}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Book info card */}
                <motion.div variants={fadeUp} className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-8 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                      <BookOpen className="w-10 h-10 text-amber-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{t('poetry.book')}</h3>
                    <p className="text-white/60 text-sm">by Mr. Narayan Paranjape</p>
                  </div>
                  <div className="p-6">
                    <p className="text-foreground/75 leading-relaxed mb-6">{t('poetry.bookdesc')}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-amber-800 text-sm mb-1">{t('poetry.ecopy')}</p>
                          <p className="text-amber-700/80 text-xs leading-relaxed">{t('poetry.ecopy.desc')}</p>
                        </div>
                      </div>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-lg font-semibold text-sm hover:bg-[#20b858] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        {t('poetry.ecopy')}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* YouTube embed */}
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">{t('poetry.video')}</p>
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-border bg-black" style={{ paddingTop: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/ckHwxAefQKo?rel=0&modestbranding=1"
                      title="Aavahan Marathi Kavya Sangrah — First Poem"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-xs text-foreground/50 text-center">
                    "Aavahan Marathi Kavya Sangrah" — a journey through words and culture
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-primary border-t border-primary/20 py-8 px-4 text-center">
        <p className="text-white/60 text-sm">
          &copy; {new Date().getFullYear()} Mr. Narayan Paranjape. {t('footer.rights')}
        </p>
      </footer>
    </div>
  );
}
