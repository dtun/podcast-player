import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: '',
          headerLeft: () => (
            <Link href="/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    color={Colors[colorScheme ?? 'light'].text}
                    name="cog"
                    size={25}
                    style={{ marginRight: 12, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/add" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    color={Colors[colorScheme ?? 'light'].text}
                    name="plus"
                    size={25}
                    style={{ marginRight: 12, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen name="add" options={{ title: 'Add Podcast' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
    </Stack>
  );
}
