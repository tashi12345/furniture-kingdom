import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { ShoppingBag, LayoutDashboard, Settings, Package, Users, Compass, Search, Menu, LogOut, Heart, Plus, Edit2, Trash2 } from 'lucide-react';

// --- Storefront Components ---

const StoreNavbar = () => (
  <nav className="glass" style={{ margin: '1rem', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: '1rem', zIndex: 100 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
      <Compass color="var(--primary)" />
      <span>Furniture Kingdom</span>
    </div>
    <div style={{ display: 'flex', gap: '2rem', display: 'none', '@media(min-width: 768px)': { display: 'flex' } }}>
      <Link to="/" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Home</Link>
      <Link to="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Collections</Link>
      <Link to="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Custom Orders</Link>
      <Link to="/admin" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Admin Demo</Link>
    </div>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Search className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', border: 'none' }} />
      <ShoppingBag className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', border: 'none' }} />
    </div>
  </nav>
);

const StoreHome = () => {
  const products = [
    { id: 1, name: 'Velvet Sovereign Sofa', price: '$1,299', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop', badge: 'New' },
    { id: 2, name: 'Oak Minimalist Dining Table', price: '$899', img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: 'Ergo Mesh Executive Chair', price: '$450', img: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=800&auto=format&fit=crop', badge: 'Popular' },
    { id: 4, name: 'Nordic Lounge Chair', price: '$599', img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="animate-fade-in">
      <StoreNavbar />
      
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ marginBottom: '1.5rem' }}>Crafting Spaces of Elegance.</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Discover premium, custom-built furniture designed to elevate your living and workspace. Cross-platform excellence at your fingertips.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary">Shop Collection</button>
              <Link to="/admin" className="btn btn-outline" style={{ textDecoration: 'none' }}>View Admin Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '5rem 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Featured Pieces</h2>
            <p style={{ color: 'var(--text-muted)' }}>Meticulously crafted for modern aesthetics.</p>
          </div>
          <button className="btn btn-outline" style={{ border: 'none' }}>View All →</button>
        </div>

        <div className="grid-3 delay-200 animate-fade-in">
          {products.map(product => (
            <div key={product.id} className="card glass">
              <div className="card-img-wrapper">
                {product.badge && <span className="badge">{product.badge}</span>}
                <img src={product.img} alt={product.name} className="card-img" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{product.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{product.price}</p>
                </div>
                <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  <Heart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// --- Admin Components ---

const AdminLayout = () => {
  return (
    <div className="dashboard-layout animate-fade-in">
      <aside className="sidebar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem' }}>
          <Compass color="var(--primary)" />
          <span>FK Admin</span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link to="/admin" className="nav-item active">
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link to="/admin" className="nav-item">
            <Package size={20} />
            Products
          </Link>
          <Link to="/admin" className="nav-item">
            <ShoppingBag size={20} />
            Orders
          </Link>
          <Link to="/admin" className="nav-item">
            <Users size={20} />
            Customers
          </Link>
          <Link to="/admin" className="nav-item">
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        <Link to="/" className="nav-item" style={{ marginTop: 'auto', color: '#ff6b6b' }}>
          <LogOut size={20} />
          Exit Demo
        </Link>
      </aside>

      <main className="main-content">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem' }}>Overview</h2>
            <p style={{ color: 'var(--text-muted)' }}>Welcome to the interactive showcase demo.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--primary)' }}>
              Live Demo Mode
            </div>
            <img src="https://i.pravatar.cc/100?img=11" alt="Admin" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary)' }} />
          </div>
        </header>

        <div className="grid-3 delay-100 animate-fade-in" style={{ marginBottom: '2rem' }}>
          <div className="card glass">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(157, 129, 97, 0.2)', padding: '0.75rem', borderRadius: '8px', color: 'var(--primary)' }}>
                <ShoppingBag size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total Revenue</p>
                <h3 style={{ fontSize: '1.5rem' }}>$42,890</h3>
              </div>
            </div>
            <p style={{ color: '#4ade80', fontSize: '0.85rem' }}>+12.5% from last month</p>
          </div>

          <div className="card glass">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(56, 189, 248, 0.2)', padding: '0.75rem', borderRadius: '8px', color: '#38bdf8' }}>
                <Package size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Orders</p>
                <h3 style={{ fontSize: '1.5rem' }}>142</h3>
              </div>
            </div>
            <p style={{ color: '#4ade80', fontSize: '0.85rem' }}>+5.2% from last month</p>
          </div>

          <div className="card glass">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(167, 139, 250, 0.2)', padding: '0.75rem', borderRadius: '8px', color: '#a78bfa' }}>
                <Users size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>New Clients</p>
                <h3 style={{ fontSize: '1.5rem' }}>28</h3>
              </div>
            </div>
            <p style={{ color: '#f87171', fontSize: '0.85rem' }}>-2.1% from last month</p>
          </div>
        </div>

        <div className="card glass delay-200 animate-fade-in">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem' }}>Recent Custom Orders</h3>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
              <Plus size={16} style={{ marginRight: '0.5rem' }} /> Add Order
            </button>
          </div>
          
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Client</th>
                  <th>Item</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD-092</td>
                  <td>Sarah Jenkins</td>
                  <td>Custom Oak Desk</td>
                  <td><span style={{ color: '#facc15', background: 'rgba(250, 204, 21, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>In Production</span></td>
                  <td>$1,450</td>
                  <td>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', marginRight: '0.5rem', cursor: 'pointer' }}><Edit2 size={16} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
                <tr>
                  <td>#ORD-091</td>
                  <td>Michael Chen</td>
                  <td>Velvet Sectional</td>
                  <td><span style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>Shipped</span></td>
                  <td>$2,800</td>
                  <td>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', marginRight: '0.5rem', cursor: 'pointer' }}><Edit2 size={16} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
                <tr>
                  <td>#ORD-090</td>
                  <td>Emma Wilson</td>
                  <td>Marble Coffee Table</td>
                  <td><span style={{ color: '#38bdf8', background: 'rgba(56, 189, 248, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.85rem' }}>Pending Design</span></td>
                  <td>$850</td>
                  <td>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', marginRight: '0.5rem', cursor: 'pointer' }}><Edit2 size={16} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#f87171', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- App Setup ---

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StoreHome />} />
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
