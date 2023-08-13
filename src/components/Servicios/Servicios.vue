<template>
  <div class="bg-white py-24 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">
          Servicios
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Nuetro grupo empresarial ofrece diversos servicios
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Nuestras empresas están dedicadas unicamente a satisfacer todas sus
          necesidades brindando servicios de calidad y exelencia garantizadas
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-22 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <component
                  :is="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  WrenchScrewdriverIcon,
  CogIcon,
  TruckIcon,
  BuildingOffice2Icon,
  WifiIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const features = [
  {
    name: "Servicios de Talleres",
    description:
      "Ser líder, de referencia y competitiva que produce y presta servicios técnicos y especializado al sector agropecuario del país con solvencia económica.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Servicios de Transportación de Cargas",
    description:
      "Especializados en transporte de cargas pesadas,a granel, frágil, perecedra y carga general.Contamos con un parque técnico optimo y personal calificado.Ofertamos seguridad, dinamismo en las entregas y precios preferenciales.",
    icon: TruckIcon,
  },
  {
    name: "Servicios de Obras Ingenieras",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Servicios TIC",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: WifiIcon,
  },
  {
    name: "Servicios de Ingeniería y Proyectos",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: CogIcon,
  },
  {
    name: "Servicios de Aseguramiento y Logística",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: UsersIcon,
  },
];
</script>
