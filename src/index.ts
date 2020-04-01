import ImsButton from "../src/button";
// console.info(ImsButton);
// import ImsCurd from "./components/ims-curd";
// import ImsLayout from "./components/ims-layout";
// import ImsForm from "./components/ims-form";
// import ImsFormItem from "./components/ims-form-item";
// import ImsHighlight from "./components/ims-highlight";
// import ImsSplit from "./components/ims-split";
// import ImsButton from "./components/ims-button";
// import ImsSelect from "./components/ims-select";
// import ImsUpload from "./components/ims-upload";
// import ImsPreview from "./components/ims-preview";
// import ImsViewer from "./components/ims-viewer";
// import storeConstructorOptions from "./store";

// import dateFormat from "./filters/dateFormat";
// import genderFormat from "./filters/genderFormat";

// import routes from "./routes";

// import "./styles/index.scss";

const components = {
  // ImsCurd,
  // ImsSelect,
  // ImsUpload,
  ImsButton
  // ImsPreview,
  // ImsViewer,
  // ImsLayout,
  // ImsHighlight,
  // ImsSplit,
  // ImsForm,
  // ImsFormItem
};

const IMSUI = {
  ...components
};

const install = function(Vue: any, opts: any = {}) {
  if (install.installed) return;
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  Object.keys(IMSUI).forEach(key => {
    Vue.component(key, IMSUI[key]);
  });

  // Vue.filter("dateFormat", dateFormat);
  // Vue.filter("genderFormat", genderFormat);
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VUE_APP_VERSION, // eslint-disable-line no-undef
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  ...components
  // storeConstructorOptions
  // routes
};

// // API.lang = (code) => {
// //     const langObject = window['iview/locale'].default;
// //     if (code === langObject.i.locale) locale.use(langObject);
// //     else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
// // };

// // module.exports.default = module.exports = API;   // eslint-disable-line no-undef
// export { storeConstructorOptions, routes };

export default API;

// // module.exports.default = API;
