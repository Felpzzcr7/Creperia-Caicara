import { useEffect, useRef, useState } from "react";
import {
  Menu as MenuIcon,
  X,
  Salad,
  Beef,
  Cherry,
  Milk,
  MapPin,
  Instagram,
  Clock,
  Utensils,
  ExternalLink,
} from "lucide-react";
import "./App.css";

import minhaLogo from './assets/img/logo-creperia.jpg';
import imgLamberto from "./assets/img/lamberto.png";
import imgPrumirim from "./assets/img/prumirim.png";
import imgToninhas from "./assets/img/toninhas.png";
import imgPortugues from "./assets/img/portugues.png";
import imgLazaro from "./assets/img/lazaro.png";
import imgPraiaGrande from "./assets/img/praia-grande.png";


const INSTAGRAM_URL = "https://www.instagram.com/creperia_caicara/";

const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "cardapio", label: "Cardápio" },
  { id: "localizacao", label: "Localização" },
];

const SALGADOS = [
  {
    nome: "Português",
    ingredientes: "Brócolis, milho, bacon, mussarela e alho frito.",
    descricao:
      "Não é só de crepe doce que se vive esse feed né gente? Trouxemos aqui um dos nossos queridinhos, o famoso crepe “português”, feito com brócolis, bacon, milho, mussarela e alho frito. É realmente irresistível.",
    imagem: imgPortugues,
    Icon: Salad,
  },
  {
    nome: "Lázaro",
    ingredientes: "Costela, tomate, cebola e catupiry.",
    descricao:
      "Um crepe que conquista pelo recheio, surpreende pela crocância e faz você querer repetir. Vem provar essa delícia.",
    imagem: imgLazaro,
    Icon: Beef,
  },
  {
    nome: "Praia Grande",
    ingredientes: "Calabresa, cebola, tomate e catupiry.",
    descricao:
      "Uma combinação irresistível: calabresa, cebola, tomate e catupiry no ponto certo. Um clássico que nunca falha!",
    imagem: imgPraiaGrande,
    Icon: Utensils,
  },
];

const DOCES = [
  {
    nome: "Lamberto",
    ingredientes: "Morango, nutella e confete.",
    descricao:
      "Se alegria tivesse sabor, com certeza seria esse crepe! Crepe Fazenda é a combinação perfeita de nutella, morango e confete.",
    imagem: imgLamberto,
    Icon: Cherry,
  },
  {
    nome: "Prumirim",
    ingredientes: "Oreo, leite em pó e nutella.",
    descricao:
      "Se só Oreo já é bom, imagina com leite em pó e nutella! Crepe Prumirim tem sido o queridinho de muitos. Qual o seu crepe doce preferido?",
    imagem: imgPrumirim,
    Icon: Milk,
  },
  {
    nome: "Toninhas",
    ingredientes: "Nutella, morango e KitKat.",
    descricao:
      "Combinação de Nutella, morango e KitKat é irresistível! Crepe Toninhas tem um lugar no coração do pessoal.",
    imagem: imgToninhas,
    Icon: Cherry,
  },
];

const LOCAIS = [
  { 
    nome: "Praia da Santa Rita", 
    detalhe: "Ubatuba, SP", 
    busca: "Creperia Caiçara Praia da Santa Rita, Ubatuba, SP", 
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14636.436746399759!2d-45.12178091284182!3d-23.49257639999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd517620607239%3A0x2bd33fca777bdea4!2sCreperia%20Cai%C3%A7ara!5e0!3m2!1spt-BR!2sbr!4v1790721564926!5m2!1spt-BR!2sbr"
  },
  { 
    nome: "Praia Grande", 
    detalhe: "Ubatuba, SP", 
    busca: "Creperia Caiçara Praia Grande, Ubatuba, SP",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14636.436746399759!2d-45.12178091284182!3d-23.49257639999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd53006d46f50b%3A0xc15ebc38adda16d9!2sCreperia%20cai%C3%A7ara!5e0!3m2!1spt-BR!2sbr!4v1790721516384!5m2!1spt-BR!2sbr"
  },
];

const mapsLink = (busca) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="header">
      <div className="container header__inner"> 
        <a
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            go("inicio");
          }}
        >
       <img className="logo-creperia" src={minhaLogo} alt="logo" />
          <span>Creperia Caiçara</span>
        </a>

        <button
          className="header__toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav__link"
              onClick={(e) => {
                e.preventDefault();
                go(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">Crepe Francês Artesanal em Ubatuba</h1>
        <p className="hero__subtitle">
          Desde 2022 transformando ingredientes em sorrisos. Doces &amp; Salgados.
        </p>
        <button className="btn-primary" onClick={() => scrollToSection("cardapio")}>
          Ver Cardápio
        </button>
      </div>
      <svg className="hero__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,45 C240,95 480,0 720,40 C960,80 1200,10 1440,50 L1440,90 L0,90 Z" />
      </svg>
    </section>
  );
}

function CrepeCard({ crepe, variante, onOpen }) {
  const { nome, ingredientes, imagem, Icon } = crepe;
  return (
    <button
      type="button"
      className={`crepe-card crepe-card--${variante}`}
      onClick={() => onOpen(crepe, variante)}
      aria-haspopup="dialog"
    >
      <span className="crepe-card__media">
        {imagem ? (
          <img src={imagem} alt={`Crepe ${nome}`} loading="lazy" />
        ) : (
          <Icon size={44} aria-hidden="true" />
        )}
      </span>
      <span className="crepe-card__body">
        <span className="crepe-card__title">{nome}</span>
        <span className="crepe-card__text">{ingredientes}</span>
        <span className="crepe-card__more">Ver detalhes</span>
      </span>
    </button>
  );
}

function CrepeModal({ crepe, variante, onClose }) {
  const closeRef = useRef(null);
  const { nome, ingredientes, descricao, imagem, Icon } = crepe;

  useEffect(() => {
    const previous = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal modal--${variante}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Fechar">
          <X size={22} />
        </button>

        <div className="modal__media">
          {imagem ? (
            <img src={imagem} alt={`Crepe ${nome}`} />
          ) : (
            <Icon size={72} aria-hidden="true" />
          )}
        </div>

        <div className="modal__content">
          <h3 className="modal__title" id="modal-title">
            {nome}
          </h3>
          <p className="modal__ingredients">{ingredientes}</p>
          <p className="modal__description">{descricao}</p>
          <a
            className="btn-primary modal__cta"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} aria-hidden="true" />
            Peça pelo Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

function MenuSection({ id, titulo, itens, variante, className, onOpen }) {
  return (
    <div className={`menu-section ${className}`}>
      <div className="container">
        <h3 className="menu-section__title" id={id}>
          {titulo}
        </h3>
        <div className="menu-section__grid">
          {itens.map((item) => (
            <CrepeCard key={item.nome} crepe={item} variante={variante} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cardapio() {
  const [selecionado, setSelecionado] = useState(null);
  const abrir = (crepe, variante) => setSelecionado({ crepe, variante });
  const fechar = () => setSelecionado(null);

  return (
    <section id="cardapio" className="cardapio">
      <div className="container cardapio__head">
        <h2 className="section-title">Nossos crepes têm nome de praia</h2>
        <p className="section-subtitle">
          Escolha o seu sabor preferido, feito na hora.
        </p>
      </div>
      <MenuSection
        id="salgados"
        titulo="Crepes Salgados"
        itens={SALGADOS}
        variante="salgado"
        className="menu-section--salgados"
        onOpen={abrir}
      />
      <MenuSection
        id="doces"
        titulo="Crepes Doces"
        itens={DOCES}
        variante="doce"
        className="menu-section--doces"
        onOpen={abrir}
      />
      {selecionado && (
        <CrepeModal crepe={selecionado.crepe} variante={selecionado.variante} onClose={fechar} />
      )}
    </section>
  );
}

function Localizacao() {
  return (
    <section id="localizacao" className="localizacao">
      <div className="container">
        <h2 className="section-title">Onde nos encontrar</h2>
        <p className="section-subtitle">Atendemos em duas praias de Ubatuba.</p>

        <div className="localizacao__grid">
          {LOCAIS.map((local) => (
            <article className="local-card" key={local.nome}>
              <iframe
                className="local-card__map"
                title={`Mapa: ${local.nome}`}
                src={local.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="local-card__link"
                href={mapsLink(local.busca)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={28} aria-hidden="true" />
                <span className="local-card__info">
                  <span className="local-card__title">{local.nome}</span>
                  <span className="local-card__text">{local.detalhe}</span>
                </span>
                <span className="local-card__open">
                  Abrir no Google Maps
                  <ExternalLink size={16} aria-hidden="true" />
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="cta-box">
          <div>
            <h3 className="cta-box__title">Vem matar a vontade de crepe</h3>
            <p className="cta-box__text">
              Veja fotos, novidades e horários no nosso Instagram, ou mande uma mensagem.
            </p>
          </div>
          <a
            className="btn-primary btn-primary--instagram"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} aria-hidden="true" />
            @creperia_caicara
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} Creperia Caiçara. Todos os direitos reservados.
        </p>
        <p className="footer__place">
          <Clock size={16} aria-hidden="true" /> Desde 2022 em Ubatuba, SP
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cardapio />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}