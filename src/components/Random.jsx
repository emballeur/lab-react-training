import React, { Component } from 'react';
import './Random.css';

function Random({ min, max }) {
  return (
    <div className="random">
      <h3>
        A random value between {min} and {max} is{' '}
        {Math.floor(Math.random() * (max - min + 1) + min)}
      </h3>
    </div>
  );
}

export default Random;
