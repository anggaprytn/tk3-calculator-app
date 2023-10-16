import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';
import { getAllDataNumber } from '@/utils/database/functions';

export const useReport = () => {
  const [data, setData] = useState([]);

  useFocusEffect(() => {});

  useFocusEffect(
    useCallback(() => {
      getAllDataNumber().then(value => {
        const reversedData = value.reverse();
        setData(reversedData);
      });
    }, []),
  );

  return {
    data,
  };
};
