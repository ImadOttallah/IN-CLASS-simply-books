import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from 'react-bootstrap/Card';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <div>email: {authorDetails.email}</div>
        <div>firstName: {authorDetails.first_name}</div>
        <div>lastName: {authorDetails.last_name}</div>
        <div>favorite: {authorDetails.favorite}</div>
      </Card>
    </>
  );
}
