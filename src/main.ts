import './styles/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import bus from '@/utils/bus';
import { setupRouter } from '@/router';

const app = createApp(App);

setupRouter(app);

app.mount('#app');
