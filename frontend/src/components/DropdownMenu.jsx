// src/Dropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dropdown.css';

export default function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
  const handleClick = () => setIsOpen(false); //to close dropdown when a link is opened

  return (
    <div
      className="nav-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          item.action ? (
            <Link
              key={index}
              className="dropdown-item"
              onClick={item.action}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              key={index}
              to={item.path}
              className="dropdown-item"
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};
