import mentoring from '../assets/header/mentoring.webp'
import yara from '../assets/header/yara.webp'
import notifications from '../assets/header/notifications.svg'
import arrow from '../assets/header/arrow.svg'

export default function Header() {
    return (
        <>
            <nav className='flex w-9/12 md:w-screen lg:w-screen fixed flex-row bg-white gap-0 justify-between items-center h-20 text-black'>
                <div className='flex flew-row gap-1 md:gap-5 lg:gap-5 mx-5 items-center'>
                    <img src={mentoring} className='h-8 w-8 md:h-12 lg:h-12 md:w-12 lg:w-12 rounded' alt='Icone mentoria'/>
                    <p className='font-semibold pt-2'> Mentoria </p>
                    <img src={arrow} className='h-2.4 pt-2' alt='Icone de seta'/>
                </div>
                <div className='flex flex-row gap-1 md:gap-5 lg:gap-5 mx-0 md:mx-32 lg:mx-32'>
                    <img src={notifications} className='h-8 md:h-12 lg:h-12' alt='Icone notificações'/>
                    <img src={yara} className='h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded' alt='Foto de perfil do usuário'/>
                    <div className='flex flex-row md:flex-col lg:flex-col gap-1 md:gap-0 lg:gap-0 items-center md:items-start lg:items-start'>
                        <p className='font-semibold'> Yara </p>
                        <p className='font-inter text-slate-500 hidden md:block lg:block'> yara@gmail.com </p>
                    </div>
                </div>
            </nav>
        </>
    )
}