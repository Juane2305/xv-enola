import AOS from 'aos';
import 'aos/dist/aos.css';

import dress from '../assets/aurora/dressCodeAurora.svg'
import CountdownCircles from "./CountdownCircles";
import song from '../assets/song.mp3'
import MusicScreen from "./MusicScreen";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import DressCodeEsmeralda from "./DressCodeEsmeralda";
import decoracionNombre from "../assets/aurora/decoracionNombre.svg";
import InstagramWall from './InstagramWall';


const Invitacion = () => {


  const targetDate = new Date("2026-02-06T21:00:00-03:00");

  const colorPrincipal = "#fbcfe8";
  const colorSecundario = "#fbcfe8";



  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0] md:bg-black">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>
        <div className="relative z-10 h-screen">
          <div
            className="absolute inset-0 bg-center bg-cover md:bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dheeykiqu/image/upload/v1765898096/imagen-xv_ps1vnv.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-end items-center text-center text-white h-full pb-20">
            <div className="flex items-end justify-center">
              <img
                src={decoracionNombre}
                alt="Decoración invertida"
                className="w-32 h-auto"
              />
              <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-7xl font-bold tracking-wide text-white mb-2">
                  Enola
                </h1>
               <p className="text-xl md:text-2xl font-light tracking-wider text-white">
                  MIS QUINCE AÑOS
                </p>
              </div>
              <img
                src={decoracionNombre}
                alt="Decoración normal"
                className="w-32 h-auto scale-x-[-1] transform"
              />
            </div>
          </div>
        </div>

      <div>
          <section
            id="contador"
            className="bg-white py-10 border-y-4 border-[#fbcfe8] text-center"
          >
            <p className=' text-2xl py-5'>6 de Febrero de 2026</p>
            <CountdownCircles
              targetDate={targetDate}
              containerClasses="my-8"
              backgroundColor="#e5e7eb"
              progressColor="#fbcfe8"
              textColor="black"
              valueClassName="text-3xl font-light"
              labelClassName="text-base font-thin"
            />
          </section>

        <section id="lugares" className="relative text-center bg-white pb-20">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            salon="La Quinta"
            hora_civil="21:00hs"
          />
          <a href="https://maps.app.goo.gl/f7kWHky9dUQqmZQk8?g_st=ipc" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-gray-700 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

          {/* <div className="relative bg-white">
            <section className="pb-16">
                <FocusCardsDemo
                    texto=""
                  images={[
                    {
                      index: 1,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/7dc8b2f6-2c6b-4204-afdf-fa6188affccf_oiea55.jpg",
                    },
                    {
                      index: 2,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/IMG_3498_qnkqxf.jpg",
                    },
                    {
                      index: 3,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/IMG_3497_gnfedj.jpg",
                    },
                    {
                      index: 4,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661705/IMG_3506_grqo6r.jpg",
                    },
                    {
                      index: 5,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761661704/IMG_3505_jsv68z.jpg",
                    },
                    {
                      index: 6,
                      img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1761673716/2e1b4ca8-4089-4e53-b7e6-69f05d3b0c60_2_j8kr9c.jpg",
                    },
                  ]}
                />
            </section>
          </div> */}

          <div className="bg-[#f3b6d9] text-center relative text-white">
            <GoogleCalendarButton
              imgClass="text-[#4b5147]"
              buttonClass="border-white bg-white text-gray-800 rounded-full"
              titleCalendar="XV de Enola"
              salon="La Quinta, Alfredo Nobel 3350, B1667ESN Tortuguitas, Provincia de Buenos Aires"
              fechaComienzo="20260206T210000"
              fechaFin="20260207T050000"
            />
          </div>

          <InstagramWall user="@gie.oficial"/>

          <div className="relative bg-white py-10">
            <DressCodeEsmeralda dressCode="Formal" icon={dress}/>
          </div>

          <div className="relative bg-white">
            <DatosBancarios
              claseIcon="text-white"
              texto="Si deseas hacerme un regalo, te dejo los datos"
              claseContenedor=" text-white"
              claseBoton="rounded-full hover:shadow-lg border-white bg-gray-100 text-gray-900"
              textSize="text-lg"
              background={{ backgroundColor: 'white' }}
              styleBotonModal={{
                backgroundColor: "white",
                borderColor: "#fbcfe8",
              }}
              claseBotonModal={{
                backgroundColor: "#fbcfe8",
                borderColor: "#fbcfe8",
              }}
              styleModal={{ backgroundColor: colorSecundario }}
              styleBorderModal={{ borderColor: colorPrincipal }}
              styleTextColor={{ color: colorPrincipal }}
              cbu="0000003100034374400003"
              alias="enola.520.isla.mp"
              banco="Mercado Pago"
              nombre="Enola Abril González "
              claseModal="bg-[#fbcfe8]"
              borderModal="border-[#fbcfe8]"
              textColor="text-[#fbcfe8]"
            />
          </div>

          <div className="relative">
            <Asistencia
              clase="py-10 bg-white bg-fixed border-b-4 border-[#fbcfe8]"
              claseTitle="text-gray-800"
              claseButton="border-2 border-[#fbcfe8] font-semibold hover:bg-[#fbcfe8]  text-gray-700 hover:text-white rounded-full"
              linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSfMTt6SFlLvu5VZ0u4NpZDbM-8lSlCQHArzO39V1KtBOrgSEw/viewform?usp=dialog"
            />
          </div>

        <div className="font-eleganteText text-xl bg-white font-semibold py-10">
          <TextoFinal textoFinal="¡Gracias por venir!" textClass="text-xl italic"/>
          <TextoFinal textoFinal="- Enola" textClass="text-lg italic mt-5"/>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
