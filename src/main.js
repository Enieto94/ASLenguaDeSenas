import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// 1. Define route components.
// These can be imported from other files
const Inicio = { template: '<div>El inicio</div>' }
const Temas = { template: '<div>temas</div>' }
const Letras = { template: '<div>letras</div>' }
const Numeros = { template: '<div>Numeros</div>' }
const Colores = { template: '<div>Colores</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
	{ path: '/', component: Inicio },
	{ path: '/temas', component: Temas },
	{ path: '/letras', component: Letras },
	{ path: '/numeros', component: Numeros },
	{ path: '/colores', component: Colores }
]

const app = createApp(App)
app.use(router)
app.mount('#app')
