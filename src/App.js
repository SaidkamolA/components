import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Item from './components/Item';
import Footer from './components/Footer';

const App = () => {
  const [profile, setProfile] = useState({
    name: 'Saidkamol and Kamron',
    avatar: 'https://randomuser.me/api/portraits/men/23.jpg', 
  });
  const [comments, setComments] = useState([]);

  const items = [
    {
      id: 1,
      name: 'Товар 1',
      price: 500,
      quantity: 40,
      rating: 4,
      image: 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Product+1', 
    },
    {
      id: 2,
      name: 'Товар 2',
      price: 1500,
      quantity: 70,
      rating: 5,
      image: 'https://via.placeholder.com/300/00FF00/FFFFFF?text=Product+2', 
    },
    {
      id: 3,
      name: 'Товар 3',
      price: 200,
      quantity: 10,
      rating: 3,
      image: 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Product+3', 
    },
    {
      id: 4,
      name: 'Товар 4',
      price: 2500,
      quantity: 30,
      rating: 2,
      image: 'https://via.placeholder.com/300/FFFF00/FFFFFF?text=Product+4',
    },
  ];

  const handleNewComment = (name, comment) => {
    setComments([...comments, { name, comment }]);
    console.log('Имя:', name, 'Комментарий:', comment);
  };

  return (
    <div className="font-sans">
      <Header profile={profile} />
      <Navbar />
      <div className="flex flex-wrap gap-8 justify-center p-6">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Footer onCommentSubmit={handleNewComment} comments={comments} />
    </div>
  );
};

export default App;
