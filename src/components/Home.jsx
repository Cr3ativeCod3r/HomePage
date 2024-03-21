import Projects from './Projects'
import Navbar from './Navbar'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify' // Dodany import ToastContainer
import 'react-toastify/dist/ReactToastify.css'

function Home() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_mu06csc', 'template_oxws1c5', form.current, {
        publicKey: 'uC1PgrmDo-XVGQ_ZH',
      })
      .then(
        () => {
          toast.success('Email został wysłany pomyślnie!')
        },
        (error) => {
          toast.error('Wystąpił błąd podczas wysyłania wiadomości.')
        }
      )
  }

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <ToastContainer />
        <Projects />
        <div className="grid w-auto h-70 card bg-base-200 rounded-box pl-10 pr-10 pt-2 mt-10">

        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto ">
  <h1 className="flex justify-center font-bold">Contact Me</h1>
  <label class="input input-bordered input-primary flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="w-4 h-4 opacity-70"
    >
      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
    <input
      type="text"
      class="grow"
      placeholder="Email"
      id="user_email"
      name="user_email" // Dodaj name="user_email" tutaj
    />
  </label>

  <label class="input input-bordered flex items-center gap-2 mt-2 input-primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="w-4 h-4 opacity-70"
    >
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
    </svg>
    <input type="text" class="grow" placeholder="Name" id="user_name" name="user_name" />
  </label>

  <textarea
    className="textarea textarea-info mt-2 w-[400px]"
    placeholder="Message..."
    id="message"
    name="message" 
  ></textarea>

  <div className="mb-4 flex justify-center ">
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Send
    </button>
  </div>
</form>

        </div> 

<div className="mockup-code mt-10 hidden sm:block">
  <pre data-prefix="$"><code>sudo cat Bio.txt</code></pre> 
  <pre data-prefix=">" className="text-yellow-600"><code>Powered by AWS and NGINX </code></pre>  
  <pre data-prefix=">" className="text-blue-500"><code>Welcome on my page!</code></pre> 
  <pre data-prefix=">" className="text-blue-500"><code>My name is Kamil </code></pre> 
  <pre data-prefix=">" className="text-blue-500"><code>Im web-dev from Poland </code></pre>
  <pre data-prefix=">" className="text-blue-500"><code>Im studying IT at Lublin</code></pre>  
  <pre data-prefix=">" className="text-blue-500"><code>Im 21 Yo </code></pre>  
</div>


      </div>
    </>
  )
}

export default Home
