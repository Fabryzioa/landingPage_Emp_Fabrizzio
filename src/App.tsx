import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  Truck,
  Package,
  Smartphone,
  ChevronRight,
  Star,
  Users,
  ShoppingBag,
  Send,
  ExternalLink,
} from 'lucide-react';

// ============================================================
// CONFIGURACIÓN - REEMPLAZAR CON DATOS REALES
// ============================================================
const WHATSAPP_URL = 'WHATSAPP_URL'; // Reemplazar con enlace real de WhatsApp
const INSTAGRAM_URL = 'INSTAGRAM_URL'; // Reemplazar con URL real de Instagram
const GOOGLE_MAPS_URL = 'GOOGLE_MAPS_URL'; // Reemplazar con URL real de Google Maps
const DIRECCION = 'Rosario, Santa Fe'; // Reemplazar con dirección exacta
const HORARIOS = 'Próximamente'; // Reemplazar con horarios reales

// ============================================================
// DATOS
// ============================================================
const categorias = [
  {
    nombre: 'Aros',
    descripcion: 'Diseños para todos los estilos y ocasiones.',
    imagen: 'https://image.qwenlm.ai/generated-images/80745746-e11b-461d-8357-33d633cbb36e/_result.png',
  },
  {
    nombre: 'Cadenas',
    descripcion: 'Variedad de modelos y estilos.',
    imagen: 'https://image.qwenlm.ai/generated-images/072f65e8-4c9d-423b-841e-073cd9026a24/_result.png',
  },
  {
    nombre: 'Dijes',
    descripcion: 'Opciones para combinar y personalizar.',
    imagen: 'https://image.qwenlm.ai/generated-images/2ba32c74-67e2-46ee-9975-900c5a1158b4/_result.png',
  },
  {
    nombre: 'Anillos',
    descripcion: 'Diseños clásicos y modernos.',
    imagen: 'https://image.qwenlm.ai/generated-images/6d140ddc-15cb-41bf-bc4e-590ddf35ad08/_result.png',
  },
  {
    nombre: 'Piercings',
    descripcion: 'Variedad de opciones y estilos.',
    imagen: 'https://image.qwenlm.ai/generated-images/c80fe039-8765-466e-ae45-e0848a4931b1/_result.png',
  },
  {
    nombre: 'Pulseras',
    descripcion: 'Modelos para complementar cualquier look.',
    imagen: 'https://image.qwenlm.ai/generated-images/d3d1e883-0aca-41ba-914f-f7391a7075f1/_result.png',
  },
  {
    nombre: 'Bijouterie',
    descripcion: 'Una amplia selección de accesorios.',
    imagen: 'https://image.qwenlm.ai/generated-images/f9df7ed6-0241-4eef-b2f1-e96fe826c2c9/_result.png',
  },
  {
    nombre: 'Más accesorios',
    descripcion: 'Mostrar otros productos disponibles.',
    imagen: 'https://image.qwenlm.ai/generated-images/faf83294-f50f-4b7e-a522-94fea72a51e2/_result.png',
  },
];

const clientes = [
  { nombre: 'Cliente A', rubro: 'Negocio / Rubro', mapsUrl: '#' },
  { nombre: 'Cliente B', rubro: 'Negocio / Rubro', mapsUrl: '#' },
  { nombre: 'Cliente C', rubro: 'Negocio / Rubro', mapsUrl: '#' },
  { nombre: 'Cliente D', rubro: 'Negocio / Rubro', mapsUrl: '#' },
];

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Mayoristas', href: '#mayoristas' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

// ============================================================
// COMPONENTES
// ============================================================

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide text-charcoal">
              JOYAS <span className="text-gold">FABRIZIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-medium-gray hover:text-charcoal transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-lg"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-slide-down bg-white border-t border-light-gray pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-medium-gray hover:text-charcoal hover:bg-cream rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full text-sm font-medium"
              >
                <Phone size={16} />
                WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://image.qwenlm.ai/generated-images/f9df7ed6-0241-4eef-b2f1-e96fe826c2c9/_result.png"
          alt="Bijouterie y accesorios Joyas Fabrizio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-0">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
            Bijouterie y accesorios{' '}
            <span className="text-gold-gradient">para todos los estilos</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-medium-gray leading-relaxed max-w-xl">
            Más de 15 años acompañando a clientes y comercios desde Rosario hacia todo el país.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-charcoal hover:bg-dark-gray text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <ShoppingBag size={18} />
              Ver productos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Star className="text-gold flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-charcoal">+15 años de trayectoria</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Users className="text-gold flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-charcoal">Venta minorista y mayorista</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-end">
              <Truck className="text-gold flex-shrink-0" size={20} />
              <span className="text-sm font-medium text-charcoal">Envíos a todo el país</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Productos() {
  return (
    <section id="productos" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Todo lo que buscás,{' '}
            <span className="text-gold-gradient">en un solo lugar</span>
          </h2>
          <p className="mt-4 text-lg text-medium-gray">
            Trabajamos con una amplia variedad de bijouterie y accesorios para uso personal y para comercios.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((cat) => (
            <div
              key={cat.nombre}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="img-hover-zoom aspect-square">
                <img
                  src={cat.imagen}
                  alt={cat.nombre}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-charcoal">
                  {cat.nombre}
                </h3>
                <p className="mt-1 text-sm text-medium-gray">{cat.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Phone size={18} />
            Consultar productos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function MinoristaMayorista() {
  return (
    <section id="mayoristas" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Comprá como <span className="text-gold-gradient">quieras</span>
          </h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Minorista */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-light-gray/50">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
              <ShoppingBag className="text-gold" size={28} />
            </div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
              Venta Minorista
            </h3>
            <p className="text-medium-gray leading-relaxed mb-6">
              Encontrá accesorios y bijouterie para vos, para regalar o para complementar tu estilo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-dark-gray text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              <Phone size={16} />
              Consultar por WhatsApp
            </a>
          </div>

          {/* Mayorista */}
          <div className="bg-charcoal rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-14 h-14 bg-gold/20 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-gold" size={28} />
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-4">
                Venta Mayorista
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Abastecemos comercios y emprendimientos con variedad de productos y atención personalizada.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Atención a comercios',
                  'Variedad de productos',
                  'Más de 15 años de experiencia',
                  'Abastecimiento continuo',
                  'Envíos a todo el país',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <ChevronRight size={14} className="text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Send size={16} />
                Quiero comprar por mayor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Más de 15 años{' '}
              <span className="text-gold-gradient">construyendo confianza</span>
            </h2>
            <div className="mt-6 space-y-4 text-medium-gray leading-relaxed text-lg">
              <p>
                Joyas Fabrizio nació en Rosario como un emprendimiento familiar y, con más de 15 años de trayectoria, fue creciendo junto a sus clientes y comercios.
              </p>
              <p>
                Somos la Familia Vivani y trabajamos día a día para ofrecer variedad, atención personalizada y una relación comercial basada en la confianza.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold">+15</p>
                <p className="text-sm text-medium-gray mt-1">Años de trayectoria</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="font-[family-name:var(--font-heading)] text-3xl font-bold text-gold">100%</p>
                <p className="text-sm text-medium-gray mt-1">Atención personalizada</p>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="bg-cream rounded-3xl p-8 aspect-square flex items-center justify-center border border-light-gray/50">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-gold" size={36} />
                </div>
                <p className="text-medium-gray text-sm">
                  Familia Vivani
                </p>
                <p className="text-xs text-medium-gray/60 mt-1">
                  Foto del local / familia próximamente
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Clientes() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Ellos ya <span className="text-gold-gradient">confían en nosotros</span>
          </h2>
          <p className="mt-4 text-lg text-medium-gray">
            Hace años acompañamos a comercios y emprendimientos que eligen Joyas Fabrizio para abastecerse.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientes.map((cliente, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center border border-light-gray/50"
            >
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-gold" size={24} />
              </div>
              <h3 className="font-semibold text-charcoal text-lg">{cliente.nombre}</h3>
              <p className="text-sm text-medium-gray mt-1">{cliente.rubro}</p>
              <a
                href={cliente.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm text-gold hover:text-gold-dark font-medium transition-colors"
              >
                <MapPin size={14} />
                Ver en Google Maps
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-medium-gray/60 mt-8">
          * Datos de clientes pendientes de actualización. Próximamente más información.
        </p>
      </div>
    </section>
  );
}

function Envios() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Llegamos a <span className="text-gold-gradient">todo el país</span>
          </h2>
          <p className="mt-4 text-lg text-medium-gray">
            Estamos en Rosario, Santa Fe, y realizamos envíos a distintos puntos de Argentina.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <MapPin size={32} />, title: 'Rosario, Santa Fe', desc: 'Nuestra base de operaciones' },
            { icon: <Truck size={32} />, title: 'Envíos a todo el país', desc: 'Llegamos a donde nos necesites' },
            { icon: <Package size={32} />, title: 'Preparación de pedidos', desc: 'Cuidamos cada detalle' },
            { icon: <Smartphone size={32} />, title: 'Atención por WhatsApp', desc: 'Comunicación directa y rápida' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-light-gray/50"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gold">
                {item.icon}
              </div>
              <h3 className="font-semibold text-charcoal text-lg">{item.title}</h3>
              <p className="text-sm text-medium-gray mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FranjaConfianza() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '+15', label: 'años de trayectoria' },
            { value: 'Minorista y mayorista', label: 'dos modalidades de venta' },
            { value: 'Todo el país', label: 'realizamos envíos' },
            { value: 'Personalizada', label: 'atención para clientes y comercios' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-gold">
                {item.value}
              </p>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            ¿Buscás productos para vos{' '}
            <span className="text-gold-gradient">o para tu negocio?</span>
          </h2>
          <p className="mt-4 text-lg text-medium-gray">
            Escribinos y te ayudamos a encontrar lo que necesitás.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-gray/50">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="text-green-600" size={24} />
            </div>
            <h3 className="font-semibold text-charcoal text-lg">WhatsApp</h3>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* Ubicación */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-gray/50">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-gold" size={24} />
            </div>
            <h3 className="font-semibold text-charcoal text-lg">Ubicación</h3>
            <p className="text-sm text-medium-gray mt-2">{DIRECCION}</p>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gold hover:text-gold-dark font-medium transition-colors"
            >
              <MapPin size={14} />
              Cómo llegar
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Horarios */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-light-gray/50">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="text-gold" size={24} />
            </div>
            <h3 className="font-semibold text-charcoal text-lg">Horarios</h3>
            <p className="text-sm text-medium-gray mt-2">{HORARIOS}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white">
              JOYAS <span className="text-gold">FABRIZIO</span>
            </h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Bijouterie y accesorios desde Rosario hacia todo el país.
            </p>
            <p className="mt-2 text-gray-500 text-xs">
              Familia Vivani — Más de 15 años de trayectoria.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navegación</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-gold text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                <Phone size={14} />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 text-sm transition-colors"
              >
                <i className="fab fa-instagram text-sm"></i>
                Instagram
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-gold text-sm transition-colors"
              >
                <MapPin size={14} />
                Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Joyas Fabrizio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-16 bg-charcoal text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Escribinos!
      </span>
    </a>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================
export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-[family-name:var(--font-body)] text-charcoal antialiased">
      <Header />
      <main>
        <Hero />
        <Productos />
        <MinoristaMayorista />
        <Nosotros />
        <Clientes />
        <Envios />
        <FranjaConfianza />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
