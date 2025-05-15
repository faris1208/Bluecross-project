// import React from 'react';
// import styles from '../contact-map/styles.module.scss';

// const StaticMapComponent = () => {
//   const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?
//     center=6.6169,3.3333&
//     zoom=14&
//     size=1200x600&
//     maptype=roadmap&
//     markers=color:red%7C6.6169,3.3333&
//     key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`.replace(/\s+/g, '');

//   return (
//     <div className={styles.mapContainer}>
//       <div className={styles.mapImageWrapper}>
//         {/* Using regular img tag instead of Next.js Image */}
//         <img
//           src={mapImageUrl}
//           alt="Location Map"
//           className={styles.mapImage}
//           width={1200}
//           height={600}
//         />
//       </div>
      
//       <div className={styles.mapInfo}>
//         <h3>48 Jiajye Rd</h3>
//         <p>48 Jiajye Rd, Ifako Agege, Ikeja 101232, Lagos</p>
//         <a 
//           href="https://www.google.com/maps/place/48+Jiajye+Rd,+Ifako+Agege,+Ikeja+101232,+Lagos" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className={styles.mapLink}
//         >
//           View larger map
//         </a>
//       </div>
//     </div>
//   );
// };

// export default StaticMapComponent;