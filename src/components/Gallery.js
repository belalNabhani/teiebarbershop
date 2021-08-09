// import React, { Component } from 'react'
// import Lightbox from 'react-images'
// import styled from 'styled-components'

// import gallery1 from '../assets/images/gallery/gallery1.jpg'
// import gallery2 from '../assets/images/gallery/gallery2.jpg'
// import gallery3 from '../assets/images/gallery/gallery3.jpg'
// import gallery4 from '../assets/images/gallery/gallery4.jpg'
// import gallery5 from '../assets/images/gallery/gallery5.jpg'
// import gallery6 from '../assets/images/gallery/gallery6.jpg'
// import gallery7 from '../assets/images/gallery/gallery7.jpg'
// import gallery8 from '../assets/images/gallery/gallery8.jpg'
// import gallery9 from '../assets/images/gallery/gallery9.jpg'
// import gallery10 from '../assets/images/gallery/gallery10.jpg'

// const Img = styled(
//   (p) =>
//     <img
//       title={p.alt}
//       className={p.className}
//       {...p}
//     />
//   )`
//     border-radius: 10px
//     cursor: pointer
//     width: 300px
//     margin-bottom: 20px
//     display: inline
//     position: relative
//     top: 0
//     right: 0
//     border: 3px solid #ddd
//     transition-duration: 0.2s
//     box-shadow: -2px 5px 10px rgba(0,0,0, 0.45)
//     &:hover{
//       box-shadow: -2px 10px 25px rgba(0,0,0, 0.45)
//       top: -1px
//       right: 0
//     }
//   `

// const images = [
//   { src: gallery1, alt: 'hår stil', id: 0 },
//   { src: gallery2, alt: 'frisør i teie', id: 1 },
//   { src: gallery3, alt: 'frisør i tønsberg', id: 2 },
//   { src: gallery4, alt: 'frisør i vesfold', id: 3 },
//   { src: gallery5, alt: 'barbershop i tønsberg', id: 4 },
//   { src: gallery6, alt: 'de beste frisør', id: 5 },
//   { src: gallery7, alt: 'shave skjegg', id: 6 },
//   { src: gallery8, alt: 'bart trim', id: 7 },
//   { src: gallery9, alt: 'frisørsalong i tønsberg', id: 8 },
//   { src: gallery10, alt: 'de beste barber shop', id: 9 },
// ]
// const LightboxTheme = {
//   close: {
//     opacity: 0,
//     height: 35,
//     transitionDuration: '0.5s',
//     ':hover': {
//       opacity: 0.8,
//     },
//   },
//   arrow__size__medium: {
//     height: 40,
//     marginTop: 0,
//   },
//   arrow: {
//     opacity: 0.3,
//     width: 10,
//     transitionDuration: '0.5s',
//     ':hover': {
//       opacity: 0.8,
//     },
//   },
//   container: {
//     background: 'rgba(31, 26, 16, 1)',
//   },
//   image: {
//     borderRadius: 10,
//   },
//   footerCount: {
//     opacity: 0,
//   }
// }
// export default class Gallery extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       lightbox: {
//         isOpen: false,
//         currentImage: 0,
//       }
//     }
//   }
//   render() {
//     const openLightbox = (idx) =>
//       this.setState({lightbox: {isOpen: true, currentImage: idx}})

//     const closeLightbox = () =>
//       this.setState({lightbox: {isOpen: false}})

//     const gotoPrevLightboxImage = () =>
//       this.setState({lightbox: {isOpen: true, currentImage: this.state.lightbox.currentImage - 1}})

//     const gotoNextLightboxImage = () =>
//       this.setState({lightbox: {isOpen: true, currentImage: this.state.lightbox.currentImage + 1}})

//     return (
//       <div id="portfolio" className="section">

//           <Lightbox
//             images={images}
//             isOpen={this.state.lightbox.isOpen}
//             onClose={closeLightbox}
//             currentImage={this.state.lightbox.currentImage}
//             backdropClosesModal={true}
//             theme={LightboxTheme}
//             onClickPrev={gotoPrevLightboxImage}
//             onClickNext={gotoNextLightboxImage}
//           />
//         <div className="container-fluid">
//           <div className="row visible">
//             <div className="col-md-8 col-md-offset-2">
//               <div className="voffset90" />
//               <p className="pretitle">Gallery</p>
//               <div className="voffset90" />
//             </div>
//             <div className="col-md-12">

//             {images.map((i, idx) =>
//               <Img
//                 key={i.src}
//                 src={i.src}
//                 alt={i.alt}
//                 title={i.alt}
//                 onClick={() => openLightbox(idx)}
//               />
//             )}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
