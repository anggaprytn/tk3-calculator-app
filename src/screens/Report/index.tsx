import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Pressable, Text } from '@/components';
import { styles } from './styles';
import { useReport } from './_hooks';

const Report = () => {
  const { data } = useReport();

  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.card}>
        <Text type="regular" size={20}>
          {item.value}
        </Text>
      </Pressable>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <View style={styles.padding} />
        </ScrollView>
      </View>
    </>
  );
};

export default Report;
