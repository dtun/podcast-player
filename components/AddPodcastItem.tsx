import { StyleSheet } from 'react-native';
import { Avatar, Button, Layout, Text } from '@ui-kitten/components';

import { PodcastResult } from '../types';
import { useFavorites } from '../hooks/useFavorites';

export function AddPodcastItem({ item }: { item: PodcastResult }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFollowing = favorites?.includes(item.id);

  return (
    <Layout style={styles.layout}>
      <Avatar source={{ uri: item.artworkUrl100 }} size="large" />
      <Layout>
        <Text>{item.name}</Text>
        <Button onPress={() => toggleFavorite(item.id)}>
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
