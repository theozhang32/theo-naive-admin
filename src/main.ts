import './styles/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import bus from '@/utils/bus';
import { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App);

  await setupRouter(app);
  app.mount('#app');
}

bootstrap();
