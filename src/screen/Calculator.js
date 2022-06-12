import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState('');

  let combine = '';

  function getResult() {
    for (let i = 0; i < keys.length; i++) {
      combine = combine + keys[i];
    }
    let calcResult = eval(combine); //Eval
    setResult(`= ${calcResult}`);
  }

  function percentHandler() {
    let a = parseFloat(...keys);
    let percent = a / 100;
    setKeys([percent]);
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.output}>
          <Text style={styles.outputNumber}>
            {result == '' ? keys : result}
          </Text>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '1'])}
          >
            <Text style={styles.keysText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '2'])}
          >
            <Text style={styles.keysText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysOp}
            onPress={() => setKeys([...keys, '-'])}
          >
            <Text style={styles.keysText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysOp}
            onPress={() => setKeys([...keys, '+'])}
          >
            <Text style={styles.keysText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '3'])}
          >
            <Text style={styles.keysText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '4'])}
          >
            <Text style={styles.keysText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysOp}
            onPress={() => setKeys([...keys, '/'])}
          >
            <Text style={styles.keysText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysOp}
            onPress={() => setKeys([...keys, '*'])}
          >
            <Text style={styles.keysText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '5'])}
          >
            <Text style={styles.keysText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '6'])}
          >
            <Text style={styles.keysText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysOp}
            onPress={() => percentHandler()}
          >
            <Text style={styles.keysText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keysOp} onPress={() => getResult()}>
            <Text style={styles.keysText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerKeys}>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '7'])}
          >
            <Text style={styles.keysText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '8'])}
          >
            <Text style={styles.keysText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '9'])}
          >
            <Text style={styles.keysText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.keysNumber}
            onPress={() => setKeys([...keys, '0'])}
          >
            <Text style={styles.keysText}>0</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.containerC}
            onPress={() => {
              setKeys('');
              setResult(0);
            }}
          >
            <Text style={styles.C}> C </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerKeys: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerC: {
    backgroundColor: '#FF5757',
    width: 350,
    height: 90,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 7,
  },
  C: {
    color: 'white',
    fontSize: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  keysNumber: {
    display: 'flex',
    backgroundColor: '#FF5757',
    width: 80,
    height: 80,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 50,
    borderRadius: 10,
    margin: 5,
  },
  keysText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  keysOp: {
    display: 'flex',
    backgroundColor: '#930707',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 50,
    borderRadius: 10,
    margin: 5,
  },
  output: {
    backgroundColor: '#ECECEC',
    width: 350,
    height: 90,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 7,
  },
  outputNumber: {
    fontSize: 50,
  },
});