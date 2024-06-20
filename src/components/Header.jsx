import mentoring from '../assets/header/mentoring.png'
import yara from '../assets/header/yara.jpg'
import notifications from '../assets/header/notifications.svg'
import arrow from '../assets/header/arrow.svg'

export default function Header() {
    return (
        <>
            <nav className='flex w-screen fixed flex-row bg-white gap-0 md:justify-between lg:justify-between items-center h-24 lg:h-20 text-black'>
                <div className='flex flew-row gap-1 md:gap-5 lg:gap-5 mx-5 items-center'>
                    <img src={mentoring} className='h-8 w-8 md:h-12 lg:h-12 md:w-12 lg:w-12 rounded' alt='icone mentoria'/>
                    <p className='font-semibold pt-2'> Mentoria </p>
                    <img src={arrow} className='h-2.4' alt='icone de seta'/>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-row gap-1 md:gap-5 lg:gap-5 mx-1 md:mx-32 lg:mx-32'>
                    <div className='flex flex-row gap-3'>
                        <img src={notifications} className='h-8 md:h-12 lg:h-12' alt='icone notificações'/>
                        <img src={yara} className='h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded' alt='foto de perfil do usuário'/>
                    </div>
                    <div className='flex flex-row md:flex-col lg:flex-col gap-1 md:gap-0 lg:gap-0'>
                        <p className='font-semibold'> Yara </p>
                        <p className='font-inter text-slate-500'> yara@gmail.com </p>
                    </div>
                </div>
            </nav>
        </>
    )
}