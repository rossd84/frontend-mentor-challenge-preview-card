import { useState, useEffect } from 'react';
import CartIcon from '../assets/images/icon-cart.svg'
import imgMobile from '../assets/images/image-product-mobile.jpg'
import imgDesktop from '../assets/images/image-product-desktop.jpg'

const Card = () => {
  const [image, setImage] = useState(imgMobile);

  const cardInfo = {
    cardImg: image,
    label: 'PERFUME',
    title: 'Gabrielle Essence Eau De Parfum',
    description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    discountPrice: 149.99,
    retailPrice: 169.99
  }

  useEffect(() => {
    const updateImageSource = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setImage(imgMobile);
      } else {
        setImage(imgDesktop)
      }
    };

    updateImageSource();

    window.addEventListener('resize', updateImageSource);

    return () => {
      window.removeEventListener('resize', updateImageSource);
    }
  }, []);

  return (
    <div className='flex bg-white flex-col md:flex-row w-full max-w-[350px] md:max-w-[600px] rounded-lg text-darkGrayBlue'>
      <div className=''>
        <img className='rounded-t-lg md:rounded-tr-none md:rounded-l-lg' src={cardInfo.cardImg} alt="card image" />
      </div>

      <div className='px-5 md:px-6 py-6 font-primary text-[14px] text-darkGrayBlu md:max-w-[50%] flex flex-col justify-between'>
        <p className='tracking-[0.4em] text-xs mb-3'>{cardInfo.label}</p>
        <h3 className='text-3xl md:text-4xl font-secondary text-darkBlue mb-4'>{cardInfo.title}</h3>
        <p className='mb-6 tracking-wide'>{cardInfo.description}</p>
        <div className='flex items-center gap-6 mb-4'>
          <span className='text-3xl font-secondary text-darkCyan'>${cardInfo.discountPrice}</span>
          <span className='font-primary text-xs line-through'>${cardInfo.retailPrice}</span></div>
        <button className="bg-darkCyan w-full py-3 font-bold rounded-md text-white flex justify-center items-center gap-3" type="button"><img src={CartIcon} alt="btn icon" />Add to Cart</button>
      </div>
    </div>
  )
}

export default Card