import React from "react";

function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} className="card--image" alt="Card visual" />
      <div className="card--status">
        <img
          src="http://pluspng.com/img-png/star-png-star-png-image-file-8715.png"
          className="card--star"
          alt="Star icon"
        />
        <span>5.0</span>
        <span className="gray">(6) ·</span>
        <span className="gray">USA</span>
      </div>
      <h1>{title}</h1>
      <p>
        <span className="bold">From ${price}/person</span>
      </p>
    </div>
  );
}

export default function CardContainer() {
  const cardData = [
    {
      image:
        "https://i.pinimg.com/originals/c2/03/56/c203561b7afad1a093dc8de90757882f.jpg",
      title: "Beautiful Nature and Lake",
      price: 136,
    },
    {
      image:
        "https://images.pexels.com/photos/714258/pexels-photo-714258.jpeg?cs=srgb&dl=mountain-ranges-covered-in-snow-714258.jpg&fm=jpg",
      title: "Amazing Mountain View",
      price: 120,
    },
    {
      image:
        "https://www.baltana.com/files/wallpapers-9/Niagara-Falls-Best-Wallpaper-25786.jpg",
      title: "Niagara Falls Experience",
      price: 150,
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
} 


