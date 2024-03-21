import React, { useState, useEffect } from 'react'
import { ReactTyped } from 'react-typed'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoIosTime } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { GiPoland } from 'react-icons/gi'
import axios from 'axios'

function Navbar() {
  const [timeData, setTimeData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.api-ninjas.com/v1/worldtime?city=Warsaw',
          {
            headers: {
              'X-Api-Key': 'TdLRoLBotM3XMBQdftMpAQ==vN9GkoPraHoMBzjC',
            },
          }
        )
        setTimeData(response.data)
      } catch (error) {
        console.error('Request failed:', error)
      }
    }

    fetchData()

    const interval = setInterval(() => {
      fetchData()
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="navbar bg-slate-800 ">
        <div className="flex-1 hidden sm:block">
          {timeData ? (
            <div>
              <div className="grid grid-flow-col gap-5 text-center auto-cols-max ml-2">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                  <span className="countdown font-mono text-3xl">
                    <IoIosTime className="mr-2" /> {timeData.hour}:
                    {timeData.minute} <GiPoland className="ml-2 " />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>

        <div className="flex items-center flex-auto w-20">
          <div className="avatar  " id="bubble">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQGF2oEGy9v3Og/profile-displayphoto-shrink_800_800/0/1707487890525?e=2147483647&v=beta&t=qk2VsK7Ncf41BsMlVOKC2sFFrwIuMwWFTq4-S4SGJLc"
                alt="avatar"
              />
            </div>
          </div>
          <div className=" ml-2">
            <div className="chat-bubble h-[10px] pr-8">
              {' '}
              <ReactTyped
                style={{ whiteSpace: 'nowrap'}} // Styl inline zapobiegający zawijaniu tekstu
                className="text-blue-400 font-bold"
                strings={[
                  'Its my projects page',
                  'My name is Kamil',
                  'Im a dev from Poland',
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col gap-5 text-center auto-cols-max"></div>
        <a
          href="https://pl.linkedin.com/in/kamil-banaszek-956938267"
          target="_blank"
          style={{ cursor: 'pointer' }}
        >
          <FaLinkedin className="text-blue-500 text-4xl mr-2 hover:scale-110 " />
        </a>
        <a
          href="https://github.com/Cr3ativeCod3r"
          target="_blank"
          style={{ cursor: 'pointer' }}
        >
          <FaGithub className="text-blue-500 text-4xl mr-2 hover:scale-110" />
        </a>
      </div>
    </>
  )
}

export default Navbar
