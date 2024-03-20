import React from "react";
import { StyleShee, TextInput, View } from "react-native";

const Search = ({ navigation, route: { params } }) => {
  const [state, setState] = React.useState({
    username: "",
    error: false,
    loading: "false",
  });
  const userAccount = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await fetch(
        `https://api.github.com/users/${state.username}`
      );
      const data = await response.json();
      if (data) {
        navigation.navigate("Dashboard", { result: data });
        console.log(data);
      } else {
        setState({ ...state, loading: false, error: true });
      }
    } catch (error) {
      console.log(error);
    }
};
    const nameInputHandler = (username) => {
    setState({ state, username: username.toLowerCase() });
        
  };

  return (
<KeyboardAvoidingView style={styles.container}>
<View>
<Text style={styles.title}>SEARCH USER</Text>
<TextInput
placeholder="Github Username"
onChangeText={nameInputHandler}
value={state.username}
style={styles.searchInput}
autoFocus={true}

/>
<TouchableOpacity style={styles.button} onPress={() => userAccount()}>

<Text style={styles.buttonText}>Search</Text>

</TouchableOpacity>
</View>

{state.loading && <ActivityIndicator size="large" color="black" style={{ padding: 10 }} />}

{state.error && <Text>Invalid Username</Text>}
</KeyboardAvoidingView>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48BBEC",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
  searchInput: {
    height: 50,
    padding: 5,
    marginRight: 5,
    fontSize: 22,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    color: "white",
  },
  buttonText: {
    fontSize: 20,
    color: "#111",
    alignSelf: "center",
  },
  button: {
    height: 50,
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "white",
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  error: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default Search;
