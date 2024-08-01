import app1aImg from '../assets/mobile-app-1.png'
import app1bImg from '../assets/mobile-app-1b.png'
import app2aImg from '../assets/mobile-app-2.png'
import app2bImg from '../assets/mobile-app-2b.png'
import app3aImg from '../assets/mobile-app-3.png'
import app3bImg from '../assets/mobile-app-3b.png'
import web1aImg from '../assets/web-1.png'
import web1bImg from '../assets/web-1b.png'
import web2aImg from '../assets/web-2.png'
import web2bImg from '../assets/web-2b.png'
import web3aImg from '../assets/web-3.png'
import web3bImg from '../assets/web-3b.png'

export const appData = [
    {
        id: 1,
        img1: app1aImg,
        img2: app1bImg,
        description: 'A music streaming app, offering a vast library of songs and personalized playlists.',
        name: 'Music Streaming App',
        para1: 'Our music streaming app project aimed to deliver an exceptional audio experience with a wide range of features. Users can stream music, create playlists, and discover new artists through personalized recommendations. The challenge was to ensure seamless playback and intuitive navigation.',
        para2: 'We implemented a robust backend using Node.js and Express, while the frontend was built with React Native for a smooth, native-like experience. Key features include offline listening, social sharing, and real-time lyrics. The app is optimized for both iOS and Android platforms.',
        technologies: 'React Native, Node.js, Express, MongoDB',
    },
    {
        id: 2,
        img1: app2aImg,
        img2: app2bImg,
        description: 'A modern real estate app, facilitating the buying, selling, and renting of properties.',
        name: 'Real Estate App',
        para1: 'The real estate app was designed to simplify the property search process for users. It features advanced search filters, property listings with detailed descriptions, and high-resolution images. Users can schedule viewings and communicate directly with agents through the app.',
        para2: 'We utilized React Native for the front end and integrated a powerful search engine using Elasticsearch. The backend is powered by Node.js and PostgreSQL, ensuring fast and reliable data retrieval. The app also includes a mortgage calculator and neighborhood information for informed decision-making.',
        technologies: 'React Native, Node.js, PostgreSQL, Elasticsearch',
    },
    {
        id: 3,
        img1: app3aImg,
        img2: app3bImg,
        description: 'A user-friendly travel app, providing itinerary planning and travel booking services.',
        name: 'Travel App',
        para1: 'Our travel app project aimed to enhance the travel experience by offering comprehensive itinerary planning and booking features. Users can search for flights, hotels, and activities, and save their itineraries for easy access. The app provides real-time updates and recommendations based on user preferences.',
        para2: 'We developed the app using React Native, ensuring a smooth and responsive user interface. The backend services were built with Node.js and integrated with various travel APIs for real-time data. The app also includes a currency converter, weather updates, and a travel diary feature.',
        technologies: 'React Native, Node.js, MongoDB, Travel APIs',
    }
];

export const webData = [
    {
        id: 4,
        img1: web1aImg,
        img2: web1bImg,
        description: 'A visually captivating landing page showcasing a range of luxury perfumes.',
        name: 'Perfume Showcase Landing Page',
        para1: 'The perfume showcase landing page was designed to highlight the elegance and sophistication of luxury perfumes. The page features stunning visuals, detailed product descriptions, and user reviews. The goal was to create an immersive experience that captivates visitors and encourages purchases.',
        para2: 'We used React and Next.js to build a fast and responsive website. The design is minimalist, focusing on high-quality images and smooth transitions. Key features include a product carousel, interactive fragrance finder, and seamless integration with the e-commerce platform.',
        technologies: 'React, Next.js, Styled Components, GraphQL',
    },
    {
        id: 5,
        img1: web2aImg,
        img2: web2bImg,
        description: 'A website for an organic food provider, promoting healthy and sustainable eating.',
        name: 'Organic Food Provider Website',
        para1: 'The organic food provider website aims to educate users about the benefits of organic produce and promote their range of products. It features detailed information about farming practices, product origins, and nutritional benefits. Users can also find recipes and cooking tips to make the most of organic ingredients.',
        para2: 'We developed the website using React and Next.js, ensuring a fast and user-friendly experience. The design emphasizes natural elements and earthy tones to reflect the brand’s commitment to sustainability. Key features include a product catalog, blog section, and an online store with secure payment options.',
        technologies: 'React, Next.js, Contentful, Stripe',
    },
    {
        id: 6,
        img1: web3aImg,
        img2: web3bImg,
        description: 'An engaging travel website, offering travel guides, tips, and booking options.',
        name: 'Travel Website',
        para1: 'The travel website project was designed to inspire and assist users in planning their next adventure. It features comprehensive travel guides, tips for various destinations, and booking options for flights, hotels, and activities. The goal was to provide a one-stop solution for all travel-related needs.',
        para2: 'We utilized React and Next.js to create a dynamic and responsive website. The design focuses on vibrant imagery and easy navigation to enhance user engagement. Key features include a blog section, user-generated content, and integration with booking platforms for real-time availability and pricing.',
        technologies: 'React, Next.js, Firebase, Google Maps API',
    }
];
