import home from "./pages/home__de-DE"
import privacy_page from "./pages/privacy__de-DE"
import imprint_page from "./pages/imprint__de-DE"

const translations = {
  contact_no: "+49 - 241 5600 7360",

  head: {
    title: "Lebensmittel & Services bei lokalen Unternehmen bestellen",
    description:
      "Einfach Essen, Getränke oder andere Dienstleistungen unter Beachtung der Quarantänemaßnahmen bestellen.",
    keywords: "",
    og_site_name: "Corona Service App & Website",
    og_title:
      "Corona Service | Lebensmittel & Services bei lokalen Unternehmen bestellen"
  },

  site: {
    title: "Corona Services",
    slogan: "Lokale Unternehmen unterstützen"
  },

  header_menu: {
    our_services: "Leistungen",
    why_us: "Why us?",
    how_it_works: "How it works?",
    pricing: "Pricing",
    our_clients: "Referenzen"
  },

  header_cta: "Jetzt starten",

  ...home,

  footer: {
    link_privacy: "Datenschutzerklärung",
    link_impressum: "Impressum"
  },

  privacy_page,

  imprint_page
}

export default () => {
  return new Promise(function(resolve) {
    resolve(translations)
  })
}
