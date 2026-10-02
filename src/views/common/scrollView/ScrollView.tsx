import React, { PropsWithChildren } from 'react';
import { ScrollView as ReactScrollView, View, ViewStyle } from 'react-native';

import useScrollView from './useScrollView';

interface Props extends PropsWithChildren {
  contentContainerStyle: ViewStyle;
}

export default function ScrollView({ contentContainerStyle, children }: Props) {
  const hook = useScrollView();

  return (
    <View style={{ flex: 1 }} onLayout={hook.handleContainerLayoutChange}>
      <ReactScrollView
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode='on-drag'
        scrollEnabled={hook.scrollEnabled}
        onContentSizeChange={hook.handleContentLayoutChange}
      >
        {children}
      </ReactScrollView>
    </View>
  );
}
