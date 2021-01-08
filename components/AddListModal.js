import { AntDesign } from "@expo/vector-icons";
import React, { Component } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import tempData from "../tempData";

export default class AddListModal extends Component {
  backgroundColor = [
    "#00A9FF",
    "#98FF00",
    "#00FF72",
    "#FF2600",
    "#CA00FF",
    "#00FF04",
  ];

  state = {
    name: "",
    color: this.backgroundColor[0],
  };

  createTodo = () => {
      const { name,color } = this.state;

      tempData.push({
          name,
          color,
          todos: []
      });

      this.setState({ name: ""});
      this.props.closeModal();
  }

  renderColors() {
    return this.backgroundColor.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: "absolute", top: 54, right: 32 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={Colors.black} />
        </TouchableOpacity>

        <View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
          <Text style={styles.title}> Create Todo List </Text>

          <TextInput
            style={styles.input}
            placeholder="List Name?"
            onChangeText={(text) => this.setState({ name: text })}
          />

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
              {this.renderColors()}
          </View>

          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
            onPress= {this.createTodo}
          >
            <Text style={{ color: Colors.white, fontWeight: "600" }}>
              Create !
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 60,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  colorSelect: {
      width: 30,
      height: 30,
      borderRadius: 4
  }
});
