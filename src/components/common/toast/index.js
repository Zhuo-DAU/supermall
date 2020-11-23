import Toast from './Toast'

const obj= {}

obj.install = function(Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 用new的方式，创建一个组件对象
  const toast = new toastConstructor()

  // 将组件挂载到某一元素
  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj
