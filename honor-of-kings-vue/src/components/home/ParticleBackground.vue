<script setup>
const particlesOptions = {
  background: {
    color: {
      value: 'transparent'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      grab: {
        distance: 140,
        links: {
            opacity: 1
        }
      }
    }
  },
  particles: {
    color: {
      value: '#ffd700'
    },
    links: {
      color: '#ffd700',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce'
      },
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
};
</script>

<template>
    <vue-particles
        id="tsparticles"
        :options="particlesOptions"
    />
</template>

<style scoped>
#tsparticles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: auto;
}
</style>