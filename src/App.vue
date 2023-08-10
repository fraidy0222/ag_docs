<template>
  <!-- <Navbar title="Gelma" :items="links" /> -->
  <!-- Hero Section -->
  <!-- <section class="mt-7 flex justify-around relative">
    <div class="ml-40">
      <img src="images/dots.png" alt="Cuandro de Puntos" class="w-40" />
    </div>
    <div
      class="absolute backdrop-blur-md bg-white/20 w-96 top-32 left-0 ml-40 pt-10 pb-10"
    >
      <div class="text-5xl font-bold leading-tight text-emerald-800">
        We help You make Modern Interior
      </div>
      <p class="mt-4 w-[300px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iure
        molestiae, iste recusandae officia impedit/
      </p>
    </div>
    <div class="h-[600px] w-[1000px] mr-20">
      <img src="images/muebles.jpg" alt="Muebles" class="h-full w-full" />
    </div>
    <div class="absolute top-52 right-12">
      <div class="space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div class="flex flex-col justify-center items-center mt-28 font-bold">
        <div class="">01</div>
        <div class="border-2 my-2 py-6"></div>
        <div>06</div>
      </div>
    </div>
    <div
      class="absolute flex items-center justify-center backdrop-blur-md bg-white/50 -bottom-7 right-24 w-24 h-24"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
        />
      </svg>
    </div>
  </section> -->

  <!-- Listado de Empresas -->
  <!-- <div class="bg-emerald-100 mt-20 py-4">
    <div class="text-center uppercase font-semibold text-xl mt-5">
      Nuestros clientes más importantes
    </div>
    <div class="flex items-center justify-center space-x-12 mt-6">
      <img
        src="images/clientes/client-1.png"
        alt="Empresa de aseguramiento y servicios (EAS)"
        class="w-28"
      />
      <img
        src="images/clientes/client-2.png"
        alt="Empresa de aseguramiento y servicios (EAS)"
        class="w-28"
      />
      <img
        src="images/clientes/client-3.png"
        alt="Empresa de aseguramiento y servicios (EAS)"
        class="w-28"
      />
      <img
        src="images/clientes/client-4.png"
        alt="Empresa de aseguramiento y servicios (EAS)"
        class="w-28"
      />
    </div>
  </div> -->

  <!-- Quienes Somos -->

  <!-- <section class="text-gray-600 body-font">
    <div class="flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Quiénes Somos
        </h1>
        <p class="mb-8 leading-relaxed">
          El Grupo Empresarial de Logística del MINAG (GELMA), fue aprobado por
          el Consejo de Ministros como una de las nueve Organizaciones
          Superiores de Dirección Empresarial (OSDE) del ámbito del sector
          agrícola, subordinándose a este órgano y atendido funcionalmente por
          el titular de la Agricultura, modificando de manera sustancial su rol
          en la comercialización mayorista de insumos, equipamientos y servicios
          técnicos especializados del sector agropecuario. La integran una red
          comercializadora con 229 puntos de venta.
        </p>
        <div class="flex justify-center">
          <button
            class="flex items-center justify-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Leer más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Servicios -->
  <!-- Directorio de Contactos -->
  <!-- Noticias -->
  <!-- Team -->
  <!-- Preguntas Frecuentes -->
  <!-- Contáctenos -->
  <!-- Footer  -->
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar/Navbar.vue";

const links = ref([
  { label: "Quiénes" },
  { label: "Servicios" },
  { label: "Noticias" },
  { label: "Contáctenos" },
]);
</script>
