// create traffic light machine using xstate
//
// https://xstate.js.org/docs/

import { createMachine } from 'xstate';

const trafficLightMachine = createMachine({
  id: 'trafficLight',
  initial: 'red',
  states: {
    red: {
      on: {
        TIMER1: 'green',
      },
    },
    green: {
      on: {
        TIMER2: 'yellow',
      },
    },
    yellow: {
      on: {
        TIMER: 'red',
      },
    },
  },
});

export { trafficLightMachine };
