import Component from "./component";
const install = (Vue, options = {}) => {
  Vue.component(Component.name, Component);
};

export default install;
