import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

// Provide data at the root level
app.provide('message', 'Snip snap snop!');
app.provide('isHuman', true);
app.provide('feelings', ['happy', 'excited', 'joyful']);

app.mount('#app');