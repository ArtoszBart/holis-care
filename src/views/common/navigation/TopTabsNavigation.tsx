import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { COLORS } from '../../../constants/colors';
import CustomText from '../CustomText';
import { Icon, ICONS } from '../icon';

interface Props<T extends string> {
  style?: ViewStyle;
  options: readonly {
    key: T;
    label: string;
  }[];
  activeTab: T | undefined;
  setActiveTab: (key: T) => void;
}

export default function TopTabsNavigation<T extends string>({
  style,
  options,
  activeTab = options[0].key,
  setActiveTab,
}: Props<T>) {
  return (
    <View style={[styles.container, style]}>
      {options.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          onPress={() => setActiveTab(key)}
          style={[
            styles.tab,
            {
              backgroundColor:
                key === activeTab ? COLORS.ACCENT : 'transparent',
            },
          ]}
        >
          {key === activeTab && (
            <Icon icon={ICONS.CHECK} style={styles.checkIcon} />
          )}
          <CustomText
            style={[
              styles.text,
              { color: key === activeTab ? 'white' : COLORS.ACCENT },
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
    marginHorizontal: 'auto',
    width: '80%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: COLORS.ACCENT,
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
  checkIcon: {
    fontSize: 16,
    color: 'white',
  },
});
