import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Menu from '@/components/Menu.vue'
import DashboardView from '@/components/views/DashboardView.vue'
import SucursalView from '@/components/views/SucursalView.vue'
import DietasView from '@/components/views/DietasView.vue'
import PreguntaNutricionalView from '@/components/views/PreguntaNutricionalView.vue'
import ValoracionNutricionalView from '@/components/views/ValoracionNutricionalView.vue'
import EjerciciosView from '@/components/views/EjerciciosView.vue'
import RutinasEjerciciosView from '@/components/views/RutinasEjerciciosView.vue'
import RutinasView from '@/components/views/RutinasView.vue'
import ProgramaSaludableView from '@/components/views/ProgramaSaludableView.vue'
import DetalleProgramaView from '@/components/views/DetalleProgramaView.vue'
import EquipamientoView from '@/components/views/EquipamientoView.vue'
import PrestamosView from '@/components/views/PrestamosView.vue'
import MembresiasView from '@/components/views/MembresiasView.vue'
import MiembrosView from '@/components/views/MiembrosView.vue'
import PersonasView from '@/components/views/PersonasView.vue'
import AreasView from '@/components/views/AreasView.vue'
import PuestosView from '@/components/views/PuestosView.vue'
import EmpleadosView from '@/components/views/EmpleadosView.vue'
import InstructoresView from '@/components/views/InstructoresView.vue'
import HorariosView from '@/components/views/HorariosView.vue'
import InstalacionesView from '@/components/views/InstalacionesView.vue'
import MantenimientoView from '@/components/views/MantenimientoView.vue'
import ProductosView from '@/components/views/ProductosView.vue'
import DetallePromocionesView from '@/components/views/DetallePromocionesView.vue'
import PedidoView from '@/components/views/PedidoView.vue'
import DetallePedidosView from '@/components/views/DetallePedidosView.vue'
import PagosView from '@/components/views/PagosView.vue'
import PromocionesView from '@/components/views/PromocionesView.vue'
import DetalleProductosView from '@/components/views/DetalleProductosView.vue'
=======
import LoginView from '@/components/LoginView.vue'
import RegisterUser from '@/components/RegisterUser.vue'
import  Home from '@/components/Home.vue'
import Menu from '@/components/Menu.vue'
import Persona from '@/components/Persona.vue'

>>>>>>> 758ccbc7e7cef3bff31dbc68a0ecae7f47786c35

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Menu,
<<<<<<< HEAD
        children:[
          {
            path:'/dashboard', name:'dashboard', component: DashboardView
          },
          {
            path:'/sucursal', name:'sucursal', component: SucursalView
          },
          {
            path:'/dietas', name:'dietas', component: DietasView
          },
          {
            path:'/preguntaNutricional', name:'preguntaNutricional', component: PreguntaNutricionalView
          },
          {
            path:'/valoracionNutricional', name:'valoracionNutricional', component: ValoracionNutricionalView
          },
          {
            path:'/ejercicios', name:'ejercicios', component: EjerciciosView
          },
          {
            path:'/rutinas', name:'rutinas', component: RutinasView
          },
          {
            path:'/programaSaludable', name:'programaSaludable', component: ProgramaSaludableView
          },
          {
            path:'/rutinasEjercicios', name:'rutinasEjercicios', component: RutinasEjerciciosView
          },
          {
            path:'/detalleProgramas', name:'detalleProgramas', component: DetalleProgramaView
          },
          {
            path:'/equipamiento', name:'equipamiento', component: EquipamientoView
          },
          {
            path:'/prestamos', name:'prestamos', component: PrestamosView
          },
          {
            path:'/membresias', name:'membresias', component: MembresiasView
          },
          {
            path:'/miembros', name:'miembros', component: MiembrosView
          },
          {
            path:'/personas', name:'personas', component: PersonasView
          },
          {
            path:'/areas', name:'areas', component: AreasView
          },
          {
            path:'/puestos', name:'puestos', component: PuestosView
          },
          {
            path:'/empleados', name:'empleados', component: EmpleadosView
          },
          {
            path:'/instructores', name:'intructores', component: InstructoresView
          },
          {
            path:'/horarios', name:'horarios', component: HorariosView
          },
          {
            path:'/instalaciones', name:'instalaciones', component: InstalacionesView
          },
          {
            path:'/mantenimiento', name:'mantenimiento', component: MantenimientoView
          },
          {
            path:'/productos', name:'productos', component: ProductosView
          },
          {
            path:'/detalleProductos', name:'detalleProductos', component: DetalleProductosView
          },
          {
            path:'/promociones', name:'promociones', component: PromocionesView
          },
          {
            path:'/detallePromociones', name:'detallePromociones', component: DetallePromocionesView
          },
          {
            path:'/pedidos', name:'pedidos', component: PedidoView
          },
          {
            path:'/detallePedidos', name:'detallePedidos', component: DetallePedidosView
          },
          {
            path:'/pagos', name:'pagos', component: PagosView
          },
        ]
    },
=======
      children: [
        {path: '/personas', name: 'personas', component: Persona}
      ]
    }
>>>>>>> 758ccbc7e7cef3bff31dbc68a0ecae7f47786c35
  ]
})

export default router
