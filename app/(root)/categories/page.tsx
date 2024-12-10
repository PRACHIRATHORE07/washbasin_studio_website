"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CategoriesPage() {
  const placeholderNames = ['Counter Top', 'Washbasin', 'Bathtub', 'Vanity', 'Wall'];
  const imagePaths = [
    '/images/featured1.jpg',
    '/images/featured2.jpg',
    '/images/featured3.jpg',
    '/images/featured4.jpg',
    '/images/featured5.jpg'
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="categories-page">
      <style>
        {`
          .categories-page {
            text-align: center;
            padding: 20px;
            color: white;
            min-height: 100vh;
            position: relative;
            overflow: hidden;
          }

          .categories-heading {
            font-size: 2.5em;
            font-weight: bold;
            margin-bottom: 20px;
            font-family: Arial, sans-serif;
          }

          .images-container {
            display: flex;
            justify-content: center;
            gap: 100px; 
            flex-wrap: nowrap;
            margin-top: 50px;
          }

          .image-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          }

          .image-wrapper {
            overflow: hidden;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            transition: transform 0.3s ease;
          }

          .circular-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .circular-image:hover {
            transform: scale(1.1);
          }

          .image-name {
            margin-top: 10px;
            padding: 5px;
            width: 120px;
            text-align: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: transparent;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 1em;
            font-weight: bold;
          }

          .square-images-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 100px;
          }

          .square-image-row {
            display: flex;
            justify-content: center;
            gap: 80px;
            margin-bottom: 50px;
          }

          .square-image {
            width: 220px;
            height: 220px;
            object-fit: cover;
            border-radius: 15px;
            border: 10px solid transparent;
            border-image: linear-gradient(to right, #029c87, #7b61ff, #284461, #1ca0fb);
            border-image-slice: 1;
            animation: borderAnimation 2.5s linear infinite;
          }

          @keyframes borderAnimation {
            0% { border-image-source: linear-gradient(to right, #029c87, #7b61ff, #284461, #1ca0fb); }
            50% { border-image-source: linear-gradient(to right, #1ca0fb, #029c87, #7b61ff, #284461); }
            100% { border-image-source: linear-gradient(to right, #029c87, #7b61ff, #284461,  #1ca0fb); }
          }

          @media (max-width: 768px) {
            .images-container {
              gap: 20px;
              flex-wrap: wrap;
            }

            .square-image-row {
              justify-content: space-evenly;
            }
          }
        `}
      </style>

      <div>
        <h1 className="categories-heading">CATEGORIES</h1>
        <div className="images-container">
          {placeholderNames.map((name, index) => (
            <div key={index} className="image-box" onClick={() => setSelectedImageIndex(index)}>
              <div className="image-wrapper">
                <Image
                  src={imagePaths[index]} 
                  alt={name} 
                  className="circular-image" 
                  width={150}
                  height={150}
                />
              </div>
              <div className="image-name">{name}</div> {/* Replaced input with static text */}
            </div>
          ))}
        </div>

        <div className="square-images-container">
          {[...Array(3)].map((_, rowIndex) => (
            <div key={rowIndex} className="square-image-row">
              {[...Array(3)].map((_, colIndex) => (
                <Image
                  key={colIndex} 
                  src={imagePaths[selectedImageIndex]} 
                  alt={`Square ${rowIndex}-${colIndex}`} 
                  className="square-image" 
                  width={220}
                  height={220}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
