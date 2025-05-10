import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../../constants/colors';
import CustomText from '../CustomText';

interface ITabBar<T extends string> {
  options: readonly {
    key: T;
    label: string;
  }[];
  activeTab: T | undefined;
  setActiveTab: (key: T) => void;
}

export default function TabBar<T extends string>({
  options,
  activeTab = options[0].key,
  setActiveTab,
}: ITabBar<T>) {
  return (
    <View style={styles.container}>
      {options.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          onPress={() => setActiveTab(key)}
          style={[
            styles.tab,
            {
              backgroundColor:
                key === activeTab ? COLORS.primary600 : 'transparent',
            },
          ]}
        >
          {key === activeTab && (
            <MaterialIcons name='check' size={16} color='white' />
          )}
          <CustomText
            style={[
              styles.text,
              { color: key === activeTab ? 'white' : COLORS.primary600 },
            ]}
          >
            {label}
          </CustomText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '80%',
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: COLORS.primary600,
    overflow: 'hidden',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 16,
  },
  text: {
    fontSize: 12,
  },
});
