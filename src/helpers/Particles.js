import { h, Component } from 'preact';

import styled from 'styled-components';

import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Scene } from 'three/src/scenes/Scene';
import { Texture } from 'three/src/textures/Texture';
import { Sprite } from 'three/src/objects/Sprite';
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial';

const StyledScene = styled.div`
  background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  font-size: 0;
`;

class Particles extends Component {
  constructor(props) {
    super(props);

    this.container = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.particles = null;
    this.frameId = null;
    this.width = null;
    this.height = null;

    this.count = 0;

    this.config = {
      SEPARATION: 200,
      AMOUNTX: 30,
      AMOUNTY: 7,
    }
  }

  init = () => {
    this.width = window.innerWidth;
    this.height = 200;

    this.camera = new PerspectiveCamera( 75, this.width / this.height, 1, 1500 );
    this.camera.position.z = 700;
    this.camera.position.x = 35;
    this.camera.position.y = 300;

    this.scene = new Scene();

    const createTexture = (size, color) => {
      const matCanvas = document.createElement('canvas');
      matCanvas.width = matCanvas.height = size;

      const matContext = matCanvas.getContext('2d');
      const texture = new Texture(matCanvas);
      const center = size / 2;

      matContext.beginPath();
      matContext.arc(center, center, size / 2, 0, 2 * Math.PI, false);
      matContext.closePath();
      matContext.fillStyle = color;
      matContext.fill();

      texture.needsUpdate = true;

      return texture;
    }

    const texture = createTexture(16, '#ffffff');
    const material = new SpriteMaterial({ map: texture });

    this.particles = [];

    let i = 0;
    for (let ix = 0; ix < this.config.AMOUNTX; ix ++) {
      for (let iy = 0; iy < this.config.AMOUNTY; iy ++) {
        const particle = this.particles[i++] = new Sprite(material);
        particle.position.x =
          ix * this.config.SEPARATION -
          ((this.config.AMOUNTX * this.config.SEPARATION) / 2);
        particle.position.z =
          iy * this.config.SEPARATION -
          ((this.config.AMOUNTY * this.config.SEPARATION) / 2);
        this.scene.add(particle);
      }
    }

    this.renderer = new WebGLRenderer({ alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);

    this.container.base.appendChild(this.renderer.domElement);

    window.addEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    this.width = window.innerWidth;
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }

  sceneRender = () => {
    this.camera.lookAt(this.scene.position);

    let i = 0;
    for (let ix = 0; ix < this.config.AMOUNTX; ix ++) {
      for (let iy = 0; iy < this.config.AMOUNTY; iy ++) {
        const particle = this.particles[i++];
        particle.position.y =
          (Math.sin((ix + this.count) * 0.3) * 50) +
          (Math.sin((iy + this.count) * 0.5) * 50);
        particle.scale.x = particle.scale.y =
          (Math.sin((ix + this.count) * 0.3) + 1) * 8 +
          (Math.sin((iy + this.count) * 0.5) + 1) * 8;
      }
    }

    this.renderer.render(this.scene, this.camera);
    this.count += 0.1;
  }

  animate = () => {
    this.sceneRender();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  startLoop = () =>  {
    if( !this.frameId ) {
      this.frameId = window.requestAnimationFrame(this.animate);
    }
  }

  stopLoop = () =>  {
    window.cancelAnimationFrame(this.frameId);
  }

  componentDidMount() {
    this.init();
    this.startLoop();
  }

  componentWillUnmount() {
    this.stopLoop();
  }

  render() {
    return (
      <StyledScene ref={el => this.container = el} />
    );
  }
}

export default Particles;
