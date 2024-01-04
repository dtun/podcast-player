import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { usePodcasts } from '../queries/usePodcasts';

export default function AddScreen() {
  const podcasts = usePodcasts();

  return (
    <View style={styles.container}>
      <FlatList
        data={podcasts.data?.feed.results}
        ListEmptyComponent={
          podcasts.isFetching ? (
            <Text>Loading Podcasts...</Text>
          ) : (
            <Text>No Podcasts</Text>
          )
        }
        renderItem={({ item }) => <Text style={styles.title}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
