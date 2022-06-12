import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
// import Header from './src/components/Header';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
// import UpdateData from './src/components/updateData';

export default function TodoApp() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // get
  function fetchData() {
    axios
      .get(
        'https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/todos'
      )
      .then((res) => {
        setTodoList(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  // post
  function postData(text) {
    if (todoItem !== '') {
      axios
        .post(
          'https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/todos',
          {
            todoItem: text,
          }
        )
        .then((res) => {
          console.log(res);
          fetchData();
        })
        .catch((error) => {
          console.log(error);
        });
      setTodoItem('');
      fetchData();
    } else {
      alert("There's no system safe");
    }
  }

  //delete
  function deleteData(par1) {
    axios
      .delete(
        `https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/todos/${par1}`
      )
      .then((res) => {
        console.log(res);
        fetchData();
      })
      .catch(() => {
        alert('Error Delete Data');
      });
  }

  //popup delete
  const [updateData, setUpdateData] = useState(false);
  function toggleUpdateData() {
    setUpdateData(true);
  }

  function toggleUpdateDataClose() {
    setUpdateData(false);
  }

  return (
    <View>
      {/* <Header title="Todo App" /> */}

      <View style={styles.container}>
        <View>
          {/* input */}
          <TextInput
            placeholder="Enter To-Do item"
            style={styles.textInput}
            onChangeText={(text) => setTodoItem(text)}
            value={todoItem}
          />
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => postData(todoItem)}
          >
            <Text style={styles.button}>Add Todo</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <View
              style={{
                ...styles.todoItem,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}
            >
              {/* <Modal
                animationType="slide"
                visible={updateData}
                onRequestClose={() => toggleUpdateDataClose()}
              >
                <UpdateData
                  closeModal={toggleUpdateDataClose}
                  identity={item._id}
                />
              </Modal> */}

              <TouchableOpacity onPress={() => toggleUpdateData()} hidden>
                <AntDesign
                  name="edit"
                  size={20}
                  style={{
                    color: 'blue',
                  }}
                ></AntDesign>
              </TouchableOpacity>
              <Text style={styles.text}>{item.todoItem}</Text>
              <TouchableOpacity onPress={() => deleteData(item._id)}>
                <AntDesign
                  name="delete"
                  size={20}
                  style={{
                    color: 'red',
                  }}
                ></AntDesign>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item._id.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    display: 'flex',
  },
  text: {
    color: 'white',
    textAlign:'left',
  },
  textInput: {
    padding: 10,
    borderColor: '#fda4af',
    marginBottom: 10,
    borderWidth: 2,
  },
  todoItem: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fda4af',
    borderRadius: 10,
    textAlign: 'center',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonAdd: {
    backgroundColor: '#930707',
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    padding: 5,
  },
});
