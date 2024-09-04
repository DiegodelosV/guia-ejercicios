<template lang="">
  <h1>Contáctanos</h1>
  <p>teléfono: {{ telefono }}</p>
  <p>email: {{ email }}</p>
  <router-link to="/">Voler al inicio</router-link>
</template>

<script>
export default {
  props: {
    telefono: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
};
</script>
