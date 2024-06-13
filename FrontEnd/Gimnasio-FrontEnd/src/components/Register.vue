<template>
    <div class="w-full text-gray-900 flex justify-center">
            <div class="m-0 sm:m-10 bg-white sm:rounded-lg flex justify-center flex-1">
                <div class="w-1/2 md:w-auto shadow sm:rounded-lg xl:w-5/12 p-6 sm:p-12 mt-12">
                    <Persona></Persona>
                </div>
        </div>
    </div>
</template>

<script>
    import Persona from './Persona.vue'

    export default{
        components:
            {
                Persona
            }
    }
</script>