import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 90,
      }}
    >
      <Button onPress={signOut}>Sair</Button>
    </View>
  );
};

export default Dashboard;
