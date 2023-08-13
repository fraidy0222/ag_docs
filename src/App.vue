<template>
  <Navbar title="Gelma" :items="links" />

  <!-- Hero Section -->
  <HeroSection />

  <!-- Quienes Somos -->
  <About />

  <!-- Servicios -->
  <Servicios />

  <!-- Listado de Empresas -->
  <Company />

  <!-- Directorio de Contactos -->
  <!-- Noticias -->
  <Noticias />

  <!-- Team -->
  <Team />

  <!-- Contáctenos -->
  <Contactos />
  <!-- Preguntas Frecuentes -->

  <!-- Footer  -->
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar/Navbar.vue";
import HeroSection from "./components/Hero/HeroSection.vue";
import About from "./components/About/About.vue";
import Servicios from "./components/Servicios/Servicios.vue";
import Company from "./components/Company/Company.vue";
import Noticias from "./components/Noticias/Noticias.vue";
import Team from "./components/Team/Team.vue";
import Contactos from "./components/Contactos/Contactos.vue";

const links = ref([
  { label: "Quiénes" },
  { label: "Servicios" },
  { label: "Noticias" },
  { label: "Contáctenos" },
]);
</script>
