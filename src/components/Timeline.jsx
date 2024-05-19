import italo from '../assets/timeline/italo.png'
import lucio from '../assets/timeline/lucio.png'
import check from '../assets/timeline/check.svg'
import download from '../assets/download.svg'
import arrow_up from '../assets/timeline/arrow_up.svg'
import arrow_down from '../assets/timeline/arrow_down.svg'
import plus from '../assets/plus.svg'
import file from '../assets/file.svg'
import funnel from '../assets/timeline/funnel.svg'
import helio from '../assets/helio.png'
import calendar_2 from '../assets/calendar_2.svg'

export default function Timeline() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5 font-poppins">
        <div className="bg-white border-2 border-slate-200 rounded-lg w-72 md:w-full lg:w-full p-5">
          <h3 className="text-2xl font-bold"> Jornada </h3>
          <div className="pt-5 flex gap-5">
            <div className="flex flex-col items-center gap-1">
              <img src={check} />
              <hr className="w-1 h-screen md:h-80 lg:h-64 bg-emerald-500 rounded" />
              <img src={check} className="h-20 w-20" />
              <hr className="w-1 h-48 md:h-28 lg:h-24 bg-emerald-500 rounded" />
              <img src={italo} />
              <hr className="w-1 h-48 md:h-28 lg:h-24 bg-slate-100 rounded" />
              <a className="border-2 bg-white border-slate-100 rounded-md h-8 w-8" />
              <hr className="w-1 h-36 md:h-24 lg:h-24 bg-slate-100 rounded" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="border-2 border-slate-200 rounded-lg w-48 md:w-full lg:w-full lg:h-72 p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_up} />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl"> 1° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={lucio} />
                  <h3 className="font-semibold text-xl"> Lucio Santana </h3>
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
                    <img src={file} className="h-9 w-9" />
                  </div>
                  <div>
                    <div className="flex flex-row lg:flex-row items-center justify-between">
                      <div className="flex-col">
                        <h2 className="font-bold pr-12">
                          {' '}
                          ATA DE REUNÃO 05.12.23 - Italo Silva.pdf{' '}
                        </h2>
                        <p className="text-sm text-slate-500">
                          {' '}
                          Anexado 04/12/2023 ás 15:00
                        </p>
                      </div>
                      <img src={download} className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-48 md:w-full lg:w-full p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_down} />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl"> 2° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={lucio} />
                  <h3 className="font-semibold text-xl"> Lucio Santana </h3>
                </div>
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-48 md:w-full lg:w-full p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_down} />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl"> 3° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={lucio} />
                  <h3 className="font-semibold text-xl"> Lucio Santana </h3>
                </div>
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-48 md:w-full lg:w-full p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_down} />
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-1 md:gap-5 lg:gap-5 md:pt-5 lg:pt-5">
                  <h3 className="font-bold text-2xl"> 4° Etapa </h3>
                  <a className="border-4 border-slate-300 rounded-full" />
                  <img src={lucio} />
                  <h3 className="font-semibold text-xl"> Lucio Santana </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-16">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold"> Atividades </h3>
              <div className="flex gap-5">
                <img src={plus} />
                <img src={funnel} />
              </div>
            </div>
            <div className="flex justify-between p-8 font-semibold">
              <div>
                <p className="text-slate-500"> Nome da tarefa </p>
                <p> Leia o livro “Arte da Guerra e faça um resumo </p>
              </div>
              <div>
                <p className="text-slate-500"> Mentor </p>
                <div className="flex gap-3 border-2 border-slate-300 w-72 rounded-lg p-3">
                  <div>
                    <img src={helio} className="h-12 w-12" />
                  </div>
                  <div>
                    <p> Helio Martins</p>
                    <p className="text-slate-500"> Mentor educação </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-slate-500"> Etapas </p>
                <h3 className="font-semibold"> 2° Etapas </h3>
              </div>
              <div>
                <p className="text-slate-500"> Data de validade </p>
                <div className="flex items-center gap-3">
                  <img src={calendar_2} className="h-5 w-5" />
                  <p className="font-semibold text-slate-500"> 25/10/24 </p>
                </div>
              </div>
              <div>
                <p className="text-slate-500"> Status </p>
                <button className="bg-green-400 font-semibold">
                  {' '}
                  Concluido{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
