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
    why_us: "Warum wir?",
    how_it_works: "Wie es funktioniert?",
    pricing: "Pricing",
    our_clients: "Referenzen"
  },

  header_cta: "Jetzt starten",

  ...home,

  footer: {
    link_privacy: "Datenschutzerklärung",
    link_impressum: "Impressum",
    contact_form: {
      title: "Erreichen Sie uns",
      subtitle: "Schreiben Sie uns. Wir freuen uns von Ihnen zu hören.",
      label_name: "Name",
      label_email: "E-Mail",
      label_message: "Nachricht",
      label_submit: "Abschicken",
      label_reason: "Grund",
      label_gdpr:
        "Ich habe die <a href='https://corona-services.org/privacy'>Datenschutzrichtlinie</a> gelesen und bin damit einverstanden.",
      acknowledgement:
        "Vielen Dank für Ihr Interesse! Wir melden uns in Kürze bei Ihnen.",
      submit_error:
        "Beim Senden Ihrer Anfrage ist ein Problem aufgetreten. Bitte versuchen Sie es später noch einmal."
    }
  },

  reason_options: {
    plus_package: "Plus package - Order App for local businesses",
    enterprise_package: "Enterprise - for businesses with more than one store",
    general: "General question"
  },

  errors: {
    empty: "Bitte füllen Sie dieses Feld aus.",
    gdpr_accepted:
      "Bitte akzeptieren Sie die Datenschutzbestimmungen, bevor Sie das Formular abschicken."
  },

  privacy_page,

  imprint_page
}

export default () => {
  return new Promise(function(resolve) {
    resolve(translations)
  })
}
