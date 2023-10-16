import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { Text, Pressable } from '@/components';
import { styles } from './styles';
import { defaultColors } from '@/themes';
import { StatusBar } from 'expo-status-bar';
import { useHome } from './_hooks';

const Home = () => {
  const { handleNumberPress, handleSimpan, numbers } = useHome();

  const NumberButton = useCallback(
    ({ num }: { num: number }) => (
      <Pressable style={styles.button} onPress={() => handleNumberPress(num)}>
        <Text type="medium" size={20} color={defaultColors.text}>
          {num}
        </Text>
      </Pressable>
    ),
    [handleNumberPress],
  );

  const renderFirstRow = useMemo(() => {
    return (
      <View style={styles.row}>
        {[7, 8, 9, 0].map(num => (
          <NumberButton key={num} num={num} />
        ))}
      </View>
    );
  }, [NumberButton]);

  const renderSaveButton = useMemo(() => {
    return (
      <Pressable style={styles.buttonSave} onPress={handleSimpan}>
        <Text type="medium" size={20} color={defaultColors.text}>
          Simpan
        </Text>
      </Pressable>
    );
  }, [handleSimpan]);

  const renderNumberButton = useMemo(() => {
    return (
      <View style={styles.rowLeft}>
        {[
          [4, 5, 6],
          [1, 2, 3],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row75}>
            {row.map(num => (
              <NumberButton key={num} num={num} />
            ))}
          </View>
        ))}
      </View>
    );
  }, [NumberButton]);

  const renderSecondAndThirdRow = useMemo(() => {
    return (
      <View style={styles.row100}>
        {renderNumberButton}
        {renderSaveButton}
      </View>
    );
  }, [renderNumberButton, renderSaveButton]);

  const renderText = useMemo(() => {
    const str = numbers.join('');
    const num = parseInt(str, 10);
    return (
      <View style={styles.containerText}>
        <Text type="regular" size={24}>
          {num || ''}
        </Text>
      </View>
    );
  }, [numbers]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        {renderText}
        {renderFirstRow}
        {renderSecondAndThirdRow}
      </View>
    </View>
  );
};

export default Home;
