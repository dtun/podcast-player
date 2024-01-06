import { FlatList, StyleSheet } from 'react-native';

import { AddPodcastItem } from '../components/AddPodcastItem';
import { Text, View } from '../components/Themed';
import { usePodcasts } from '../queries/usePodcasts';

export function AddScreen() {
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
        renderItem={({ item }) => <AddPodcastItem item={item} />}
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
});

export default AddScreen;
