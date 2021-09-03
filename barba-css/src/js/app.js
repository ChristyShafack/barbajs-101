import barba from '@barba/core';
import barbaCss from '@barba/css';

// tell Barba to use the css plugin
barba.use(barbaCss);

// init Barba
barba.init({

    // Array of transition objects
    transitions: [
        {
            name: 'home',
            // barba hooks
            beforeOnce() {

            },
            // Never runs with the css plugin
            once() { },
            afterOnce() {
            }
        }, {
            name: 'fade',
            to:{
                namespace: [
                    'fade '
                ]
            },
            leave(){},
            enter() { },

        }
    ],
});
