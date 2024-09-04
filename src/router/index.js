import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/productos",
    name: "productos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductosView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactoView.vue"),
    props: () => {
      return {
        telefono: "+5691245678",
        email: "XNlK5@example.com",
      };
    },
  },
  {
    path: "/producto/:id",
    name: "producto",
    component: () => import("../views/ProductoDetalleView.vue"),
    props: (route) => {
      return {
        id: Number(route.params.id),
        nombre: "Tomate",
        precio: 2000,
      };
    },
    children: [
      {
        path: `comentarios`,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/ComentariosView.vue"
          ),
        name: "comentarios",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
