// Import server port
import PORT from "./server-config.js";

// #region Posts objects array
    const posts = [
        {
            title: 'Ciambellone',
            content: 'Ricetta ciambellone',
            image: `http://localhost:${PORT}/images/ciambellone.jpeg`,
            tags: [
                'tradizionale',
                'semplice',
                'soffice'
            ]
        },
        {
            title: 'Creakers di barbabietola',
            content: 'Ricetta creackers di barbabietola',
            image: `http://localhost:${PORT}/images/cracker_barbabietola.jpeg`,
            tags: [
                'croccante',
                'alternativo',
                'colorato'
            ]
        },
        {
            title: 'Pane fritto dolce',
            content: 'Ricetta pane fritto dolce',
            image: `http://localhost:${PORT}/images/pane_fritto_dolce.jpeg`,
            tags: [
                'fritto',
                'croccante',
                'antispreco'
            ]
        },
        {
            title: 'Pasta barbabietola',
            content: 'Ricetta pasta barbabietola',
            image: `http://localhost:${PORT}/images/pasta_barbabietola.jpeg`,
            tags: [
                'fresco',
                'alternativo',
                'colorato'
            ]
        },
        {
            title: 'Torta paesana',
            content: 'Ricetta torta paesana',
            image: `http://localhost:${PORT}/images/torta_paesana.jpeg`,
            tags: [
                'latte',
                'cacao',
                'antispreco'
            ]
        }
    ];
// #endregion Posts objects array

// Export Posts objects array
export default posts;