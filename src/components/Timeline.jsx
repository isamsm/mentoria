import italo from '../assets/timeline/italo.png'
import lucio from '../assets/timeline/lucio.png'
import check from '../assets/timeline/check.svg'
import download from '../assets/download.svg'
import arrow_up from '../assets/timeline/arrow_up.svg'
import arrow_down from '../assets/timeline/arrow_down.svg'
import trash from '../assets/trash.svg'
import file from '../assets/file.svg'

export default function Timeline() {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5 font-poppins">
        <div className="bg-white border-2 border-slate-200 rounded-lg w-full p-5">
          <h3 className="text-2xl font-bold"> Jornada </h3>
          <div className="pt-5 flex gap-5">
            <div className="flex flex-col items-center gap-1">
              <img src={check} />
              <hr className="w-1 h-64 bg-emerald-500 rounded" />
              <img src={check} />
              <hr className="w-1 h-64 bg-emerald-500 rounded" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="border-2 border-slate-200 rounded-lg w-full h-72 p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_up} />
                </div>
                <div className="flex items-center gap-5 pt-5">
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
              </div>
              <div className="border-2 border-slate-200 rounded-lg w-full h-72 p-5">
                <div className="flex justify-between">
                  <p className="text-slate-500"> 05/10/2024 </p>
                  <img src={arrow_up} />
                </div>
                <div className="flex items-center gap-5 pt-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
