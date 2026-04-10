import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Menu, X, Download, ShieldCheck, Sword, Flame, Dna, FileText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const BASE_URL = import.meta.env.BASE_URL;

const logoUrl = `${BASE_URL}images/logo.jpeg`;
const whitepaperUrl = `${BASE_URL}docs/british-bulldogs-nft-whitepaper.pdf`;
const sneakPeeks = [
  `${BASE_URL}images/sneak1.png`,
  `${BASE_URL}images/sneak2.png`,
  `${BASE_URL}images/sneak3.png`,
  `${BASE_URL}images/sneak4.png`,
  `${BASE_URL}images/sneak5.png`,
  `${BASE_URL}images/sneak6.png`,
  `${BASE_URL}images/sneak7.png`,
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Project", href: "#project" },
    { name: "Lore", href: "#story" },
    { name: "Mint Details", href: "#mint" },
    { name: "Mission", href: "#mission" },
    { name: "Token", href: "#token" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src={logoUrl} alt="British Bulldog NFT" className="w-10 h-10 rounded-sm border border-white/10 group-hover:border-primary transition-colors" />
            <span className="font-serif font-bold text-xl tracking-wider text-white">BRITISH BULLDOG</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-display uppercase tracking-widest text-white/70 hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="font-display uppercase tracking-wider border-secondary text-secondary hover:bg-secondary hover:text-background"
            >
              Connect Wallet
            </Button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-display uppercase tracking-widest text-white hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-secondary text-background hover:bg-white font-display uppercase tracking-wider">
              Connect Wallet
            </Button>
          </motion.div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background z-10" />
            <img 
              src={sneakPeeks[0]} 
              alt="Hero Background" 
              className="w-full h-full object-cover opacity-20 blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <img src={logoUrl} alt="Logo" className="w-32 h-32 md:w-48 md:h-48 rounded-sm shadow-2xl border border-white/10 mx-auto" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 max-w-5xl"
            >
              WELCOME TO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-white to-secondary">BRITISH BULLDOG</span> NFT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 font-display font-light max-w-2xl mb-4"
            >
              Britain's most iconic breed. Now immortalised on Ethereum.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-md md:text-lg text-primary font-sans font-semibold tracking-widest uppercase mb-12"
            >
              The breed that refused to die. Now building something that lasts forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-red-800 text-white font-display uppercase tracking-widest px-10 py-6 text-lg h-auto rounded-none border border-primary shadow-[0_0_20px_rgba(139,0,0,0.4)]">
                Mint Coming Soon
              </Button>
              <Button size="lg" variant="outline" className="border-secondary/50 text-secondary hover:bg-secondary/10 hover:text-secondary font-display uppercase tracking-widest px-10 py-6 text-lg h-auto rounded-none">
                Join Discord
              </Button>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10 opacity-50">
            <ChevronDown size={32} />
          </div>
        </section>

        {/* THE PROJECT */}
        <section id="project" className="py-24 relative border-t border-white/5 bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-white">THE BROTHERHOOD</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              British Bulldog NFT is a collection of 444 hand-crafted Bulldogs on Ethereum — each one a sworn member of a Brotherhood founded in 1555 with one unbreakable oath: 
              <span className="block mt-6 text-2xl md:text-4xl font-serif text-secondary italic">"No Dog Left Behind."</span>
            </p>
          </div>
        </section>

        {/* THE STORY */}
        <section id="story" className="py-24 relative bg-black/40">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full" />
              <img src={sneakPeeks[1]} alt="The Lore" className="relative z-10 w-full rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <Flame className="text-primary" size={32} />
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">THE LORE</h2>
              </div>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                In 1555, five bulldogs gathered in a candlelit tavern off Borough Market during a frozen London winter. They signed the founding oath in blood and stout. 
              </p>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                They recruited 439 more. 444 sworn members. They operated in the shadows, protecting their own, building wealth, and preserving the lineage.
              </p>
              <p className="text-lg text-white/70 leading-relaxed font-bold border-l-4 border-secondary pl-6 py-2">
                Now, after centuries of secrecy, they reveal themselves on Ethereum.
              </p>
            </div>
          </div>
        </section>

        {/* MINT DETAILS & RARITY */}
        <section id="mint" className="py-24 bg-background relative">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* MINT DETAILS */}
              <div className="lg:col-span-5">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">MINT DETAILS</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Blockchain", value: "Ethereum" },
                    { label: "Supply", value: "444" },
                    { label: "GTD Mint", value: "FREE", highlight: true },
                    { label: "WL Mint", value: "$5" },
                    { label: "Public Mint", value: "$7" },
                    { label: "Team Reserve", value: "22" },
                    { label: "Royalties", value: "5%" },
                    { label: "Mint Date", value: "TBA", highlight: true },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-none hover:border-primary/50 transition-colors">
                      <p className="text-xs font-display uppercase tracking-widest text-white/50 mb-2">{item.label}</p>
                      <p className={`text-xl font-bold ${item.highlight ? 'text-secondary' : 'text-white'}`}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TRAIT RARITY */}
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8">THE RANKS</h2>
                <div className="space-y-4">
                  {[
                    { rank: "Initiate", type: "Common", supply: 200, color: "bg-zinc-600" },
                    { rank: "Brother", type: "Uncommon", supply: 130, color: "bg-emerald-700" },
                    { rank: "Elder", type: "Rare", supply: 70, color: "bg-blue-700" },
                    { rank: "Founder", type: "Ultra Rare", supply: 39, color: "bg-purple-700" },
                    { rank: "Grand Master", type: "Legendary", supply: 5, color: "bg-secondary" },
                  ].map((tier, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-3 rounded-full ${tier.color} shadow-[0_0_10px_currentColor]`} />
                        <div>
                          <h4 className="font-serif font-bold text-lg text-white">{tier.rank}</h4>
                          <p className="text-xs font-display uppercase tracking-wider text-white/50">{tier.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-mono text-xl font-bold text-white">{tier.supply}</p>
                        <p className="text-xs font-display uppercase text-white/50">Supply</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 bg-black/60 relative border-y border-white/5">
          <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">THE ARCHIVES</h2>
            <p className="text-white/60 font-display uppercase tracking-widest">Sneak Peeks of the 444</p>
          </div>
          
          <div className="flex overflow-hidden group">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-6 px-6"
            >
              {[...sneakPeeks, ...sneakPeeks].map((src, i) => (
                <div key={i} className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 overflow-hidden rounded-sm border border-white/10 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-300">
                  <img 
                    src={src} 
                    alt={`Sneak Peek ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="font-serif font-bold text-white tracking-widest">CLASSIFIED</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* THE MISSION */}
        <section id="mission" className="py-24 relative bg-background">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
            <ShieldCheck className="mx-auto text-primary mb-6" size={48} />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">THE MISSION</h2>
            <p className="text-xl text-white/80 font-light mb-12 leading-relaxed">
              Part of every sale funds homeless dog shelters across the UK. <br/>
              <span className="font-bold text-white">On-chain. Transparent. Forever.</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "UK Dog Shelters", percent: "2%", icon: <ShieldCheck size={24}/> },
                { title: "Project Dev", percent: "2%", icon: <Sword size={24}/> },
                { title: "Community Treasury", percent: "1%", icon: <Dna size={24}/> },
              ].map((pillar, i) => (
                <div key={i} className="p-8 border border-white/10 bg-white/5 flex flex-col items-center">
                  <div className="text-secondary mb-4">{pillar.icon}</div>
                  <h3 className="font-display font-bold uppercase text-lg text-white mb-2">{pillar.title}</h3>
                  <p className="text-3xl font-serif text-primary font-bold">{pillar.percent}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOKEN */}
        <section id="token" className="py-24 bg-gradient-to-b from-black/40 to-background border-t border-white/5 relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1 border border-secondary text-secondary text-xs font-display uppercase tracking-widest mb-6 rounded-full">
                Coming Soon
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-white mb-8">$BULLDOG TOKEN</h2>
              <ul className="space-y-4 mb-10">
                {[
                  "NFT holders get guaranteed allocation",
                  "Exclusive airdrop for OG & WL holders",
                  "Token holders shape the future of the Brotherhood",
                  "Staking & rewards for long-term holders"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-white/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-serif text-primary italic border-l-4 border-primary pl-6">
                "Your Bulldog NFT is not just art. It's your key to everything that comes next."
              </p>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section id="roadmap" className="py-24 relative bg-background">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-16">ROADMAP</h2>
            
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-white/20 before:to-transparent">
              {[
                { phase: "Phase 1", title: "The Gathering", desc: "Community Building", status: "COMPLETE" },
                { phase: "Phase 2", title: "The Mint", desc: "The 444 reveal themselves on Ethereum.", status: "UPCOMING" },
                { phase: "Phase 3", title: "The Build", desc: "Charity implementation & Brotherhood utilities.", status: "LOCKED" },
                { phase: "Phase 4", title: "The Token", desc: "$BULLDOG Launch & Staking.", status: "LOCKED" },
                { phase: "Phase 5", title: "The Legacy", desc: "Episode 2 & 3 Expansion.", status: "LOCKED" },
              ].map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background ${item.status === 'COMPLETE' ? 'bg-primary' : 'bg-zinc-800'} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10`} />
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-none border border-white/10 bg-white/5 hover:border-secondary/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-secondary font-display text-sm tracking-widest uppercase">{item.phase}</span>
                      {item.status === 'COMPLETE' && <span className="text-xs bg-primary px-2 py-1 rounded text-white font-bold">✓</span>}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHITEPAPER */}
        <section className="py-24 bg-primary/10 border-y border-primary/20 relative">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
            <FileText className="mx-auto text-secondary mb-6" size={48} />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">THE MANIFESTO</h2>
            <p className="text-white/80 mb-10 leading-relaxed text-lg">
              Read the complete documentation detailing our charitable mission, tokenomics, and the long-term vision for the British Bulldog Brotherhood.
            </p>
            <a href={whitepaperUrl} target="_blank" rel="noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-background font-display uppercase tracking-widest px-8 py-6 rounded-none flex items-center gap-3">
                <Download size={20} />
                Download Whitepaper
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <img src={logoUrl} alt="Logo" className="w-20 h-20 mb-8 rounded-sm grayscale opacity-50" />
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-6 max-w-2xl">
              HOLD YOUR BULLDOG. <br/> SECURE YOUR FUTURE. <br/>
              <span className="text-primary">NO DOG LEFT BEHIND.</span>
            </h2>
            <div className="flex items-center gap-6 mt-8">
              <a href="https://x.com/britbulldogsnft" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.918H5.078z"></path></svg>
              </a>
              <a href="https://discord.gg/93bmwZZ9Z5" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#5865F2] hover:text-white transition-colors hover:border-[#5865F2]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-white/40 text-sm font-display tracking-widest">
            <p>COPYRIGHT © 2025 BRITISH BULLDOGS NFT.</p>
            <p className="mt-2 md:mt-0">BUILT ON ETHEREUM.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}