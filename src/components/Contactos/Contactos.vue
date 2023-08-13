<template>
  <div class="bg-gray-900 py-12 sm:py-10 mt-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-white flex-1 lg:flex items-center justify-between">
        <div class="flex flex-col gap-y-4 max-w-3xl">
          <p class="text-4xl font-bold tracking-tight sm:text-3xl">
            Directorio de Contactos
          </p>
          <p class="text-lg mb-9 lg:mb-0 text-gray-300">
            Encuentre aquí la informacion de contacto que nececite mediante un
            sistema de targetas de presentación con nuestros filtros
            personalizados.
          </p>
        </div>
        <a
          class="text-white border cursor-pointer border-gray-100/50 w-52 p-3 rounded flex items-center justify-center gap-x-3 hover:bg-gray-800 transition-all"
        >
          <MagnifyingGlassIcon class="w-6 h-6" />
          Guía de contactos</a
        >
      </div>
    </div>
  </div>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam rem
    recusandae numquam magnam ratione consectetur assumenda ut necessitatibus.
    Eum, animi. Temporibus labore tempore qui veritatis libero similique maxime
    dolorem molestias!
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
