import home from "./pages/home__en-EN"
import privacy_page from "./pages/privacy__en-EN"
import imprint_page from "./pages/imprint__en-EN"

const translations = {
  contact_no: "+49 - 241 5600 7360",

  head: {
    title: "Order food & services from local companies",
    description:
      "Simply order food, drinks or other services in accordance with the quarantine measures.",
    keywords: "",
    og_site_name: "Corona Service App & Website",
    og_title: "Corona Service | Order food & services from local companies"
  },

  site: {
    title: "Corona Services",
    slogan: "Support local stores"
  },

  header_menu: {
    our_services: "Our Services",
    why_us: "Why us?",
    how_it_works: "How it works?",
    pricing: "Pricing",
    our_clients: "Our Clients"
  },

  header_cta: "Let's start",

  ...home,

  footer: {
    link_privacy: "Privacy",
    link_impressum: "Policy Imprint",
    contact_form: {
      title: "Let's get in touch",
      subtitle:
        "In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among.",
      label_name: "Name",
      label_email: "E-Mail",
      label_message: "Message",
      label_submit: "Submit",
      label_gdpr:
        "I have read the <a href='https://corona-services.org/en/privacy'>privacy policy</a> and agree to it.",
      acknowledgement: "Thank you for contacting us! we will reach you soon."
    }
  },

  errors: {
    empty: "Please fill this field.",
    gdpr_accepted:
      "Please accept the privacy policy before submitting the form."
  },

  privacy_page,

  imprint_page
}

export default () => {
  return new Promise(function(resolve) {
    resolve(translations)
  })
}
