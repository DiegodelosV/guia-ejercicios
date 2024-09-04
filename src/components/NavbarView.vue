<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="navbar-nav">
      <router-link class="nav-link active" aria-current="page" to="/"
        >Home</router-link
      >
      <router-link class="nav-link" :to="{ name: 'productos' }"
        >Productos</router-link
      >
      <router-link class="nav-link" :to="{ name: 'contacto' }"
        >Contacto</router-link
      >
    </div>
  </nav>
</template>
