import { StyleSheet } from 'react-native';
import { Avatar, Button, Layout, Text } from '@ui-kitten/components';

import { PodcastResult } from '../types';
import { useFollowing } from '../hooks/useFollowing';

export function AddPodcastItem({ item }: { item: PodcastResult }) {
  const { following, toggleFollowing } = useFollowing();
  const isFollowing = following.includes(item.id);

  return (
    <Layout style={styles.layout}>
      <Avatar source={{ uri: item.artworkUrl100 }} size="large" />
      <Layout>
        <Text>{item.name}</Text>
        <Button onPress={() => toggleFollowing(item.id)}>
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
