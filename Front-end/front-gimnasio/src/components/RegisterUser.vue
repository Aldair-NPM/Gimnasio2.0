<template>
    <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">
                        Registrar
                    </h1>
                    <div class="w-full flex-1 mt-8">
                        <div class="flex flex-col items-center">



                        </div>


                        <div class="mx-auto max-w-xs">
                            <Persona></Persona>
                            <br>
                            <Usuario></Usuario>

                            <p class="mt-6 text-xs text-gray-600 text-center">
                                Estoy de acuerdo con BullsGym y sus
                                <a href="#" class="border-b border-gray-500 border-dotted">
                                    Terminos de servico
                                </a>
                                y
                                <a href="#" class="border-b border-gray-500 border-dotted">
                                    Politicas de privacidad
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                <div class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                    style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Persona from './Persona.vue'
import Usuario from './Usuario.vue'

export default {
    components: {
        Persona,
        Usuario
    }
}

</script>