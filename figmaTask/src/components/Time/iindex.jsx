import React, { Component } from 'react';
import './time.scss';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: props.initialTime,
    };

    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimer = () => {
    this.setState((prevState) => ({
      timeRemaining: prevState.timeRemaining - 1,
    }));

    if (this.state.timeRemaining === 0) {
      clearInterval(this.intervalId);
    }
  };

  render() {
    const { timeRemaining } = this.state;
    const days = Math.floor(timeRemaining / (24 * 60 * 60)); // günleri hesapla
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60)); // saatleri hesapla
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60); // dakikaları hesapla
    const seconds = timeRemaining % 60;

    return (
      <div className='timer'>
        <div className='timerNames'><p>Days</p>  <p>Hours</p>  <p>Minutes</p>  <p>Seconds</p> </div>
        <div className='TimerNumber'>
            <h1>{`${days}`}</h1>
            <p>:</p>
            <h1>{`${hours}`}</h1>
            <p>:</p>
            <h1>{`${minutes}`}</h1>
            <p>:</p>
            <h1>{`${seconds}`}</h1>
        </div>
      </div>
    );
  }
}

// Örnek kullanım
function Timer() {
  // 3 gün süresince geçen saniye sayısı hesaplaması
  const threeDaysInSeconds = 3 * 24 * 60 * 60;
  return <CountdownTimer initialTime={threeDaysInSeconds} />;
}

export default Timer;
