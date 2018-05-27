export default class Animate {
  constructor() {
    this.refs = [];
    this.instances = [];
  }

  add(el, config) {
    this.refs.push({el, config});
  }

  create(ref) {
    this.instances.push(basicScroll.create({
      elem: ref.el.base,
      direct: true,
      ...ref.config
    }));
  }

  init() {
    this.refs.forEach(ref => {
      this.create(ref);
    });
  }

  start() {
    this.instances.forEach(inst => {
      inst.start();
      inst.getData().elem.style.transition = 'transform 0.1s linear';
    });
  }

  destroy() {
    this.instances.forEach(inst => {
      inst.getData().elem.removeAttribute('style');
      inst.destroy();
    });
  }
}
