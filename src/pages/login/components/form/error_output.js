import React from 'react';

export function errorOutput(mistakes) {
  return mistakes.map((mistake) => (
    <li key={mistake.toString()}> {mistake} </li>
  ));
}
