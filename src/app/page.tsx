
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio con rapidez y soporte 24/7, sin complicaciones." cta1="Empieza Ahora" />
<How step1Title="Contacto rápido" step1Desc="Envíanos tus necesidades de negocio." step2Title="Diseño express" step2Desc="Creamos tu web en 24 horas." step3Title="Soporte continuo" step3Desc="Asistencia 24/7 para tu tranquilidad." />
<Aboutus headline="WebGo: Digitaliza Tus Ventas Fácilmente" subheadline="Transformamos recomendaciones en ventas online con gestión completa y sin complicaciones." beneficiotitulo1="Ventas Rápidas" beneficio1="Acelera ventas online sin esfuerzo." beneficiotitulo2="Gestión Total" beneficio2="Nos ocupamos de todo por ti." />
<Services heading="Digitaliza tu Negocio en 24 Horas" description="Rapidez, compromiso, innovación para conquistar el mundo online." services={[{"name":"Diseño Web Express","icon":"rocket","description":"Lanza tu sitio en 24 horas."},{"name":"Optimización SEO","icon":"search","description":"Haz que te encuentren fácil."},{"name":"Gestión de Contenidos","icon":"edit","description":"Actualizamos tu web sin complicaciones."},{"name":"Consultoría Digital","icon":"lightbulb","description":"Estrategias para aumentar tus ventas."},{"name":"Soporte 24/7","icon":"headset","description":"Estamos contigo siempre."},{"name":"Integración E-commerce","icon":"shopping-cart","description":"Venta online en simples pasos."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en impresionantes soluciones visuales de alto impacto." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a hacer crecer mi negocio en línea rápidamente?","respuesta":"WebGo se enfoca en rapidez, compromiso e innovación para que tu negocio crezca en línea. Nos encargamos de todo el proceso, desde crear tu sitio web hasta implementar estrategias de ventas, para que puedas concentrarte en lo que mejor sabes hacer."},{"pregunta":"¿No tengo tiempo para gestionar un sitio web, cómo resuelve esto WebGo?","respuesta":"Entendemos que el tiempo es valioso. WebGo se encarga de la gestión completa del sitio web, liberándote de esa carga. Nosotros manejamos todo, para que puedas centrarte en tu negocio."},{"pregunta":"Soy nuevo en las ventas online, ¿cómo me garantiza WebGo resultados?","respuesta":"WebGo tiene un enfoque probado que combina estrategia, tecnología e innovación para generar ventas en línea. Creemos en el compromiso con nuestros clientes y adaptamos nuestras soluciones para obtener resultados tangibles."},{"pregunta":"¿Cuáles son los beneficios de elegir WebGo para digitalizar mi negocio?","respuesta":"WebGo ofrece beneficios como rapidez en la implementación, estrategias innovadoras que se adaptan a tus necesidades y un compromiso total con tu éxito en el mundo digital. Esto garantiza que tu negocio crezca en el mercado online."},{"pregunta":"¿Qué hace que WebGo sea diferente de otras empresas de servicios digitales?","respuesta":"WebGo se distingue por su enfoque en la rapidez, el compromiso con cada cliente y su capacidad para innovar soluciones personalizadas. Nos aseguramos de que tengas un sitio web eficiente que realmente venda, sin complicaciones."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio con Rapidez" 
                      description="Descubre cómo digitalizar tus ventas con innovación y compromiso. Aumenta tus ingresos sin complicaciones; ¡contáctanos hoy en WebGo!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
