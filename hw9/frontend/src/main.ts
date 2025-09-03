import 'uno.css'
import './assets/index.css'
import './assets/ClassicEditor-gDJjXcIp.css'
import './assets/TomSelect-CwVRvl4n.css'
import './assets/TinySlider-B_GnodkK.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
