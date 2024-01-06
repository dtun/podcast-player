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
      <Text>{item.name}</Text>
      <Button appearance="ghost" onPress={() => toggleFollowing(item.id)}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
