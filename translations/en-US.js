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
    link_impressum: "Policy Imprint"
  },

  privacy_page,

  imprint_page
}

export default () => {
  return new Promise(function(resolve) {
    resolve(translations)
  })
}
