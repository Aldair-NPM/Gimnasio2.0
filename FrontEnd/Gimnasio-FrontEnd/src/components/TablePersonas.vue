<template>
    <table class="min-w-full divide-y divide-gray-200 mt-8">
        <thead>
            <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foto</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer Apellido</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segundo Apellido</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genero</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo de Sangre</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Nacimiento</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estatus</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
               
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr>
                <td><img src="https://i.pinimg.com/564x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Jair</td>
                <td class="px-6 py-4 whitespace-nowrap">Gonzales</td>
                <td class="px-6 py-4 whitespace-nowrap">Canales</td>
                <td class="px-6 py-4 whitespace-nowrap">Masculino</td>
                <td class="px-6 py-4 whitespace-nowrap">OB+</td>
                <td class="px-6 py-4 whitespace-nowrap">Jaicito8@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">14/08/1987</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
            <tr>
                <td><img src="https://i.pinimg.com/564x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Hugo</td>
                <td class="px-6 py-4 whitespace-nowrap">Sanchez</td>
                <td class="px-6 py-4 whitespace-nowrap">Gonzales</td>
                <td class="px-6 py-4 whitespace-nowrap">Masculino</td>
                <td class="px-6 py-4 whitespace-nowrap">O-</td>
                <td class="px-6 py-4 whitespace-nowrap">Hugosago@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">21/07/1998</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
            <tr>
                <td><img src="https://i.pinimg.com/564x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Adalid</td>
                <td class="px-6 py-4 whitespace-nowrap">Islas</td>
                <td class="px-6 py-4 whitespace-nowrap">Gonzales</td>
                <td class="px-6 py-4 whitespace-nowrap">Masculino</td>
                <td class="px-6 py-4 whitespace-nowrap">AB+</td>
                <td class="px-6 py-4 whitespace-nowrap">Adalid28@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">20/05/2000</td>
                <td class="px-6 py-4 whitespace-nowrap">
                
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
            <tr>
                <td><img src="https://i.pinimg.com/564x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Sebastian</td>
                <td class="px-6 py-4 whitespace-nowrap">Rojas</td>
                <td class="px-6 py-4 whitespace-nowrap">Perez</td>
                <td class="px-6 py-4 whitespace-nowrap">Masculino</td>
                <td class="px-6 py-4 whitespace-nowrap">A+</td>
                <td class="px-6 py-4 whitespace-nowrap">bebas12@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">15/09/2000</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
            <tr>
                <td><img src="https://i.pinimg.com/564x/55/73/5c/55735cb016d714423d98ff030133edda.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Ameli</td>
                <td class="px-6 py-4 whitespace-nowrap">Perez</td>
                <td class="px-6 py-4 whitespace-nowrap">Garrido</td>
                <td class="px-6 py-4 whitespace-nowrap">Femenino</td>
                <td class="px-6 py-4 whitespace-nowrap">A+</td>
                <td class="px-6 py-4 whitespace-nowrap">amelita8@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">12/09/2001</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
            <tr>
                <td><img src="https://i.pinimg.com/564x/55/73/5c/55735cb016d714423d98ff030133edda.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Guadalupe</td>
                <td class="px-6 py-4 whitespace-nowrap">Vargas</td>
                <td class="px-6 py-4 whitespace-nowrap">Gonzales</td>
                <td class="px-6 py-4 whitespace-nowrap">Femenino</td>
                <td class="px-6 py-4 whitespace-nowrap">B+</td>
                <td class="px-6 py-4 whitespace-nowrap">vargas@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">22/06/2003</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
            <tr>
                <td><img src="https://i.pinimg.com/564x/ba/d7/86/bad786dfe4f227555be6fa2484b0b9a3.jpg" alt="foto de perfil"></td>
                <td class="px-6 py-4 whitespace-nowrap">Juan</td>
                <td class="px-6 py-4 whitespace-nowrap">Gutierritos</td>
                <td class="px-6 py-4 whitespace-nowrap">Gonzales</td>
                <td class="px-6 py-4 whitespace-nowrap">Masculino</td>
                <td class="px-6 py-4 whitespace-nowrap">A+</td>
                <td class="px-6 py-4 whitespace-nowrap">Juanito78@gmail.com</td>
                <td class="px-6 py-4 whitespace-nowrap">12/09/1997</td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <button class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                    <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>