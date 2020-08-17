
import { Button, Layout } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';

const components: any = {
    Button,
    Layout
};

const componentsHandler = {
    install(Vue: any) {
        Object.keys(components).forEach(key => Vue.use(components[key]));
    }
}

export default componentsHandler;