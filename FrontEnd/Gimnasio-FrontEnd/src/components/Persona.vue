<<<<<<< HEAD
<template id="formUsuario">
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
<<<<<<<< HEAD:FrontEnd/Gimnasio-FrontEnd/src/components/Persona.vue
    <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div class="mt-12 flex flex-col items-center">
                <h1 class="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div class="w-full flex-1 mt-8 grid-cols-2">
                    <div class="grid grid-rows-2 grid-cols-2 gap-1">
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 col-span-2"
                            type="text" placeholder="Nombre Completo" 
                        />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text" placeholder="Primer Apellido" 
                        />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="text" placeholder="Segundo Apellido" 
                        />
                        <select id="countries" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                            <option selected>Genero</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="NB">No Binario</option>
                        </select>
                        <select id="countries" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
                            <option selected>Tipo de Sangre</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 col-span-2"
                            type="email" placeholder="Email" 
                        />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 "
                            type="password" placeholder="Contraseña" 
                        />
                        <input
                            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="date" placeholder="Fecha de Nacimiento" 
                        />
                  
                        <label for="" class="font-medium col-span-2 ">Fotografia</label>
                        <input
                            class="w-full px-1 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1 col-span-2"
                            type="file" placeholder="Fotografia"
                        />
                        <a href="/home">
                            <button
                                class="mt-5 tracking-wide font-semibold bg-green-700 text-gray-100 w-full py-4 rounded-lg hover:bg-green-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2">
                                
                                <span>
                                    Sign Up
                                </span>
                            </button>
                        </a>
                        <a href="/"  >
                            <button
                                class="mt-5 tracking-wide font-semibold bg-red-700 text-gray-100 w-full py-4 rounded-lg hover:bg-red-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2">
                                
                                <span>
                                    Cancel
                                </span>
                            </button>
                        </a>
                        <p class="mt-6 text-xs text-gray-600 text-center col-span-2">
                            I agree to abide by templatana's
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and its
                            <a href="#" class="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
========
        <div class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div class="mt-12 flex flex-col items-center">
                    <h1 class="text-2xl xl:text-3xl font-extrabold">
                        Registrarse
                    </h1>
                    <div class="w-full flex-1 mt-8 grid-cols-2">
                        <div class="gap-1">
                            <form>
                                <Persona></Persona>
                                <Usuario></Usuario>
                                <a href="/" class="col-span-2">
                                    <button
                                        class="mt-5 tracking-wide font-semibold bg-blue-700 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none col-span-2">
                                        <svg class="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span class="ml-3 uppercase">
                                            Registrar
                                        </span>
                                    </button>
                                </a>



                                <p class="mt-6 text-xs text-gray-600 text-center col-span-2">
                                    I agree to abide by templatana's
                                    <a href="#" class="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" class="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 bg-gray-500 text-center hidden lg:flex ">
                <div class="m-12 xl:m-16 w-10/12 bg-contain bg-center bg-no-repeat "
                    style="background-image: url('https://i.ibb.co/pdP0hjc/logo-gimnasio.png');">
                </div>
            </div>
>>>>>>>> 758ccbc7e7cef3bff31dbc68a0ecae7f47786c35:FrontEnd/Gimnasio-FrontEnd/src/components/RegisterUser.vue
        </div>
    </div>
</template>

<script>
import Persona from './Persona.vue';
import Usuario from './Usuario.vue';

export default {
    components: {
        Persona,
        Usuario
    }
}

</script>
=======
<template>
    <form>
        <input
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 col-span-2"
            type="text" placeholder="Nombre Completo"
        />
        <input
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="text" placeholder="Primer Apellido"
        />
        <input
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="text" placeholder="Segundo Apellido"
        />
        <select id="countries" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
            <option selected>Genero</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="NB">No Binario</option>
        </select>
        <select id="countries" class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5">
            <option selected>Tipo de Sangre</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>
        <input
            class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
            type="date" placeholder="Fecha de Nacimiento"
        />
    
        <label for="" class="font-medium col-span-2 ">Fotografia</label>
        <input
            class="w-full px-1 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1 col-span-2"
            type="file" placeholder="Fotografia"
        />
       
    </form>
</template>
>>>>>>> 758ccbc7e7cef3bff31dbc68a0ecae7f47786c35
