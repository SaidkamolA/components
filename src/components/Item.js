import React from 'react';

const Item = ({ item }) => {
  const quantityClass = item.quantity < 50 ? 'text-red-600' : 'text-green-600';

  return (
    <div className="w-72 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-600">Цена: {item.price}$</p>
      <p className={`${quantityClass} mt-2`}>
        Количество: {item.quantity}
      </p>
      <p className="text-yellow-500 mt-2">Рейтинг: {item.rating}★</p>
    </div>
  );
};

export default Item;
