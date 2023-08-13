<template>
  <div
    class="relative mt-52 isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
  >
    <img
      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
    <div
      class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div
      class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      aria-hidden="true"
    >
      <div
        class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Sobre Nosotros
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          El Grupo Empresarial de Logística del MINAG (GELMA) fue aprobado por
          el Consejo de Ministros como una de las nueve Organizaciones
          Superiores de Dirección Empresarial (OSDE) del ámbito del sector
          agrícola
        </p>
      </div>
      <div
        class="mx-auto mt-10 max-w-2xl md:mx-0 md:max-w-none lg:mx-0 lg:max-w-none"
      >
        <dl
          class="mt-16 grid grid-cols-1 gap-10 sm:mt-5 sm:grid-cols-2 lg:grid-cols-2"
        >
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="flex flex-col-reverse"
          >
            <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    name: "Desde los documentos Rectores",
    href: "#",
  },
  { name: "Con el Contrato", href: "#" },
  { name: "Dirigir desde las Finanzas", href: "#" },
  {
    name: "En el estricto cumplimiento del plan de la Economía",
    href: "#",
  },
];
const stats = [
  { name: "Puntos de venta", value: "29" },
  { name: "Subsedes del llano", value: "23" },
  { name: "Subsedes en la montaña", value: "52" },
  { name: "Empresas de Suministros Agropecuarios", value: "24" },
];
</script>
