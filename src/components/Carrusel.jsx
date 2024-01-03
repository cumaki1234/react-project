import React, { useState, useEffect } from 'react';
import { Image } from 'antd';
import logo from '../assets/images/descargar.jpg';
import xd from '../assets/images/xd.jpg';
import xd2 from '../assets/images/xd2.jpg';
import god from '../assets/images/god1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import ProductCard from '../components/prodctCard';
import BottomBar2 from '../components/BottomBar2';

const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del Producto 1',
      price: 19.99,
      image: logo, // URL de la imagen del producto
    },
    {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
      {
        id: 2,
        name: 'Producto 2',
        description: 'Descripción del Producto 2',
        price: 20.00,
        image: god, // URL de la imagen del producto
      },
    // Agregar más productos según sea necesario
  ];

const images = [
    logo,god,xd,xd2
  ];
const Carousel = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
      setCart((prevCart) => [...prevCart, product]);
    };
  
    const cartTotal = cart.reduce((total, product) => total + product.quantity, 0);



    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextImage();
      }, 3000);
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    return (
      <div className="relative w-120 h-80 md:w-160 lg:w-200">
        <div
          className="flex items-center justify-center h-full rounded-md overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition duration-300 ease-in-out"
          
        >
            {/*recuer cambiar por si te dijen que vale verga eso xd*/}
          <Image src={images[currentIndex]} alt={`slide-${currentIndex}`} className="object-cover w-full h-full" />
        </div>
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
  
        {modalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative bg-white rounded-md overflow-hidden shadow-lg">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-700 text-2xl hover:text-gray-900 transition duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="object-contain w-full h-96" />
            </div>
          </div>
        )}
         <div className="flex flex-wrap justify-center space-x-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <BottomBar2/>
      </div>
      
  );
};

export default Carousel;
