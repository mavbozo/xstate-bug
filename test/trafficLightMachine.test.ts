import { trafficLightMachine } from '../src/trafficLightMachine';
import { interpret } from 'xstate';

it('should eventually reach "yellow"', done => {
  const trafficLightService = interpret(trafficLightMachine).onTransition(
    state => {
      // this is where you expect the state to eventually
      // be reached
      if (state.matches('yellow')) {
        done();
      }
    }
  );

  trafficLightService.start();

  // send zero or more events to the service that should
  // cause it to eventually reach its expected state
  trafficLightService.send('TIMER1');
  trafficLightService.send('TIMER2');
});
