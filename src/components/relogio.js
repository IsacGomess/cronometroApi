import React from  'react';
import { useStopwatch } from 'react-timer-hook';
import {Howl} from 'howler';
import { useRef,useEffect,useState} from 'react';
import {Api} from './api'

const Relogio = () => {
  const{
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false }) 
  
  const beep = useRef(new Howl({src:['blip-131856.mp3'],}))
  // current é um método do use.Ref() que não precisa de uma nova randeriação e  torna o variável mutável.
  const playBeep = () =>{
    beep.current.play();
  } 
  // problema - verificar a variável minuto chegando a um minuto realizar um sinal sonoro e cheando a 2 min outro sinal sonoro
  // problema menor emitir um sinal quando o tempo parar
  // use efect tornando executa a toda vez que a condição é disparada. 
  useEffect(()=>{ 
    if(minutes > 0 &&  minutes % 1 === 0){
      playBeep();

    }
  },[minutes])
  // atualizando os ganchos com useState
  const [prase, setFrase] = useState('')
  // ultilizando uma função através do botão para reproduzir outra função api
  const updatePrase = async () => {
    const newP = await Api()
    setFrase(newP)
  }

  return (
    <div className='tc'>
      <div className='green' style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'stop'}</p>
      <button className='ma2 pa3 pointer bg-green white br-pill' onClick={start}>Start</button>
      <button className='ma2 pa3  pointer black bg-yellow br-pill' onClick={pause}>Pause</button>
      <button className='ma2 pa3 pointer white bg-red br-pill' onClick={reset}>Reset</button>
      <p className='white'>Curiosidades Históricas</p>
      <p className='white'>{prase}</p>
      <button className= 'w-auto f5 bg-light-grey black hover-bg-green pointer br4 o-410 ' onClick={updatePrase}>História</button>
    </div>
  );
}

export default Relogio;
