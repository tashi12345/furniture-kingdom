import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  ShoppingBag, LayoutDashboard, Settings, Package, Users,
  Compass, LogOut, Heart, Plus, Edit2, Trash2, Phone, MapPin, Star
} from 'lucide-react';

// ── WhatsApp helper ────────────────────────────────────────────────────────
const WA_NUM = '923001234567';
const waLink = (msg) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`;

// ── Data ───────────────────────────────────────────────────────────────────
const CATEGORIES = ['All', 'Sofa Sets', 'Bedroom Sets', 'Dining Tables', 'Wardrobes', 'Office', 'TV Lounges'];

const PRODUCTS = [
  { id:1, cat:'Sofa Sets',    name:'Lahori 7-Seater Sofa Set',    price:'Rs. 85,000',  old:'Rs. 1,10,000', kist:'Rs. 7,500/month', badge:'Hot Deal', img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop' },
  { id:2, cat:'Bedroom Sets', name:'Sheesham Wood Bedroom Set',    price:'Rs. 1,25,000',old:'Rs. 1,60,000', kist:'Rs. 11,000/month',badge:'New',      img:'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=800&auto=format&fit=crop' },
  { id:3, cat:'Dining Tables',name:'6-Seater Walnut Dining Table', price:'Rs. 55,000',  old:null,           kist:'Rs. 5,000/month', badge:null,        img:'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop' },
  { id:4, cat:'Wardrobes',    name:'4-Door Sliding Wardrobe',      price:'Rs. 72,000',  old:'Rs. 90,000',   kist:'Rs. 6,500/month', badge:'Sale',      img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop' },
  { id:5, cat:'Office',       name:'Executive Office Desk Set',    price:'Rs. 48,000',  old:null,           kist:'Rs. 4,500/month', badge:'Popular',   img:'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=800&auto=format&fit=crop' },
  { id:6, cat:'Sofa Sets',    name:'L-Shape Corner Sofa (Velvet)', price:'Rs. 95,000',  old:'Rs. 1,20,000', kist:'Rs. 8,500/month', badge:'Best Seller',img:'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop' },
  { id:7, cat:'TV Lounges',   name:'Turkish Style TV Lounge Set',  price:'Rs. 1,40,000',old:'Rs. 1,75,000', kist:'Rs. 12,500/month',badge:'New',       img:'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop' },
  { id:8, cat:'Bedroom Sets', name:'Chiniot Carved Single Bed',    price:'Rs. 38,000',  old:null,           kist:'Rs. 3,500/month', badge:null,        img:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop' },
];

const TESTIMONIALS = [
  { name:'Ahmed Raza', city:'Lahore', text:'Bilkul shukriya! Sofa set bahut acha tha aur time par deliver hua. Quality zabardast hai. Definitely recommend karunga.', img:'https://i.pravatar.cc/100?img=12' },
  { name:'Sana Malik', city:'Karachi', text:'Bedroom set exactly as shown. The wood quality is excellent. Delivery team was also very professional. 5 stars!', img:'https://i.pravatar.cc/100?img=21' },
  { name:'Usman Tariq', city:'Islamabad', text:'WhatsApp par order kiya, usi din response mila. 3 din mein ghar aa gaya. Kist facility bhi bahut convenient hai.', img:'https://i.pravatar.cc/100?img=33' },
];

// ── Store Navbar ───────────────────────────────────────────────────────────
const StoreNavbar = () => (
  <>
    <div className="announce-bar">
      <span>🚚 Free Delivery in Lahore, Karachi & Islamabad</span>
      <span>📦 Easy Kist (Installments) Available</span>
      <span>🪵 100% Solid Wood Guarantee</span>
    </div>
    <nav className="navbar">
      <div className="navbar-logo">
        <Compass color="var(--primary)" size={28} />
        <span className="logo-text">Furniture <span>Kingdom</span></span>
      </div>
      <div className="navbar-links" style={{ display: 'flex' }}>
        <a href="#products">Products</a>
        <a href="#offers">Offers</a>
        <a href="#why-us">Why Us</a>
        <Link to="/admin" style={{ color: 'var(--primary)' }}>Admin Demo</Link>
      </div>
      <div className="navbar-actions">
        <a href={waLink('Hello! I want to inquire about furniture.')} target="_blank" rel="noreferrer" className="whatsapp-btn">
          💬 WhatsApp Order
        </a>
      </div>
    </nav>
  </>
);

// ── Store Home ─────────────────────────────────────────────────────────────
const StoreHome = () => {
  const [activecat, setActivecat] = useState('All');
  const filtered = activecat === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.cat === activecat);

  return (
    <div className="animate-fade-in">
      <StoreNavbar />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">🏆 Pakistan's #1 Custom Furniture Brand</div>
            <h1>Premium Furniture,<br /><em>Made for Pakistan.</em></h1>
            <p>Sheesham, Walnut & Teak wood craftsmanship since 1995. Custom orders from Rs. 25,000.</p>
            <p className="hero-urdu">اپنے گھر کو خوبصورت بنائیں — ہماری ٹیم آپ کی خدمت میں حاضر ہے</p>
            <div className="hero-actions">
              <a href="#products" className="btn btn-primary">🛋️ Shop Now</a>
              <a href={waLink('I want a free design consultation.')} target="_blank" rel="noreferrer" className="btn btn-outline">Free Consultation</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><h3>15,000+</h3><p>Happy Customers</p></div>
              <div className="hero-stat"><h3>28+</h3><p>Years of Craft</p></div>
              <div className="hero-stat"><h3>50+</h3><p>Cities Delivered</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Collection</div>
            <h2>Furniture for Every Room</h2>
            <p>Pure wood. Pakistani craftsmanship. Unbeatable prices.</p>
          </div>
          <div className="cat-tabs">
            {CATEGORIES.map(c => (
              <button key={c} className={`cat-tab${activecat === c ? ' active' : ''}`} onClick={() => setActivecat(c)}>{c}</button>
            ))}
          </div>
          <div className="products-grid">
            {filtered.map((p, i) => (
              <div key={p.id} className={`product-card animate-fade-in delay-${(i % 3) * 100}`}>
                <div className="product-img-wrap">
                  {p.badge && <span className={`product-badge${p.badge === 'Sale' ? ' sale' : p.badge === 'Hot Deal' ? ' hot' : ''}`}>{p.badge}</span>}
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <button className="wishlist-btn" aria-label="Wishlist"><Heart size={16} /></button>
                </div>
                <div className="product-info">
                  <p className="product-cat">{p.cat}</p>
                  <p className="product-name">{p.name}</p>
                  <div className="product-price-row">
                    <span className="product-price">{p.price}</span>
                    {p.old && <span className="product-price-old">{p.old}</span>}
                  </div>
                  <p className="product-kist">Kist: <span>{p.kist} × 12</span></p>
                  <div className="product-actions">
                    <a href={waLink(`I'm interested in: ${p.name} (${p.price})`)} target="_blank" rel="noreferrer" className="btn btn-whatsapp">💬 Order</a>
                    <a href={waLink(`I want to customize: ${p.name}`)} target="_blank" rel="noreferrer" className="btn btn-outline">Customize</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offer Banner ── */}
      <section className="section-sm" id="offers">
        <div className="container">
          <div className="offer-banner">
            <div>
              <div className="offer-tag">🔥 Limited Time</div>
              <h2>Ramadan Special — Up to 30% Off</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Order any bedroom or sofa set this month and get FREE delivery anywhere in Pakistan + 0% interest on 12-month kist plan.
              </p>
              <a href={waLink('I want to avail the Ramadan Special offer!')} target="_blank" rel="noreferrer" className="btn btn-primary">Claim Offer on WhatsApp</a>
            </div>
            <div className="offer-img">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=900&auto=format&fit=crop" alt="Special Offer Furniture" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section" id="why-us">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Choose Us</div>
            <h2>Trusted Across Pakistan</h2>
            <p>We don't just sell furniture — we craft experiences.</p>
          </div>
          <div className="features-grid">
            {[
              { icon:'🪵', title:'100% Solid Wood', desc:'No MDF. No particle board. Pure sheesham, walnut, and teak in every piece.' },
              { icon:'🚚', title:'Free Home Delivery', desc:'Free delivery in Lahore, Karachi & Islamabad. All other cities at low cost.' },
              { icon:'💳', title:'Easy Kist Plan', desc:'0% interest on 6-month installments. 12-month plans with minimal markup.' },
              { icon:'🔨', title:'Custom Orders', desc:'Order any design, size, or color. We build it exactly as you want it.' },
              { icon:'📞', title:'WhatsApp Support', desc:'Order, inquire, or track your delivery directly on WhatsApp — no app needed.' },
              { icon:'🛡️', title:'3-Year Warranty', desc:'All our furniture comes with a 3-year structural warranty. No questions asked.' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Customer Reviews</div>
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real families across Pakistan.</p>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-city">📍 {t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Compass color="var(--primary)" size={24} />
                <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Furniture Kingdom</span>
              </div>
              <p>Pakistan's trusted custom furniture brand since 1995. Crafting premium solid wood furniture for homes and offices across the country.</p>
              <a href={waLink('Hello Furniture Kingdom!')} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ marginTop: '1rem', width: 'fit-content' }}>💬 +92 300 1234567</a>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="#products">Sofa Sets</a>
              <a href="#products">Bedroom Sets</a>
              <a href="#products">Dining Tables</a>
              <a href="#products">Wardrobes</a>
              <a href="#products">Office Furniture</a>
              <a href="#products">TV Lounges</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#why-us">About Us</a>
              <a href="#offers">Current Offers</a>
              <Link to="/admin" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'block', marginBottom: '0.6rem', fontSize: '0.9rem' }}>Admin Portal</Link>
              <a href="#why-us">Warranty Policy</a>
              <a href="#why-us">Delivery Info</a>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item"><MapPin size={15} color="var(--primary)" /><div><strong>Showroom</strong>Main Boulevard, Gulberg III, Lahore</div></div>
              <div className="footer-contact-item"><Phone size={15} color="var(--primary)" /><div><strong>Phone</strong>+92 300 1234567</div></div>
              <div className="footer-contact-item"><span style={{ color: 'var(--primary)' }}>🕐</span><div><strong>Hours</strong>Mon–Sat: 10am – 8pm</div></div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2025 Furniture Kingdom. Crafted with ❤️ by <span>Gieek Software Solutions</span>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp ── */}
      <a href={waLink('Hello! I want to inquire about furniture.')} target="_blank" rel="noreferrer" className="float-whatsapp" title="Chat on WhatsApp">
        💬
      </a>
    </div>
  );
};

// ── Admin Layout (unchanged) ───────────────────────────────────────────────
const AdminLayout = () => (
  <div className="dashboard-layout animate-fade-in">
    <aside className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>
        <Compass color="var(--primary)" /><span>FK Admin</span>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        <Link to="/admin" className="nav-item active"><LayoutDashboard size={20} />Dashboard</Link>
        <Link to="/admin" className="nav-item"><Package size={20} />Products</Link>
        <Link to="/admin" className="nav-item"><ShoppingBag size={20} />Orders</Link>
        <Link to="/admin" className="nav-item"><Users size={20} />Customers</Link>
        <Link to="/admin" className="nav-item"><Settings size={20} />Settings</Link>
      </nav>
      <Link to="/" className="nav-item" style={{ marginTop: 'auto', color: '#ff6b6b' }}><LogOut size={20} />Exit Demo</Link>
    </aside>

    <main className="main-content">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '1.8rem' }}>Overview</h2>
          <p style={{ color: 'var(--text-muted)' }}>Welcome to the interactive showcase demo.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--primary)' }}>Live Demo Mode</div>
          <img src="https://i.pravatar.cc/100?img=11" alt="Admin" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { icon: <ShoppingBag size={24} />, label: 'Total Revenue', value: 'Rs. 42.8L', change: '+12.5%', color: 'var(--primary)', bg: 'rgba(201,148,58,0.2)' },
          { icon: <Package size={24} />, label: 'Active Orders', value: '142', change: '+5.2%', color: '#38bdf8', bg: 'rgba(56,189,248,0.2)' },
          { icon: <Users size={24} />, label: 'New Clients', value: '28', change: '-2.1%', color: '#a78bfa', bg: 'rgba(167,139,250,0.2)' },
          { icon: <Star size={24} />, label: 'Avg. Rating', value: '4.9 ★', change: '+0.2', color: '#4ade80', bg: 'rgba(74,222,128,0.2)' },
        ].map((s, i) => (
          <div key={i} className="card glass">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: s.bg, padding: '0.75rem', borderRadius: '8px', color: s.color }}>{s.icon}</div>
              <div><p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.label}</p><h3 style={{ fontSize: '1.5rem' }}>{s.value}</h3></div>
            </div>
            <p style={{ color: s.change.startsWith('-') ? '#f87171' : '#4ade80', fontSize: '0.85rem' }}>{s.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="card glass delay-200 animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2rem' }}>Recent Custom Orders</h3>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}><Plus size={16} /> Add Order</button>
        </div>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>Order ID</th><th>Client</th><th>Item</th><th>City</th><th>Status</th><th>Amount</th><th>Actions</th></tr></thead>
            <tbody>
              {[
                { id:'#ORD-092', client:'Ahmed Raza',  item:'7-Seater Sofa',     city:'Lahore',    status:'In Production', statusColor:'#facc15', amount:'Rs. 85,000' },
                { id:'#ORD-091', client:'Sana Malik',  item:'Bedroom Set',       city:'Karachi',   status:'Shipped',       statusColor:'#4ade80', amount:'Rs. 1,25,000' },
                { id:'#ORD-090', client:'Usman Tariq', item:'Dining Table',      city:'Islamabad', status:'Pending Design',statusColor:'#38bdf8', amount:'Rs. 55,000' },
                { id:'#ORD-089', client:'Fatima Shah', item:'Sliding Wardrobe',  city:'Rawalpindi',status:'Delivered',     statusColor:'#a78bfa', amount:'Rs. 72,000' },
              ].map(r => (
                <tr key={r.id}>
                  <td>{r.id}</td><td>{r.client}</td><td>{r.item}</td><td>📍 {r.city}</td>
                  <td><span style={{ color: r.statusColor, background: r.statusColor + '18', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>{r.status}</span></td>
                  <td style={{ color: 'var(--primary)', fontWeight: 600 }}>{r.amount}</td>
                  <td>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', marginRight: '0.5rem', cursor: 'pointer' }}><Edit2 size={16} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
);

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreHome />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
