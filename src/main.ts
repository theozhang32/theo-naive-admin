import './styles/tailwind.css';
import { createApp } from 'vue';
import App from './App.vue';
import { setupStore, setupUser } from '@/store';
import { setupRouter } from '@/router';

async function bootstrap() {
  const app = createApp(App);

  setupStore(app);

  await setupUser();

  setupRouter(app);
  app.mount('#app');
}

bootstrap();
