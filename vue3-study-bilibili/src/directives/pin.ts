import { DirectiveBinding } from "@vue/runtime-core"

// export default {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     const pos = binding.arg || 'top';
//     el.style.position = 'fixed';
//     (el.style as any)[pos] = binding.value + 'px';
//   },
//   updated(el: HTMLElement, binding:DirectiveBinding) {
//     const pos = binding.arg || 'top';
//     (el.style as any)[pos] = binding.value + 'px'
//   }
// }

// 同上
export default (el: HTMLElement, binding: DirectiveBinding) => {
  const pos = binding.arg || 'top';
  el.style.position = 'fixed';
  (el.style as any)[pos] = binding.value + 'px';
}