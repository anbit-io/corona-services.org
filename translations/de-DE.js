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
    why_us: "Ihre App",
    how_it_works: "Ablauf",
    pricing: "Preise",
    our_clients: "Referenzen"
  },

  header_cta: "Jetzt loslegen",

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
      label_reason: "Betreff",
      label_business: "Wählen Sie einen Geschäftstyp",
      placeholder_business: "Wählen Sie einen Geschäftstyp",
      label_gdpr:
        "Ich habe die <a target='_blank' href='https://corona-services.org/de/privacy'>Datenschutzrichtlinie</a> gelesen und bin damit einverstanden.",
      acknowledgement:
        "Vielen Dank für Ihr Interesse! Wir melden uns in Kürze bei Ihnen.",
      submit_error:
        "Beim Senden Ihrer Anfrage ist ein Problem aufgetreten. Bitte versuchen Sie es später noch einmal."
    }
  },

  modal_contact_form: {
    close: "Kontaktformular schließen",
    title: "Ihre eigene Bestell-App...",
    subtitle:
      "Bitte füllen Sie das Formular aus. Wir werden uns in Kürze bei Ihnen melden.",
    label_name: "Unternehmensname",
    label_email: "E-Mail",
    label_business: "Branche"
  },

  reason_options: {
    plus_package: "Plus - Bestell-App für lokale Unternehmen",
    enterprise_package: "Enterprise - Individuelle IT-Lösungen für Unternehmen",
    general: "Allgemeine Anfrage"
  },

  errors: {
    empty: "Bitte füllen Sie dieses Feld aus.",
    business: "Bitte wählen Sie einen Geschäftstyp.",
    gdpr_accepted:
      "Bitte akzeptieren Sie die Datenschutzbestimmungen, bevor Sie das Formular abschicken.",
    page_not_found: "Seite nicht gefunden.",
    an_error_occured: "Ein Fehler ist aufgetreten.",
    subtitle:
      "Es scheint, dass dies nicht das ist, wonach Sie gesucht haben. Sie können beginnen, indem Sie zu gehen ",
    home: "Startseite",
    subtitle_contact:
      "oder Kontaktieren Sie uns, indem Sie das folgende Formular ausfüllen."
  },

  privacy_page,

  imprint_page
}

export default () => {
  return new Promise(function(resolve) {
    resolve(translations)
  })
}
