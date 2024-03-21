import React from 'react'
import { TbHandClick } from 'react-icons/tb'
import rou from '../assets/rou.png'
import rich from '../assets/rich.png'


function Projects() {
  return (
    <>
      <div className="card w-80 shadow-xl  bg-slate-800">
        <a
          href="https://kamil-banaszek.pl/roulette"
          target="_blank"
          style={{ cursor: 'pointer' }}
          className="font-serif hover:scale-110 "
        >
          <figure className="relative">
            <img
              src={rou}
              alt="Shoes"
              className="h-[160px] rounded"
            />
            <figcaption className="absolute bottom-0 left-0 text-white p-2 opacity-75 font-serif">
              <TbHandClick className="text-xl" />
            </figcaption>
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title  justify-center">Roulette</h2>
          <p className="text-justify">
            My biggest project on which I devoted many hours, Roulette with
            Steam login, live betting with other players, live chat, betting
            history.
          </p>

          <div className="card-actions justify-center mt-5">
            <div className="badge badge-lg">React</div>
            <div className="badge badge-lg">Redux</div>
            <div className="badge badge-lg">Expressjs</div>
            <div className="badge badge-lg">Nodejs</div>
            <div className="badge badge-lg">Socket.io</div>
            <div className="badge badge-lg">Mysql</div>
          </div>
        </div>
      </div>

      <div className="card w-80  shadow-xl bg-slate-800">
        <a
          href="https://kamil-banaszek.pl/projekt"
          target="_blank"
          style={{ cursor: 'pointer' }}
          className="font-serif hover:scale-110 rounded"
        >
          <figure className="relative">
            <img
              src={rich}
              className="h-[160px]"
            />
            <figcaption className="absolute bottom-0 left-0 text-black p-2 opacity-75 font-serif">
              <TbHandClick className="text-xl" />
            </figcaption>
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title  justify-center"> Rich People</h2>
          <p className="text-justify">
            Responsive page with RESTful API, CMS password:1234
          </p>
          <div className="card-actions justify-center mt-5">
            <div className="badge badge-lg">Nodejs</div>
            <div className="badge badge-lg">Expressjs</div>
            <div className="badge badge-lg">Mysql</div>
            <div className="badge badge-lg">Ejs</div>
            <div className="badge badge-lg">Js</div>
            <div className="badge badge-lg">BootSrap</div>
          </div>
        </div>
      </div>

      <div className="card w-80 shadow-xl bg-slate-800">
        <a
          href="https://kamil-banaszek.pl/tiktak"
          target="_blank"
          style={{ cursor: 'pointer' }}
          className="font-serif hover:scale-110 "
        >
          <figure className="relative">
            <img
              className="w-80"
              src="https://github.com/Cr3ativeCod3r/Temp/assets/117399144/1c669890-ba05-49df-8a63-dbca90237f2c"
              alt="Shoes"
              className="h-[160px] rounded"
            />

            <figcaption className="absolute bottom-0 left-0 text-black p-2 opacity-75 font-serif">
              <TbHandClick className="text-xl" />
            </figcaption>
          </figure>
        </a>

        <div className="card-body">
          <h2 className="card-title justify-center">Min-max</h2>
          <p className="text-justify">
            {' '}
            Tic-tac-toe, player VS pc, min-max algorithm with alpha-beta pruning
          </p>
          <div className="card-actions justify-center mt-5">
            <div className="badge badge-lg">Html</div>
            <div className="badge badge-lg">Css</div>
            <div className="badge badge-lg">Js</div>
          </div>
        </div>
      </div>

      <div className="card w-80  shadow-xl bg-slate-800">
        <a
          href="https://kamil-banaszek.pl/retro"
          target="_blank"
          style={{ cursor: 'pointer' }}
          className="font-serif hover:scale-110 "
        >
          <figure className="relative">
            <img
              src="https://github.com/Cr3ativeCod3r/Temp/assets/117399144/02d3b2ac-455a-4bac-a428-32af28da86ae"
              alt="Shoes"
              className="h-[160px] w-[100%] rounded"
            />
            <figcaption className="absolute bottom-0 left-0 bg-black text-white p-2 opacity-75">
              <TbHandClick className="text-xl" />
            </figcaption>
          </figure>
        </a>
        <div className="card-body">
          <h2 className="card-title  justify-center">Snake</h2>
          <p>OOP programing in java with JavaFX framework</p>
          <div className="card-actions justify-center mt-5">
            <div className="badge badge-lg">Java</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
