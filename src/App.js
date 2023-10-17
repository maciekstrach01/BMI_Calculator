import React, { useState } from 'react';
import './index.css';
import starvationImg from '../src/assets/starvation.png';
import emaciationImg from '../src/assets/emaciation.png';
import underweightImg from '../src/assets/underweight.png';
import healthyImg from '../src/assets/healthy.png';
import overweightImg from '../src/assets/overweight.png';
import obesity1Img from '../src/assets/obesity1.png';
import obesity2Img from '../src/assets/obesity2.png';
import obesity3Img from '../src/assets/obesity3.png';

function App() {
  const [weightKg, setWeightKg] = useState(0);
  const [heightCm, setHeightCm] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  const [imgSrc, setImgSrc] = useState(null);

  const calcBmi = (event) => {
    event.preventDefault();

    if (isNaN(weightKg) || isNaN(heightCm) || weightKg === 0 || heightCm === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const heightM = heightCm / 100;
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(bmiValue.toFixed(1));




      if (bmiValue < 16) {
        setMessage('Starvation');
        setImgSrc(starvationImg);
      } else if (bmiValue >= 16 && bmiValue < 17) {
        setMessage('Emaciation');
        setImgSrc(emaciationImg);
      } else if (bmiValue >= 17 && bmiValue < 18.5) {
        setMessage('Underweight');
        setImgSrc(underweightImg);
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('Correct weight');
        setImgSrc(healthyImg);
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('Overweight');
        setImgSrc(overweightImg);
      } else if (bmiValue >= 30 && bmiValue < 35) {
        setMessage('Stage I obesity');
        setImgSrc(obesity1Img);
      } else if (bmiValue >= 35 && bmiValue < 40) {
        setMessage('Stage II obesity');
        setImgSrc(obesity2Img);
      } else {
        setMessage('Stage III obesity');
        setImgSrc(obesity3Img);
      }
      
      

    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={heightCm} onChange={(event) => setHeightCm(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          {imgSrc && <img src={imgSrc} alt=''></img>}
        </div>
      </div>
    </div>
  );
}

export default App;
