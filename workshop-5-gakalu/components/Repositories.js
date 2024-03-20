import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import Badge from './components/Badge';

function Repositories({ navigation:{navigate}, route:{params:data} }) {
    const [state, setstate] = React.useState({
        list: [],
        loading: "",
        error: false,
      });
      const myRepoUrl = data.repos_url;
      React.useEffect(() => {
        allRepos();
      }, []);
    
      const allRepos = async () => {
        const { data } = await fetch.get(myRepoUrl);
        setstate({ ...state, list: data });
      };
      console.log(data.html_url);
    return (
        <View>
      <Badge userInfo={data} />
      <ScrollView>
        {state.list.map((item) => {
          return (
            <ScrollView key={item.id}>
              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => navigate("WebView", { url: item.html_url })}
              >
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rowContainer}>
                <Text style={styles.description}>{item.description}</Text>
              </TouchableOpacity>
            </ScrollView>
          );
        })}
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

export default Repositories;