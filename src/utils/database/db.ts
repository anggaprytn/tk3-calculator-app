import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('numbers.db');

export const initializeDB = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS numbers (id INTEGER PRIMARY KEY, value TEXT);',
        [],
        () => resolve(),
        (_, err) => {
          reject(err);
          return false;
        },
      );
    });
  });
};
