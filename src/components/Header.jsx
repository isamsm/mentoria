import mentoring from '../assets/header/mentoring.png'
import yara from '../assets/header/yara.jpg'
import notifications from '../assets/header/notifications.svg'
import arrow from '../assets/header/arrow.svg'

export default function Header() {
    return (
        <>
            <div className='flex w-screen fixed flex-col md:flex-row lg:flex-row bg-white gap-5 md:gap-0 lg:gap-0 justify-center lg:justify-between md:justify-between md:items-center lg:items-center h-36 lg:h-20 text-black'>
                <div className='flex flew-row gap-5 mx-1 md:mx-5 lg:mx-5 items-center'>
                    <img src={mentoring} className='h-12 w-12 rounded' alt='icone mentoria'/>
                    <p className='font-semibold pt-2'> Mentoria </p>
                    <img src={arrow} className='h-2.4' alt='icone de seta'/>
                </div>
                <div className='flex flex-row gap-5 mx-1 md:mx-32 lg:mx-32'>
                    <img src={notifications} className='h-12' alt='icone notificações'/>
                    <img src={yara} className='h-12 rounded' alt='foto de perfil do usuário'/>
                    <div>
                        <p className='font-semibold'> Yara </p>
                        <p className='font-inter text-slate-500'> yara@gmail.com </p>
                    </div>
                </div>
            </div>
        </>
    )
}