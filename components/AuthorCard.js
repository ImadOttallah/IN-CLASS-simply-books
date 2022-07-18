/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorCard({
  email, firebaseKey, firstName, lastName, favorite, image,
}) {
  return (
    <>
      <div>email: {email}</div>
      <div>firebaseKey: {firebaseKey}</div>
      <div>firstName: {firstName}</div>
      <div>lastName: {lastName}</div>
      <div>favorite: {favorite}</div>
      <img src={image} alt={firstName} />
    </>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string,
  firebaseKey: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  favorite: PropTypes.bool,
  image: PropTypes.string,
};
AuthorCard.defaultProps = {
  email: 'imadotta@gmail.com',
  firstName: 'Imad',
  lastName: 'Ottallah',
  favorite: true,
  image: 'https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=lA8UuoHt',
  firebaseKey: PropTypes.string,
};
