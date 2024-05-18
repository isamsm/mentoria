import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import arrow from './assets/arrow.svg'
import italo from './assets/italo.png'
import edit from './assets/edit.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import youtube from './assets/youtube.svg'
import whatsapp from './assets/whatsapp.svg'
import plus from './assets/plus.svg'
import trash from './assets/trash.svg'

function App() {
  return (
    <>
      <div className="flex flex-row h-full w-screen font-dm">
        <Sidebar />
        <div className="w-screen">
          <Header />
          <div className="bg-slate-100 text-black">
            <div className="px-2 md:px-10 lg:px-10 py-5">
              <div className="flex flex-col md:flex-row lg:flex-row justify-between pb-5">
                <h3 className="text-xl font-bold"> Mentorados</h3>
                <div className="flex gap-5">
                  <img src={arrow} />
                  <p> Voltar</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5">
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 lg:w-6/12 h-50 p-5">
                  <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                    <div>
                      <img className="h-40" src={italo} />
                    </div>
                    <div>
                      <div className="flex flex-col lg:flex-row justify-between">
                        <h2 className="text-2xl font-bold pr-36">
                          {' '}
                          Italo Souza Pereira{' '}
                        </h2>
                        <img src={edit} className="h-10 w-10" />
                      </div>
                      <div className="flex flex-col gap-5">
                        <p className="text-sm text-slate-500">
                          {' '}
                          Lead Marketing Digital{' '}
                        </p>
                        <div className="flex gap-3">
                          <img src={instagram} className="h-10" />
                          <img src={facebook} className="h-10" />
                          <img src={youtube} className="h-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 lg:w-6/12 h-50 p-5">
                  <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-between md:items-center lg:items-center">
                    <h3 className="text-2xl font-bold"> Sobre </h3>
                    <img src={edit} className="h-10 w-10" />
                  </div>
                  <div className="flex flex-col gap-5 pt-5 font-poppins">
                    <p className="text-sm text-slate-500">
                      {' '}
                      Lorem ipsum dolor sit amet consectetur. Viverra tempus
                      vitae donec non ultrices. Habitant amet <br /> in gravida
                      ante proin. Adipiscing ut et enim in. Vitae lacus pharetra
                      pellentesque sodales eget <br /> porta euismod sit. Tempor
                      aliquet turpis sagittis sed quisque. Ultricies tempus
                      facilisi mattis <br />{' '}
                      <span className="text-slate-400">
                        {' '}
                        egestas sit tellus donec et sapien. Elementum rhoncus
                        lobortis amet faucibus. Mattis iaculis{' '}
                      </span>{' '}
                    </p>
                    <p className="text-blue-500 font-bold"> Ler mais </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5">
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 lg:w-6/12 h-50 p-5">
                  <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-center">
                    <h3 className="text-2xl font-bold"> Informações </h3>
                    <div className="flex gap-5">
                      <button
                        style={{ backgroundColor: '#4963FF' }}
                        className="flex gap-2 items-center text-sm text-white"
                      >
                        <img src={whatsapp} className="h-6 w-6" />
                        Entre em contato
                      </button>
                      <img src={plus} className="h-10 w-10" />
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 lg:w-6/12 h-50 p-5">
                  <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-between md:items-center lg:items-center">
                    <h3 className="text-2xl font-bold"> Mentores </h3>
                    <img src={edit} className="h-10 w-10" />
                  </div>
                  <div className="flex flex-col lg:flex-row pt-5 gap-3">
                    <div className="bg-white border-2 border-slate-200 rounded-lg lg:w-6/12 h-50 p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img className="h-16 w-16" src={italo} />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <h2 className="font-bold pr-12"> Helio Martins </h2>
                            <img src={trash} />
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentor educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-slate-200 rounded-lg lg:w-6/12 h-50 p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img className="h-16 w-16" src={italo} />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <h2 className="font-bold pr-12"> Helio Martins </h2>
                            <img src={trash} />
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentor educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-slate-200 rounded-lg lg:w-6/12 h-50 p-5 mt-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img className="h-16 w-16" src={italo} />
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <h2 className="font-bold pr-12"> Helio Martins </h2>
                            <img src={trash} />
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentor educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
