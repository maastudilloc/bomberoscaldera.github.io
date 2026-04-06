import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Shield,
  Siren,
  Newspaper,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Download,
  Building2,
  FileText,
  CalendarDays,
  ArrowRight,
  Award,
  Truck,
  Camera,
  HeartHandshake,
  ExternalLink,
  Clock3,
  BadgeCheck,
  Target,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SITE = {
  name: "Cuerpo de Bomberos de Caldera",
  slogan: "Servicio, compromiso y vocación al servicio de la comunidad",
  emergencyPhone: "+56 9 1234 5678",
  emergencyLabel: "Emergencias Fono-WhatsApp",
  address: "Cuartel Central, Caldera, Región de Atacama, Chile",
  secondCompanyAddress: "Segunda Compañía, Caldera, Región de Atacama, Chile",
  email: "contacto@bomberoscaldera.cl",
  social: {
    facebook: "facebook.com/bomberoscaldera",
    instagram: "instagram.com/bomberoscaldera",
    x: "x.com/bomberoscaldera",
  },
};

const news = [
  {
    id: 1,
    title: "Jornada de capacitación fortalece respuesta operativa ante emergencias estructurales",
    date: "05 de abril de 2026",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Voluntarios y oficiales participaron en una instancia de actualización técnica enfocada en coordinación, seguridad y despliegue inicial.",
    featured: true,
  },
  {
    id: 2,
    title: "Calendario de postulaciones 2026 ya se encuentra disponible para nuevos aspirantes",
    date: "28 de marzo de 2026",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "La institución abrió un nuevo proceso de ingreso con enfoque en vocación de servicio, disciplina y compromiso comunitario.",
  },
  {
    id: 3,
    title: "Trabajo preventivo con la comunidad educativa refuerza cultura de autocuidado",
    date: "21 de marzo de 2026",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Se realizaron charlas y demostraciones prácticas para promover la prevención y la reacción oportuna ante emergencias.",
  },
  {
    id: 4,
    title: "Actualización de documentos institucionales para consulta pública",
    date: "15 de marzo de 2026",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Ya se encuentran disponibles reglamentos, órdenes del día y antecedentes institucionales en la sección de transparencia.",
  },
];

const documents = [
  { name: "Reglamento General Institucional", type: "PDF", updated: "Marzo 2026" },
  { name: "Órdenes del Día", type: "PDF", updated: "Abril 2026" },
  { name: "Actas y documentos públicos", type: "PDF", updated: "Febrero 2026" },
  { name: "Memoria Anual Institucional", type: "PDF", updated: "Enero 2026" },
];

const companies = [
  {
    slug: "primera",
    name: "Primera Compañía",
    short: "Primera",
    motto: "Honor, disciplina y servicio",
    specialty: "Respuesta estructural, apoyo comunitario y trabajo preventivo",
    barracks: "Cuartel Central",
    history:
      "La Primera Compañía representa una parte esencial de la historia institucional. Su labor ha estado marcada por la disponibilidad permanente, el trabajo disciplinado y el compromiso con la seguridad de la comunidad.",
    contact: "+56 9 1234 5678",
    email: "primera@bomberoscaldera.cl",
    vehicles: ["Carro bomba urbano", "Unidad de apoyo logístico", "Vehículo de transporte"],
    officers: ["Director de Compañía", "Capitán", "Teniente Primero", "Teniente Segundo"],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    slug: "segunda",
    name: "Segunda Compañía",
    short: "Segunda",
    motto: "Vocación, coraje y constancia",
    specialty: "Apoyo operativo, emergencias locales y servicio comunitario",
    barracks: "Cuartel Segunda Compañía",
    history:
      "La Segunda Compañía cumple una función estratégica en la cobertura territorial y en la articulación del trabajo institucional. Su crecimiento ha estado acompañado por una fuerte identidad, trabajo en equipo y espíritu de servicio.",
    contact: "+56 9 9876 5432",
    email: "segunda@bomberoscaldera.cl",
    vehicles: ["Carro de primera respuesta", "Unidad multipropósito", "Camioneta institucional"],
    officers: ["Director de Compañía", "Capitán", "Teniente Primero", "Teniente Segundo"],
    gallery: [
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const quickLinks = [
  {
    title: "Noticias",
    description: "Información oficial, comunicados y actividades institucionales.",
    href: "/noticias",
    icon: Newspaper,
  },
  {
    title: "Compañías",
    description: "Conoce la Primera y Segunda Compañía, su historia y especialidad.",
    href: "/companias/primera",
    icon: Building2,
  },
  {
    title: "Hazte voluntario",
    description: "Revisa requisitos, fechas y proceso de postulación.",
    href: "/hazte-voluntario",
    icon: Users,
  },
  {
    title: "Emergencias",
    description: "Canal rápido de contacto para emergencias y orientación.",
    href: "/contacto",
    icon: Siren,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function Shell({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-medium">
          <Shield className="h-4 w-4 text-red-500" />
          <span>Portal institucional oficial</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-zinc-200">
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" />{SITE.emergencyPhone}</span>
          <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />{SITE.email}</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);

  const navItemClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive ? "bg-red-600 text-white" : "text-slate-800 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white shadow-sm">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Institucional</p>
            <h1 className="text-base font-bold leading-tight text-slate-950 sm:text-lg">{SITE.name}</h1>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" className={navItemClass}>Inicio</NavLink>
          <NavLink to="/institucion" className={navItemClass}>Institución</NavLink>

          <div className="relative">
            <button
              onClick={() => setCompanyMenu((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Compañías <ChevronDown className="h-4 w-4" />
            </button>
            {companyMenu && (
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Link onClick={() => setCompanyMenu(false)} to="/companias/primera" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Primera Compañía
                </Link>
                <Link onClick={() => setCompanyMenu(false)} to="/companias/segunda" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Segunda Compañía
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/noticias" className={navItemClass}>Noticias</NavLink>
          <NavLink to="/contacto" className={navItemClass}>Contacto</NavLink>
          <NavLink to="/hazte-voluntario" className={navItemClass}>Hazte voluntario</NavLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="outline" size="icon" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <MobileNavLink to="/" label="Inicio" onNavigate={() => setOpen(false)} />
            <MobileNavLink to="/institucion" label="Institución" onNavigate={() => setOpen(false)} />
            <MobileNavLink to="/companias/primera" label="Primera Compañía" onNavigate={() => setOpen(false)} />
            <MobileNavLink to="/companias/segunda" label="Segunda Compañía" onNavigate={() => setOpen(false)} />
            <MobileNavLink to="/noticias" label="Noticias" onNavigate={() => setOpen(false)} />
            <MobileNavLink to="/contacto" label="Contacto" onNavigate={() => setOpen(false)} />
            <MobileNavLink to="/hazte-voluntario" label="Hazte voluntario" onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNavLink({ to, label, onNavigate }) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        `rounded-2xl px-4 py-3 text-sm font-semibold ${isActive ? "bg-red-600 text-white" : "bg-slate-50 text-slate-900"}`
      }
    >
      {label}
    </NavLink>
  );
}

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-600">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=80"
          alt="Voluntarios en acción"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
      </div>

      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl">
          <Badge className="mb-5 rounded-full bg-white/10 px-4 py-1.5 text-white hover:bg-white/10">
            Portal oficial · Información pública · Transparencia
          </Badge>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            {SITE.slogan}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-2xl bg-red-600 text-white hover:bg-red-700">
              <Link to="/hazte-voluntario">Hazte voluntario</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-2xl border border-white/20 bg-white/10 text-white hover:bg-white/20">
              <Link to="/contacto">Contacto y emergencias</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <QuickFact icon={Phone} label="Emergencias" value={SITE.emergencyPhone} />
            <QuickFact icon={CalendarDays} label="Postulaciones" value="Próximo proceso: mayo 2026" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.href}>
                <Card className="h-full rounded-3xl border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600/90">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="pt-4 text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-slate-200">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function QuickFact({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-red-400">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-slate-300">{label}</p>
          <p className="font-semibold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <Shell>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Accesos rápidos"
          title="Información clara, pública y siempre disponible"
          description="El portal institucional está organizado para facilitar la consulta de noticias, compañías, transparencia, contacto y procesos de voluntariado desde cualquier dispositivo."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.05 }}>
                <Card className="h-full rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="pt-4 text-xl text-slate-950">{item.title}</CardTitle>
                    <CardDescription className="text-slate-600">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full rounded-2xl">
                      <Link to={item.href}>Ver sección <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Card className="rounded-3xl border-slate-200 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl">Resumen institucional</CardTitle>
              <CardDescription>Transparencia, historia y organización disponibles para consulta pública.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <InfoRow icon={Shield} title="Historia" text="Conoce los hitos institucionales y la trayectoria de servicio a la comunidad." />
              <InfoRow icon={FileText} title="Transparencia" text="Accede a reglamentos, órdenes del día y documentos institucionales." />
              <InfoRow icon={Phone} title="Contacto" text="Encuentra teléfonos, correo institucional, direcciones y formularios." />
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:col-span-2 md:grid-cols-2">
            <EmergencyCard />
            <VolunteerCard />
            <TransparencyCard />
            <ContactCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Noticias destacadas"
          title="Actualidad institucional y servicio a la comunidad"
          description="Espacio preparado para publicar noticias, comunicados, actividades y actualizaciones relevantes de forma continua."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NewsFeaturedCard article={news[0]} />
          </div>
          <div className="space-y-6">
            {news.slice(1, 4).map((article) => (
              <NewsCompactCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}

function InfoRow({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold text-slate-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function EmergencyCard() {
  return (
    <Card className="rounded-3xl border-red-200 bg-red-600 text-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl"><Siren className="h-6 w-6" /> Emergencias</CardTitle>
        <CardDescription className="text-red-50">Información visible y prioritaria para orientación rápida.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{SITE.emergencyPhone}</p>
        <p className="mt-2 text-sm text-red-50">Canal de contacto rápido por teléfono o WhatsApp.</p>
      </CardContent>
    </Card>
  );
}

function VolunteerCard() {
  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl"><Users className="h-5 w-5 text-slate-950" /> Hazte voluntario</CardTitle>
        <CardDescription>Postulaciones, requisitos y formación inicial.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">Proceso preparado para difundir fechas, requisitos y contacto directo con la institución.</p>
      </CardContent>
    </Card>
  );
}

function TransparencyCard() {
  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl"><FileText className="h-5 w-5 text-slate-950" /> Transparencia</CardTitle>
        <CardDescription>Documentos públicos y acceso a información institucional.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">Sección pensada para mantener reglamentos, órdenes del día y antecedentes siempre disponibles.</p>
      </CardContent>
    </Card>
  );
}

function ContactCard() {
  return (
    <Card className="rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl"><MapPin className="h-5 w-5 text-slate-950" /> Contacto</CardTitle>
        <CardDescription>Direcciones, correo institucional, teléfonos y redes sociales.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-slate-600">Incluye formularios, mapas con OpenStreetMap y espacios para cada unidad operativa.</p>
      </CardContent>
    </Card>
  );
}

function InstitutionPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Institución"
        title="Identidad, organización y acceso público a la información"
        description="Una sección diseñada para reflejar historia, estructura institucional, transparencia y cercanía con la comunidad."
      />

      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Historia institucional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 leading-7">
              <p>
                El Cuerpo de Bomberos de Caldera proyecta en este espacio una narración institucional clara, sobria y accesible, pensada para compartir su trayectoria, hitos relevantes y compromiso permanente con la protección de la comunidad.
              </p>
              <p>
                Este bloque está preparado para incorporar texto definitivo, fotografías históricas, aniversarios institucionales y líneas de tiempo editables desde la plataforma.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Target className="h-5 w-5 text-red-600" /> Misión</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 leading-7">
                Brindar servicio oportuno, profesional y solidario a la comunidad, promoviendo la prevención, la respuesta eficiente y el resguardo de la vida y los bienes.
              </CardContent>
            </Card>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Eye className="h-5 w-5 text-red-600" /> Visión</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-700 leading-7">
                Consolidarse como una institución confiable, moderna y cercana, reconocida por su disciplina, vocación de servicio y transparencia pública.
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentSection>

      <ContentSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Organización"
          title="Estructura institucional y mandos"
          description="Bloques preparados para mostrar la organización oficial, directorio, oficiales, miembros honorarios y dependencias de forma clara y ordenada."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {[
            ["Superintendencia", "Espacio para funciones, nombres y atribuciones del nivel administrativo institucional."],
            ["Comandancia", "Espacio para la estructura operativa, mando de emergencias y coordinación institucional."],
            ["Directorio", "Listado preparado para actualizar cargos, periodos y responsabilidades."],
            ["Miembros Honorarios", "Sección destinada al reconocimiento y memoria institucional."],
          ].map(([title, text]) => (
            <Card key={title} className="rounded-3xl">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-600">{text}</CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 rounded-3xl border-dashed border-slate-300">
          <CardHeader>
            <CardTitle>Organigrama institucional</CardTitle>
            <CardDescription>Placeholder listo para reemplazar por imagen, PDF o bloque gráfico editable.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-center text-slate-500">
              Espacio reservado para organigrama institucional
            </div>
          </CardContent>
        </Card>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Dependencias y cuarteles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-950">Cuartel Central</p>
                <p className="mt-1 text-sm text-slate-600">{SITE.address}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-950">Segunda Compañía</p>
                <p className="mt-1 text-sm text-slate-600">{SITE.secondCompanyAddress}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Documentos institucionales</CardTitle>
              <CardDescription>Sección con foco en transparencia y acceso simple a información pública.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {documents.map((doc) => (
                <div key={doc.name} className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-slate-950">{doc.name}</p>
                    <p className="text-sm text-slate-500">{doc.type} · Actualizado {doc.updated}</p>
                  </div>
                  <Button variant="outline" className="rounded-2xl">
                    <Download className="mr-2 h-4 w-4" /> Descargar
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </Shell>
  );
}

function CompanyPage({ company }) {
  return (
    <Shell>
      <PageHero
        eyebrow="Compañías"
        title={company.name}
        description={`${company.motto} · ${company.specialty}`}
      />

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="rounded-3xl lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Historia y lema</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 leading-7">
              <p>{company.history}</p>
              <div className="rounded-2xl bg-red-50 p-4 text-red-700">
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">Lema</p>
                <p className="mt-2 text-xl font-bold">{company.motto}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-xl">Resumen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700">
              <SummaryItem icon={Award} label="Especialidad" value={company.specialty} />
              <SummaryItem icon={Building2} label="Cuartel" value={company.barracks} />
              <SummaryItem icon={Phone} label="Contacto" value={company.contact} />
              <SummaryItem icon={Mail} label="Correo" value={company.email} />
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection className="bg-slate-50">
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="rounded-3xl lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl"><Truck className="h-5 w-5 text-red-600" /> Material mayor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {company.vehicles.map((vehicle) => (
                <div key={vehicle} className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {vehicle}
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">
                Espacio preparado para inventario detallado y fichas técnicas.
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Oficiales y voluntarios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {company.officers.map((officer) => (
                <div key={officer} className="rounded-2xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                  {officer}
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">
                Bloque editable para nómina de voluntarios, cargos y especialidades.
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Información de contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-700">
              <SummaryItem icon={MapPin} label="Cuartel" value={company.barracks} />
              <SummaryItem icon={Phone} label="Teléfono" value={company.contact} />
              <SummaryItem icon={Mail} label="Correo" value={company.email} />
              <SummaryItem icon={Clock3} label="Disponibilidad" value="Atención institucional según turnos y actividades programadas" />
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="Galería"
          title={`Imágenes de ${company.name}`}
          description="Espacio visual preparado para fotografías operativas, actividades internas y vínculo con la comunidad."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {company.gallery.map((image, idx) => (
            <div key={idx} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img src={image} alt={`Galería ${company.name} ${idx + 1}`} className="h-64 w-full object-cover" />
            </div>
          ))}
          <div className="flex min-h-[256px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center text-slate-500">
            Placeholder para nuevas imágenes institucionales
          </div>
        </div>
      </ContentSection>
    </Shell>
  );
}

function SummaryItem({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-slate-50 p-4">
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
        <p className="mt-1 text-sm leading-6 text-slate-700">{value}</p>
      </div>
    </div>
  );
}

function NewsPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Noticias"
        title="Portal de noticias institucional"
        description="Diseño preparado para crecer con nuevas publicaciones, comunicados oficiales, actividades y cobertura comunitaria."
      />
      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <NewsFeaturedCard article={news[0]} />
          </div>
          <div className="space-y-6">
            {news.slice(1).map((article) => (
              <NewsCompactCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </ContentSection>
    </Shell>
  );
}

function NewsFeaturedCard({ article }) {
  return (
    <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-sm">
      <div className="grid lg:grid-cols-2">
        <div className="min-h-[280px]">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <Badge className="w-fit rounded-full bg-red-50 text-red-700 hover:bg-red-50">Noticia principal</Badge>
          <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">{article.title}</h3>
          <p className="mt-3 text-sm font-medium text-slate-500">{article.date}</p>
          <p className="mt-4 leading-7 text-slate-600">{article.excerpt}</p>
          <div className="mt-6">
            <Button className="rounded-2xl bg-slate-950 text-white hover:bg-slate-800">Leer publicación</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function NewsCompactCard({ article }) {
  return (
    <Card className="overflow-hidden rounded-3xl border-slate-200 shadow-sm">
      <div className="grid grid-cols-[112px_1fr]">
        <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">{article.date}</p>
          <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-slate-950">{article.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-600">{article.excerpt}</p>
        </div>
      </div>
    </Card>
  );
}

function VolunteerPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Voluntariado"
        title="Súmate con vocación de servicio"
        description="Una sección pensada para informar, orientar y acompañar el proceso de ingreso de nuevos voluntarios."
      />

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Requisitos generales</CardTitle>
              <CardDescription>Texto de ejemplo realista y fácil de reemplazar por la institución.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              {[
                "Tener motivación de servicio a la comunidad.",
                "Presentar antecedentes y documentación solicitada por la institución.",
                "Participar del proceso de entrevista y evaluación interna.",
                "Asumir compromiso con formación, disciplina y trabajo en equipo.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-red-600" />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-red-200 bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Fechas de postulación</CardTitle>
              <CardDescription className="text-red-50">Bloque destacado para informar convocatorias vigentes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-sm uppercase tracking-[0.16em] text-red-100">Próxima convocatoria</p>
                <p className="mt-2 text-2xl font-bold">Mayo 2026</p>
              </div>
              <p className="text-sm leading-6 text-red-50">
                Este espacio puede vincularse posteriormente a formularios y almacenamiento mediante el backend integrado de Horizons.
              </p>
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Proceso"
          title="Postulación paso a paso"
          description="Recorrido claro, accesible y fácil de seguir en escritorio y celular."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["1. Consulta", "Revisa requisitos, fechas y canales oficiales de contacto."],
            ["2. Postulación", "Completa el formulario o envía la información solicitada."],
            ["3. Evaluación", "Participa del proceso interno de entrevistas y revisión."],
            ["4. Formación", "Inicia tu etapa de inducción y formación institucional."],
          ].map(([title, text]) => (
            <Card key={title} className="rounded-3xl">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-slate-600">{text}</CardContent>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl"><HeartHandshake className="h-6 w-6 text-red-600" /> Vocación, compromiso y formación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 leading-7">
              <p>
                Ser voluntario implica servicio responsable, disciplina, formación continua y compromiso con el trabajo conjunto. Esta sección destaca la dimensión humana y pública de la institución.
              </p>
              <p>
                El contenido está preparado para integrar testimonios, preguntas frecuentes, requisitos específicos y material informativo oficial.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Formulario de postulación</CardTitle>
              <CardDescription>Diseño listo para conectar con Horizons si se requiere persistencia.</CardDescription>
            </CardHeader>
            <CardContent>
              <VolunteerForm />
            </CardContent>
          </Card>
        </div>
      </ContentSection>
    </Shell>
  );
}

function VolunteerForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Formulario de ejemplo enviado. Conecta este bloque a Horizons para almacenar postulaciones reales.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Input className="rounded-2xl" placeholder="Nombre" />
        <Input className="rounded-2xl" placeholder="Apellido" />
      </div>
      <Input className="rounded-2xl" type="email" placeholder="Correo electrónico" />
      <Input className="rounded-2xl" placeholder="Teléfono" />
      <Textarea className="min-h-[120px] rounded-2xl" placeholder="Cuéntanos por qué deseas ingresar a la institución" />
      <Button type="submit" className="w-full rounded-2xl bg-red-600 text-white hover:bg-red-700">Enviar postulación</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}

function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Contacto"
        title="Canales institucionales y ubicación"
        description="Toda la información pública necesaria para comunicarse con la institución de manera clara y directa."
      />

      <ContentSection>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Datos institucionales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <SummaryItem icon={MapPin} label="Dirección" value={SITE.address} />
              <SummaryItem icon={Phone} label="Teléfono" value={SITE.emergencyPhone} />
              <SummaryItem icon={Mail} label="Correo" value={SITE.email} />
              <SummaryItem icon={ExternalLink} label="Redes sociales" value="Facebook, Instagram y X institucionales" />
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-2xl">Formulario de contacto</CardTitle>
              <CardDescription>Preparado para consultas generales y futuras integraciones.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </ContentSection>

      <ContentSection className="bg-slate-50">
        <SectionHeading
          eyebrow="Mapas"
          title="Ubicación de cuarteles"
          description="Integración con OpenStreetMap para facilitar la referencia territorial de las dependencias institucionales."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <MapCard title="Cuartel Central" subtitle={SITE.address} embedSrc="https://www.openstreetmap.org/export/embed.html?bbox=-70.825%2C-27.072%2C-70.810%2C-27.058&layer=mapnik" />
          <MapCard title="Segunda Compañía" subtitle={SITE.secondCompanyAddress} embedSrc="https://www.openstreetmap.org/export/embed.html?bbox=-70.825%2C-27.075%2C-70.807%2C-27.057&layer=mapnik" />
        </div>
      </ContentSection>
    </Shell>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Mensaje de ejemplo enviado. Puedes conectar este formulario a Horizons para recepción real.");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input className="rounded-2xl" placeholder="Nombre completo" />
      <Input className="rounded-2xl" type="email" placeholder="Correo electrónico" />
      <Input className="rounded-2xl" placeholder="Asunto" />
      <Textarea className="min-h-[140px] rounded-2xl" placeholder="Escribe tu mensaje" />
      <Button type="submit" className="w-full rounded-2xl bg-slate-950 text-white hover:bg-slate-800">Enviar mensaje</Button>
      {status && <p className="text-sm text-slate-600">{status}</p>}
    </form>
  );
}

function MapCard({ title, subtitle, embedSrc }) {
  return (
    <Card className="overflow-hidden rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <iframe title={title} src={embedSrc} className="h-[320px] w-full" loading="lazy" />
        </div>
      </CardContent>
    </Card>
  );
}

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}

function ContentSection({ children, className = "" }) {
  return <section className={className}><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">{children}</div></section>;
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Institucional</p>
              <h3 className="font-bold">{SITE.name}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-300">Portal institucional oficial orientado a la información pública, transparencia y vinculación con la comunidad.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Enlaces rápidos</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <FooterLink to="/">Inicio</FooterLink>
            <FooterLink to="/institucion">Institución</FooterLink>
            <FooterLink to="/noticias">Noticias</FooterLink>
            <FooterLink to="/hazte-voluntario">Hazte voluntario</FooterLink>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Compañías</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <FooterLink to="/companias/primera">Primera Compañía</FooterLink>
            <FooterLink to="/companias/segunda">Segunda Compañía</FooterLink>
            <FooterLink to="/contacto">Contacto</FooterLink>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Contacto</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{SITE.address}</p>
            <p>{SITE.emergencyPhone}</p>
            <p>{SITE.email}</p>
          </div>
        </div>
      </div>
      <Separator className="bg-slate-800" />
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 {SITE.name}. Todos los derechos reservados.</p>
        <p>Sitio preparado para administración de contenidos institucionales y futuras integraciones.</p>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <div>
      <Link to={to} className="transition hover:text-white">
        {children}
      </Link>
    </div>
  );
}

function AppRoutes() {
  const companyRoutes = useMemo(() => {
    return companies.reduce((acc, company) => {
      acc[company.slug] = company;
      return acc;
    }, {});
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/institucion" element={<InstitutionPage />} />
      <Route path="/noticias" element={<NewsPage />} />
      <Route path="/hazte-voluntario" element={<VolunteerPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/companias/primera" element={<CompanyPage company={companyRoutes.primera} />} />
      <Route path="/companias/segunda" element={<CompanyPage company={companyRoutes.segunda} />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
