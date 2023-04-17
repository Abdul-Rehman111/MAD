import React from 'react';
import { StyleSheet, View } from 'react-native';

const Square = ({ color }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]} />
  );
};

const Row = ({ row, isEvenRow }) => {
  const colors = ['#FFFFFF', '#9F9F9F'];

  return (
    <View style={styles.row}>
      {row.map((square, index) => (
        <Square key={index} color={colors[(index + isEvenRow) % 2]} />
      ))}
    </View>
  );
};

const ChessBoard = () => {
  const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ];

  return (
    <View style={styles.board}>
      {board.map((row, index) => (
        <Row key={index} row={row} isEvenRow={index % 2 === 0} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 50,
    height: 50,
  },
});

export default ChessBoard;

