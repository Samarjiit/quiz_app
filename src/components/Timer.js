import { useEffect } from 'react';

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = Math.floor(secondsRemaining % 60);
  useEffect(
    function () {
      const id = setInterval(function () {
        //So every single set interval timer will return a unique ID. And so we can then again use that to clear, so to cancel that timer. And so now this will run between renders and even more importantly after this component is unmounted and so then the timer will really actually stop. So what we had before was that each time we restarted our quiz, a new timer got added. And so then we had many timers running at the same time which were all dispatching this action. And so then our time was going down really really fast because of that, but this should fix it.
        dispatch({ type: 'tick' });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
