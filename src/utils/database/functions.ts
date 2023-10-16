import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('numbers.db');

type NumberValue = {
  value: string;
};

export const addNumber = (numberData: NumberValue) => {
  db.transaction(
    tx => {
      tx.executeSql('INSERT INTO numbers (value) VALUES (?);', [
        numberData.value,
      ]);
    },
    err => {
      console.log(`Error: ${err}`);
    },
  );
};

type NumberRow = {
  id: number;
  value: string;
};

export const getAllDataNumber = () => {
  return new Promise<NumberRow[]>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM numbers;', [], (_, result) => {
        resolve(result.rows._array as NumberRow[]);
      });
    }, reject);
  });
};
