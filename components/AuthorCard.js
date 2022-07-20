/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteAuthorBooks } from '../api/mergedData';
// import Link from 'next/link';

export default function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <div>email: {authorObj.email}</div>
        <div>firstName: {authorObj.first_name}</div>
        <div>lastName: {authorObj.last_name}</div>
        <div>favorite: {authorObj.favorite}</div>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          DELETE
        </Button>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
