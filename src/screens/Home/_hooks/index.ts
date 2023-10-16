import { useState, useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import { addNumber } from '@/utils/database/functions';
import Toast from 'react-native-toast-message';

export const useHome = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleNumberPress = useCallback(
    (number: number) => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setNumbers([...numbers, number]);
    },
    [numbers],
  );

  const handleSimpan = useCallback(() => {
    const str = numbers.join('');
    const num = parseInt(str, 10);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (numbers.length === 0) {
      Toast.show({
        type: 'error',
        text1: 'Tambahkan angka untuk menyimpan laporan.',
      });
    } else {
      addNumber({ value: num.toString() });
      setNumbers([]);
    }
  }, [numbers]);

  return {
    handleNumberPress,
    handleSimpan,
    numbers,
  };
};
