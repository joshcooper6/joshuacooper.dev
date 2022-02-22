import one from '../images/screenshots/fi1.png';
import inventoryTwo from '../images/screenshots/fi2.png';
import two from '../images/screenshots/ipod1.png';
import ipodTwo from '../images/screenshots/ipod2.png';
import three from '../images/screenshots/rps1.png';
import rpsTwo from '../images/screenshots/rps2.png';

export const projects = [
    {
        id: 'inventory',
        title: 'Inventory App',
        imgSrc: [one, inventoryTwo],
        desc: `Created to help expedite
        the reporting of daily inventory numbers for a small business.
        This simple form app automatically renders daily. The next version of this app
        would ideally include user authentication.`,
        path: 'https://uclinventory.web.app'
    },
    {
        id: 'ipod',
        title: 'iPod Classic',
        imgSrc: [two, ipodTwo],
        desc: `Created to fuel my nostalgia for the classic iPod devices.
        Initially, this started as a CSS design project that evolved into
        a fully functional player. The next version of this app would ideally include
        streaming platform integration in order for users to customize the playlist.`,
        path: 'https://jc-ipodclassic.web.app'
    },
    {
        id: 'rps',
        title: 'Rock Paper Scissors',
        imgSrc: [three, rpsTwo],
        desc: `Battle a CPU to see how many rounds you could win. Recreated this classic game using Javascript for the
        game logic. The next version of this app would expand upon the classic three options to include more modern options.`,
        path: 'https://jc-rpsgame.web.app'
    }
];
