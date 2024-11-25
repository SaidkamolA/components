import React, { useState } from 'react';

const Footer = ({ onCommentSubmit, comments }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit(name, comment);
    setName('');
    setComment('');
  };

  return (
    <footer className="bg-gray-100 py-8 text-center">
      <div className="max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Комментарии</h3>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            placeholder="Ваш комментарий"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-400"
          >
            Отправить
          </button>
        </form>
        <div className="space-y-2">
          {comments.map((c, index) => (
            <div key={index} className="text-left p-2 bg-gray-50 rounded-md shadow-sm">
              <strong>{c.name}</strong>: {c.comment}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-gray-700">
        <p>Телефон: +7 123 456 7890</p>
        <p>Email: info@shop.com</p>
      </div>
    </footer>
  );
};

export default Footer;
