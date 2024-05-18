import mentoring from '../assets/header/mentoring.png'
import avatar from '../assets/header/avatar.png'
import notifications from '../assets/header/notifications.svg'
import arrow from '../assets/header/arrow.svg'

export default function Header() {
    return (
        <>
            <div className='flex flex-col md:flex-row lg:flex-row bg-white gap-2 md:gap-0 lg:gap-0 justify-center lg:justify-between md:justify-between md:items-center lg:items-center h-32 lg:h-20 text-black'>
                <div className='flex flew-row gap-5 mx-1 md:mx-5 lg:mx-5 text-center'>
                    <img src={mentoring} className='h-12'/>
                    <p className='font-semibold pt-2'> Mentoria X </p>
                    <img src={arrow} className='h-2.4'/>
                </div>
                <div className='flex flex-row md:gap-5 lg:gap-5 mx-1 md:mx-10 lg:mx-10'>
                    <img src={notifications} className='h-12'/>
                    <img src={avatar} className='h-12'/>
                    <div>
                        <p className='font-semibold'> Lucilene </p>
                        <p className='font-inter text-slate-500'> lucinele@gmail.com </p>
                    </div>
                </div>
            </div>
        </>
    )
}