'use client';

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./flux-website.css";

declare global {
  interface Window {
    showPage?: (pageId: string, targetId?: string) => void;
  }
}

const websiteMarkup = String.raw`<!-- ====== SHARED NAVBAR ====== -->
<nav class="navbar">
  <a class="logo" href="/" onclick="showPage('home')">
    <div class="logo-icon">F</div>
    <div>
      <div class="logo-text">Flux<span>.</span></div>
      <span class="logo-sub">D I G I T A L</span>
    </div>
  </a>
  <div class="nav-links">
    <a id="nav-home" class="active" href="/" onclick="showPage('home')">Home</a>
    <div class="nav-dropdown">
      <a>Services ▾</a>
      <div class="dropdown-menu">
        <a class="seo-link" href="/seo" onclick="showPage('seo')"><i class="fas fa-search"></i> Search Engine Optimization</a>
        <a href="/digital-marketing" onclick="showPage('digital')"><i class="fas fa-bullhorn"></i> Digital Marketing</a>
        <a href="/social-media-marketing" onclick="showPage('smm')"><i class="fab fa-instagram"></i> Social Media Marketing</a>
        <a href="/pay-per-click" onclick="showPage('ppc')"><i class="fas fa-ad"></i> Google Ads (PPC)</a>
        <a href="/web-design-development" onclick="showPage('webdev')"><i class="fas fa-code"></i> Web Design & Development</a>
        <a href="/ui-ux-graphic-design" onclick="showPage('uiux')"><i class="fas fa-pen-ruler"></i> UI/UX & Graphic Design</a>
      </div>
    </div>
    <a id="nav-about" href="/about" onclick="showPage('about')">About</a>
    <a href="/#faq" onclick="showPage('home','faq')">Blog</a>
    <a id="nav-contact" href="/contact" onclick="showPage('contact')">Contact</a>
  </div>
  <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-right">
    <div class="social-icons">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
    </div>
    <a href="/contact" onclick="showPage('contact')" class="btn-cta">☎ Let's Talk</a>
  </div>
</nav>


<!-- ====================================================
     HOME PAGE
     ==================================================== -->
<div id="page-home" class="page active">

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <div class="badge">
      <span class="badge-dot"></span>
      Your Digital Edge in Bangalore
    </div>
    <h1 class="hero-title">
      Igniting Growth with<br>
      <span class="highlight">Impactful Digital Solutions.</span>
    </h1>
    <p class="hero-desc">
      We blend creativity with data-driven precision to elevate your brand.
      Partner with Bangalore's leading Web Design and Digital Marketing
      innovators for unparalleled success.
    </p>
    <div class="hero-actions">
      <button class="btn-primary" onclick="showPage('contact')">Start Your Project →</button>
      <a href="/#services" onclick="showPage('home','services')" class="btn-secondary">View Our Services</a>
    </div>
    <div class="trust-bar">
      <div class="avatars">
        <div class="av av-1">AK</div>
        <div class="av av-2">PR</div>
        <div class="av av-3">SN</div>
        <div class="av av-4">MR</div>
        <div class="av av-count">+1k</div>
      </div>
      <span class="trust-text">Trusted by <strong>1000+ happy clients</strong> in Bangalore</span>
    </div>
  </div>

  <div class="hero-right">
    <div style="position:relative">
      <div class="hero-img-placeholder">
        <span class="placeholder-icon">🚀</span>
        <span class="placeholder-text">Flux Digital Team</span>
        <svg style="position:absolute;inset:0;width:100%;height:100%;opacity:0.15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6c3ce9" stroke-width="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
        <div style="position:absolute;top:30px;left:30px;width:80px;height:80px;border-radius:50%;border:2px solid rgba(108,60,233,0.15)"></div>
        <div style="position:absolute;bottom:60px;right:40px;width:120px;height:120px;border-radius:50%;border:2px solid rgba(0,212,170,0.15)"></div>
        <div style="position:absolute;top:50%;left:50%;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,rgba(108,60,233,0.08),transparent);transform:translate(-50%,-50%)"></div>
      </div>
      <div class="float-card float-card-traffic">
        <div class="fc-icon">📈</div>
        <div>
          <div class="fc-label">Traffic</div>
          <div class="fc-value">+240%</div>
        </div>
      </div>
      <div class="float-card float-card-leads">
        <div class="fc-icon">🎯</div>
        <div class="fc-leads-info">
          <div class="fc-label">Leads</div>
          <div class="fc-value">2 Lakh +</div>
          <div class="fc-leads-bar"><span></span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="services" id="services">
  <div class="services-header">
    <div class="services-header-left">
      <div class="section-tag">WHAT WE DO</div>
      <h2 class="section-title">Full–Spectrum Digital Mastery</h2>
      <p class="section-desc">We don't just offer services; we deliver integrated solutions that solve complex business problems. Whether you need an <strong>SEO company in Bangalore</strong> to improve rankings or a creative <strong>web design agency</strong> to overhaul your brand, Flux Digital is your partner.</p>
    </div>
    <a href="/digital-marketing" onclick="showPage('digital')" class="btn-explore">Explore All Services →</a>
  </div>
  <div class="services-grid">
    <div class="service-card">
      <div class="sc-top">
        <div class="sc-icon sc-icon-1">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="10" width="4" height="10" rx="1"/><rect x="9" y="6" width="4" height="14" rx="1"/><rect x="15" y="2" width="4" height="18" rx="1"/></svg>
        </div>
        <div class="sc-blob sc-blob-1"></div>
      </div>
      <div class="sc-title">Digital Marketing</div>
      <div class="sc-desc">As a leading digital marketing company in Bangalore, we craft data-driven strategies that increase your ROI and market share.</div>
      <a href="/digital-marketing" class="sc-link" onclick="showPage('digital')">Learn More <span class="arrow">→</span></a>
    </div>
    <div class="service-card">
      <div class="sc-top">
        <div class="sc-icon sc-icon-2">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="16" height="16" rx="2"/><line x1="3" y1="9" x2="19" y2="9"/><line x1="9" y1="9" x2="9" y2="19"/></svg>
        </div>
        <div class="sc-blob sc-blob-2"></div>
      </div>
      <div class="sc-title">Web Design</div>
      <div class="sc-desc">Our web design agency in Bangalore builds professional, responsive websites tailored for local businesses and global brands.</div>
      <a href="/web-design-development" class="sc-link" onclick="showPage('webdev')">Learn More <span class="arrow">→</span></a>
    </div>
    <div class="service-card">
      <div class="sc-top">
        <div class="sc-icon sc-icon-3">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="11" y1="7" x2="11" y2="11"/><line x1="11" y1="11" x2="14" y2="14"/></svg>
        </div>
        <div class="sc-blob sc-blob-3"></div>
      </div>
      <div class="sc-title">SEO Services</div>
      <div class="sc-desc">Rank #1 on Google with the best SEO agency in Bangalore. Ethical, white-hat strategies for long-term growth.</div>
      <a class="sc-link" href="/seo" onclick="showPage('seo')" style="cursor:pointer">Learn More <span class="arrow">→</span></a>
    </div>
    <div class="service-card">
      <div class="sc-top">
        <div class="sc-icon sc-icon-4">
          <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="9"/><line x1="2" y1="11" x2="20" y2="11"/><ellipse cx="11" cy="11" rx="4" ry="9"/></svg>
        </div>
        <div class="sc-blob sc-blob-4"></div>
      </div>
      <div class="sc-title">Social Media</div>
      <div class="sc-desc">Engage your audience with Bangalore's top Social Media Marketing company. Build brand loyalty on Instagram and LinkedIn.</div>
      <a href="/social-media-marketing" class="sc-link" onclick="showPage('smm')">Learn More <span class="arrow">→</span></a>
    </div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="why-choose">
  <div class="why-header">
    <span class="section-tag">WHY CHOOSE US</span>
    <h2 class="why-title">Why Brands Trust Flux Digital</h2>
    <p class="why-subtitle">We combine creativity, strategy, and performance-driven execution to help businesses scale faster.</p>
  </div>
  <div class="why-grid">
    <div class="why-card">
      <div class="why-icon">⚙️</div>
      <h3>Customized SEO Services</h3>
      <p>Every strategy is tailored to your business goals, audience, and industry competition.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">🤝</div>
      <h3>Complete End-to-End Support</h3>
      <p>From planning to execution, we guide you through every stage of digital growth.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">💰</div>
      <h3>Value for Money</h3>
      <p>We focus on delivering maximum ROI through affordable and result-oriented services.</p>
    </div>
    <div class="why-card">
      <div class="why-icon">📈</div>
      <h3>Results-Driven Strategies</h3>
      <p>Our campaigns are built around measurable growth, leads, and long-term success.</p>
    </div>
  </div>
  <div class="why-bottom-card">
    <h3>Your Trusted Partner for Long-Term Growth</h3>
    <p>The right digital marketing partner can transform your online visibility. We combine practical experience, strong analytical thinking, and transparent communication to create sustainable strategies that improve rankings, generate leads, and increase conversions.</p>
  </div>
</section>

<!-- STATS -->
<section class="stats">
  <div class="stats-grid">
    <div class="stat-item"><div class="stat-value">500+</div><div class="stat-label">Projects Delivered</div></div>
    <div class="stat-item"><div class="stat-value">240%</div><div class="stat-label">Avg. Traffic Growth</div></div>
    <div class="stat-item"><div class="stat-value">1000+</div><div class="stat-label">Happy Clients</div></div>
    <div class="stat-item"><div class="stat-value">2L+</div><div class="stat-label">Leads Generated</div></div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials">
  <div class="testimonial-header">
    <div class="testimonial-badge">
      <i class="fab fa-google"></i> Reviews
      <span style="color:#22c55e;font-weight:700;">Excellent</span>
    </div>
    <h2 class="testimonial-title">
      Trusted by Businesses<br>
      <span>Approved by Results</span>
    </h2>
    <div class="rating-box">
      <strong>5.0</strong>
      <span>⭐⭐⭐⭐⭐ Based on 50+ Reviews</span>
    </div>
  </div>
  <div class="testimonial-grid">
    <div class="testimonial-card">
      <div class="testimonial-top">
        <div class="testimonial-avatar">A</div>
        <div>
          <div class="testimonial-name">AP Portal</div>
          <div class="testimonial-stars">★★★★★ · 1 month ago</div>
        </div>
      </div>
      <div class="testimonial-text">The team is extremely professional and knowledgeable. Their redesigned website improved our user experience and increased sales by 40%.</div>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-top">
        <div class="testimonial-avatar">L</div>
        <div>
          <div class="testimonial-name">Lena Promotors</div>
          <div class="testimonial-stars">★★★★★ · 7 weeks ago</div>
        </div>
      </div>
      <div class="testimonial-text">Best digital marketing agency in Bangalore. Their PPC campaigns were highly targeted and we saw immediate ROI with transparent reporting.</div>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-top">
        <div class="testimonial-avatar">E</div>
        <div>
          <div class="testimonial-name">Eppi Valut</div>
          <div class="testimonial-stars">★★★★★ · 3 months ago</div>
        </div>
      </div>
      <div class="testimonial-text">Working with Flux was a game changer for our startup. Their content marketing strategy helped us build authority in a competitive market.</div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="faq-section" id="faq">
  <div class="faq-header">
    <span class="section-tag">FAQ</span>
    <h2 class="faq-title">Frequently Asked Questions</h2>
    <p class="faq-subtitle">Find clear answers to the most common questions about our digital marketing services.</p>
  </div>
  <div class="faq-tabs">
    <button class="faq-tab active" data-tab="seo"><i class="fas fa-search"></i><span>SEO Service</span></button>
    <button class="faq-tab" data-tab="social"><i class="fas fa-share-alt"></i><span>Social Media</span></button>
    <button class="faq-tab" data-tab="ppc"><i class="fas fa-ad"></i><span>PPC Service</span></button>
    <button class="faq-tab" data-tab="web"><i class="fas fa-code"></i><span>Web Design</span></button>
    <button class="faq-tab" data-tab="uiux"><i class="fas fa-mobile-alt"></i><span>UI/UX Design</span></button>
  </div>

  <div class="faq-content active" id="faq-seo">
    <div class="faq-item active">
      <button class="faq-question">How long does SEO take to deliver results?<span>+</span></button>
      <div class="faq-answer"><p>SEO usually takes 3 to 6 months to show visible improvements depending on competition and keyword difficulty.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Can SEO increase leads and sales?<span>+</span></button>
      <div class="faq-answer"><p>Yes. SEO helps attract highly targeted traffic which increases leads, calls, and conversions.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you provide local SEO services?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We optimize Google Business Profile, local citations, maps rankings, and location-based keywords.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Will SEO work for small businesses?<span>+</span></button>
      <div class="faq-answer"><p>Yes. SEO is one of the best long-term marketing strategies for small businesses.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you provide monthly SEO reports?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We provide keyword rankings, traffic reports, and performance insights every month.</p></div>
    </div>
  </div>

  <div class="faq-content" id="faq-social">
    <div class="faq-item active">
      <button class="faq-question">Which platforms are best for marketing my business?<span>+</span></button>
      <div class="faq-answer"><p>Instagram, Facebook, LinkedIn, and YouTube are the best platforms depending on your business and audience.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Can social media marketing increase sales?<span>+</span></button>
      <div class="faq-answer"><p>Yes. Social media helps improve visibility, engagement, trust, and conversions.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">How often should businesses post on social media?<span>+</span></button>
      <div class="faq-answer"><p>Businesses should post at least 3 to 5 times per week for better engagement.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you create reels and creative posts?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We design social media creatives, reels, stories, and branded content.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Can social media improve brand awareness?<span>+</span></button>
      <div class="faq-answer"><p>Yes. Consistent posting and advertising help increase visibility and trust.</p></div>
    </div>
  </div>

  <div class="faq-content" id="faq-ppc">
    <div class="faq-item active">
      <button class="faq-question">How quickly can PPC generate leads?<span>+</span></button>
      <div class="faq-answer"><p>PPC campaigns can start generating leads within a few days if optimized properly.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Which is better Google Ads or Meta Ads?<span>+</span></button>
      <div class="faq-answer"><p>Google Ads is best for intent-based leads while Meta Ads is great for awareness and retargeting.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">What budget is needed for PPC campaigns?<span>+</span></button>
      <div class="faq-answer"><p>You can start with a minimum monthly budget depending on your industry and goals.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you optimize PPC campaigns regularly?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We optimize keywords, ads, audience targeting, and bidding strategies weekly.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Can PPC generate phone calls?<span>+</span></button>
      <div class="faq-answer"><p>Yes. PPC campaigns can be optimized for calls, WhatsApp leads, and website inquiries.</p></div>
    </div>
  </div>

  <div class="faq-content" id="faq-web">
    <div class="faq-item active">
      <button class="faq-question">How long does website development take?<span>+</span></button>
      <div class="faq-answer"><p>A standard business website usually takes 1 to 3 weeks based on the number of pages.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you build mobile-responsive websites?<span>+</span></button>
      <div class="faq-answer"><p>Yes. All websites we build are fully responsive and optimized for mobile, tablet, and desktop.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you offer website redesign services?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We redesign outdated websites with modern UI, mobile responsiveness, better speed, and conversion-focused layouts.</p></div>
    </div>
  </div>

  <div class="faq-content" id="faq-uiux">
    <div class="faq-item active">
      <button class="faq-question">Why is UI/UX important?<span>+</span></button>
      <div class="faq-answer"><p>Good UI/UX improves user experience, engagement, and conversion rate significantly.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Do you design logos and brand identities?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We create logos, brand guidelines, color palettes, and full visual identity systems.</p></div>
    </div>
    <div class="faq-item">
      <button class="faq-question">Can you manage Google Ads for local businesses?<span>+</span></button>
      <div class="faq-answer"><p>Yes. We create and manage Google Ads campaigns for local businesses to generate calls, leads, and store visits.</p></div>
    </div>
  </div>
</section>

</div><!-- /page-home -->


<!-- ====================================================
     SEO SERVICES PAGE
     ==================================================== -->
<div id="page-seo" class="page">

<!-- SEO HERO -->
<section class="seo-hero">
  <div class="seo-hero-left">
    <div class="seo-breadcrumb">
      <a href="/" onclick="showPage('home')">Home</a>
      <span>/</span>
      <a href="/" onclick="showPage('home')">Services</a>
      <span>/</span>
      <span>SEO Services</span>
    </div>
    <h1 class="seo-hero-title">
      Dominate Google with<br>
      <span class="highlight">Expert SEO Services in Bangalore.</span>
    </h1>
    <p class="seo-hero-desc">
      We help businesses rank #1 on Google with ethical, data-driven SEO strategies.
      From technical audits to content optimization, our team delivers sustainable organic growth
      that drives real leads and revenue.
    </p>
    <div class="seo-hero-actions">
      <button class="btn-primary" onclick="showPage('contact')">Get Free SEO Audit →</button>
      <a href="#seo-pricing" class="btn-secondary">View SEO Plans</a>
    </div>
    <div class="seo-trust-pills">
      <div class="seo-trust-pill"><i class="fas fa-check-circle"></i> Google Partner</div>
      <div class="seo-trust-pill"><i class="fas fa-check-circle"></i> 500+ Projects</div>
      <div class="seo-trust-pill"><i class="fas fa-check-circle"></i> White-Hat Only</div>
    </div>
  </div>

  <div class="seo-hero-right">
    <div class="seo-visual-card">
      <div class="seo-float-badge">
        <i class="fas fa-arrow-trend-up"></i>
        <div>
          <div class="fb-text">Organic Traffic</div>
          <div class="fb-value">+240%</div>
        </div>
      </div>
      <div class="seo-visual-header">
        <div class="seo-visual-icon"><i class="fas fa-chart-line"></i></div>
        <div>
          <div class="seo-visual-title">SEO Performance</div>
          <div class="seo-visual-sub">Average client results</div>
        </div>
      </div>
      <div class="seo-rank-bars">
        <div class="rank-bar-item">
          <div class="rank-bar-label">On-Page SEO</div>
          <div class="rank-bar-track"><div class="rank-bar-fill rank-bar-fill-1"></div></div>
          <div class="rank-bar-value">92%</div>
        </div>
        <div class="rank-bar-item">
          <div class="rank-bar-label">Technical SEO</div>
          <div class="rank-bar-track"><div class="rank-bar-fill rank-bar-fill-2"></div></div>
          <div class="rank-bar-value">85%</div>
        </div>
        <div class="rank-bar-item">
          <div class="rank-bar-label">Link Building</div>
          <div class="rank-bar-track"><div class="rank-bar-fill rank-bar-fill-3"></div></div>
          <div class="rank-bar-value">78%</div>
        </div>
        <div class="rank-bar-item">
          <div class="rank-bar-label">Content SEO</div>
          <div class="rank-bar-track"><div class="rank-bar-fill rank-bar-fill-4"></div></div>
          <div class="rank-bar-value">88%</div>
        </div>
      </div>
      <div class="seo-visual-stats">
        <div class="seo-mini-stat"><div class="val">1.2K+</div><div class="lbl">Keywords Ranked</div></div>
        <div class="seo-mini-stat"><div class="val">3x</div><div class="lbl">Lead Growth</div></div>
      </div>
    </div>
  </div>
</section>

<!-- SEO SERVICES GRID -->
<section class="seo-services">
  <div class="section-tag">OUR SEO SERVICES</div>
  <h2 class="section-title">Complete SEO Solutions for Every Business</h2>
  <p class="section-desc">We offer a full suite of SEO services designed to improve your search visibility, drive targeted traffic, and generate qualified leads.</p>
  <div class="seo-services-grid">
    <div class="seo-svc-card">
      <div class="seo-svc-icon seo-svc-icon-1"><i class="fas fa-magnifying-glass-chart"></i></div>
      <div class="seo-svc-title">Technical SEO Audit</div>
      <div class="seo-svc-desc">Comprehensive site analysis covering crawlability, indexation, site speed, Core Web Vitals, and structured data to fix hidden issues.</div>
    </div>
    <div class="seo-svc-card">
      <div class="seo-svc-icon seo-svc-icon-2"><i class="fas fa-file-lines"></i></div>
      <div class="seo-svc-title">On-Page Optimization</div>
      <div class="seo-svc-desc">Meta tags, heading structure, keyword placement, internal linking, and content optimization to maximize page-level relevance.</div>
    </div>
    <div class="seo-svc-card">
      <div class="seo-svc-icon seo-svc-icon-3"><i class="fas fa-link"></i></div>
      <div class="seo-svc-title">Link Building</div>
      <div class="seo-svc-desc">Ethical, white-hat backlink acquisition through guest posts, digital PR, and strategic outreach to boost domain authority.</div>
    </div>
    <div class="seo-svc-card">
      <div class="seo-svc-icon seo-svc-icon-4"><i class="fas fa-map-location-dot"></i></div>
      <div class="seo-svc-title">Local SEO</div>
      <div class="seo-svc-desc">Google Business Profile optimization, local citations, map pack rankings, and location-based keyword targeting for local visibility.</div>
    </div>
    <div class="seo-svc-card">
      <div class="seo-svc-icon seo-svc-icon-5"><i class="fas fa-pen-nib"></i></div>
      <div class="seo-svc-title">Content Strategy</div>
      <div class="seo-svc-desc">Keyword research, content calendar planning, blog writing, and pillar-cluster strategies that drive organic traffic and authority.</div>
    </div>
    <div class="seo-svc-card">
      <div class="seo-svc-icon seo-svc-icon-6"><i class="fas fa-chart-pie"></i></div>
      <div class="seo-svc-title">Analytics & Reporting</div>
      <div class="seo-svc-desc">Monthly reports with keyword rankings, traffic growth, lead tracking, and actionable insights to keep your SEO on track.</div>
    </div>
  </div>
</section>

<!-- SEO PROCESS -->
<section class="seo-process">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">HOW WE WORK</div>
    <h2 class="section-title" style="text-align:center">Our Proven SEO Process</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">A transparent, step-by-step approach that delivers measurable results every time.</p>
  </div>
  <div class="seo-process-grid">
    <div class="process-step">
      <div class="step-number">1</div>
      <div class="step-title">SEO Audit</div>
      <div class="step-desc">Deep-dive analysis of your website's technical health, content gaps, and competitor landscape.</div>
    </div>
    <div class="process-step">
      <div class="step-number">2</div>
      <div class="step-title">Strategy & Planning</div>
      <div class="step-desc">Custom SEO roadmap with keyword targets, content plan, and timeline for measurable growth.</div>
    </div>
    <div class="process-step">
      <div class="step-number">3</div>
      <div class="step-title">Implementation</div>
      <div class="step-desc">On-page fixes, technical improvements, content creation, and link building executed by our team.</div>
    </div>
    <div class="process-step">
      <div class="step-number">4</div>
      <div class="step-title">Monitor & Scale</div>
      <div class="step-desc">Track rankings, traffic, and leads. Refine strategy monthly to compound results over time.</div>
    </div>
  </div>
</section>

<!-- SEO PRICING -->
<section class="seo-pricing" id="seo-pricing">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">SEO PLANS</div>
    <h2 class="section-title" style="text-align:center">Transparent SEO Pricing</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">Choose a plan that fits your business goals. All plans include monthly reporting and dedicated support.</p>
  </div>
  <div class="pricing-grid">
    <div class="price-card">
      <div class="price-name">Starter</div>
      <div class="price-amount">₹15K <small>/month</small></div>
      <div class="price-desc">Perfect for startups and small businesses getting started with SEO.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Up to 10 keywords</div>
        <div class="price-feature"><i class="fas fa-check"></i> On-Page SEO</div>
        <div class="price-feature"><i class="fas fa-check"></i> Technical Audit</div>
        <div class="price-feature"><i class="fas fa-check"></i> Monthly Report</div>
        <div class="price-feature"><i class="fas fa-check"></i> Google Business Profile</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <div class="price-name">Growth</div>
      <div class="price-amount">₹30K <small>/month</small></div>
      <div class="price-desc">Ideal for growing businesses that want aggressive organic growth.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Up to 30 keywords</div>
        <div class="price-feature"><i class="fas fa-check"></i> On-Page + Off-Page SEO</div>
        <div class="price-feature"><i class="fas fa-check"></i> Content Strategy</div>
        <div class="price-feature"><i class="fas fa-check"></i> Link Building</div>
        <div class="price-feature"><i class="fas fa-check"></i> Bi-weekly Reporting</div>
        <div class="price-feature"><i class="fas fa-check"></i> Competitor Analysis</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card">
      <div class="price-name">Enterprise</div>
      <div class="price-amount">₹60K <small>/month</small></div>
      <div class="price-desc">For established brands needing full-scale SEO domination.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Unlimited keywords</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full Technical SEO</div>
        <div class="price-feature"><i class="fas fa-check"></i> Advanced Link Building</div>
        <div class="price-feature"><i class="fas fa-check"></i> Content Creation (8/month)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Dedicated SEO Manager</div>
        <div class="price-feature"><i class="fas fa-check"></i> Weekly Calls & Reporting</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
  </div>
</section>

<!-- SEO CTA -->
<section class="seo-cta">
  <h2>Ready to Rank #1 on Google?</h2>
  <p>Get a free SEO audit and discover exactly what's holding your website back. Let's build a strategy that drives real results.</p>
  <button class="btn-primary" onclick="showPage('contact')">Get Free SEO Audit →</button>
</section>

</div><!-- /page-seo -->

<!-- ====================================================
     DIGITAL MARKETING PAGE
     ==================================================== -->
<div id="page-digital" class="page">

<!-- DM HERO -->
<section class="dm-hero">
  <div class="dm-hero-left">
    <div class="dm-breadcrumb">
      <a href="/" onclick="showPage('home')">Home</a>
      <span>/</span>
      <a href="/" onclick="showPage('home')">Services</a>
      <span>/</span>
      <span>Digital Marketing</span>
    </div>
    <h1 class="dm-hero-title">
      Scale Your Brand with<br>
      <span class="highlight">360° Digital Marketing in Bangalore.</span>
    </h1>
    <p class="dm-hero-desc">
      From Google Ads to Social Media, Content to Email — we run full-funnel digital
      marketing campaigns that turn clicks into customers. Partner with Bangalore's
      most results-driven digital marketing agency.
    </p>
    <div class="dm-hero-actions">
      <button class="btn-primary" onclick="showPage('contact')">Get Free Strategy Call →</button>
      <a href="#dm-pricing" class="btn-secondary">View Our Plans</a>
    </div>
    <div class="dm-trust-pills">
      <div class="dm-trust-pill"><i class="fas fa-check-circle"></i> Google Partner</div>
      <div class="dm-trust-pill"><i class="fas fa-check-circle"></i> Meta Business Partner</div>
      <div class="dm-trust-pill"><i class="fas fa-check-circle"></i> 2L+ Leads Generated</div>
    </div>
  </div>

  <div class="dm-hero-right">
    <div class="dm-visual-card">
      <div class="dm-float-badge">
        <i class="fas fa-chart-line"></i>
        <div>
          <div class="fb-text">Average ROI</div>
          <div class="fb-value">4.8x</div>
        </div>
      </div>
      <div class="dm-visual-header">
        <div class="dm-visual-icon"><i class="fas fa-bullhorn"></i></div>
        <div>
          <div class="dm-visual-title">Active Channels</div>
          <div class="dm-visual-sub">Live campaign performance</div>
        </div>
      </div>
      <div class="dm-channel-list">
        <div class="dm-channel-item">
          <div class="dm-channel-icon dm-ch-4"><i class="fab fa-google"></i></div>
          <div class="dm-channel-info">
            <div class="dm-channel-name">Google Ads</div>
            <div class="dm-channel-stat">Leads: 1,240 this month</div>
          </div>
          <div class="dm-channel-badge">+38%</div>
        </div>
        <div class="dm-channel-item">
          <div class="dm-channel-icon dm-ch-3"><i class="fab fa-instagram"></i></div>
          <div class="dm-channel-info">
            <div class="dm-channel-name">Meta Ads</div>
            <div class="dm-channel-stat">Reach: 4.2L impressions</div>
          </div>
          <div class="dm-channel-badge">+52%</div>
        </div>
        <div class="dm-channel-item">
          <div class="dm-channel-icon dm-ch-2"><i class="fab fa-linkedin"></i></div>
          <div class="dm-channel-info">
            <div class="dm-channel-name">LinkedIn Ads</div>
            <div class="dm-channel-stat">B2B leads: 380 this month</div>
          </div>
          <div class="dm-channel-badge">+24%</div>
        </div>
      </div>
      <div class="dm-visual-stats">
        <div class="dm-mini-stat"><div class="val">₹8 CR+</div><div class="lbl">Revenue Generated</div></div>
        <div class="dm-mini-stat"><div class="val">4.8x</div><div class="lbl">Average ROAS</div></div>
      </div>
    </div>
  </div>
</section>

<!-- DM SERVICES GRID -->
<section class="dm-services">
  <div class="section-tag">WHAT WE DO</div>
  <h2 class="section-title">Full-Funnel Digital Marketing Services</h2>
  <p class="section-desc">We don't just run ads — we build complete marketing ecosystems that attract, engage, and convert your ideal customers at every stage of the funnel.</p>
  <div class="dm-services-grid">

    <div class="dm-svc-card">
      <div class="dm-svc-icon dm-svc-icon-1"><i class="fab fa-google"></i></div>
      <div class="dm-svc-title">Google Ads (PPC)</div>
      <div class="dm-svc-desc">Reach customers the moment they search. We create, manage, and optimize Google Search, Display, Shopping, and YouTube campaigns for maximum ROI. Every rupee is tracked and optimized for results.</div>
      <div class="dm-svc-tags">
        <span class="dm-svc-tag">Search Ads</span>
        <span class="dm-svc-tag">Display Ads</span>
        <span class="dm-svc-tag">Shopping Ads</span>
        <span class="dm-svc-tag">YouTube Ads</span>
      </div>
    </div>

    <div class="dm-svc-card">
      <div class="dm-svc-icon dm-svc-icon-2"><i class="fab fa-facebook-f"></i></div>
      <div class="dm-svc-title">Meta Ads (Facebook & Instagram)</div>
      <div class="dm-svc-desc">Build awareness and drive conversions with laser-targeted Meta campaigns. We handle audience research, ad creative, A/B testing, and retargeting to scale your business on Facebook and Instagram.</div>
      <div class="dm-svc-tags">
        <span class="dm-svc-tag">Lead Generation</span>
        <span class="dm-svc-tag">Retargeting</span>
        <span class="dm-svc-tag">Reels Ads</span>
        <span class="dm-svc-tag">Story Ads</span>
      </div>
    </div>

    <div class="dm-svc-card">
      <div class="dm-svc-icon dm-svc-icon-3"><i class="fas fa-share-nodes"></i></div>
      <div class="dm-svc-title">Social Media Marketing</div>
      <div class="dm-svc-desc">Consistent, creative social media management that builds community and brand loyalty. We handle content creation, scheduling, engagement, and influencer coordination across Instagram, LinkedIn, and YouTube.</div>
      <div class="dm-svc-tags">
        <span class="dm-svc-tag">Content Creation</span>
        <span class="dm-svc-tag">Community Mgmt</span>
        <span class="dm-svc-tag">Influencer Collab</span>
      </div>
    </div>

    <div class="dm-svc-card">
      <div class="dm-svc-icon dm-svc-icon-4"><i class="fas fa-pen-nib"></i></div>
      <div class="dm-svc-title">Content Marketing</div>
      <div class="dm-svc-desc">High-quality blogs, videos, infographics, and case studies that attract organic traffic and establish your brand as an industry authority. Content that educates, engages, and converts.</div>
      <div class="dm-svc-tags">
        <span class="dm-svc-tag">Blog Writing</span>
        <span class="dm-svc-tag">Video Scripts</span>
        <span class="dm-svc-tag">Infographics</span>
        <span class="dm-svc-tag">Case Studies</span>
      </div>
    </div>

    <div class="dm-svc-card">
      <div class="dm-svc-icon dm-svc-icon-5"><i class="fas fa-envelope-open-text"></i></div>
      <div class="dm-svc-title">Email & WhatsApp Marketing</div>
      <div class="dm-svc-desc">Nurture leads and retain customers with personalized email sequences and WhatsApp broadcast campaigns. Automated drip campaigns, newsletters, and promotional blasts that keep your brand top of mind.</div>
      <div class="dm-svc-tags">
        <span class="dm-svc-tag">Email Automation</span>
        <span class="dm-svc-tag">WhatsApp Blasts</span>
        <span class="dm-svc-tag">Drip Campaigns</span>
      </div>
    </div>

    <div class="dm-svc-card">
      <div class="dm-svc-icon dm-svc-icon-6"><i class="fas fa-chart-bar"></i></div>
      <div class="dm-svc-title">Analytics & Performance Reporting</div>
      <div class="dm-svc-desc">Data-driven decisions backed by real numbers. We set up GA4, Google Tag Manager, Meta Pixel, and custom dashboards. Monthly reports with clear insights on what's working and what to scale.</div>
      <div class="dm-svc-tags">
        <span class="dm-svc-tag">GA4 Setup</span>
        <span class="dm-svc-tag">Custom Dashboards</span>
        <span class="dm-svc-tag">Conversion Tracking</span>
      </div>
    </div>

  </div>
</section>

<!-- DM WHY SECTION -->
<section class="dm-why">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">WHY FLUX DIGITAL</div>
    <h2 class="section-title" style="text-align:center">Why 1000+ Businesses Trust Us</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">We don't just run campaigns — we become your growth partner. Here's what makes us different from every other agency in Bangalore.</p>
  </div>
  <div class="dm-why-grid">
    <div class="dm-why-card">
      <div class="dm-why-num">100%</div>
      <div class="dm-why-title">Transparent Reporting</div>
      <div class="dm-why-desc">No vague metrics. You get real-time dashboards showing exactly where your budget goes, what results it's generating, and what ROI you're getting — every single rupee tracked.</div>
    </div>
    <div class="dm-why-card">
      <div class="dm-why-num">360°</div>
      <div class="dm-why-title">Full-Funnel Strategy</div>
      <div class="dm-why-desc">We don't do isolated campaigns. From awareness to conversion to retention — we build cohesive strategies across all channels that compound over time to deliver exponential growth.</div>
    </div>
    <div class="dm-why-card">
      <div class="dm-why-num">4.8x</div>
      <div class="dm-why-title">Average ROAS Delivered</div>
      <div class="dm-why-desc">Our clients see an average return of 4.8x on their ad spend. We obsess over ROAS, CPA, and LTV — not vanity metrics like impressions or reach.</div>
    </div>
    <div class="dm-why-card">
      <div class="dm-why-num">24h</div>
      <div class="dm-why-title">Dedicated Account Manager</div>
      <div class="dm-why-desc">A dedicated account manager assigned to your brand. Quick response, weekly check-ins, and a team that understands your business as deeply as you do.</div>
    </div>
    <div class="dm-why-card">
      <div class="dm-why-num">A/B</div>
      <div class="dm-why-title">Continuous A/B Testing</div>
      <div class="dm-why-desc">We never settle. Every campaign is continuously tested — ad copy, creatives, audiences, landing pages. Constant iteration is what separates good campaigns from great ones.</div>
    </div>
    <div class="dm-why-card">
      <div class="dm-why-num">5★</div>
      <div class="dm-why-title">100+ 5-Star Reviews</div>
      <div class="dm-why-desc">Over 100 verified 5-star Google reviews from real Bangalore businesses across industries — retail, real estate, healthcare, SaaS, and more. Results that speak for themselves.</div>
    </div>
  </div>
</section>

<!-- DM PROCESS -->
<section class="dm-process">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">HOW WE WORK</div>
    <h2 class="section-title" style="text-align:center">Our 4-Step Campaign Process</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">A proven, repeatable process we've refined across 500+ campaigns. No guesswork — just structured execution that delivers results.</p>
  </div>
  <div class="dm-process-grid">
    <div class="dm-process-step">
      <div class="dm-step-number">1</div>
      <div class="dm-step-title">Discovery & Audit</div>
      <div class="dm-step-desc">We deep-dive into your business, target audience, competitors, and current marketing performance. Complete digital audit across all channels to find opportunities.</div>
    </div>
    <div class="dm-process-step">
      <div class="dm-step-number">2</div>
      <div class="dm-step-title">Strategy & Planning</div>
      <div class="dm-step-desc">Custom 90-day marketing roadmap with channel mix, budget allocation, content calendar, KPIs, and campaign structure designed for your specific business goals.</div>
    </div>
    <div class="dm-process-step">
      <div class="dm-step-number">3</div>
      <div class="dm-step-title">Launch & Execute</div>
      <div class="dm-step-desc">Campaigns go live with precision targeting, compelling creatives, and optimized landing pages. We monitor performance daily and optimize in real time.</div>
    </div>
    <div class="dm-process-step">
      <div class="dm-step-number">4</div>
      <div class="dm-step-title">Analyse & Scale</div>
      <div class="dm-step-desc">Monthly performance reviews with detailed reports. Double down on what's working, cut what isn't, and scale winning campaigns to maximize your return.</div>
    </div>
  </div>
</section>

<!-- DM RESULTS -->
<div class="dm-results">
  <div class="dm-results-header">
    <h2>Real Numbers. Real Results.</h2>
    <p>Across 500+ campaigns for Bangalore businesses, here's what our digital marketing consistently delivers.</p>
  </div>
  <div class="dm-results-grid">
    <div class="dm-result-card">
      <div class="dm-result-icon">🚀</div>
      <div class="dm-result-value">500+</div>
      <div class="dm-result-label">Campaigns Launched</div>
    </div>
    <div class="dm-result-card">
      <div class="dm-result-icon">💰</div>
      <div class="dm-result-value">₹8CR+</div>
      <div class="dm-result-label">Revenue Generated for Clients</div>
    </div>
    <div class="dm-result-card">
      <div class="dm-result-icon">🎯</div>
      <div class="dm-result-value">2L+</div>
      <div class="dm-result-label">Qualified Leads Delivered</div>
    </div>
    <div class="dm-result-card">
      <div class="dm-result-icon">📈</div>
      <div class="dm-result-value">4.8x</div>
      <div class="dm-result-label">Average Return on Ad Spend</div>
    </div>
  </div>
</div>

<!-- DM PRICING -->
<section class="dm-pricing" id="dm-pricing">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">PRICING PLANS</div>
    <h2 class="section-title" style="text-align:center">Transparent Digital Marketing Plans</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">Straightforward pricing with no hidden charges. Each plan includes a dedicated account manager and monthly performance reporting.</p>
  </div>
  <div class="dm-pricing-grid pricing-grid">
    <div class="price-card">
      <div class="price-name">Starter</div>
      <div class="price-amount">₹20K <small>/month</small></div>
      <div class="price-desc">Perfect for small businesses wanting to establish a solid digital presence and start getting leads online.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> 1 Ad Channel (Google or Meta)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Ad Spend up to ₹30K/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> 4 Social Media Posts/week</div>
        <div class="price-feature"><i class="fas fa-check"></i> Basic Landing Page</div>
        <div class="price-feature"><i class="fas fa-check"></i> Monthly Report</div>
        <div class="price-feature"><i class="fas fa-check"></i> WhatsApp Support</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <div class="price-name">Growth</div>
      <div class="price-amount">₹45K <small>/month</small></div>
      <div class="price-desc">For growing businesses ready to scale leads aggressively with multi-channel marketing campaigns.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Google + Meta Ads</div>
        <div class="price-feature"><i class="fas fa-check"></i> Ad Spend up to ₹1L/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full Social Media Management</div>
        <div class="price-feature"><i class="fas fa-check"></i> 4 Blogs/month + Content</div>
        <div class="price-feature"><i class="fas fa-check"></i> A/B Testing & Optimization</div>
        <div class="price-feature"><i class="fas fa-check"></i> Email / WhatsApp Campaigns</div>
        <div class="price-feature"><i class="fas fa-check"></i> Bi-Weekly Reporting & Calls</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card">
      <div class="price-name">Enterprise</div>
      <div class="price-amount">₹90K <small>/month</small></div>
      <div class="price-desc">Full-scale digital marketing domination for established brands and businesses with aggressive growth targets.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> All Channels (Google, Meta, LinkedIn, YouTube)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Unlimited Ad Spend Management</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full Content Marketing Suite</div>
        <div class="price-feature"><i class="fas fa-check"></i> CRO & Landing Page Optimization</div>
        <div class="price-feature"><i class="fas fa-check"></i> Dedicated Senior Strategist</div>
        <div class="price-feature"><i class="fas fa-check"></i> Weekly Strategy Calls</div>
        <div class="price-feature"><i class="fas fa-check"></i> Custom Analytics Dashboard</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
  </div>
</section>

<!-- DM CTA -->
<div class="dm-cta">
  <h2>Ready to Grow Your Business Online?</h2>
  <p>Get a free digital marketing audit and a custom strategy tailored to your business. No commitment, no fluff — just a clear roadmap to more leads and revenue.</p>
  <button class="btn-primary" onclick="showPage('contact')">Book Free Strategy Call →</button>
</div>

</div><!-- /page-digital -->


<div id="page-smm" class="page">

<!-- SMM HERO -->
<section class="smm-hero">
  <div class="smm-hero-left">
    <div class="smm-breadcrumb">
      <a href="/" onclick="showPage('home')">Home</a>
      <span>/</span>
      <a href="/" onclick="showPage('home')">Services</a>
      <span>/</span>
      <span>Social Media Marketing</span>
    </div>
    <h1 class="smm-hero-title">
      Grow Your Brand with<br>
      <span class="highlight">Expert Social Media Marketing.</span>
    </h1>
    <p class="smm-hero-desc">
      We create scroll-stopping content, run high-converting social ad campaigns, and build engaged communities across Instagram, Facebook, LinkedIn, and YouTube — turning followers into loyal customers.
    </p>
    <div class="smm-hero-actions">
      <button class="btn-primary" onclick="showPage('contact')" style="background:linear-gradient(135deg,#E1306C,#f77737);box-shadow:0 6px 25px rgba(225,48,108,0.4)">Get Free SMM Audit →</button>
      <a href="/social-media-marketing#smm-pricing" onclick="showPage('smm','smm-pricing')" class="btn-secondary">View SMM Plans</a>
    </div>
    <div class="smm-trust-pills">
      <div class="smm-trust-pill"><i class="fab fa-instagram"></i> Instagram Experts</div>
      <div class="smm-trust-pill"><i class="fas fa-check-circle"></i> 300+ Brands Managed</div>
      <div class="smm-trust-pill"><i class="fas fa-fire"></i> Viral Content Team</div>
    </div>
  </div>
  <div style="position:relative;z-index:2">
    <div class="smm-visual-card">
      <div class="smm-float-badge">
        <i class="fas fa-heart"></i>
        <div>
          <div class="fb-text">Engagement Rate</div>
          <div class="fb-value">+8.4%</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <div style="width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#E1306C,#f77737);display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px"><i class="fas fa-share-nodes"></i></div>
        <div>
          <div style="font-family: var(--font-jakarta);font-size:18px;font-weight:700;color:var(--dark)">Social Performance</div>
          <div style="font-size:13px;color:var(--text-light)">Average client results — last 90 days</div>
        </div>
      </div>
      <div class="smm-platform-list">
        <div class="smm-platform-item">
          <div class="smm-platform-icon smm-ig"><i class="fab fa-instagram"></i></div>
          <div class="smm-platform-info" style="flex:1">
            <div class="smm-platform-name">Instagram</div>
            <div class="smm-platform-stat">10K–500K followers grown</div>
          </div>
          <div class="smm-platform-badge">+340% reach</div>
        </div>
        <div class="smm-platform-item">
          <div class="smm-platform-icon smm-fb"><i class="fab fa-facebook-f"></i></div>
          <div style="flex:1">
            <div class="smm-platform-name">Facebook</div>
            <div class="smm-platform-stat">Ads + organic page growth</div>
          </div>
          <div class="smm-platform-badge">2.4x leads</div>
        </div>
        <div class="smm-platform-item">
          <div class="smm-platform-icon smm-li"><i class="fab fa-linkedin-in"></i></div>
          <div style="flex:1">
            <div class="smm-platform-name">LinkedIn</div>
            <div class="smm-platform-stat">B2B lead generation</div>
          </div>
          <div class="smm-platform-badge">+180% clicks</div>
        </div>
        <div class="smm-platform-item">
          <div class="smm-platform-icon smm-yt"><i class="fab fa-youtube"></i></div>
          <div style="flex:1">
            <div class="smm-platform-name">YouTube</div>
            <div class="smm-platform-stat">Video SEO & channel growth</div>
          </div>
          <div class="smm-platform-badge">+220% views</div>
        </div>
      </div>
      <div class="smm-visual-stats">
        <div class="smm-mini-stat"><div class="val">300+</div><div class="lbl">Brands Managed</div></div>
        <div class="smm-mini-stat"><div class="val">5M+</div><div class="lbl">Impressions/month</div></div>
      </div>
    </div>
  </div>
</section>

<!-- SMM SERVICES -->
<section class="smm-services">
  <div class="section-tag">OUR SMM SERVICES</div>
  <h2 class="section-title">Complete Social Media Solutions</h2>
  <p class="section-desc">From strategy to execution, we manage every aspect of your social media presence to drive brand awareness, engagement, and real business results.</p>
  <div class="smm-services-grid">
    <div class="smm-svc-card">
      <div class="smm-svc-icon smm-ic-1"><i class="fab fa-instagram"></i></div>
      <div class="smm-svc-title">Instagram Marketing</div>
      <div class="smm-svc-desc">Profile optimization, Reels, Stories, carousel posts, and targeted paid promotions to grow followers and drive sales on Instagram.</div>
      <div class="smm-svc-tags"><span class="smm-svc-tag">Reels</span><span class="smm-svc-tag">Stories</span><span class="smm-svc-tag">Growth</span></div>
    </div>
    <div class="smm-svc-card">
      <div class="smm-svc-icon smm-ic-2"><i class="fab fa-facebook-f"></i></div>
      <div class="smm-svc-title">Facebook Marketing</div>
      <div class="smm-svc-desc">Page management, boosted posts, Facebook Ads, audience targeting, and retargeting campaigns to maximize reach and conversions.</div>
      <div class="smm-svc-tags"><span class="smm-svc-tag">Ads</span><span class="smm-svc-tag">Retargeting</span><span class="smm-svc-tag">Leads</span></div>
    </div>
    <div class="smm-svc-card">
      <div class="smm-svc-icon smm-ic-3"><i class="fab fa-linkedin-in"></i></div>
      <div class="smm-svc-title">LinkedIn Marketing</div>
      <div class="smm-svc-desc">Company page management, thought leadership content, LinkedIn Ads, and B2B lead generation to build professional authority.</div>
      <div class="smm-svc-tags"><span class="smm-svc-tag">B2B</span><span class="smm-svc-tag">Lead Gen</span><span class="smm-svc-tag">Branding</span></div>
    </div>
    <div class="smm-svc-card">
      <div class="smm-svc-icon smm-ic-4"><i class="fab fa-youtube"></i></div>
      <div class="smm-svc-title">YouTube Marketing</div>
      <div class="smm-svc-desc">Channel setup, video SEO, thumbnails, description optimization, and YouTube Ads to grow subscribers and video views organically.</div>
      <div class="smm-svc-tags"><span class="smm-svc-tag">Video SEO</span><span class="smm-svc-tag">Ads</span><span class="smm-svc-tag">Subscribers</span></div>
    </div>
    <div class="smm-svc-card">
      <div class="smm-svc-icon smm-ic-5"><i class="fas fa-palette"></i></div>
      <div class="smm-svc-title">Content Creation</div>
      <div class="smm-svc-desc">Branded graphics, Reels scripts, video editing, infographics, and copywriting tailored to each platform's format and audience.</div>
      <div class="smm-svc-tags"><span class="smm-svc-tag">Design</span><span class="smm-svc-tag">Reels</span><span class="smm-svc-tag">Copy</span></div>
    </div>
    <div class="smm-svc-card">
      <div class="smm-svc-icon smm-ic-6"><i class="fas fa-chart-bar"></i></div>
      <div class="smm-svc-title">Analytics & Reporting</div>
      <div class="smm-svc-desc">Monthly performance reports, engagement analysis, audience insights, competitor benchmarking, and strategy optimization calls.</div>
      <div class="smm-svc-tags"><span class="smm-svc-tag">Reports</span><span class="smm-svc-tag">Insights</span><span class="smm-svc-tag">ROI</span></div>
    </div>
  </div>
</section>

<!-- SMM PROCESS -->
<section class="smm-process">
  <div style="text-align:center;max-width:760px;margin:0 auto 10px">
    <div class="section-tag">HOW WE WORK</div>
    <h2 class="section-title">Our Social Media Process</h2>
    <p class="section-desc" style="margin:0 auto">A proven 4-step framework to build your social media presence, grow your audience, and convert followers into paying customers.</p>
  </div>
  <div class="smm-process-grid">
    <div class="smm-process-step">
      <div class="smm-step-num">1</div>
      <div class="smm-step-title">Brand Audit & Strategy</div>
      <div class="smm-step-desc">We analyse your current social presence, competitors, target audience, and define a content strategy aligned with your business goals.</div>
    </div>
    <div class="smm-process-step">
      <div class="smm-step-num">2</div>
      <div class="smm-step-title">Content Calendar Setup</div>
      <div class="smm-step-desc">We create a monthly content calendar with posts, reels, stories, and campaigns planned in advance for consistent publishing.</div>
    </div>
    <div class="smm-process-step">
      <div class="smm-step-num">3</div>
      <div class="smm-step-title">Create & Publish</div>
      <div class="smm-step-desc">Our creative team designs visuals, writes compelling captions, edits videos, and schedules posts at peak engagement times.</div>
    </div>
    <div class="smm-process-step">
      <div class="smm-step-num">4</div>
      <div class="smm-step-title">Optimise & Scale</div>
      <div class="smm-step-desc">We track performance, A/B test content, refine targeting, and scale winning campaigns to continuously improve results.</div>
    </div>
  </div>
</section>

<!-- SMM RESULTS -->
<div class="smm-results">
  <div class="smm-results-header">
    <h2>Real Results for Real Businesses</h2>
    <p>Numbers that reflect the impact we have driven for brands across Bangalore and beyond through strategic social media marketing.</p>
  </div>
  <div class="smm-results-grid">
    <div class="smm-result-card"><div class="smm-result-icon">📱</div><div class="smm-result-value">300+</div><div class="smm-result-label">Brands Managed</div></div>
    <div class="smm-result-card"><div class="smm-result-icon">❤️</div><div class="smm-result-value">5M+</div><div class="smm-result-label">Monthly Impressions</div></div>
    <div class="smm-result-card"><div class="smm-result-icon">📈</div><div class="smm-result-value">340%</div><div class="smm-result-label">Avg. Reach Growth</div></div>
    <div class="smm-result-card"><div class="smm-result-icon">🎯</div><div class="smm-result-value">8.4%</div><div class="smm-result-label">Avg. Engagement Rate</div></div>
  </div>
</div>

<!-- SMM PRICING -->
<section class="smm-pricing" id="smm-pricing">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">PRICING PLANS</div>
    <h2 class="section-title">Social Media Marketing Packages</h2>
    <p class="section-desc" style="margin:0 auto">Transparent, result-focused pricing for every business size. All plans include content creation, scheduling, and monthly reporting.</p>
  </div>
  <div class="smm-pricing-grid pricing-grid">
    <div class="price-card">
      <div class="price-name">Starter</div>
      <div class="price-amount">₹15K <small>/month</small></div>
      <div class="price-desc">Perfect for small businesses wanting a consistent social media presence on 1–2 platforms.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> 2 Platforms (Instagram + Facebook)</div>
        <div class="price-feature"><i class="fas fa-check"></i> 12 Posts/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> 4 Reels/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> Story Updates (3x/week)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Basic Graphic Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> Monthly Report</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <div class="price-name">Growth</div>
      <div class="price-amount">₹30K <small>/month</small></div>
      <div class="price-desc">For growing businesses ready to scale engagement, leads, and brand visibility across multiple platforms.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> 3 Platforms (Insta + FB + LinkedIn)</div>
        <div class="price-feature"><i class="fas fa-check"></i> 20 Posts/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> 8 Reels + 2 YouTube Shorts</div>
        <div class="price-feature"><i class="fas fa-check"></i> Paid Ad Management (up to ₹20K spend)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Influencer Coordination</div>
        <div class="price-feature"><i class="fas fa-check"></i> Community Management</div>
        <div class="price-feature"><i class="fas fa-check"></i> Bi-Weekly Performance Calls</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card">
      <div class="price-name">Enterprise</div>
      <div class="price-amount">₹65K <small>/month</small></div>
      <div class="price-desc">Full-scale social media domination for established brands with aggressive growth and lead generation goals.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> All Platforms (Insta, FB, LinkedIn, YT, X)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Unlimited Posts + Reels</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full Ad Management (unlimited spend)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Dedicated Content Strategist</div>
        <div class="price-feature"><i class="fas fa-check"></i> Video Production & Editing</div>
        <div class="price-feature"><i class="fas fa-check"></i> Weekly Strategy Calls</div>
        <div class="price-feature"><i class="fas fa-check"></i> Real-Time Analytics Dashboard</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
  </div>
</section>

<!-- SMM CTA -->
<div class="smm-cta">
  <h2>Ready to Go Viral on Social Media?</h2>
  <p>Get a free social media audit and a custom content strategy for your brand. We'll show you exactly what's holding you back and how to fix it.</p>
  <button class="btn-primary" onclick="showPage('contact')" style="background:linear-gradient(135deg,#E1306C,#f77737);box-shadow:0 6px 25px rgba(225,48,108,0.4);margin:0 auto">Book Free Social Audit →</button>
</div>

</div><!-- /page-smm -->


<div id="page-webdev" class="page">

<!-- WEBDEV HERO -->
<section class="webdev-hero">
  <div class="webdev-hero-left">
    <div class="webdev-breadcrumb">
      <a href="/" onclick="showPage('home')">Home</a>
      <span>/</span>
      <a href="/" onclick="showPage('home')">Services</a>
      <span>/</span>
      <span>Website Development</span>
    </div>
    <h1 class="webdev-hero-title">
      Build Websites That<br>
      <span class="highlight">Convert Visitors into Customers.</span>
    </h1>
    <p class="webdev-hero-desc">
      We design and develop fast, mobile-first, SEO-optimised websites that look stunning and perform brilliantly. From landing pages to full eCommerce stores — built to drive real business results.
    </p>
    <div class="webdev-hero-actions">
      <button class="btn-primary" onclick="showPage('contact')" style="background:linear-gradient(135deg,#3b82f6,#6366f1);box-shadow:0 6px 25px rgba(59,130,246,0.4)">Get Free Website Audit →</button>
      <a href="/web-design-development#webdev-pricing" onclick="showPage('webdev','webdev-pricing')" class="btn-secondary">View Web Plans</a>
    </div>
    <div class="webdev-trust-pills">
      <div class="webdev-trust-pill"><i class="fas fa-check-circle"></i> 200+ Websites Delivered</div>
      <div class="webdev-trust-pill"><i class="fas fa-bolt"></i> 99+ PageSpeed Score</div>
      <div class="webdev-trust-pill"><i class="fas fa-mobile-screen"></i> Mobile-First Design</div>
    </div>
  </div>
  <div style="position:relative;z-index:2">
    <div class="webdev-visual-card">
      <div class="webdev-float-badge">
        <i class="fas fa-gauge-high"></i>
        <div>
          <div class="fb-text">PageSpeed Score</div>
          <div class="fb-value">99/100</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        <div style="width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#3b82f6,#6366f1);display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px"><i class="fas fa-code"></i></div>
        <div>
          <div style="font-family: var(--font-jakarta);font-size:18px;font-weight:700;color:var(--dark)">Website Performance</div>
          <div style="font-size:13px;color:var(--text-light)">Core Web Vitals — client average</div>
        </div>
      </div>
      <div class="webdev-perf-bars">
        <div class="webdev-perf-item">
          <div class="webdev-perf-label">Performance</div>
          <div class="webdev-perf-track"><div class="webdev-perf-fill webdev-pf-1"></div></div>
          <div class="webdev-perf-value">98%</div>
        </div>
        <div class="webdev-perf-item">
          <div class="webdev-perf-label">Accessibility</div>
          <div class="webdev-perf-track"><div class="webdev-perf-fill webdev-pf-2"></div></div>
          <div class="webdev-perf-value">95%</div>
        </div>
        <div class="webdev-perf-item">
          <div class="webdev-perf-label">Best Practices</div>
          <div class="webdev-perf-track"><div class="webdev-perf-fill webdev-pf-3"></div></div>
          <div class="webdev-perf-value">100%</div>
        </div>
        <div class="webdev-perf-item">
          <div class="webdev-perf-label">SEO Score</div>
          <div class="webdev-perf-track"><div class="webdev-perf-fill webdev-pf-4"></div></div>
          <div class="webdev-perf-value">96%</div>
        </div>
      </div>
      <div class="webdev-visual-stats">
        <div class="webdev-mini-stat"><div class="val">200+</div><div class="lbl">Websites Built</div></div>
        <div class="webdev-mini-stat"><div class="val">40%</div><div class="lbl">Avg. Conv. Lift</div></div>
      </div>
    </div>
  </div>
</section>

<!-- WEBDEV SERVICES -->
<section class="webdev-services" id="webdev-services">
  <div class="section-tag">OUR WEB SERVICES</div>
  <h2 class="section-title">End-to-End Web Development Solutions</h2>
  <p class="section-desc">We build every type of website your business needs — from simple landing pages to complex eCommerce platforms — with speed, security, and conversions as top priorities.</p>
  <div class="webdev-services-grid">
    <div class="webdev-svc-card">
      <div class="webdev-svc-icon webdev-ic-1"><i class="fas fa-laptop-code"></i></div>
      <div class="webdev-svc-title">Business Website Design</div>
      <div class="webdev-svc-desc">Professional, brand-aligned business websites with modern UI, fast loading, mobile responsiveness, and conversion-focused layouts.</div>
      <div class="webdev-svc-tags"><span class="webdev-svc-tag">WordPress</span><span class="webdev-svc-tag">React</span><span class="webdev-svc-tag">Responsive</span></div>
    </div>
    <div class="webdev-svc-card">
      <div class="webdev-svc-icon webdev-ic-2"><i class="fas fa-cart-shopping"></i></div>
      <div class="webdev-svc-title">eCommerce Development</div>
      <div class="webdev-svc-desc">Feature-rich online stores on WooCommerce or Shopify with product management, payment gateways, and seamless checkout experience.</div>
      <div class="webdev-svc-tags"><span class="webdev-svc-tag">WooCommerce</span><span class="webdev-svc-tag">Shopify</span><span class="webdev-svc-tag">Payments</span></div>
    </div>
    <div class="webdev-svc-card">
      <div class="webdev-svc-icon webdev-ic-3"><i class="fas fa-rocket"></i></div>
      <div class="webdev-svc-title">Landing Page Development</div>
      <div class="webdev-svc-desc">High-converting landing pages designed for Google Ads and Meta Ads campaigns — optimised for speed, clarity, and lead capture.</div>
      <div class="webdev-svc-tags"><span class="webdev-svc-tag">CRO</span><span class="webdev-svc-tag">Fast Load</span><span class="webdev-svc-tag">Lead Forms</span></div>
    </div>
    <div class="webdev-svc-card">
      <div class="webdev-svc-icon webdev-ic-4"><i class="fas fa-pen-ruler"></i></div>
      <div class="webdev-svc-title">UI/UX Design</div>
      <div class="webdev-svc-desc">User-centric wireframes, prototypes, and full UI design in Figma. We create intuitive designs that reduce bounce rate and increase conversions.</div>
      <div class="webdev-svc-tags"><span class="webdev-svc-tag">Figma</span><span class="webdev-svc-tag">Prototyping</span><span class="webdev-svc-tag">UX Research</span></div>
    </div>
    <div class="webdev-svc-card">
      <div class="webdev-svc-icon webdev-ic-5"><i class="fas fa-arrows-rotate"></i></div>
      <div class="webdev-svc-title">Website Redesign</div>
      <div class="webdev-svc-desc">Modernise your outdated website with a fresh design, improved user experience, faster performance, and better search engine rankings.</div>
      <div class="webdev-svc-tags"><span class="webdev-svc-tag">Redesign</span><span class="webdev-svc-tag">Migration</span><span class="webdev-svc-tag">Speed</span></div>
    </div>
    <div class="webdev-svc-card">
      <div class="webdev-svc-icon webdev-ic-6"><i class="fas fa-shield-halved"></i></div>
      <div class="webdev-svc-title">Website Maintenance</div>
      <div class="webdev-svc-desc">Ongoing support, security updates, plugin management, backups, performance monitoring, and content updates to keep your site running perfectly.</div>
      <div class="webdev-svc-tags"><span class="webdev-svc-tag">Security</span><span class="webdev-svc-tag">Updates</span><span class="webdev-svc-tag">Support</span></div>
    </div>
  </div>
</section>

<!-- WEBDEV TECH STACK -->
<section class="webdev-tech">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">TECHNOLOGIES WE USE</div>
    <h2 class="section-title">Built with the Best Tech Stack</h2>
    <p class="section-desc" style="margin:0 auto">We use modern, industry-proven technologies to build fast, scalable, and future-proof websites for every type of business.</p>
  </div>
  <div class="webdev-tech-grid">
    <div class="webdev-tech-card">
      <div class="webdev-tech-icon">⚛️</div>
      <div class="webdev-tech-name">React & Next.js</div>
      <div class="webdev-tech-desc">Lightning-fast, SEO-friendly web applications built with modern JavaScript frameworks for superior performance and user experience.</div>
    </div>
    <div class="webdev-tech-card">
      <div class="webdev-tech-icon">🔵</div>
      <div class="webdev-tech-name">WordPress & WooCommerce</div>
      <div class="webdev-tech-desc">The world's most popular CMS — customised with premium themes and plugins for business websites and eCommerce stores.</div>
    </div>
    <div class="webdev-tech-card">
      <div class="webdev-tech-icon">🛒</div>
      <div class="webdev-tech-name">Shopify</div>
      <div class="webdev-tech-desc">Powerful Shopify store development with custom themes, app integrations, and conversion-optimised product pages.</div>
    </div>
    <div class="webdev-tech-card">
      <div class="webdev-tech-icon">🎨</div>
      <div class="webdev-tech-name">Figma & UI Design</div>
      <div class="webdev-tech-desc">Professional UI/UX design with interactive prototypes, design systems, and pixel-perfect handoffs to development.</div>
    </div>
    <div class="webdev-tech-card">
      <div class="webdev-tech-icon">⚡</div>
      <div class="webdev-tech-name">Performance & SEO</div>
      <div class="webdev-tech-desc">Core Web Vitals optimisation, lazy loading, CDN integration, and on-page SEO built into every website we deliver.</div>
    </div>
    <div class="webdev-tech-card">
      <div class="webdev-tech-icon">☁️</div>
      <div class="webdev-tech-name">Cloud Hosting & Security</div>
      <div class="webdev-tech-desc">Managed hosting on AWS, Google Cloud, or premium shared servers with SSL, backups, firewalls, and 99.9% uptime guarantee.</div>
    </div>
  </div>
</section>

<!-- WEBDEV PROCESS -->
<section class="webdev-process">
  <div style="text-align:center;max-width:760px;margin:0 auto 10px">
    <div class="section-tag">OUR PROCESS</div>
    <h2 class="section-title">How We Build Your Website</h2>
    <p class="section-desc" style="margin:0 auto">Our structured 4-step development process ensures your website is delivered on time, on budget, and exactly as you envisioned.</p>
  </div>
  <div class="webdev-process-grid">
    <div class="webdev-process-step">
      <div class="webdev-step-num">1</div>
      <div class="webdev-step-title">Discovery & Wireframe</div>
      <div class="webdev-step-desc">We understand your business goals, target audience, and competitors — then create wireframes and site architecture for approval.</div>
    </div>
    <div class="webdev-process-step">
      <div class="webdev-step-num">2</div>
      <div class="webdev-step-title">UI Design & Prototype</div>
      <div class="webdev-step-desc">Our designers build stunning, on-brand UI mockups in Figma with full interactivity so you can experience the website before it's built.</div>
    </div>
    <div class="webdev-process-step">
      <div class="webdev-step-num">3</div>
      <div class="webdev-step-title">Development & Testing</div>
      <div class="webdev-step-desc">Our developers bring the design to life with clean code, cross-browser testing, mobile responsiveness, and performance optimisation.</div>
    </div>
    <div class="webdev-process-step">
      <div class="webdev-step-num">4</div>
      <div class="webdev-step-title">Launch & Support</div>
      <div class="webdev-step-desc">We handle deployment, domain setup, Google Search Console integration, and provide post-launch support to ensure a smooth go-live.</div>
    </div>
  </div>
</section>

<!-- WEBDEV PRICING -->
<section class="webdev-pricing" id="webdev-pricing">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">PRICING PLANS</div>
    <h2 class="section-title">Website Development Packages</h2>
    <p class="section-desc" style="margin:0 auto">One-time project pricing with transparent deliverables. No hidden costs. All websites include mobile responsiveness, basic SEO, and free revisions.</p>
  </div>
  <div class="webdev-pricing-grid pricing-grid">
    <div class="price-card">
      <div class="price-name">Starter Website</div>
      <div class="price-amount">₹25K <small>one-time</small></div>
      <div class="price-desc">Ideal for startups and small businesses that need a clean, professional online presence quickly.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Up to 5 Pages</div>
        <div class="price-feature"><i class="fas fa-check"></i> WordPress CMS</div>
        <div class="price-feature"><i class="fas fa-check"></i> Mobile Responsive Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> Contact Form + WhatsApp Integration</div>
        <div class="price-feature"><i class="fas fa-check"></i> Basic On-Page SEO</div>
        <div class="price-feature"><i class="fas fa-check"></i> 3 Free Revisions</div>
        <div class="price-feature"><i class="fas fa-check"></i> Delivered in 7–10 Days</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <div class="price-name">Business Website</div>
      <div class="price-amount">₹60K <small>one-time</small></div>
      <div class="price-desc">For established businesses needing a premium website with advanced features, animations, and lead generation capabilities.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Up to 15 Pages</div>
        <div class="price-feature"><i class="fas fa-check"></i> Custom UI Design in Figma</div>
        <div class="price-feature"><i class="fas fa-check"></i> React or WordPress (your choice)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Blog/News Section</div>
        <div class="price-feature"><i class="fas fa-check"></i> Lead Capture + CRM Integration</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full On-Page SEO</div>
        <div class="price-feature"><i class="fas fa-check"></i> Unlimited Revisions</div>
        <div class="price-feature"><i class="fas fa-check"></i> Delivered in 2–3 Weeks</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card">
      <div class="price-name">eCommerce Store</div>
      <div class="price-amount">₹1.2L <small>one-time</small></div>
      <div class="price-desc">Full-featured online store built for maximum conversions — for D2C brands, retailers, and product businesses.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> WooCommerce or Shopify</div>
        <div class="price-feature"><i class="fas fa-check"></i> Up to 500 Products Setup</div>
        <div class="price-feature"><i class="fas fa-check"></i> Payment Gateway Integration</div>
        <div class="price-feature"><i class="fas fa-check"></i> Order & Inventory Management</div>
        <div class="price-feature"><i class="fas fa-check"></i> Mobile-First UX Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full SEO + Speed Optimisation</div>
        <div class="price-feature"><i class="fas fa-check"></i> 30-Day Post-Launch Support</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
  </div>
</section>

<!-- WEBDEV CTA -->
<div class="webdev-cta">
  <h2>Ready to Build Your Dream Website?</h2>
  <p>Get a free website consultation and a detailed proposal tailored to your business. We'll show you exactly how we can build a site that drives leads and sales.</p>
  <button class="btn-primary" onclick="showPage('contact')" style="background:linear-gradient(135deg,#3b82f6,#6366f1);box-shadow:0 6px 25px rgba(59,130,246,0.4);margin:0 auto">Book Free Consultation →</button>
</div>

</div><!-- /page-webdev -->


<!-- ====================================================
     ABOUT US PAGE
     ==================================================== -->
<div id="page-about" class="page">

<section class="about-hero">
  <div class="about-hero-left">
    <div class="about-breadcrumb">
      <a href="/" onclick="showPage('home')">Home</a> <span>›</span> About Us
    </div>
    <h1 class="about-hero-title">
      We Are <span class="highlight">Flux Digital</span> —<br>Your Growth Engine.
    </h1>
    <p class="about-hero-desc">
      Born in Bangalore, built for India. We are a passionate team of digital strategists,
      designers, and technologists dedicated to making brands thrive in the digital-first world.
    </p>
    <div class="about-hero-actions">
      <button class="btn-primary" onclick="showPage('contact')">Work With Us →</button>
      <a class="btn-secondary" href="/" onclick="showPage('home')">Our Services</a>
    </div>
    <div class="about-trust-pills">
      <span class="about-trust-pill"><i class="fas fa-calendar-check"></i> Est. 2020</span>
      <span class="about-trust-pill"><i class="fas fa-users"></i> 25+ Team Members</span>
      <span class="about-trust-pill"><i class="fas fa-star"></i> 4.9★ Rating</span>
    </div>
  </div>
  <div class="about-hero-right">
    <div class="about-visual-card">
      <div class="about-float-badge">
        <i class="fas fa-trophy"></i>
        <div>
          <div class="fb-text">Awarded Agency</div>
          <div class="fb-value">2024 🏆</div>
        </div>
      </div>
      <div class="about-img-block">
        <span class="about-img-icon">🚀</span>
        <span class="about-img-label">The Flux Digital Team — Bangalore</span>
      </div>
      <div class="about-milestones">
        <div class="about-milestone"><div class="val">1000+</div><div class="lbl">Happy Clients</div></div>
        <div class="about-milestone"><div class="val">5+</div><div class="lbl">Years in Business</div></div>
        <div class="about-milestone"><div class="val">₹50Cr+</div><div class="lbl">Revenue Generated</div></div>
        <div class="about-milestone"><div class="val">98%</div><div class="lbl">Client Retention</div></div>
      </div>
    </div>
  </div>
</section>

<section class="about-story">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">OUR STORY</div>
    <h2 class="section-title">From a Startup Dream to Bangalore's Leading Digital Agency</h2>
    <p class="section-desc" style="margin:0 auto">Every great agency starts with a simple belief — that good digital marketing can change the fate of a business.</p>
  </div>
  <div class="about-story-grid">
    <div class="about-story-img">
      <span class="about-story-img-icon">💡</span>
      <span class="about-story-img-text">Founded in Bangalore</span>
      <span class="about-story-img-sub">HSR Layout, 2020</span>
    </div>
    <div class="about-story-content">
      <h2>Built by Practitioners,<br>Not Theorists</h2>
      <p>Flux Digital was founded in 2020 by a group of digital marketers who were tired of agencies promising big results with zero accountability. We set out to build something different — a performance-focused agency rooted in transparency, data, and genuine partnership.</p>
      <p>Starting from a small co-working space in HSR Layout, Bangalore, we grew from a team of 3 to over 25 specialists, managing digital presence for startups, SMEs, and enterprise brands across India and Southeast Asia.</p>
      <div class="about-story-highlights">
        <div class="about-highlight-item">
          <div class="about-highlight-icon"><i class="fas fa-bullseye"></i></div>
          <div class="about-highlight-text"><h4>Performance-First Mindset</h4><p>Every campaign we run is tied to business outcomes — leads, revenue, and real growth.</p></div>
        </div>
        <div class="about-highlight-item">
          <div class="about-highlight-icon"><i class="fas fa-handshake"></i></div>
          <div class="about-highlight-text"><h4>Partner, Not Just Vendor</h4><p>We embed ourselves in your goals, becoming a true extension of your marketing team.</p></div>
        </div>
        <div class="about-highlight-item">
          <div class="about-highlight-icon"><i class="fas fa-chart-line"></i></div>
          <div class="about-highlight-text"><h4>Data-Driven Always</h4><p>Decisions at Flux Digital are backed by analytics and insight.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="about-values">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">OUR VALUES</div>
    <h2 class="section-title">The Principles That Drive Us</h2>
    <p class="section-desc" style="margin:0 auto">These values show up in how we communicate, strategize, and deliver for every client.</p>
  </div>
  <div class="about-values-grid">
    <div class="about-value-card"><div class="about-value-icon">🎯</div><div class="about-value-title">Radical Transparency</div><p class="about-value-desc">Full access to campaign data, honest reporting, and clear explanations.</p></div>
    <div class="about-value-card"><div class="about-value-icon">⚡</div><div class="about-value-title">Speed with Precision</div><p class="about-value-desc">We deploy campaigns quickly without sacrificing quality or strategic depth.</p></div>
    <div class="about-value-card"><div class="about-value-icon">🤝</div><div class="about-value-title">Client-First Culture</div><p class="about-value-desc">Your growth is the center of how we plan, execute, and optimize.</p></div>
    <div class="about-value-card"><div class="about-value-icon">🔬</div><div class="about-value-title">Continuous Innovation</div><p class="about-value-desc">We stay ahead of digital trends so your brand never falls behind.</p></div>
    <div class="about-value-card"><div class="about-value-icon">📊</div><div class="about-value-title">Measurable Impact</div><p class="about-value-desc">We focus on KPIs that matter: traffic, leads, conversions, and revenue.</p></div>
    <div class="about-value-card"><div class="about-value-icon">🌱</div><div class="about-value-title">Long-Term Thinking</div><p class="about-value-desc">We build digital foundations that compound over months and years.</p></div>
  </div>
</section>

<section class="about-team">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">MEET THE TEAM</div>
    <h2 class="section-title">The Minds Behind Your Growth</h2>
    <p class="section-desc" style="margin:0 auto">A diverse crew of strategists, creatives, and technologists united by one purpose — your brand's digital dominance.</p>
  </div>
  <div class="about-team-grid">
    <div class="team-card"><div class="team-avatar ta-1">AK</div><div class="team-name">Arjun Kumar</div><div class="team-role">Founder & CEO</div><p class="team-bio">10+ years in digital marketing across e-commerce, SaaS, and consumer brands.</p></div>
    <div class="team-card"><div class="team-avatar ta-2">PR</div><div class="team-name">Priya Rao</div><div class="team-role">Head of SEO</div><p class="team-bio">Google-certified SEO specialist with 8 years of ranking competitive brands.</p></div>
    <div class="team-card"><div class="team-avatar ta-3">SM</div><div class="team-name">Siddharth Menon</div><div class="team-role">Creative Director</div><p class="team-bio">UI/UX designer focused on digital experiences that convert visitors into customers.</p></div>
    <div class="team-card"><div class="team-avatar ta-4">NK</div><div class="team-name">Neha Krishnan</div><div class="team-role">Head of Paid Media</div><p class="team-bio">Meta Blueprint and Google Ads certified expert managing high-performing budgets.</p></div>
  </div>
</section>

<div class="about-cta">
  <h2>Ready to Build Something Great Together?</h2>
  <p>Let's talk about how Flux Digital can accelerate your growth. No pitch decks. Just honest conversations about what's possible.</p>
  <button class="btn-primary" onclick="showPage('contact')" style="margin:0 auto">Start a Conversation →</button>
</div>

</div><!-- /page-about -->


<!-- ====================================================
     CONTACT US PAGE
     ==================================================== -->
<div id="page-ppc" class="page">

<!-- PPC HERO -->
<section class="ppc-hero">
  <div class="ppc-hero-left">
    <div class="ppc-breadcrumb">
      <a onclick="showPage('home')">Home</a>
      <span>/</span>
      <a onclick="showPage('home')">Services</a>
      <span>/</span>
      <span>Google Ads (PPC)</span>
    </div>
    <h1 class="ppc-hero-title">
      Dominate Search with<br>
      <span class="highlight">Expert Google Ads Management.</span>
    </h1>
    <p class="ppc-hero-desc">
      Stop wasting ad budget on clicks that don't convert. Our certified Google Ads specialists build, manage, and optimise high-ROI PPC campaigns that put your brand in front of the right people at the exact moment they're ready to buy.
    </p>
    <div class="ppc-hero-actions">
      <button class="btn-primary" onclick="showPage('contact')">Get Free PPC Audit →</button>
      <a href="/pay-per-click#ppc-pricing" onclick="showPage('ppc','ppc-pricing')" class="btn-secondary" style="cursor:pointer">View PPC Plans</a>
    </div>
    <div class="ppc-trust-pills">
      <div class="ppc-trust-pill"><i class="fas fa-check-circle"></i> Google Partner Agency</div>
      <div class="ppc-trust-pill"><i class="fas fa-check-circle"></i> ₹5Cr+ Ad Spend Managed</div>
      <div class="ppc-trust-pill"><i class="fas fa-check-circle"></i> Avg 4.8x ROAS</div>
      <div class="ppc-trust-pill"><i class="fas fa-check-circle"></i> No Lock-in Contracts</div>
    </div>
  </div>

  <div class="ppc-hero-right">
    <div class="ppc-visual-card">
      <div class="ppc-float-badge">
        <i class="fas fa-arrow-trend-up"></i>
        <div>
          <div class="fb-text">Average ROAS</div>
          <div class="fb-value">4.8x</div>
        </div>
      </div>
      <div class="ppc-visual-header">
        <div class="ppc-visual-icon"><i class="fab fa-google"></i></div>
        <div>
          <div class="ppc-visual-title">Campaign Performance</div>
          <div class="ppc-visual-sub">Live client averages</div>
        </div>
      </div>
      <div class="ppc-metric-row">
        <div class="ppc-metric-item">
          <div class="ppc-metric-icon ppc-metric-icon-1"><i class="fas fa-mouse-pointer"></i></div>
          <div class="ppc-metric-info">
            <div class="ppc-metric-name">Click-Through Rate</div>
            <div class="ppc-metric-val">8.4%</div>
          </div>
          <div class="ppc-metric-badge">+2.1x Avg</div>
        </div>
        <div class="ppc-metric-item">
          <div class="ppc-metric-icon ppc-metric-icon-2"><i class="fas fa-coins"></i></div>
          <div class="ppc-metric-info">
            <div class="ppc-metric-name">Cost Per Lead</div>
            <div class="ppc-metric-val">₹ 184</div>
          </div>
          <div class="ppc-metric-badge">−62% CPL</div>
        </div>
        <div class="ppc-metric-item">
          <div class="ppc-metric-icon ppc-metric-icon-3"><i class="fas fa-chart-line"></i></div>
          <div class="ppc-metric-info">
            <div class="ppc-metric-name">Conv. Rate Uplift</div>
            <div class="ppc-metric-val">+3.2x</div>
          </div>
          <div class="ppc-metric-badge">vs. Before</div>
        </div>
      </div>
      <div class="ppc-visual-footer">
        <div class="ppc-mini-stat"><div class="val">₹5Cr+</div><div class="lbl">Ad Spend Managed</div></div>
        <div class="ppc-mini-stat"><div class="val">320+</div><div class="lbl">Campaigns Live</div></div>
      </div>
    </div>
  </div>
</section>

<!-- PPC CAMPAIGN TYPES -->
<section class="ppc-services">
  <div class="section-tag">WHAT WE OFFER</div>
  <h2 class="section-title">Complete Google Ads Solutions</h2>
  <p class="section-desc">From search to shopping, display to video — we handle every type of Google Ads campaign to maximise your reach and revenue.</p>
  <div class="ppc-services-grid">
    <div class="ppc-svc-card">
      <div class="ppc-svc-icon ppc-svc-icon-1"><i class="fab fa-google"></i></div>
      <div class="ppc-svc-title">Search Ads</div>
      <div class="ppc-svc-desc">Capture high-intent buyers the moment they search on Google. We build tightly-themed ad groups, write compelling ad copy, and optimise bidding strategies to maximise conversions at the lowest possible cost.</div>
      <div class="ppc-svc-tags">
        <span class="ppc-svc-tag">Keyword Research</span>
        <span class="ppc-svc-tag">Ad Copywriting</span>
        <span class="ppc-svc-tag">Bid Strategy</span>
      </div>
    </div>
    <div class="ppc-svc-card">
      <div class="ppc-svc-icon ppc-svc-icon-2"><i class="fas fa-shopping-cart"></i></div>
      <div class="ppc-svc-title">Shopping Ads</div>
      <div class="ppc-svc-desc">Showcase your products directly in Google Search results with images, prices, and ratings. We optimise your product feed, set up Performance Max, and structure campaigns to drive high-value purchases.</div>
      <div class="ppc-svc-tags">
        <span class="ppc-svc-tag">Feed Optimisation</span>
        <span class="ppc-svc-tag">Performance Max</span>
        <span class="ppc-svc-tag">ROAS Targeting</span>
      </div>
    </div>
    <div class="ppc-svc-card">
      <div class="ppc-svc-icon ppc-svc-icon-3"><i class="fas fa-desktop"></i></div>
      <div class="ppc-svc-title">Display & Remarketing</div>
      <div class="ppc-svc-desc">Re-engage website visitors and reach new audiences across millions of websites, apps, and Gmail. Our audience targeting and creative strategies keep your brand top-of-mind and bring back lost leads.</div>
      <div class="ppc-svc-tags">
        <span class="ppc-svc-tag">Audience Targeting</span>
        <span class="ppc-svc-tag">Remarketing</span>
        <span class="ppc-svc-tag">Banner Creatives</span>
      </div>
    </div>
    <div class="ppc-svc-card">
      <div class="ppc-svc-icon ppc-svc-icon-4"><i class="fab fa-youtube"></i></div>
      <div class="ppc-svc-title">YouTube Video Ads</div>
      <div class="ppc-svc-desc">Build brand awareness and drive conversions through pre-roll, in-feed, and shorts ads on YouTube. We handle audience setup, bidding, and performance tracking to ensure every rupee counts.</div>
      <div class="ppc-svc-tags">
        <span class="ppc-svc-tag">In-Stream Ads</span>
        <span class="ppc-svc-tag">In-Feed Ads</span>
        <span class="ppc-svc-tag">View Rate Optim.</span>
      </div>
    </div>
    <div class="ppc-svc-card">
      <div class="ppc-svc-icon ppc-svc-icon-5"><i class="fas fa-location-dot"></i></div>
      <div class="ppc-svc-title">Local & Call Ads</div>
      <div class="ppc-svc-desc">Drive calls, store visits, and direction requests from people near your business. We create local search and call-only campaigns optimised for your area, perfect for clinics, showrooms, and service businesses.</div>
      <div class="ppc-svc-tags">
        <span class="ppc-svc-tag">Call Extensions</span>
        <span class="ppc-svc-tag">Location Targeting</span>
        <span class="ppc-svc-tag">Local Campaigns</span>
      </div>
    </div>
    <div class="ppc-svc-card">
      <div class="ppc-svc-icon ppc-svc-icon-6"><i class="fas fa-chart-mixed"></i></div>
      <div class="ppc-svc-title">PPC Audit & Rescue</div>
      <div class="ppc-svc-desc">Running ads but not seeing results? We audit your existing campaigns to uncover wasted spend, poor Quality Scores, and conversion leaks — then rebuild your account structure for maximum ROI.</div>
      <div class="ppc-svc-tags">
        <span class="ppc-svc-tag">Account Audit</span>
        <span class="ppc-svc-tag">Quality Score Fix</span>
        <span class="ppc-svc-tag">Waste Reduction</span>
      </div>
    </div>
  </div>
</section>

<!-- WHY CHOOSE US STRIP -->
<section class="ppc-why-strip">
  <div style="text-align:center;max-width:680px;margin:0 auto 56px">
    <div class="section-tag" style="justify-content:center;color:#f59e0b">WHY FLUX DIGITAL</div>
    <h2 class="section-title" style="color:#fff">Why Brands Trust Us With Their Ad Budget</h2>
  </div>
  <div class="ppc-why-strip-inner">
    <div class="ppc-why-item">
      <div class="ppc-why-icon">🏆</div>
      <h4>Certified Google Partners</h4>
      <p>Our team holds active Google Ads certifications across Search, Display, Shopping, and Video — so your campaigns are in expert hands.</p>
    </div>
    <div class="ppc-why-item">
      <div class="ppc-why-icon">📉</div>
      <h4>We Cut Wasted Spend</h4>
      <p>The first thing we do is audit your account for budget leaks. On average, we reduce wasted ad spend by 40–60% within the first 30 days.</p>
    </div>
    <div class="ppc-why-item">
      <div class="ppc-why-icon">📊</div>
      <h4>Transparent Reporting</h4>
      <p>No smoke and mirrors. You get a clear dashboard with real metrics — impressions, clicks, leads, cost-per-lead — updated weekly.</p>
    </div>
    <div class="ppc-why-item">
      <div class="ppc-why-icon">🎯</div>
      <h4>Conversion-First Mindset</h4>
      <p>We don't optimise for clicks — we optimise for conversions. Every decision from bidding to landing page is focused on your bottom line.</p>
    </div>
  </div>
</section>

<!-- PPC PROCESS -->
<section class="ppc-process">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">HOW WE WORK</div>
    <h2 class="section-title" style="text-align:center">Our 5-Step PPC Launch Process</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">A proven, repeatable process that gets your campaigns profitable fast — and keeps improving month after month.</p>
  </div>
  <div class="ppc-process-grid">
    <div class="ppc-process-step">
      <div class="ppc-step-num">1</div>
      <div class="ppc-step-title">Discovery & Audit</div>
      <div class="ppc-step-desc">We study your business, goals, competitors, and existing account (if any) to identify opportunities and gaps.</div>
    </div>
    <div class="ppc-process-step">
      <div class="ppc-step-num">2</div>
      <div class="ppc-step-title">Strategy & Structure</div>
      <div class="ppc-step-desc">We build a campaign architecture — ad groups, keywords, match types, negative lists, and bidding strategy tailored to your goals.</div>
    </div>
    <div class="ppc-process-step">
      <div class="ppc-step-num">3</div>
      <div class="ppc-step-title">Creative & Launch</div>
      <div class="ppc-step-desc">Our copywriters craft high-converting ad headlines and descriptions. We set up tracking, launch, and monitor closely in the first 48 hours.</div>
    </div>
    <div class="ppc-process-step">
      <div class="ppc-step-num">4</div>
      <div class="ppc-step-title">Optimise & Scale</div>
      <div class="ppc-step-desc">Weekly bid adjustments, A/B ad testing, search term pruning, and Quality Score improvements to lower CPL and raise ROAS.</div>
    </div>
    <div class="ppc-process-step">
      <div class="ppc-step-num">5</div>
      <div class="ppc-step-title">Report & Grow</div>
      <div class="ppc-step-desc">Monthly strategy calls, clear reporting, and a roadmap to scale campaigns as performance matures and budget grows.</div>
    </div>
  </div>
</section>

<!-- RESULTS + PLATFORMS -->
<section class="ppc-results">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">PROVEN RESULTS</div>
    <h2 class="section-title" style="text-align:center">Real Campaigns. Real Numbers.</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">Here's what our clients actually achieved — not industry benchmarks, but real results from brands across Bangalore and India.</p>
  </div>
  <div class="ppc-results-grid">
    <div class="ppc-results-left">
      <div class="ppc-case-card">
        <div class="ppc-case-header">
          <div class="ppc-case-logo ppc-case-logo-1"><i class="fas fa-hospital"></i></div>
          <div>
            <div class="ppc-case-industry">Healthcare — Bangalore</div>
            <div class="ppc-case-name">Multi-Speciality Clinic</div>
          </div>
        </div>
        <div class="ppc-case-stats">
          <div class="ppc-case-stat">
            <div class="ppc-case-stat-val green">+340%</div>
            <div class="ppc-case-stat-lbl">Appointments</div>
          </div>
          <div class="ppc-case-stat">
            <div class="ppc-case-stat-val orange">₹120</div>
            <div class="ppc-case-stat-lbl">Cost Per Lead</div>
          </div>
          <div class="ppc-case-stat">
            <div class="ppc-case-stat-val">5.2x</div>
            <div class="ppc-case-stat-lbl">ROAS</div>
          </div>
        </div>
      </div>
      <div class="ppc-case-card">
        <div class="ppc-case-header">
          <div class="ppc-case-logo ppc-case-logo-2"><i class="fas fa-graduation-cap"></i></div>
          <div>
            <div class="ppc-case-industry">EdTech — Pan India</div>
            <div class="ppc-case-name">Online Learning Platform</div>
          </div>
        </div>
        <div class="ppc-case-stats">
          <div class="ppc-case-stat">
            <div class="ppc-case-stat-val green">−58%</div>
            <div class="ppc-case-stat-lbl">Cost Per Sign-up</div>
          </div>
          <div class="ppc-case-stat">
            <div class="ppc-case-stat-val orange">12K+</div>
            <div class="ppc-case-stat-lbl">Monthly Leads</div>
          </div>
          <div class="ppc-case-stat">
            <div class="ppc-case-stat-val">4.1x</div>
            <div class="ppc-case-stat-lbl">ROAS</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ppc-results-right">
      <div style="margin-bottom:28px">
        <div class="section-tag">PLATFORMS WE MANAGE</div>
        <h3 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;color:var(--dark);margin-top:8px">Every Google Ads Platform, Covered.</h3>
      </div>
      <div class="ppc-platform-list">
        <div class="ppc-platform-item">
          <div class="ppc-platform-icon ppc-pl-google"><i class="fab fa-google"></i></div>
          <div class="ppc-platform-info">
            <div class="ppc-platform-name">Google Search & Performance Max</div>
            <div class="ppc-platform-desc">High-intent lead generation and full-funnel conversions across Google properties.</div>
          </div>
          <div class="ppc-platform-badge">Core</div>
        </div>
        <div class="ppc-platform-item">
          <div class="ppc-platform-icon ppc-pl-youtube"><i class="fab fa-youtube"></i></div>
          <div class="ppc-platform-info">
            <div class="ppc-platform-name">YouTube Video Advertising</div>
            <div class="ppc-platform-desc">Brand awareness and product discovery through in-stream and in-feed video ads.</div>
          </div>
          <div class="ppc-platform-badge">Video</div>
        </div>
        <div class="ppc-platform-item">
          <div class="ppc-platform-icon ppc-pl-display"><i class="fas fa-desktop"></i></div>
          <div class="ppc-platform-info">
            <div class="ppc-platform-name">Google Display Network</div>
            <div class="ppc-platform-desc">Remarketing and prospecting across 2M+ partner websites and apps.</div>
          </div>
          <div class="ppc-platform-badge">Display</div>
        </div>
        <div class="ppc-platform-item">
          <div class="ppc-platform-icon ppc-pl-shopping"><i class="fas fa-shopping-bag"></i></div>
          <div class="ppc-platform-info">
            <div class="ppc-platform-name">Google Shopping Ads</div>
            <div class="ppc-platform-desc">Product feed optimisation and Shopping campaigns for e-commerce growth.</div>
          </div>
          <div class="ppc-platform-badge">E-comm</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PPC PRICING -->
<section class="ppc-pricing" id="ppc-pricing">
  <div style="text-align:center;max-width:700px;margin:0 auto">
    <div class="section-tag">PPC PLANS</div>
    <h2 class="section-title" style="text-align:center">Transparent Google Ads Pricing</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto">All plans include account setup, campaign management, monthly reporting, and a dedicated PPC specialist. Ad spend is billed separately.</p>
  </div>
  <div class="ppc-pricing-grid pricing-grid">
    <div class="price-card">
      <div class="price-name">Starter</div>
      <div class="price-amount">₹12K <small>/month</small></div>
      <div class="price-desc">Ideal for small businesses and local service providers running their first Google Ads campaign.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Ad spend up to ₹50K/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> 1 Campaign Type (Search)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Keyword Research & Setup</div>
        <div class="price-feature"><i class="fas fa-check"></i> Conversion Tracking Setup</div>
        <div class="price-feature"><i class="fas fa-check"></i> Monthly Performance Report</div>
        <div class="price-feature"><i class="fas fa-check"></i> 1 Landing Page Recommendation</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <div class="price-name">Growth</div>
      <div class="price-amount">₹25K <small>/month</small></div>
      <div class="price-desc">For growing brands ready to scale leads and sales aggressively across multiple campaign types.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Ad spend up to ₹2L/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> Search + Display + Remarketing</div>
        <div class="price-feature"><i class="fas fa-check"></i> A/B Ad Copy Testing</div>
        <div class="price-feature"><i class="fas fa-check"></i> Advanced Audience Targeting</div>
        <div class="price-feature"><i class="fas fa-check"></i> Bi-weekly Reporting & Calls</div>
        <div class="price-feature"><i class="fas fa-check"></i> Landing Page CRO Audit</div>
        <div class="price-feature"><i class="fas fa-check"></i> Competitor Ad Analysis</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card">
      <div class="price-name">Enterprise</div>
      <div class="price-amount">₹50K <small>/month</small></div>
      <div class="price-desc">For large brands and e-commerce businesses needing full-scale Google Ads management with Performance Max and Shopping.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Ad spend above ₹2L/month</div>
        <div class="price-feature"><i class="fas fa-check"></i> All Campaign Types Incl. Shopping</div>
        <div class="price-feature"><i class="fas fa-check"></i> YouTube Video Ads</div>
        <div class="price-feature"><i class="fas fa-check"></i> Performance Max Campaigns</div>
        <div class="price-feature"><i class="fas fa-check"></i> Dedicated Account Manager</div>
        <div class="price-feature"><i class="fas fa-check"></i> Weekly Strategy Calls</div>
        <div class="price-feature"><i class="fas fa-check"></i> Custom Dashboard Access</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
  </div>
</section>

<!-- PPC CTA -->
<section class="ppc-cta">
  <h2>Stop Burning Budget. Start Getting Results.</h2>
  <p>Get a free Google Ads audit and discover exactly how much budget you're wasting — and how we can fix it. No commitment. No fluff. Just honest insights.</p>
  <div class="ppc-cta-btns">
    <button class="btn-primary" onclick="showPage('contact')">Get Free PPC Audit</button>
    <a href="https://wa.me/918870156021" target="_blank" class="btn-cta-outline"><i class="fab fa-whatsapp"></i> Chat on WhatsApp</a>
  </div>
</section>

<!-- PPC FAQ -->
<section class="ppc-faq">
  <div style="text-align:center;max-width:680px;margin:0 auto 0">
    <div class="section-tag">QUICK ANSWERS</div>
    <h2 class="section-title" style="text-align:center">Google Ads FAQs</h2>
    <p class="section-desc" style="text-align:center;margin:0 auto 48px">Got questions? Here are the ones we hear most from businesses before starting Google Ads.</p>
  </div>
  <div class="ppc-faq-grid">
    <div class="ppc-faq-item">
      <div class="ppc-faq-q"><i class="fas fa-chevron-right"></i> How much should I spend on Google Ads?</div>
      <div class="ppc-faq-a">There's no one-size-fits-all answer — it depends on your industry, competition, and goals. For most local businesses in Bangalore, we recommend starting with ₹20,000–₹50,000/month in ad spend. We'll advise you on the right budget after a free audit.</div>
    </div>
    <div class="ppc-faq-item">
      <div class="ppc-faq-q"><i class="fas fa-chevron-right"></i> How soon will I see results from Google Ads?</div>
      <div class="ppc-faq-a">Unlike SEO, Google Ads can show results within 24–72 hours of launch. However, the first 2–4 weeks are a learning phase where we gather data and optimise. Most clients see significant improvement in CPL and ROAS by month two.</div>
    </div>
    <div class="ppc-faq-item">
      <div class="ppc-faq-q"><i class="fas fa-chevron-right"></i> What is ROAS and what should I aim for?</div>
      <div class="ppc-faq-a">ROAS (Return on Ad Spend) measures revenue earned for every rupee spent on ads. A 4x ROAS means you earn ₹4 for every ₹1 spent. Our clients average 4.8x ROAS, though targets vary by industry — e-commerce typically aims for 5–8x, while service businesses focus on cost-per-lead instead.</div>
    </div>
    <div class="ppc-faq-item">
      <div class="ppc-faq-q"><i class="fas fa-chevron-right"></i> Do you manage the ad account or do I keep ownership?</div>
      <div class="ppc-faq-a">You always retain full ownership of your Google Ads account. We request manager access to manage campaigns on your behalf. If you ever leave (though we hope you won't!), the account, history, and data remain 100% yours.</div>
    </div>
    <div class="ppc-faq-item">
      <div class="ppc-faq-q"><i class="fas fa-chevron-right"></i> My ads are running but not getting leads — what's wrong?</div>
      <div class="ppc-faq-a">This is the most common problem we fix. The issue is usually a combination of poor keyword targeting, weak ad copy, slow landing pages, or missing conversion tracking. Our PPC Rescue Audit identifies and prioritises every issue. Book a free audit to find out exactly what's happening.</div>
    </div>
    <div class="ppc-faq-item">
      <div class="ppc-faq-q"><i class="fas fa-chevron-right"></i> Is there a minimum contract period?</div>
      <div class="ppc-faq-a">We recommend a minimum of 3 months to allow campaigns to optimise properly and show meaningful results — Google's algorithm needs time to learn. That said, we don't lock you in with long contracts. You're free to continue or stop based on results.</div>
    </div>
  </div>
</section>

</div><!-- /page-ppc -->


<div id="page-contact" class="page">

<section class="contact-hero">
  <div class="section-tag" style="justify-content:center">GET IN TOUCH</div>
  <h1 class="contact-hero-title">Let's <span class="highlight">Start Something</span><br>Remarkable Together</h1>
  <p class="contact-hero-desc">Whether you're a startup taking your first digital step or an established brand ready to scale — we'd love to hear from you. No obligation. Just a real conversation.</p>
</section>

<div class="contact-info-row">
  <div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-phone-alt"></i></div><div class="contact-info-label">Call Us</div><div class="contact-info-value">+91 88701 56021</div><div class="contact-info-sub">Mon – Sat, 9AM to 7PM</div></div>
  <div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-envelope"></i></div><div class="contact-info-label">Email</div><div class="contact-info-value">sales@fluxdigital.in</div><div class="contact-info-sub">We reply within 4 hours</div></div>
  <div class="contact-info-card"><div class="contact-info-icon"><i class="fas fa-map-marker-alt"></i></div><div class="contact-info-label">Visit Us</div><div class="contact-info-value">HSR Layout</div><div class="contact-info-sub">Bangalore, Karnataka 560102</div></div>
  <div class="contact-info-card"><div class="contact-info-icon"><i class="fab fa-whatsapp"></i></div><div class="contact-info-label">WhatsApp</div><div class="contact-info-value">+91 88701 56021</div><div class="contact-info-sub">Quick replies guaranteed</div></div>
</div>

<div class="contact-main">
  <div class="contact-form-side">
    <h2 class="contact-form-title">Send Us a Message</h2>
    <p class="contact-form-sub">Tell us about your project, your goals, and your timeline. The more you share, the better we can help — and the faster we can get back to you with a real plan.</p>
    <div class="contact-form">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Your Name *</label><input class="form-input" type="text" placeholder="Ravi Shankar" /></div>
        <div class="form-group"><label class="form-label">Phone Number *</label><input class="form-input" type="tel" placeholder="+91 98765 43210" /></div>
      </div>
      <div class="form-group"><label class="form-label">Business Email *</label><input class="form-input" type="email" placeholder="ravi@yourcompany.com" /></div>
      <div class="form-group"><label class="form-label">Company / Business Name</label><input class="form-input" type="text" placeholder="Your Company Pvt. Ltd." /></div>
      <div class="form-group">
        <label class="form-label">Service You're Interested In *</label>
        <select class="form-select"><option value="" disabled selected>Select a service…</option><option>SEO Services</option><option>Digital Marketing</option><option>Google Ads (PPC)</option><option>Social Media Marketing</option><option>Web Design & Development</option><option>UI/UX & Graphic Design</option><option>Full Digital Package</option><option>Other / Not Sure Yet</option></select>
      </div>
      <div class="form-group">
        <label class="form-label">Monthly Budget Range</label>
        <select class="form-select"><option value="" disabled selected>Select your budget range…</option><option>Below ₹15,000/month</option><option>₹15,000 – ₹30,000/month</option><option>₹30,000 – ₹60,000/month</option><option>₹60,000 – ₹1,50,000/month</option><option>₹1.5L+ / month</option></select>
      </div>
      <div class="form-group"><label class="form-label">Tell Us About Your Project *</label><textarea class="form-textarea" placeholder="Briefly describe your business, current challenges, and what you hope to achieve with digital marketing…"></textarea></div>
      <button class="form-submit" type="button">Send My Message <i class="fas fa-paper-plane"></i></button>
      <p class="form-note">🔒 We respect your privacy. Your details will never be shared or sold.</p>
    </div>
  </div>

  <div class="contact-right-side">
    <div class="contact-map-card">
      <div class="contact-map-placeholder"><span class="contact-map-icon">📍</span><span class="contact-map-label">Flux Digital HQ</span><span class="contact-map-sub">HSR Layout, Bangalore</span></div>
      <div class="contact-map-body"><i class="fas fa-map-marker-alt"></i><p><strong>Flux Digital Private Limited</strong><br>3rd Floor, Salarpuria Towers, HSR Layout,<br>Bangalore, Karnataka — 560 102</p></div>
    </div>
    <div class="contact-hours-card">
      <h3 class="contact-hours-title"><i class="far fa-clock"></i> Office Hours</h3>
      <div class="contact-hours-list">
        <div class="contact-hour-item today"><span class="contact-hour-day">Monday – Friday</span><span class="contact-hour-time">9:00 AM – 7:00 PM</span></div>
        <div class="contact-hour-item"><span class="contact-hour-day">Saturday</span><span class="contact-hour-time">10:00 AM – 4:00 PM</span></div>
        <div class="contact-hour-item"><span class="contact-hour-day">Sunday</span><span class="contact-hour-time">Closed (WhatsApp available)</span></div>
      </div>
    </div>
    <div class="contact-social-card">
      <h3 class="contact-social-title">Connect on Social</h3>
      <p class="contact-social-sub">We're active and responsive on all major platforms. Drop us a DM anytime!</p>
      <div class="contact-social-links">
        <a class="contact-social-btn" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i> Instagram</a>
        <a class="contact-social-btn" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i> LinkedIn</a>
        <a class="contact-social-btn" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i> Facebook</a>
        <a class="contact-social-btn" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-x-twitter"></i> Twitter</a>
        <a class="contact-social-btn" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i> YouTube</a>
      </div>
    </div>
  </div>
</div>

<section class="contact-faq">
  <div style="text-align:center;max-width:680px;margin:0 auto">
    <div class="section-tag">QUICK ANSWERS</div>
    <h2 class="section-title">Frequently Asked Questions</h2>
    <p class="section-desc" style="margin:0 auto">Have a quick question? We've answered the most common ones below.</p>
  </div>
  <div class="contact-faq-grid">
    <div class="contact-faq-item"><div class="contact-faq-q"><i class="fas fa-chevron-right"></i> How quickly do you respond to inquiries?</div><div class="contact-faq-a">We respond to all inquiries within 4 business hours. For urgent queries, WhatsApp is the fastest way to reach us.</div></div>
    <div class="contact-faq-item"><div class="contact-faq-q"><i class="fas fa-chevron-right"></i> Do you offer a free consultation?</div><div class="contact-faq-a">Absolutely. Every new client engagement starts with a free 30–45 minute strategy call.</div></div>
    <div class="contact-faq-item"><div class="contact-faq-q"><i class="fas fa-chevron-right"></i> What is your minimum contract period?</div><div class="contact-faq-a">For ongoing services like SEO and Social Media, we recommend a minimum of 3 months. For one-time projects, there's no lock-in period.</div></div>
    <div class="contact-faq-item"><div class="contact-faq-q"><i class="fas fa-chevron-right"></i> Do you work with businesses outside Bangalore?</div><div class="contact-faq-a">Yes. We work with clients across India and internationally with a remote-friendly workflow.</div></div>
  </div>
</section>

</div><!-- /page-contact -->


<!-- ====================================================
     UI/UX & GRAPHIC DESIGN PAGE
     ==================================================== -->
<div id="page-uiux" class="page">

<!-- HERO -->
<section class="uiux-hero">
  <div class="uiux-hero-left">
    <div class="uiux-breadcrumb">
      <a href="/" onclick="showPage('home')">Home</a>
      <span>/</span>
      <a href="/" onclick="showPage('home')">Services</a>
      <span>/</span>
      <span>UI/UX &amp; Graphic Design</span>
    </div>
    <h1 class="uiux-hero-title">
      Designs That <span class="highlight">Delight Users</span><br>and Drive Conversions.
    </h1>
    <p class="uiux-hero-desc">
      We craft stunning, user-first interfaces that look exceptional and perform brilliantly. From Figma wireframes to pixel-perfect final designs — every screen we create is built to engage, convert, and leave a lasting impression.
    </p>
    <div class="uiux-hero-actions">
      <button class="btn-primary" style="background:linear-gradient(135deg,#ec4899,#8b5cf6);box-shadow:0 6px 25px rgba(236,72,153,0.4)" onclick="showPage('contact')">Get Free Design Audit →</button>
      <a href="#uiux-portfolio" onclick="window.showPage('uiux','uiux-portfolio')" class="btn-secondary">View Portfolio</a>
    </div>
    <div class="uiux-trust-pills">
      <div class="uiux-trust-pill"><i class="fas fa-check-circle"></i> 150+ Projects Designed</div>
      <div class="uiux-trust-pill"><i class="fas fa-star"></i> 40% Avg. Bounce Rate Drop</div>
      <div class="uiux-trust-pill"><i class="fab fa-figma"></i> Figma Certified Team</div>
    </div>
  </div>

  <div class="uiux-hero-right">
    <div class="uiux-visual-card">
      <div class="uiux-float-badge">
        <i class="fas fa-star"></i>
        <div>
          <div class="fb-text">User Satisfaction</div>
          <div class="fb-value">98%</div>
        </div>
      </div>
      <div class="uiux-card-header">
        <div class="uiux-card-icon"><i class="fas fa-pen-ruler"></i></div>
        <div>
          <div class="uiux-card-title-text">Design Performance</div>
          <div class="uiux-card-sub">Average improvement across client projects</div>
        </div>
      </div>
      <div class="uiux-score-row">
        <div class="uiux-score-box uiux-score-box-pink">
          <div class="uiux-score-val uiux-score-val-pink">40%</div>
          <div class="uiux-score-lbl">Bounce Rate Drop</div>
        </div>
        <div class="uiux-score-box uiux-score-box-purple">
          <div class="uiux-score-val uiux-score-val-purple">3x</div>
          <div class="uiux-score-lbl">Conversion Uplift</div>
        </div>
        <div class="uiux-score-box uiux-score-box-pink">
          <div class="uiux-score-val uiux-score-val-pink">2.4x</div>
          <div class="uiux-score-lbl">Longer Session Time</div>
        </div>
        <div class="uiux-score-box uiux-score-box-purple">
          <div class="uiux-score-val uiux-score-val-purple">98%</div>
          <div class="uiux-score-lbl">Client Satisfaction</div>
        </div>
      </div>
      <div class="uiux-tool-row">
        <div class="uiux-tool-chip uiux-tc-figma"><i class="fab fa-figma" style="color:#ec4899"></i> Figma</div>
        <div class="uiux-tool-chip uiux-tc-ps"><i class="fas fa-layer-group" style="color:#1a88f5"></i> Photoshop</div>
        <div class="uiux-tool-chip uiux-tc-ai"><i class="fas fa-vector-square" style="color:#ff9a00"></i> Illustrator</div>
        <div class="uiux-tool-chip uiux-tc-proto"><i class="fas fa-mobile-screen-button" style="color:#8b5cf6"></i> Prototyping</div>
      </div>
      <div class="uiux-visual-stats">
        <div class="uiux-mini-stat uiux-ms-pink"><div class="val uiux-mv-pink">150+</div><div class="lbl">Projects Delivered</div></div>
        <div class="uiux-mini-stat uiux-ms-purple"><div class="val uiux-mv-purple">8yr+</div><div class="lbl">Design Experience</div></div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="uiux-services">
  <div class="section-tag">OUR DESIGN SERVICES</div>
  <h2 class="section-title">Complete UI/UX &amp; Graphic Design Solutions</h2>
  <p class="section-desc">From brand identity to full-scale product design, we create visually stunning and highly functional designs that build trust and drive action.</p>
  <div class="uiux-services-grid">
    <div class="uiux-svc-card">
      <div class="uiux-svc-icon uiux-ic-1"><i class="fas fa-mobile-screen-button"></i></div>
      <div class="uiux-svc-title">UI Design (Web &amp; Mobile)</div>
      <div class="uiux-svc-desc">Pixel-perfect interface designs for websites and mobile apps. We create clean, modern layouts with strong visual hierarchy that guide users to take action.</div>
      <div class="uiux-svc-tags"><span class="uiux-svc-tag">Web UI</span><span class="uiux-svc-tag">Mobile UI</span><span class="uiux-svc-tag">App Design</span></div>
    </div>
    <div class="uiux-svc-card">
      <div class="uiux-svc-icon uiux-ic-2"><i class="fas fa-users-viewfinder"></i></div>
      <div class="uiux-svc-title">UX Research &amp; Strategy</div>
      <div class="uiux-svc-desc">User journey mapping, persona creation, heatmap analysis, and competitor research to understand exactly how users think and behave — then design accordingly.</div>
      <div class="uiux-svc-tags"><span class="uiux-svc-tag">User Research</span><span class="uiux-svc-tag">Personas</span><span class="uiux-svc-tag">Journey Maps</span></div>
    </div>
    <div class="uiux-svc-card">
      <div class="uiux-svc-icon uiux-ic-3"><i class="fab fa-figma"></i></div>
      <div class="uiux-svc-title">Wireframing &amp; Prototyping</div>
      <div class="uiux-svc-desc">Interactive Figma prototypes that let you experience your product before development begins. We create low-fi wireframes through to high-fi clickable prototypes.</div>
      <div class="uiux-svc-tags"><span class="uiux-svc-tag">Figma</span><span class="uiux-svc-tag">Wireframes</span><span class="uiux-svc-tag">Click-Through</span></div>
    </div>
    <div class="uiux-svc-card">
      <div class="uiux-svc-icon uiux-ic-4"><i class="fas fa-palette"></i></div>
      <div class="uiux-svc-title">Brand Identity &amp; Logo Design</div>
      <div class="uiux-svc-desc">Complete brand identity systems — logo design, colour palettes, typography, brand guidelines, and visual language that makes your business instantly recognisable.</div>
      <div class="uiux-svc-tags"><span class="uiux-svc-tag">Logo</span><span class="uiux-svc-tag">Brand Guide</span><span class="uiux-svc-tag">Identity</span></div>
    </div>
    <div class="uiux-svc-card">
      <div class="uiux-svc-icon uiux-ic-5"><i class="fas fa-image"></i></div>
      <div class="uiux-svc-title">Graphic Design &amp; Creatives</div>
      <div class="uiux-svc-desc">Social media creatives, marketing banners, brochures, flyers, presentations, email templates, and all marketing collateral to make your brand shine everywhere.</div>
      <div class="uiux-svc-tags"><span class="uiux-svc-tag">Social Creatives</span><span class="uiux-svc-tag">Banners</span><span class="uiux-svc-tag">Print</span></div>
    </div>
    <div class="uiux-svc-card">
      <div class="uiux-svc-icon uiux-ic-6"><i class="fas fa-arrows-to-circle"></i></div>
      <div class="uiux-svc-title">Conversion Rate Optimisation</div>
      <div class="uiux-svc-desc">UX audits, A/B test design variants, CTA optimisation, landing page redesigns, and checkout flow improvements to turn more visitors into paying customers.</div>
      <div class="uiux-svc-tags"><span class="uiux-svc-tag">CRO</span><span class="uiux-svc-tag">A/B Testing</span><span class="uiux-svc-tag">Audit</span></div>
    </div>
  </div>
</section>

<!-- TOOLS WE USE -->
<section class="uiux-tools">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">OUR DESIGN TOOLKIT</div>
    <h2 class="section-title">Industry-Leading Design Tools</h2>
    <p class="section-desc" style="margin:0 auto">Our designers are proficient in the world's best design software to deliver precise, scalable, and production-ready design assets every time.</p>
  </div>
  <div class="uiux-tools-grid">
    <div class="uiux-tool-card">
      <div class="uiux-tool-emoji">🎨</div>
      <div>
        <div class="uiux-tool-name">Figma</div>
        <div class="uiux-tool-use">UI design, component libraries, interactive prototypes, design systems, and developer handoff — our primary design tool.</div>
      </div>
    </div>
    <div class="uiux-tool-card">
      <div class="uiux-tool-emoji">🖼️</div>
      <div>
        <div class="uiux-tool-name">Adobe Photoshop</div>
        <div class="uiux-tool-use">Photo editing, banner creation, social media graphics, marketing creatives, and raster-based visual design work.</div>
      </div>
    </div>
    <div class="uiux-tool-card">
      <div class="uiux-tool-emoji">✏️</div>
      <div>
        <div class="uiux-tool-name">Adobe Illustrator</div>
        <div class="uiux-tool-use">Logo design, vector illustrations, iconography, infographics, and scalable brand identity assets.</div>
      </div>
    </div>
    <div class="uiux-tool-card">
      <div class="uiux-tool-emoji">📐</div>
      <div>
        <div class="uiux-tool-name">Adobe InDesign</div>
        <div class="uiux-tool-use">Brochures, catalogues, annual reports, presentations, and professional print-ready multi-page documents.</div>
      </div>
    </div>
    <div class="uiux-tool-card">
      <div class="uiux-tool-emoji">🔥</div>
      <div>
        <div class="uiux-tool-name">Hotjar &amp; Analytics</div>
        <div class="uiux-tool-use">Heatmaps, session recordings, and conversion funnels to understand real user behaviour and inform UX decisions.</div>
      </div>
    </div>
    <div class="uiux-tool-card">
      <div class="uiux-tool-emoji">⚡</div>
      <div>
        <div class="uiux-tool-name">Canva Pro &amp; After Effects</div>
        <div class="uiux-tool-use">Quick social media creatives, motion graphics, animated banners, and video ad design for digital marketing campaigns.</div>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="uiux-process">
  <div style="text-align:center;max-width:760px;margin:0 auto 10px">
    <div class="section-tag">OUR DESIGN PROCESS</div>
    <h2 class="section-title">How We Design Your Product</h2>
    <p class="section-desc" style="margin:0 auto">Our structured 5-step design process ensures every project is delivered on time with full transparency, collaboration, and zero surprises.</p>
  </div>
  <div class="uiux-process-grid">
    <div class="uiux-process-step">
      <div class="uiux-step-num">1</div>
      <div class="uiux-step-title">Discovery &amp; Research</div>
      <div class="uiux-step-desc">We deep-dive into your business, users, competitors, and goals to define the design direction and success metrics.</div>
    </div>
    <div class="uiux-process-step">
      <div class="uiux-step-num">2</div>
      <div class="uiux-step-title">Wireframes &amp; IA</div>
      <div class="uiux-step-desc">Information architecture, user flows, and low-fidelity wireframes are built and approved before any visual design begins.</div>
    </div>
    <div class="uiux-process-step">
      <div class="uiux-step-num">3</div>
      <div class="uiux-step-title">Visual UI Design</div>
      <div class="uiux-step-desc">High-fidelity, brand-aligned screen designs with full typography, colour, component library, and micro-interactions.</div>
    </div>
    <div class="uiux-process-step">
      <div class="uiux-step-num">4</div>
      <div class="uiux-step-title">Prototype &amp; Testing</div>
      <div class="uiux-step-desc">Fully clickable prototypes are built in Figma and tested with real users to validate flows and identify friction points.</div>
    </div>
    <div class="uiux-process-step">
      <div class="uiux-step-num">5</div>
      <div class="uiux-step-title">Handoff &amp; Support</div>
      <div class="uiux-step-desc">Design assets, specs, and style guides are handed to your dev team with full annotation and post-handoff support.</div>
    </div>
  </div>
</section>

<!-- PORTFOLIO -->
<section class="uiux-portfolio" id="uiux-portfolio">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">OUR WORK</div>
    <h2 class="section-title">Recent Design Projects</h2>
    <p class="section-desc" style="margin:0 auto">A selection of UI/UX and graphic design work delivered for startups, SMEs, and enterprise brands across Bangalore and India.</p>
  </div>
  <div class="uiux-portfolio-grid">
    <div class="uiux-port-card">
      <div class="uiux-port-thumb uiux-pt-1">
        <div class="uiux-port-mockup">🛍️</div>
        <div class="uiux-port-badge">E-Commerce</div>
      </div>
      <div class="uiux-port-info">
        <div class="uiux-port-type">UI/UX Design</div>
        <div class="uiux-port-title">Fashion Store App Redesign</div>
        <div class="uiux-port-desc">Full mobile app redesign for a Bangalore fashion brand — improved checkout conversion by 62% post-launch.</div>
      </div>
    </div>
    <div class="uiux-port-card">
      <div class="uiux-port-thumb uiux-pt-2">
        <div class="uiux-port-mockup">🏥</div>
        <div class="uiux-port-badge">HealthTech</div>
      </div>
      <div class="uiux-port-info">
        <div class="uiux-port-type">Product Design</div>
        <div class="uiux-port-title">Doctor Booking Platform</div>
        <div class="uiux-port-desc">End-to-end UX for a healthcare appointment platform — reduced booking drop-offs by 47% with simplified flows.</div>
      </div>
    </div>
    <div class="uiux-port-card">
      <div class="uiux-port-thumb uiux-pt-3">
        <div class="uiux-port-mockup">🏦</div>
        <div class="uiux-port-badge">FinTech</div>
      </div>
      <div class="uiux-port-info">
        <div class="uiux-port-type">Dashboard Design</div>
        <div class="uiux-port-title">Finance Analytics Dashboard</div>
        <div class="uiux-port-desc">Complex data visualisation dashboard designed for a fintech startup — clean, intuitive, and loved by users.</div>
      </div>
    </div>
    <div class="uiux-port-card">
      <div class="uiux-port-thumb uiux-pt-4">
        <div class="uiux-port-mockup">🏗️</div>
        <div class="uiux-port-badge">Real Estate</div>
      </div>
      <div class="uiux-port-info">
        <div class="uiux-port-type">Brand Identity</div>
        <div class="uiux-port-title">Real Estate Brand Overhaul</div>
        <div class="uiux-port-desc">Complete brand identity — logo, colour system, typography, stationery, and digital marketing templates.</div>
      </div>
    </div>
    <div class="uiux-port-card">
      <div class="uiux-port-thumb uiux-pt-5">
        <div class="uiux-port-mockup">📚</div>
        <div class="uiux-port-badge">EdTech</div>
      </div>
      <div class="uiux-port-info">
        <div class="uiux-port-type">Web UI Design</div>
        <div class="uiux-port-title">Online Learning Platform</div>
        <div class="uiux-port-desc">Responsive web UI for an EdTech platform — course pages, learner dashboard, and instructor portal designed in Figma.</div>
      </div>
    </div>
    <div class="uiux-port-card">
      <div class="uiux-port-thumb uiux-pt-6">
        <div class="uiux-port-mockup">🍽️</div>
        <div class="uiux-port-badge">Food &amp; Beverage</div>
      </div>
      <div class="uiux-port-info">
        <div class="uiux-port-type">Graphic Design</div>
        <div class="uiux-port-title">Restaurant Visual Identity</div>
        <div class="uiux-port-desc">Menu design, packaging, social media templates, and interior signage for a multi-outlet restaurant chain in Bangalore.</div>
      </div>
    </div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section class="uiux-why">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">WHY FLUX DIGITAL DESIGN</div>
    <h2 class="section-title">What Sets Our Design Team Apart</h2>
    <p class="section-desc" style="margin:0 auto">We don't just make things look pretty — we design with purpose, backed by research, tested with users, and built to deliver measurable business results.</p>
  </div>
  <div class="uiux-why-grid">
    <div class="uiux-why-card">
      <div class="uiux-why-num">01</div>
      <div class="uiux-why-title">Research-Driven Design</div>
      <div class="uiux-why-desc">Every design decision is grounded in user research, data analysis, and business goals — not guesswork. We validate before we ship.</div>
    </div>
    <div class="uiux-why-card">
      <div class="uiux-why-num">02</div>
      <div class="uiux-why-title">Conversion-Focused UX</div>
      <div class="uiux-why-desc">Our UX process is designed to remove friction, reduce bounce rates, and guide users toward the actions that grow your business.</div>
    </div>
    <div class="uiux-why-card">
      <div class="uiux-why-num">03</div>
      <div class="uiux-why-title">Pixel-Perfect Execution</div>
      <div class="uiux-why-desc">We deliver fully annotated, developer-ready design files in Figma with component libraries, style guides, and spacing documentation.</div>
    </div>
    <div class="uiux-why-card">
      <div class="uiux-why-num">04</div>
      <div class="uiux-why-title">Fast Turnaround Times</div>
      <div class="uiux-why-desc">We move fast without sacrificing quality. Most projects get first design concepts within 3–5 business days with clear milestone delivery.</div>
    </div>
    <div class="uiux-why-card">
      <div class="uiux-why-num">05</div>
      <div class="uiux-why-title">Unlimited Revisions Policy</div>
      <div class="uiux-why-desc">We work until you're 100% satisfied. Our collaborative review process means no design is marked done until you love every screen.</div>
    </div>
    <div class="uiux-why-card">
      <div class="uiux-why-num">06</div>
      <div class="uiux-why-title">Full Brand Consistency</div>
      <div class="uiux-why-desc">Every design element follows your brand guidelines — colours, fonts, tone, and visual language stay consistent across every touchpoint.</div>
    </div>
  </div>
</section>

<!-- RESULTS -->
<div class="uiux-results">
  <div class="uiux-results-header">
    <h2>Design Results That Speak for Themselves</h2>
    <p>Measurable improvements our clients experienced after we redesigned their digital products and brand assets.</p>
  </div>
  <div class="uiux-results-grid">
    <div class="uiux-result-card"><div class="uiux-result-icon">🎨</div><div class="uiux-result-value">150+</div><div class="uiux-result-label">Projects Delivered</div></div>
    <div class="uiux-result-card"><div class="uiux-result-icon">📉</div><div class="uiux-result-value">40%</div><div class="uiux-result-label">Avg. Bounce Rate Drop</div></div>
    <div class="uiux-result-card"><div class="uiux-result-icon">📈</div><div class="uiux-result-value">3x</div><div class="uiux-result-label">Avg. Conversion Uplift</div></div>
    <div class="uiux-result-card"><div class="uiux-result-icon">⭐</div><div class="uiux-result-value">98%</div><div class="uiux-result-label">Client Satisfaction Rate</div></div>
  </div>
</div>

<!-- PRICING -->
<section class="uiux-pricing">
  <div style="text-align:center;max-width:760px;margin:0 auto">
    <div class="section-tag">PRICING PLANS</div>
    <h2 class="section-title">UI/UX &amp; Design Packages</h2>
    <p class="section-desc" style="margin:0 auto">Transparent, project-based pricing for every design need. All packages include unlimited revisions, Figma source files, and post-delivery support.</p>
  </div>
  <div class="uiux-pricing-grid pricing-grid">
    <div class="price-card">
      <div class="price-name">Brand Starter</div>
      <div class="price-amount">₹18K <small>one-time</small></div>
      <div class="price-desc">Perfect for startups needing a professional brand identity and basic digital design assets to launch confidently.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Logo Design (3 concepts)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Brand Colour Palette &amp; Typography</div>
        <div class="price-feature"><i class="fas fa-check"></i> Business Card Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> 5 Social Media Templates</div>
        <div class="price-feature"><i class="fas fa-check"></i> Brand Guidelines Document</div>
        <div class="price-feature"><i class="fas fa-check"></i> All Source Files Included</div>
        <div class="price-feature"><i class="fas fa-check"></i> Delivered in 5–7 Days</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card popular">
      <div class="popular-badge">Most Popular</div>
      <div class="price-name">UI/UX Design</div>
      <div class="price-amount">₹45K <small>one-time</small></div>
      <div class="price-desc">Full UI/UX design for your website or app — from research and wireframes to pixel-perfect final screens in Figma.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> UX Research &amp; User Personas</div>
        <div class="price-feature"><i class="fas fa-check"></i> Wireframes &amp; User Flow Mapping</div>
        <div class="price-feature"><i class="fas fa-check"></i> High-Fidelity UI Design (up to 15 screens)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Interactive Figma Prototype</div>
        <div class="price-feature"><i class="fas fa-check"></i> Design System &amp; Component Library</div>
        <div class="price-feature"><i class="fas fa-check"></i> Developer Handoff with Specs</div>
        <div class="price-feature"><i class="fas fa-check"></i> Unlimited Revisions</div>
        <div class="price-feature"><i class="fas fa-check"></i> 30-Day Post-Delivery Support</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
    <div class="price-card">
      <div class="price-name">Full Product Design</div>
      <div class="price-amount">₹95K <small>one-time</small></div>
      <div class="price-desc">End-to-end design for complex web platforms, mobile apps, or SaaS products that require deep UX strategy and full design systems.</div>
      <div class="price-features">
        <div class="price-feature"><i class="fas fa-check"></i> Full UX Strategy &amp; Competitive Audit</div>
        <div class="price-feature"><i class="fas fa-check"></i> 25+ Screen UI Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> Mobile + Desktop Responsive Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> Full Design System (tokens, components)</div>
        <div class="price-feature"><i class="fas fa-check"></i> Usability Testing &amp; Iteration</div>
        <div class="price-feature"><i class="fas fa-check"></i> Motion &amp; Micro-Interaction Design</div>
        <div class="price-feature"><i class="fas fa-check"></i> Brand Identity Included</div>
        <div class="price-feature"><i class="fas fa-check"></i> 60-Day Post-Delivery Support</div>
      </div>
      <button class="price-btn" onclick="showPage('contact')">Get Started</button>
    </div>
  </div>
</section>

<!-- CTA -->
<div class="uiux-cta">
  <h2>Ready to Create Something Beautiful?</h2>
  <p>Get a free design consultation and see how we can transform your brand or product into a design that users love and converts brilliantly.</p>
  <button class="btn-primary" style="background:linear-gradient(135deg,#ec4899,#8b5cf6);box-shadow:0 6px 25px rgba(236,72,153,0.4);margin:0 auto;position:relative;z-index:2" onclick="showPage('contact')">Book Free Design Consultation →</button>
</div>

</div><!-- /page-uiux -->


<!-- ====== FLOATING WHATSAPP ====== -->
<div class="floating-contact" id="floatingContact">
  <a href="https://wa.me/918870156021" class="contact-box" target="_blank" rel="noopener noreferrer">
    <span>WhatsApp</span>
    <i class="fab fa-whatsapp whatsapp-icon"></i>
  </a>
</div>


<!-- ====== SHARED FOOTER ====== -->
<footer class="footer">
  <div class="footer-top">
    <div>
      <div class="footer-logo">Flux<span>.</span></div>
      <div class="footer-tag">DIGITAL</div>
      <div class="footer-info">
        <strong>Location</strong><br>
        Bangalore, Karnataka,<br>India
      </div>
      <div class="footer-info">
        <strong>For Brands</strong><br>
        E-mail us at sales@fluxdigital.in<br>
        Reach us at: +91 8870156021
      </div>
      <div class="footer-info">
        <strong>For Careers</strong><br>
        E-mail us at careers@fluxdigital.in<br>
        Reach us at: +91 8870156021
      </div>
      <div class="footer-social">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
    <div class="footer-column">
      <h4>Company</h4>
      <div class="footer-links">
        <a href="/about" onclick="showPage('about')">About Us</a>
        <a href="/contact" onclick="showPage('contact')">Careers</a>
        <a href="/#faq" onclick="showPage('home','faq')">Blog</a>
        <a href="/contact" onclick="showPage('contact')">Contact Us</a>
        <a href="/contact" onclick="showPage('contact')">Privacy Policy</a>
      </div>
    </div>
    <div class="footer-column">
      <h4>Services</h4>
      <div class="footer-links">
        <a href="/seo" onclick="showPage('seo')">SEO Services</a>
        <a href="/digital-marketing" onclick="showPage('digital')">Digital Marketing</a>
        <a href="/pay-per-click" onclick="showPage('ppc')">Google Ads</a>
        <a href="/social-media-marketing#smm-pricing" onclick="showPage('smm','smm-pricing')">Meta Ads</a>
        <a href="/social-media-marketing" onclick="showPage('smm')">Social Media Marketing</a>
        <a href="/ui-ux-graphic-design" onclick="showPage('uiux')">UI/UX Design</a>
        <a href="/web-design-development" onclick="showPage('webdev')">Website Development</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    COPYRIGHT &copy; FLUX DIGITAL PRIVATE LIMITED. ALL RIGHTS RESERVED. 2026
  </div>
</footer>


<!-- ====== SCRIPTS ====== -->`;

type FluxWebsiteProps = {
  initialPage?: "home" | "seo" | "digital" | "ppc" | "smm" | "webdev" | "uiux" | "about" | "contact";
};

export default function FluxWebsite({ initialPage = "home" }: FluxWebsiteProps) {
  const pathname = usePathname();
  const router = useRouter();
  const websiteRef = useRef<HTMLDivElement>(null);
  const pageMarkup = websiteMarkup
    .replace('<a id="nav-home" class="active"', `<a id="nav-home" class="${initialPage === "home" ? "active" : ""}"`)
    .replace('<div id="page-home" class="page active">', `<div id="page-home" class="page${initialPage === "home" ? " active" : ""}">`)
    .replace('<div id="page-seo" class="page">', `<div id="page-seo" class="page${initialPage === "seo" ? " active" : ""}">`)
    .replace('<div id="page-digital" class="page">', `<div id="page-digital" class="page${initialPage === "digital" ? " active" : ""}">`)
    .replace('<div id="page-ppc" class="page">', `<div id="page-ppc" class="page${initialPage === "ppc" ? " active" : ""}">`)
    .replace('<div id="page-smm" class="page">', `<div id="page-smm" class="page${initialPage === "smm" ? " active" : ""}">`)
    .replace('<div id="page-webdev" class="page">', `<div id="page-webdev" class="page${initialPage === "webdev" ? " active" : ""}">`)
    .replace('<div id="page-about" class="page">', `<div id="page-about" class="page${initialPage === "about" ? " active" : ""}">`)
    .replace('<div id="page-contact" class="page">', `<div id="page-contact" class="page${initialPage === "contact" ? " active" : ""}">`)
    .replace('<div id="page-uiux" class="page">', `<div id="page-uiux" class="page${initialPage === "uiux" ? " active" : ""}">`);

  useEffect(() => {
    const websiteRoot = websiteRef.current;

    const scrollToTarget = (targetId?: string) => {
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      window.setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    };

    const revealVisibleItems = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>(".reveal").forEach((item, index) => {
        window.setTimeout(() => item.classList.add("in-view"), Math.min(index * 35, 420));
      });
    };

    const showPage = (pageId: string, shouldScroll = true, targetId?: string) => {
      document.querySelectorAll<HTMLElement>(".page").forEach((page) => {
        page.classList.remove("active");
        page.style.display = "none";
        page.style.opacity = "0";
        page.style.transform = "translateY(16px)";
      });

      const target = document.getElementById(`page-${pageId}`);
      if (!target) return;

      target.style.display = "block";
      void target.offsetWidth;
      target.classList.add("active");
      target.style.opacity = "1";
      target.style.transform = "translateY(0)";

      document.getElementById("nav-home")?.classList.toggle("active", pageId === "home");
      document.getElementById("nav-about")?.classList.toggle("active", pageId === "about");
      document.getElementById("nav-contact")?.classList.toggle("active", pageId === "contact");
      if (shouldScroll) {
        scrollToTarget(targetId);
      }
      revealVisibleItems(target);
    };

    window.showPage = (pageId: string, targetId?: string) => {
      const routeMap: Record<string, string> = {
        home: "/",
        seo: "/seo",
        digital: "/digital-marketing",
        ppc: "/pay-per-click",
        smm: "/social-media-marketing",
        webdev: "/web-design-development",
        uiux: "/ui-ux-graphic-design",
        about: "/about",
        contact: "/contact",
      };
      const route = routeMap[pageId] ?? "/";
      const href = `${route}${targetId ? `#${targetId}` : ""}`;
      if (pathname === route) {
        showPage(pageId, true, targetId);
        return;
      }
      router.push(href);
    };

    const handleScroll = () => {
      const floatingContact = document.getElementById("floatingContact");
      floatingContact?.classList.toggle("show", window.scrollY > 400);
    };

    const syncFaqIcons = (root: ParentNode = document) => {
      root.querySelectorAll(".faq-item").forEach((item) => {
        const icon = item.querySelector(".faq-question span");
        if (icon) {
          icon.textContent = item.classList.contains("active") ? "−" : "+";
        }
      });
    };

    const handleClick = (event: globalThis.MouseEvent) => {
      const target = event.target as Element | null;
      if (!target) return;

      const menuToggle = target.closest<HTMLButtonElement>(".menu-toggle");
      if (menuToggle) {
        event.preventDefault();
        const navbar = menuToggle.closest<HTMLElement>(".navbar");
        const isOpen = !navbar?.classList.contains("nav-open");
        navbar?.classList.toggle("nav-open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        return;
      }

      const pageLink = target.closest<HTMLElement>("[onclick*='showPage']");
      if (pageLink) {
        const match = pageLink.getAttribute("onclick")?.match(/showPage\('([^']+)'(?:,\s*'([^']+)')?\)/);
        if (match) {
          event.preventDefault();
          document.querySelector(".navbar")?.classList.remove("nav-open");
          document.querySelector(".menu-toggle")?.setAttribute("aria-expanded", "false");
          window.showPage?.(match[1], match[2]);
          return;
        }
      }

      const faqTab = target.closest<HTMLElement>(".faq-tab");
      if (faqTab?.dataset.tab) {
        event.preventDefault();
        const faqSection = faqTab.closest<HTMLElement>(".faq-section");
        if (!faqSection) return;

        faqSection.querySelectorAll(".faq-tab").forEach((tab) => tab.classList.remove("active"));
        faqSection.querySelectorAll(".faq-content").forEach((content) => content.classList.remove("active"));
        faqTab.classList.add("active");

        const activeContent = faqSection.querySelector<HTMLElement>(`#faq-${faqTab.dataset.tab}`);
        activeContent?.classList.add("active");
        activeContent?.querySelectorAll(".faq-item").forEach((item, index) => {
          item.classList.toggle("active", index === 0);
        });
        syncFaqIcons(faqSection);
        return;
      }

      const faqQuestion = target.closest<HTMLElement>(".faq-question");
      if (faqQuestion) {
        event.preventDefault();
        const item = faqQuestion.closest<HTMLElement>(".faq-item");
        const section = item?.closest<HTMLElement>(".faq-content");
        if (!item || !section) return;

        const wasActive = item.classList.contains("active");
        section.querySelectorAll(".faq-item").forEach((faqItem) => faqItem.classList.remove("active"));

        if (!wasActive) {
          item.classList.add("active");
        }
        syncFaqIcons(section);
        return;
      }

      const formSubmit = target.closest<HTMLElement>(".form-submit");
      if (formSubmit) {
        event.preventDefault();
        window.location.href = "mailto:sales@fluxdigital.in?subject=New%20Project%20Inquiry%20-%20Flux%20Digital";
      }
    };

    const revealTargets = websiteRoot?.querySelectorAll<HTMLElement>(
      "section, .service-card, .why-card, .testimonial-card, .faq-item, .price-card, .seo-svc-card, .dm-svc-card, .dm-why-card, .ppc-svc-card, .ppc-process-step, .ppc-case-card, .ppc-platform-item, .ppc-faq-item, .smm-svc-card, .webdev-svc-card, .webdev-tech-card, .about-value-card, .team-card, .contact-info-card, .contact-faq-item, .uiux-svc-card, .uiux-tool-card, .uiux-process-step, .uiux-port-card, .uiux-why-card, .uiux-result-card"
    );
    revealTargets?.forEach((item) => item.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -70px 0px" }
    );
    revealTargets?.forEach((item) => observer.observe(item));

    window.addEventListener("scroll", handleScroll);
    websiteRoot?.addEventListener("click", handleClick);
    const initialTargetId = window.location.hash.replace("#", "") || undefined;
    showPage(initialPage, Boolean(initialTargetId), initialTargetId);
    syncFaqIcons(websiteRoot ?? document);
    handleScroll();
    revealVisibleItems(document.getElementById(`page-${initialPage}`) ?? websiteRoot ?? document);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      websiteRoot?.removeEventListener("click", handleClick);
      delete window.showPage;
    };
  }, [initialPage, pathname, router]);

  return <div ref={websiteRef} dangerouslySetInnerHTML={{ __html: pageMarkup }} />;
}


