import logo from '../assets/sidebar/logo.svg'
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
      <div style={{backgroundColor: '#4963FF'}} className='flex flex-col justify-evenly w-24'>
        <div className='flex flex-col gap-1 text-center'>
          <img src={logo} className='h-12'/>
          <hr className='border-white w-20 m-2 opacity-20'/>
        </div>
        <img src={home} className='h-6'/>
        <img src={kanban} className='h-6'/>
        <img src={route} className='h-6'/>
        <img src={schedule} className='h-6'/>
        <img src={calendar} className='h-6'/>
        <img src={admin} className='h-6'/>
        <img src={communication} className='h-6'/>
        <img src={education} className='h-12'/>
        <img src={invoices} className='h-6 mb-32'/>
        <hr className='border-white w-20 m-2 opacity-20'/>
        <div className='flex gap-2 justify-center'>
          <p className='font-semibold'> Sair </p>
          <img src={exit} />
        </div>
      </div>
    </>
  )
}
