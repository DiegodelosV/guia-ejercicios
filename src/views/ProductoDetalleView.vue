<template>
  <h1>Detalle del producto</h1>
  <p>{{ id }} - {{ nombre }} - {{ precio }}</p>

  <router-link :to="{ name: 'comentarios' }">Ver comentarios</router-link>
  <router-view />
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
  },
};
</script>
