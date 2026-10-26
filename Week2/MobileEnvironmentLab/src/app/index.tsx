import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import StudentCard from '@/components/StudentCard';

export default function HomeScreen() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    console.log('Profile screen mounted');

    return () => {
      console.log('Profile screen cleanup');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Student Profile</Text>
      <StudentCard name="Tristan Duque" program="BS Information Systems" />
      <Text style={styles.viewsText}>Profile views: {views}</Text>

      <View style={styles.buttonGroup}>
        <Button title="View Profile" onPress={() => setViews((current) => current + 1)} />
        <Button title="Reset Views" onPress={() => setViews(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#111827',
  },
  viewsText: {
    fontSize: 18,
    marginBottom: 18,
    color: '#1f2937',
  },
  buttonGroup: {
    width: '100%',
    gap: 12,
  },
});
