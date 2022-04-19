import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'


app.get("/", (req, res) => {
    res.sendFile(_dirname + "/index.html")
})
createApp(App).mount('#app')
