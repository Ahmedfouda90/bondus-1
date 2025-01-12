import { createDirectus } from '@directus/sdk';

const directus = createDirectus('https://localhost:8055');

(async () => {
    try {
        const health = await directus.server.ping();
        console.log('Directus instance is healthy:', health);
    } catch (error) {
        console.error('Error connecting to Directus:', error);
    }
})();

//import { Directus } from '@directus/sdk';

//const directus = new Directus('https://localhost:8055');

//(async () => {
//    try {
//        const health = await directus.server.ping();
//        console.log('Directus instance is healthy:', health);
//    } catch (error) {
//        console.error('Error connecting to Directus:', error);
//    }
//})();
