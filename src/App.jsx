import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Timeline from  './components/Timeline'
import arrow from './assets/arrow.svg'
import eloisa from './assets/eloisa.jpg'
import edit from './assets/edit.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import youtube from './assets/youtube.svg'
import whatsapp from './assets/whatsapp.svg'
import plus from './assets/plus.svg'
import trash from './assets/trash.svg'
import tel from './assets/tel.svg'
import email from './assets/email.svg'
import calendar from './assets/calendar.svg'
import company from './assets/company.svg'
import file from './assets/file.svg'
import download from './assets/download.svg'
import calendar_2 from './assets/calendar_2.svg'

function App() {
  return (
    <>
      <div className="flex flex-row w-screen font-dm">
        <Sidebar />
        <div className="w-screen ml-24">
          <div className='mb-36 lg:mb-20'>
            <Header />
          </div>
          <div className="bg-slate-100 text-black">
            <div className="px-2 md:px-10 lg:px-10 pt-5">
              <div className="flex justify-between gap-5 md:gap-0 lg:gap-0 pb-5">
                <h3 className="text-xl font-bold"> Mentorados</h3>
                <div className="flex gap-4 items-center">
                  <img src={arrow} className="h-4 w-4" alt='icone de seta'/>
                  <p> Voltar</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5">
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 md:w-6/12 lg:w-6/12 p-5">
                  <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                    <div>
                      <img src={eloisa} className="h-36 w-36 lg:w-40 rounded" alt='foto de mentorado'/>
                    </div>
                    <div className='w-9/12'>
                      <div className="flex flex-col lg:flex-row justify-between">
                        <h2 className="text-2xl font-bold">
                          {' '}
                          Eloisa Barreto{' '}
                        </h2>
                        <img src={edit} className="h-10 w-10" alt='icone de edição'/>
                      </div>
                      <div className="flex flex-col gap-5">
                        <p className="text-sm text-slate-500 font-poppins">
                          {' '}
                          Lead Marketing Digital{' '}
                        </p>
                        <div className="flex gap-3">
                          <img src={instagram} className="h-10 w-10" alt='icone instagram'/>
                          <img src={facebook} className="h-10 w-10" alt='icone facebook'/>
                          <img src={youtube} className="h-10 w-10" alt='icone youtube'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 md:w-6/12 lg:w-6/12 p-5">
                  <div className="flex gap-5 justify-between md:items-center lg:items-center">
                    <h3 className="text-2xl font-bold"> Sobre </h3>
                    <img src={edit} className="h-10 w-10" alt='icone de edição'/>
                  </div>
                  <div className="flex flex-col gap-5 pt-5 font-poppins">
                    <p className="text-sm text-slate-500">
                      {' '}
                      Lorem ipsum dolor sit amet consectetur. Viverra tempus
                      vitae donec non ultrices. Habitant amet in gravida
                      ante proin. Adipiscing ut et enim in. Vitae lacus pharetra
                      pellentesque sodales eget porta euismod sit. Tempor
                      aliquet turpis sagittis sed quisque. Ultricies tempus
                      facilisi mattis {' '}
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
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 pb-5 font-poppins">
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 md:w-6/12 lg:w-6/12 p-5">
                  <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-center">
                    <h3 className="text-2xl font-bold font-dm"> Informações </h3>
                    <div className="flex gap-5">
                      <button
                        style={{ backgroundColor: '#4963FF' }}
                        className="flex gap-2 items-center text-sm text-white"
                      >
                        <img src={whatsapp} className="h-6 w-6" alt='icone whatsapp'/>
                        Entre em contato
                      </button>
                      <img src={plus} className="h-10 w-10" alt='icone de adição'/>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between pt-5">
                    <div className="flex items-center gap-3">
                      <img src={tel} className="h-9 w-9" alt='icone telefone'/>
                      <p className="text-slate-500"> Telefone </p>
                    </div>
                    <div className="flex md:items-center lg:items-center gap-5">
                      <p className="font-bold"> +55 11 91234-5671 </p>
                      <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between pt-5">
                    <div className="flex items-center gap-3">
                      <img src={email} className="h-9 w-9" alt='icone email'/>
                      <p className="text-slate-500"> Email </p>
                    </div>
                    <div className="flex md:items-center lg:items-center gap-5">
                      <p className="font-bold"> loremimpsum@dolor.sit</p>
                      <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between pt-5">
                    <div className="flex items-center gap-3">
                      <img src={calendar} className="h-9 w-9" alt='icone calendário'/>
                      <p className="text-slate-500"> Aniversário </p>
                    </div>
                    <div className="flex md:items-center lg:items-center gap-5">
                      <p className="font-bold">
                        {' '}
                        <span className="text-slate-500"> 24 Anos | </span>{' '}
                        24/05/2000{' '}
                      </p>
                      <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between pt-5">
                    <div className="flex items-center gap-3">
                      <img src={company} className="h-9 w-9" alt='icone empresa'/>
                      <p className="text-slate-500"> Empresa onde trabalha </p>
                    </div>
                    <div className="flex md:items-center lg:items-center gap-5">
                      <p className="font-bold"> Ifood </p>
                      <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 md:w-6/12 lg:w-6/12 p-5 font-poppins">
                  <div className="flex gap-5 justify-between md:items-center lg:items-center">
                    <h3 className="text-2xl font-bold font-dm"> Mentores </h3>
                    <img src={edit} className="h-10 w-10" alt='icone de edição'/>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-5 gap-3">
                    <div className="bg-white border-2 border-slate-200 rounded-lg lg:w-6/12 p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img src={eloisa} className="h-16 w-16 rounded" alt='foto mentora'/>
                        </div>
                        <div className='w-8/12'>
                          <div className="flex justify-between">
                            <h2 className="font-bold"> Eloisa Barreto </h2>
                            <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentora educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-slate-200 rounded-lg lg:w-6/12 p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img src={eloisa} className="h-16 w-16 rounded" alt='foto mentora'/>
                        </div>
                        <div className='w-8/12'>
                          <div className="flex justify-between">
                            <h2 className="font-bold"> Eloisa Barreto </h2>
                            <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentora educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border-2 border-slate-200 rounded-lg lg:w-6/12 p-5 mt-5">
                    <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                      <div>
                        <img className="h-16 w-16 rounded" src={eloisa} alt='foto mentora'/>
                      </div>
                      <di className='w-8/12'v>
                        <div className="flex justify-between">
                          <h2 className="font-bold"> Eloisa Barreto </h2>
                          <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                        </div>
                        <div className="flex flex-col gap-5">
                          <p className="text-sm text-slate-500">
                            {' '}
                            Mentora educação{' '}
                          </p>
                        </div>
                      </di>
                    </div>
                  </div>
                </div>
              </div>
                <Timeline />
              <div className="flex flex-col md:flex-row lg:flex-row pt-5 gap-3 font-poppins">
                <div className="bg-white border-2 border-slate-200 rounded-lg w-72 md:w-6/12 lg:w-6/12 p-5">
                  <div className="flex gap-5 justify-between md:items-center lg:items-center">
                    <h3 className="text-2xl font-bold font-dm"> Anexos </h3>
                    <img src={plus} className="h-10 w-10" alt='icone adição'/>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-5">
                    <div className="bg-white border-2 border-slate-200 lg:w-full rounded-lg p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img src={file} className="h-9 w-9" alt='icone arquivo'/>
                        </div>
                        <div className='w-11/12'>
                          <div className="flex justify-between">
                            <h2 className="font-bold">
                              {' '}
                              ATA DE REUNÃO 05.12.23 - Antônio Duarte.pdf{' '}
                            </h2>
                            <img src={download} className="h-5 w-5" alt='icone download'/>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Anexado 04/12/2023 ás 15:00
                            </p>
                            <img src={trash} className="h-5 w-5 mt-2" alt='icone apagar'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-5">
                    <div className="bg-white border-2 border-slate-200 lg:w-full rounded-lg p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img src={file} className="h-9 w-9" alt='icone arquivo'/>
                        </div>
                        <div className='w-11/12'>
                          <div className="flex justify-between">
                            <h2 className="font-bold">
                              {' '}
                              ATA DE REUNÃO 05.12.23 - Antônio Duarte.pdf{' '}
                            </h2>
                            <img src={download} className="h-5 w-5" alt='icone download'/>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Anexado 04/12/2023 ás 15:00
                            </p>
                            <img src={trash} className="h-5 w-5 mt-2" alt='icone apagar'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden border-2 border-slate-200 rounded-lg w-72 md:w-6/12 lg:w-6/12 p-5 font-poppins h-full crop">
                  <div className="flex gap-5 justify-between md:items-center lg:items-center">
                    <h3 className="text-2xl font-bold font-dm"> Anotações </h3>
                    <img src={plus} className="h-10 w-10" alt='icone adição'/>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-5">
                    <div className="border-2 border-slate-200 lg:w-full rounded-lg p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img src={eloisa} className="h-9 w-9 rounded-full" alt='foto mentora'/>
                        </div>
                        <div className='w-11/12'>
                          <div className="flex justify-between items-center">
                            <h2 className="font-bold"> Eloisa Barreto </h2>
                            <div className="flex gap-2">
                              <img src={calendar_2} className="h-5 w-5" alt='icone calendário'/>
                              <p className="text-sm"> 25/10/24 </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentora educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex pt-3 justify-between pb-5">
                        <h3 className="text-lg font-bold">
                          {' '}
                          Pontos de melhorias em sua timidez{' '}
                        </h3>
                        <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                      </div>
                      <p className="text-sm text-slate-500">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur. Viverra tempus
                        vitae donec non ultrices. Habitant amet in gravida ante
                        proin. Adipiscing ut et enim in. Vitae lacus pharetra
                        pellentesque sodales eget porta euismod sit. Tempor
                        aliquet turpis sagittis sed quisque. Ultricies tempus
                        facilisi mattis egestas sit tellus donec et sapien.
                        Elementum rhoncus{' '}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-5">
                    <div className="border-2 border-slate-200 lg:w-full rounded-lg p-5">
                      <div className="flex flex-col lg:flex-row gap-5 lg:items-center">
                        <div>
                          <img src={eloisa} className="h-9 w-9 rounded-full" alt='foto mentora'/>
                        </div>
                        <div  className='w-11/12'>
                          <div className="flex justify-between items-center">
                            <h2 className="font-bold"> Eloisa Barreto </h2>
                            <div className="flex gap-2">
                              <img src={calendar_2} className="h-5 w-5" alt='icone calendário'/>
                              <p className="text-sm"> 25/10/24 </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-5">
                            <p className="text-sm text-slate-500">
                              {' '}
                              Mentora educação{' '}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex pt-3 justify-between pb-5">
                        <h3 className="text-lg font-bold">
                          {' '}
                          Pontos de melhorias em sua timidez{' '}
                        </h3>
                        <img src={trash} className="h-5 w-5" alt='icone apagar'/>
                      </div>
                      <p className="text-sm text-slate-500">
                        {' '}
                        Lorem ipsum dolor sit amet consectetur. Viverra tempus
                        vitae donec non ultrices. Habitant amet in gravida ante
                        proin. Adipiscing ut et enim in. Vitae lacus pharetra
                        pellentesque sodales eget porta euismod sit. Tempor
                        aliquet turpis sagittis sed quisque. Ultricies tempus
                        facilisi mattis egestas sit tellus donec et sapien.
                        Elementum rhoncus{' '}
                      </p>
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
