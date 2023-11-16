import { toggleMachine } from '../src/toggleMachine';
import { interpret } from 'xstate';

it('should eventually reach "inactive"', done => {
  const toggleService = interpret(toggleMachine).onTransition(state => {
    // this is where you expect the state to eventually
    // be reached
    if (state.matches('inactive')) {
      done();
    }
  });

  toggleService.start();

  // send zero or more events to the service that should
  // cause it to eventually reach its expected state
  toggleService.send(['TOGGLE', 'TOGGLE']);
});
