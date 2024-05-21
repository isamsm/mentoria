import logo from '../assets/sidebar/logo.png'
import home from '../assets/sidebar/home.svg'
import kanban from '../assets/sidebar/kanban.svg'
import route from '../assets/sidebar/route.svg'
import schedule from '../assets/sidebar/schedule.svg'
import calendar from '../assets/sidebar/calendar.svg'
import admin from '../assets/sidebar/admin.svg'
import communication from '../assets/sidebar/communication.svg'
import education from '../assets/sidebar/education.svg'
import invoices from '../assets/sidebar/invoices.svg'
import exit from '../assets/sidebar/exit.svg'

export default function Sidebar() {
  return (
    <>
      <div style={{backgroundColor: '#4963FF'}} className='flex fixed h-full flex-col justify-evenly w-24'>
        <div className='flex flex-col gap-1 items-center'>
          <img src={logo} className='h-16 w-16'/>
          <hr className='border-white w-20 m-2 opacity-20'/>
        </div>
        <img src={home} className='h-6' alt='icone inicio'/>
        <img src={kanban} className='h-6' alt='icone kanban'/>
        <img src={route} className='h-6' alt='icone rotas'/>
        <img src={schedule} className='h-6' alt='icone horários'/>
        <img src={calendar} className='h-6' alt='icone calendário'/>
        <img src={admin} className='h-6' alt='icone adminisitração'/>
        <img src={communication} className='h-6' alt='icone comunicação'/>
        <img src={education} className='h-12' alt='icone professores'/>
        <img src={invoices} className='h-6' alt='icone escalação'/>
        <hr className='border-white w-20 m-2 opacity-20 mt-24'/>
        <div className='flex gap-2 justify-center pb-12'>
          <p className='font-semibold'> Sair </p>
          <img src={exit} alt='icone sair'/>
        </div>
      </div>
    </>
  )
}
