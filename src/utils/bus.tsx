import { createApp, defineComponent } from 'vue';
import type { DialogApi, MessageApi, NotificationApi, LoadingBarApi } from 'naive-ui';
import { useDialog, useMessage, useNotification, useLoadingBar } from 'naive-ui';
import { AppProvider } from '@/components/AppProvider';

interface IBus {
  $dialog: DialogApi;
  $message: MessageApi;
  $notification: NotificationApi;
  $loadingBar: LoadingBarApi;
}

// 利用一个新的Vue App
// 将$dialog、$message、$notification、$loadingBar挂载到一个对象上
// 以便在主应用外使用（例如axios等）

const bus: IBus = Object.create(null);

const hostElem = document.createElement('div');

const Inject = defineComponent({
  name: 'Inject',
  setup() {
    bus.$dialog = useDialog();
    bus.$message = useMessage();
    bus.$notification = useNotification();
    bus.$loadingBar = useLoadingBar();
  },
  render() {},
});

const Provider = defineComponent({
  components: {
    AppProvider: [AppProvider.name],
    Inject: [Inject.name],
  },
  render() {
    return (
      <AppProvider>
        <Inject />
      </AppProvider>
    );
  },
});

createApp(Provider).mount(hostElem);

export default bus;
