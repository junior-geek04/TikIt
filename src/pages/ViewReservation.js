import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import ReservationBox from '../components/ReservationBox';

const ViewReservation = () => {
  const data = [
    {
      id: 1,
      author: 'Prashant Chowdhary',
      name: 'The comedy nights',
      statusActive: true,
      description: 'The comedy show hosted by prashant chowdhary',
      price: 300,
    },
    {
      id: 2,
      author: 'prajjwal jogdand',
      name: 'Art workshop',
      statusActive: true,
      description: '2 days Art workshop on oil paint and water color paint',
      price: 5000,
    },
    {
      id: 3,
      author: 'Akarsh pandey',
      name: 'Guitar and Singing workshop',
      statusActive: true,
      description: '2 days workshop on guitar and plyback singing',
      price: 5000,
    },
    {
      id: 4,
      author: 'Divyansh Panwar',
      name: 'Web dev workshop',
      statusActive: true,
      description: 'Learn Web dev in just 6 hours workshop',
      price: 1000,
    },
    {
      id: 5,
      author: 'Shubham Anand',
      name: 'Start journey as Content writer',
      statusActive: true,
      description: 'Workshop on how to start carreer as freelance content writer',
      price: 300,
    },

  ];
  return (
    <Flex direction={'column'} textAlign={'center'}>
      <Heading size={'4xl'}>Book </Heading>
      <Heading
        bgGradient="linear(to-t, #11998e, #38ef7d,)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mb={10}
      >
        Tickets
      </Heading>
      <Flex p={10} flexWrap={'wrap'} justifyContent={'center'}>
        {data.map(reservation => (
          <ReservationBox key={reservation.id} reservation={reservation} />
        ))}
      </Flex>
    </Flex>
  );
};

export default ViewReservation;
