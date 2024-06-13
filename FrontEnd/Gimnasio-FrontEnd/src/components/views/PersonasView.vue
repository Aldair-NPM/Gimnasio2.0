<template>
        <div class="w-full text-gray-900 flex items-center justify-center">
            <div class="m-0 sm:m-10 bg-white sm:rounded-lg flex justify-center flex-1">
                <div class="w-full md:w-auto xl:w-5/12 p-6 sm:p-12">
                    <Persona></Persona>
                </div>
            </div>
        </div>
        <div class="w-3/5 mt-32">
            <TablePersonas></TablePersonas>
        </div>
</template>

<script>
import Persona from '../../components/Persona.vue'
import TablePersonas from '../../components/TablePersonas.vue';

export default {
    components:
    {
        Persona,
        TablePersonas,
    }
}
</script>