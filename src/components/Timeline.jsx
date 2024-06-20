import antonio from '../assets/timeline/antonio.webp'
import diogo from '../assets/timeline/diogo.webp'
import check from '../assets/timeline/check.svg'
import download from '../assets/download.svg'
import arrow_up from '../assets/timeline/arrow_up.svg'
import arrow_down from '../assets/timeline/arrow_down.svg'
import plus from '../assets/plus.svg'
import file from '../assets/file.svg'
import funnel from '../assets/timeline/funnel.svg'
import eloisa from '../assets/eloisa.webp'
import calendar_2 from '../assets/calendar_2.svg'

export default function Timeline() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5 font-poppins">
        <div className="bg-white border-2 border-slate-200 rounded-lg w-full p-5">
          <h3 className="text-2xl font-bold font-dm"> Jornada </h3>
          <div className="pt-5 flex gap-5">
            <div className="flex flex-col items-center gap-1">
              <img src={check} alt='Icone check'/>
              <hr className="w-1 h-5/6 lg:h-3/6 bg-emerald-500 rounded" />
              <img src={check} alt='Icone check'/>
              <hr className="w-1 h-1/6 bg-emerald-500 rounded" />
              <img src={antonio} className='rounded-full h-9 w-9' alt='Foto Antonio'/>
              <hr className="w-1 h-1/6 bg-slate-100 rounded" />
              <a className="border-2 bg-white border-slate-100 rounded-md h-14 w-11" />
              <hr className="w-1 h-1/6 bg-slate-100 rounded" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="border-2 border-slate-200 rounded-lg w-full lg:h-72 p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_up} alt='Icone seta para cima'/>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5">
                  <h3 className="font-bold text-2xl font-dm"> 1° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={diogo} className='rounded-full h-12 w-12' alt='Foto Diogo'/>
                  <h3 className="font-semibold text-xl"> Diogo Albuquerque </h3>
                </div>
                <div className="pt-5">
                  <p className="text-slate-500">
                    {' '}
                    Lorem ipsum dolor sit amet consectetur. Viverra tempus vitae
                    donec non ultrices. Habitant amet in gravida ante proin.
                    Adipiscing ut et enim in. Vitae lacus pharetra pellentesque
                    sodales eget porta euismod sit. Tempor aliquet turpis
                    sagittis sed quisque. Ultricies tempus facilisi mattis
                    egestas sit tellus donec et sapien. Elementum rhoncus
                    lobortis amet faucibus. Mattis iaculis{' '}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row gap-5 lg:items-center pt-5">
                  <div>
                    <img src={file} className="h-9 w-9" alt='Icone arquivo'/>
                  </div>
                  <div className='md:w-5/12 lg:w-5/12'>
                    <div className="flex items-center justify-between">
                      <div className="flex-col">
                        <h2 className="font-bold">
                          {' '}
                          ATA DE REUNÃO 05.12.23 - Antônio Duarte.pdf{' '}
                        </h2>
                        <p className="text-sm text-slate-500">
                          {' '}
                          Anexado 04/12/2023 ás 15:00
                        </p>
                      </div>
                      <img src={download} className="h-5 w-5" alt='Icone download'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-full p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_down} alt='Icone seta para baixo'/>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl font-dm"> 2° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={diogo} className='rounded-full h-12 w-12' alt='Foto Diogo'/>
                  <h3 className="font-semibold text-xl"> Diogo Albuquerque </h3>
                </div>
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-full p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_down} alt='Icone seta para baixo'/>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl font-dm"> 3° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={diogo} className='rounded-full h-12 w-12' alt='Foto Diogo'/>
                  <h3 className="font-semibold text-xl"> Diogo Albuquerque </h3>
                </div>
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-full p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_down} alt='Icone seta para baixo'/>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl font-dm"> 4° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={diogo} className='rounded-full h-12 w-12' alt='Foto Diogo'/>
                  <h3 className="font-semibold text-xl"> Diogo Albuquerque </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold font-dm"> Atividades </h3>
              <div className="flex gap-5">
                <img src={plus} alt='Icone adição'/>
                <img src={funnel} alt='Icone funil'/>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between pt-8 px-8 pb-4 font-semibold font-dm gap-5 lg:gap-0">
              <p className="text-slate-500 w-6/12"> Nome da tarefa </p>
              <p className="text-slate-500 w-5/12"> Mentor </p>
              <p className="text-slate-500 w-2/12"> Etapas </p>
              <p className="text-slate-500 w-3/12"> Data de validade </p>
              <p className="text-slate-500 w-1/12"> Status </p>
            </div>
            <hr className='border-slate-300'/>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between p-5 gap-5 lg:gap-0">
              <p className='font-semibold'> Leia o livro “Arte da Guerra e faça um resumo </p>
              <div className="flex flex-col lg:flex-row gap-3 border-2 border-slate-300 lg:w-72 rounded-lg p-3">
                <div>
                  <img src={eloisa} className="h-12 w-12 rounded" alt='Foto mentora'/>
                </div>
                <div>
                  <p> Eloisa Barreto </p>
                  <p className="text-slate-500"> Mentora educação </p>
                </div>
              </div>
              <h3 className="font-semibold"> 2° Etapas </h3>
              <div className="flex gap-3">
                <img src={calendar_2} className="h-5 w-5" alt='Icone calendário'/>
                <p> 25/10/24 </p>
              </div>
              <div>
                <p style={{backgroundColor: '#BCF0AA'}} className="text-green-800 rounded px-3 py-2 font-semibold">
                  {' '}
                  Concluido{' '}
                </p>
              </div>
            </div>
            <hr className='border-slate-300'/>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between p-5 gap-5 lg:gap-0">
              <p className='font-semibold'> Leia o livro “Arte da Guerra e faça um resumo </p>
              <div className="flex flex-col lg:flex-row gap-3 border-2 border-slate-300 lg:w-72 rounded-lg p-3">
                <div>
                  <img src={eloisa} className="h-12 w-12 rounded" alt='Foto mentora'/>
                </div>
                <div>
                  <p> Eloisa Barreto </p>
                  <p className="text-slate-500"> Mentora educação </p>
                </div>
              </div>
              <h3 className="font-semibold"> 1° Etapas </h3>
              <div className="flex gap-3">
                <img src={calendar_2} className="h-5 w-5" alt='Icone calendário'/>
                <p> 25/10/24 </p>
              </div>
              <div>
                <p style={{backgroundColor: '#BCF0AA'}} className="text-green-800 rounded px-3 py-2 font-semibold">
                  {' '}
                  Concluido{' '}
                </p>
              </div>
            </div>
            <hr className='border-slate-300'/>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between p-5 gap-5 lg:gap-0">
              <p className='font-semibold'> Leia o livro “Arte da Guerra e faça um resumo </p>
              <div className="flex flex-col lg:flex-row gap-3 border-2 border-slate-300 lg:w-72 rounded-lg p-3">
                <div>
                  <img src={eloisa} className="h-12 w-12 rounded" alt='Foto mentora'/>
                </div>
                <div>
                  <p> Eloisa Barreto </p>
                  <p className="text-slate-500"> Mentora educação </p>
                </div>
              </div>
              <h3 className="font-semibold"> 3° Etapas </h3>
              <div className="flex gap-3">
                <img src={calendar_2} className="h-5 w-5" alt='Icone calendário'/>
                <p> 25/10/24 </p>
              </div>
              <div>
                <p style={{backgroundColor: '#F0DDAA'}} className="text-orange-900 rounded px-4 py-2 font-semibold">
                  {' '}
                  Pendente{' '}
                </p>
              </div>
            </div>
            <hr className='border-slate-300'/>
          </div>
        </div>
      </div>
    </>
  )
}
