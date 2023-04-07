import { useRef,useState } from 'react'
import {FaHome,FaFacebook,FaLinkedin,FaGithub,FaCode,FaTimes} from 'react-icons/fa'
import {RxHamburgerMenu} from 'react-icons/rx'
import './App.css'
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const form = useRef();
  const [show,setShow]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4yr6e6c', 'template_3icy1uc', form.current, '1Ii21jrF199wZmhPW')
      .then((result) => {
          console.log(result.text);
          toast.success('Message send!')
      }, (error) => {
          console.log(error.text);
      });
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Luthando_Didiza_Resume-2.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Luthando_Didiza_Resume-2.pdf';
            alink.click();
        })
    })
}


  return (
            <>
            <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
              <nav className="navbar w-full  bg-black py-3 relative">
                <div className="w-[95%] mx-auto  flex justify-between items-center">
                  <h1 className="text-3xl font-bold text-white">Luthando</h1>

                  <ul className="hidden lg:flex lg:justify-between items-center text-white">
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-blue-700 cursor-pointer">
                      <h1 className='flex items-center'><FaHome className='mr-2 hover:text-red-700 text-sky-600' /> Home</h1>
                    </li>
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:translate-y-4 hover:shadow-sky-700 cursor-pointer">
                      <a href='#about' >About</a>
                    </li>
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-sky-700 cursor-pointer">
                      <a href='#services'>Services</a>
                    </li>
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-sky-700 cursor-pointer">
                    <a href="#resume">
                      <h1>Resume</h1>
                    </a>
                    </li>
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:translate-y-2 hover:shadow-sky-700 cursor-pointer">
                    <a href="#portfolio">
                      <h1>portfolio</h1>
                    </a>
                    </li>
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:translate-y-2 hover:shadow-sky-700 cursor-pointer">
                    <a href="#skills">
                      <h1>Skills</h1>
                    </a>
                    </li>
                    <li className="p-3 font-light text-2xl capitalize hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-sky-700 cursor-pointer">
                    <a href="#contact">
                      <h1>contact</h1>
                    </a>
                    </li>
                  </ul>

                  <div className="icons flex items-center space-x-5">
                  <a href="https://github.com/Luthando496" target="_blank" >
                    <FaGithub className='text-indigo-700 hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-fuchsia-700 cursor-pointer' size={30} />
                  </a>
                  <a href="https://www.linkedin.com/in/luthando-didiza-43494b1a6/" target="_blank">
                    <FaLinkedin className='text-indigo-700 hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-fuchsia-700 cursor-pointer' size={30} />
                  </a>
                    <FaFacebook  size={30} className='text-indigo-700 hover:text-purple-700 duration-500 hover:shadow-lg hover:-translate-y-2 hover:shadow-fuchsia-700 cursor-pointer' />
                  </div>

                  <RxHamburgerMenu className='text-rose-500 md:hidden cursor-pointer text-2xl' onClick={() => setShow(!show)} />

                 {show && <div
                    id="menu"
                    class={`absolute z-40 top-0 bottom-0 left-0 ${show ? ' flex flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black' : 'hidden'}`}
                  >
                    <a  onClick={() => setShow(!show)} href="#home"  class="hover:text-pink-500">Careers</a>
                    <a  onClick={() => setShow(!show)} href="#about" class="hover:text-pink-500">About</a>
                    <a  onClick={() => setShow(!show)} href="#services" class="hover:text-pink-500">Services</a>
                    <a  onClick={() => setShow(!show)} href="#resume" class="hover:text-pink-500">Resume</a>
                    <a  onClick={() => setShow(!show)} href="#portfolio" class="hover:text-pink-500">Portfolio</a>
                    </div>}

                </div>

              </nav>

              <header id='home' className='w-full h-screen py-28 text-center text-white'>

                <div className="space-y-24">
                <h3 className="text-4xl font-bold">Welcome</h3>
                <TypeAnimation
      sequence={[
        'My Name Is Luthando', // Types 'One'
        1000, // Waits 1s
        'I Am A Frontend Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        () => {
          console.log('Sequence completed'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', display: 'inline-block' }}
    />
                <h1 className="text-2xl font-light"></h1>
                <h2 className="text-2xl font-semibold">based in Cape Town, South Africa.</h2>

                <button className="p-4 duration-700 rounded-full border-purple-600 hover:bg-purple-800 shadow-md shadow-pink-600 border hover:border-none w-[15rem] hover:-translate-y-2">Hired Me</button>

                </div>
 
              </header>

              <section id='about' className=" pt-28 pb-4 bg-white/90-full">

                <h1 className="text-4xl font-bold text-sky-500 text-center">About Me</h1>

                <div className="w-[6rem] my-3 h-[2px] bg-sky-500 text-center mx-auto"></div>

                <div className="mt-[6rem] mb-5 flex flex-col lg:grid lg:grid-cols-4 w-[90%] mx-auto text-left gap-4">

                  <div className="col-span-3 space-y-4">
                    <h2 className="text-3xl font-bold  text-black">I'm <span className="text-sky-500">Luthando Didiza</span>, a Web Developer</h2>
                    <p className="text-xl text-black leading-relaxed font-light">I help you build brand for your business at an affordable price. Thousands of clients have procured exceptonal results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <p className="mt-5 text-xl leading-relaxed font-light text-black">Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>

                  </div>

                  <div className="col-span-1 about-col" >
                    <ul className="flex flex-col space-y-2">
                      <li className="py-2 about-list border-blue-500">
                        <h2 className='text-lg text-black'><span className="font-semibold text-sky-500 tracking-widest uppercase">Name</span>: Luthando Didiza</h2>
                      </li>
                      <li className="py-2 about-list border-blue-500">
                        <h2 className='text-lg text-black'><span className="font-semibold text-sky-500 tracking-widest uppercase">Email</span>: <span className="text-sm">luthandodidza197@gmail.com</span></h2>
                      </li>
                      <li className="py-2 about-list border-blue-500">
                        <h2 className='text-lg text-black'><span className="font-semibold text-sky-500 tracking-widest uppercase">Age</span>: 22</h2>
                      </li>
                      <li className="py-2 about-list border-blue-500">
                        <h2 className='text-lg text-black'><span className="font-semibold text-sky-500 tracking-widest uppercase">From</span>: Cape Town, South Africa</h2>
                      </li>
                    </ul>
                      <button className="mt-[3rem] rounded-full shadow-xl hover:-translate-y-2 duration-1000 uppercase bg-rose-600 p-4 text-xl text-white shadow-sky-400" onClick={onButtonClick} >Download PDF</button>
                     
                  </div>

                </div>

                <div className="my-[5rem] grid grid-cols-2 lg:grid-cols-4 gap-8 w-[80%] mx-auto">

                  <div className=" border-r text-center ">
                    <h1 className="text-rose-400 font-bold text-4xl">3+</h1>
                    <h2 className="text-black font-semibold text-xl">Years Of Experiance</h2>
                  </div>

                  <div className=" border-r text-center ">
                    <h1 className="text-rose-400 font-bold text-4xl">7+</h1>
                    <h2 className="text-black font-semibold text-xl">Happy Clients</h2>
                  </div>

                  <div className=" border-r text-center ">
                    <h1 className="text-rose-400 font-bold text-4xl">30+</h1>
                    <h2 className="text-black font-semibold text-xl">Projects Done</h2>
                  </div>

                  <div className=" border-r text-center ">
                    <h1 className="text-rose-400 font-bold text-4xl">4+</h1>
                    <h2 className="text-black font-semibold text-xl">Awards</h2>
                  </div>

                </div>


              </section>

              {/* services */}
              <section id='services' className="pt-28 pb-4 bg-gray-200  w-full">

                <h1 className="text-4xl font-bold text-sky-500 text-center">Services</h1>
                <div className="w-[6rem] my-3 h-[2px] bg-sky-500 text-center mx-auto"></div>


               <div className="flex flex-col md:grid  md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto my-[6rem]">
               {/*  */}

               <div className="rounded-xl py-4 px-6 cursor-pointer bg-white service-card group hover:bg-black duration-[700ms]">
               <FaCode className='text-center group-hover:text-emerald-500 icon text-5xl flex justify-center w-full' />

               <h2 className="text-3xl my-4 uppercase text-black text-center font-light group-hover:text-teal-500">Web Development</h2>
               <div className="w-[6rem] my-3 h-[2px] group-hover:bg-emerald-500 bg-sky-500 text-center mx-auto"></div>

               <p className="my-4 service-p tracking-widest leading-[1.7] font-thin text-black group-hover:text-teal-500">I work exclusive in Web development Building FrontEnd components and the Backend Building a REST / RESTFUL Api.</p>
               </div>
               {/*  */}
               <div className="rounded-xl py-4 px-6 cursor-pointer bg-white service-card group hover:bg-gray-700 duration-[700ms]">
               <FaCode className='text-center group-hover:text-orange-500 text-5xl flex justify-center w-full' />

               <h2 className="text-3xl my-4 uppercase group-hover:text-yellow-500 text-black font-light">Frontend Developer</h2>
               <div className="w-[6rem] my-3 h-[2px] group-hover:bg-orange-500 bg-sky-500 text-center mx-auto"></div>

               <p className="my-4 tracking-widest leading-[1.7] font-thin text-black group-hover:text-orange-500">As a Front End Web Developer, its my duty for using my knowledge of programming languages to code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications.</p>

               


               </div>
               {/*  */}
               <div className="rounded-xl py-4 px-6 cursor-pointer bg-white service-card group hover:bg-yellow-700 duration-[700ms]">
               <FaCode className='text-center group-hover:text-rose-600 text-5xl flex justify-center w-full' />

               <h2 className="text-3xl my-4 uppercase group-hover:text-rose-600  text-black font-light">Backend Developer</h2>
               <div className="w-[6rem] my-3 h-[2px] group-hover:bg-blue-600  bg-sky-500 text-center mx-auto"></div>

               <p className="my-4 tracking-widest leading-[1.7] font-thin group-hover:text-white  text-black">I also work in Backend development using technologies such as nodejs, Expressjs, Mongoose and also MongoDB.</p>

               


               </div>

               </div>


                

              </section>

              {/* resume  */}
              <section id='resume' className="pt-28 pb-4 bg-gray-200  w-full">

                <h1 className="text-4xl font-bold text-sky-500 text-center">Resume</h1>
                <div className="w-[6rem] my-3 h-[2px] bg-sky-500 text-center mx-auto"></div>

                <div className="mt-[9rem] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-end">

                {/* left */}

                
                <div className="flex flex-col space-y-10">
                <h1 className="text-4xl text-sky-500 text-center font-semibold">My Education</h1>
                <div className="card px-4 py-6 bg-black/90 rounded-xl space-y-3 ">
                  <span className="bg-sky-600 text-white p-2  rounded-xl">2019 - 2020</span>
                  <h2 className="text-white font-bold text-2xl">Frontend Development</h2>

                  <p className="text-sky-500 text-xl font-li">Linkedin Learning:</p>
                  <p className="text-gray-400 text-xl font-light">Attend Linkedin's online learning courses and completed a frontend development certificate.</p>
                </div>
                {/*  */}
                <div className="card px-4 py-6 bg-black/90 rounded-xl space-y-3 ">
                  <span className="bg-sky-600 text-white p-2  rounded-xl">2020 - 2021</span>
                  <h2 className="text-white font-bold text-2xl">React.js Mastery</h2>

                  <p className="text-sky-500 text-xl font-li">Coursera</p>
                  <p className="text-gray-400 text-xl font-light">Acquired a certificate of completion after attending Coursera online courses.</p>
                </div>
                {/*  */}
                <div className="card px-4 py-6 bg-black/90 rounded-xl space-y-3 ">
                  <span className="bg-sky-600 text-white p-2  rounded-xl">2014 - 2019</span>
                  <h2 className="text-white font-bold text-2xl">Matric Certificate</h2>

                  <p className="text-sky-500 text-xl font-li">Mfuleni High School</p>
                  <p className="text-gray-400 text-xl font-light">Acquired a  Matric Certificate after a 4 year learning in high school.</p>
                </div>



                </div>

                {/* right */}
                <div className="flex flex-col space-y-10">
                <h1 className="text-4xl text-sky-500 text-center font-semibold">My Experience</h1>
                <div className="card px-4 py-6 bg-black/90 rounded-xl space-y-3 ">
                  <span className="bg-sky-600 text-white p-2  rounded-xl">2023 - now</span>
                  <h2 className="text-white font-bold text-2xl">Frontend Developmnent</h2>

                  <p className="text-sky-500 text-xl font-li">Freelancer</p>
                  <p className="text-gray-400 text-xl font-light">Open for work</p>
                </div>
                {/*  */}
                <div className="card px-4 py-6 bg-black/90 rounded-xl space-y-3 ">
                  <span className="bg-sky-600 text-white p-2  rounded-xl">2022 - 2023</span>
                  <h2 className="text-white font-bold text-2xl">Intern</h2>

                  <p className="text-sky-500 text-xl font-li">ComegetCred Finance</p>
                  <p className="text-gray-400 text-xl font-light">I was an Intern developer at ComegetCred and learned amazing reactjs features.</p>
                </div>
                {/*  */}
                <div className="card px-4 py-6 bg-black/90 rounded-xl space-y-3 ">
                  <span className="bg-sky-600 text-white p-2  rounded-xl">2022 - now</span>
                  <h2 className="text-white font-bold text-2xl">Frontend Developmnent</h2>

                  <p className="text-sky-500 text-xl font-li">Freelancer</p>
                  <p className="text-gray-400 text-xl font-light">Open for work</p>
                </div>



                </div>

                



                </div>

              </section>
              {/*  */}
                {/* portfolio */}
              <section id='portfolio' className="pt-28 pb-4 bg-black/20  w-full">
              <h1 className="text-4xl font-bold text-sky-500 text-center">Portfolio</h1>
                <div className="w-[6rem] my-3 h-[2px] bg-sky-500 text-center mx-auto"></div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto my-[8rem]">

                <div className="rounded-xl  w-full bg-black">
                  <div className="img w-full h-[20rem] p-2 overflow-hidden">
                  <a href="https://home-food-react.vercel.app/" target="_blank">
                    <img src="/assets/meal.jpeg" alt="meals-projects" className='w-full h-full object-cover rounded-lg hover:scale-[1.8] duration-[1200ms]' />

                  </a>
                  </div>
                  <div className="card-body py-4 px-6">
                  <h1 className="text-white my-4 font-light text-3xl">Project Name: <span className="text-sky-600 text-2xl font-thin">Best Foods</span></h1>
                  <h1 className="text-white font-light text-3xl">Project Description: <span className="text-amber-600 text-2xl font-thin capitalize leading-[1.8]">Simple Site Using Third Party API tob fetch different meals. The User Can also filter meals by different types of food types.</span></h1>

                  </div>
                </div>
                {/*  */}
                <div className="rounded-xl  w-full bg-black">
                  <div className="img w-full h-[20rem] p-2 overflow-hidden">
                  <a href="https://real-state-beige.vercel.app/" target="_blank">
                    <img src="/assets/Hotel.png" alt="meals-projects" className='w-full h-full object-cover rounded-lg hover:scale-[1.8] duration-[1200ms]' />

                  </a>
                  </div>
                  <div className="card-body py-4 px-6">
                  <h1 className="text-white my-4 font-light text-3xl">Project Name: <span className="text-sky-600 text-2xl font-thin tracking-[4px]">Hotel Trivia</span></h1>
                  <h1 className="text-white font-light text-3xl">Project Description: <span className="text-amber-600 text-2xl font-thin capitalize leading-[1.8]">Hotel Trivia Is a web application that uses the booking.com API to retrieve hotels data from different locations all around the world including Canada, United States and South Africa.</span></h1>

                  </div>
                </div>
                {/*  */}
                <div className="rounded-xl  w-full bg-black">
                  <div className="img w-full h-[20rem] p-2 overflow-hidden">
                  <a href="https://meals-mocha.vercel.app/" target="_blank">
                    <img src="/assets/meal.png" alt="meals-projects" className='w-full h-full object-cover rounded-lg hover:scale-[1.8] duration-[1200ms]' />
                    </a>
                  </div>
                  <div className="card-body py-4 px-6">
                  <h1 className="text-white my-4 font-light text-3xl">Project Name: <span className="text-sky-600 text-2xl font-thin">Food Lovers</span></h1>
                  <h1 className="text-white font-light text-3xl">Project Description: <span className="text-amber-600 text-2xl font-thin capitalize leading-[1.8]">Search And Find Your favorite meals and get all the recipes and instructions to make your meal right at home.</span></h1>

                  </div>
                </div>
                {/*  */}
                <div className="rounded-xl  w-full bg-black">
                  <div className="img w-full h-[20rem] p-2 overflow-hidden">
                  <a href="https://music-player-orpin-five.vercel.app/" target="_blank">
                    <img src="/assets/music.png" alt="meals-projects" className='w-full h-full object-cover rounded-lg hover:scale-[1.8] duration-[1200ms]' />
                    </a>
                  </div>
                  <div className="card-body py-4 px-6">
                  <h1 className="text-white my-4 font-light text-3xl">Project Name: <span className="text-sky-600 text-2xl font-thin">Musica Application</span></h1>
                  <h1 className="text-white font-light text-3xl">Project Description: <span className="text-amber-600 text-2xl font-thin capitalize leading-[1.8]">Simple Site Using Third Party API to fetch different meals. The User Can also filter meals by different types of food types.</span></h1>

                  </div>
                </div>
                {/*  */}
                <div className="rounded-xl  w-full bg-black">
                  <div className="img w-full h-[20rem] p-2">
                  <a href="https://strong-sopapillas-c62524.netlify.app/" target="_blank">
                    <img src="/assets/photo.png" alt="meals-projects" className='w-full h-full rounded-lg object-cover' />
                    </a>
                  </div>
                  <div className="card-body py-4 px-6">
                  <h1 className="text-white my-4 font-light text-3xl">Project Name: <span className="text-sky-600 text-2xl font-thin">Best Foods</span></h1>
                  <h1 className="text-white font-light text-3xl">Project Description: <span className="text-amber-600 text-2xl font-thin capitalize leading-[1.8]">Simple Site Using Third Party API of unsplash to display different images the user searches for.</span></h1>

                  </div>
                </div>
                {/*  */}
                <div className="rounded-xl  w-full bg-black">
                  <div className="img w-full h-[20rem] p-2">
                  <a href="https://ecommerce-d1263.web.app/" target="_blank">
                    <img src="/assets/shop.png" alt="meals-projects" className='w-full h-full rounded-lg object-cover' />
                    </a>

                  </div>
                  <div className="card-body py-4 px-6">
                  <h1 className="text-white my-4 font-light text-3xl">Project Name: <span className="text-sky-600 text-2xl font-thin">Luthando Clothing</span></h1>
                  <h1 className="text-white font-light text-3xl">Project Description: <span className="text-amber-600 text-2xl font-thin capitalize leading-[1.8]">Commerce web application that uses backend database of Firebase. The site has all functionalities such as sign in,cart and payments. </span></h1>

                  </div>
                </div>
                {/*  */}


                </div> 

              </section>

              {/* skills  */}
              <section  id='skills'  className="pt-28 pb-4 bg-amber-100/20 skills  w-full">
              <h1 className="text-4xl font-bold text-sky-500 text-center">Skills</h1>
                <div className="w-[6rem] my-3 h-[2px] bg-sky-500 text-center mx-auto"></div>

                <div className="grid grid-cols-2 gap-8 w-[90%] mx-auto">

                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">HTML</h2>
                  <p className="text-xl font-bold">90%</p>
                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[90%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>
                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">CSS</h2>
                  <p className="text-xl font-bold">80%</p>
                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[80%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>
                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">JavaScript</h2>
                  <p className="text-xl font-bold">75%</p>
                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[75%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>
                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">Reactjs</h2>
                  <p className="text-xl font-bold">70%</p>

                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[70%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>
                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">Bootstrap</h2>
                  <p className="text-xl font-bold">40%</p>

                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[40%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>
                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">Tailwind</h2>
                  <p className="text-xl font-bold">60%</p>

                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[60%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>
                <div className="my-8">
                <div className="flex justify-between">
                  <h2 className="text-black text-2xl">SASS / SCSS</h2>
                  <p className="text-xl font-bold">50%</p>

                </div>
                  <div className="w-full h-[12px] rounded bg-black my-4 relative">
                    <div className="absolute top-0 left-0 w-[50%] h-full rounded bg-sky-500"></div>
                  </div>
                </div>

                </div>

              </section>

              {/* // footer */}
              <footer className="py-[5rem] bg-black">
              <h1 className="text-5xl text-rose-400 text-center">Get In Touch</h1>

              <div className="w-full mt-[5rem] flex justify-center">

              <form ref={form} onSubmit={sendEmail} className="mx-auto  bg-rose-500  rounded-lg space-y-8  py-6 px-8">

              <h1 className="text-3xl text-white font-thin">Contact Form</h1>

              <div className="w-full flex flex-col md:flex-row gap-8">
              <input required minLength={10} type="text" className='w-full py-4 px-8 rounded-2xl focus:outline-none focus:border-rose-400 border ' placeholder='Your Name' name="from_name" />
              <input required type="email" className='w-full py-4 px-8 rounded-xl focus:outline-none focus:border-rose-400 border ' placeholder='Your Surname' name="from_email" />
              </div>

              <input minLength={10} required type="text" className='w-full pt-6 pb-[9rem] px-8 rounded-xl focus:outline-none focus:border-rose-400 border ' placeholder='Your Message' name="message" />

              <button className="bg-black text-white font-semibold hover:bg-white hover:text-black duration-[1000ms] text-2xl px-[4rem] py-4">Submit</button>



              </form>
              </div>


              </footer>

            
            </>
  )
}

export default App
