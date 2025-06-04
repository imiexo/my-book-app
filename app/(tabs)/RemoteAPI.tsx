import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import ShowUser from '../../components/ShowUser';
import {UserFetched} from './type-def';

const RemoteAPIComponent: React.FC = () => {
    const [userFetched, setUserFetched] = useState<UserFetched>({
       user: null,
       error: null,
});
 const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fake-json-api.mock.beeceptor.com/users');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setUserFetched({ user: data[0], error: null });
        } else {
          setUserFetched({ user: null, error: 'No users found' });
        }
      } catch (error: any) {
        setUserFetched({ user: null, error: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading user data...</Text>
      </View>
    );
  }

  if (userFetched.error) {
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ color: 'red' }}>Error: {userFetched.error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <ShowUser userFetched={userFetched} />
    </ScrollView>
  );
};

export default RemoteAPIComponent;