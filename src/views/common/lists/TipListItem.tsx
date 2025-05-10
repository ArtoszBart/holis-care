import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { Tip } from '../../../models/Tip';
import CustomText from '../CustomText';
import LinkButton from '../LinkButton';
import { Icon, ICONS } from '../icon';

export default function TipListItem({ tip }: { tip: Tip }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <CustomText style={styles.title}>{tip.text}</CustomText>
        <LinkButton
          label='Ustaw przypomnienie'
          onPress={() => {}}
          textStyle={{ color: COLORS.primary600 }}
        />
      </View>
      <TouchableOpacity>
        <Icon icon={ICONS.HEART} style={styles.heartIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: 284,
    gap: 4,
  },
  main: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 4,
  },
  title: {
    color: COLORS.typo1,
  },
  heartIcon: {
    fontSize: 22,
    color: COLORS.typo4,
  },
});
