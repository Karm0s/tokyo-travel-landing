import { createApp, VueElement } from "vue"
import App from "./App.vue"
import "./index.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faFacebookF, faTwitter, faInstagram, faYoutube)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app")
