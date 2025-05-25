import { BlurView } from 'expo-blur';
import React, { PropsWithChildren } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

interface Props extends PropsWithChildren {
  backgroundColor?: string;
  intensity: number;
}

export default function BlurContainer({
  backgroundColor,
  intensity,
  children,
}: Props) {
  return Platform.select({
    android: (
      <View style={styles.wrapper}>
        <View style={StyleSheet.absoluteFill}>
          <WebView
            style={styles.webView}
            source={{
              html: `
								<div style="
									position: absolute;
									top: 0;
									right:0;
									bottom: 0;
									left: 0;
									background: ${backgroundColor};
									-webkit-backdrop-filter: blur(${intensity}px);
									backdrop-filter: blur(${intensity}px);
								"/>
							`,
            }}
          />
        </View>
        {children}
      </View>
    ),
    default: (
      <BlurView
        intensity={intensity}
        style={[styles.wrapper, { backgroundColor }]}
      >
        {children}
      </BlurView>
    ),
  });
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  webView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
