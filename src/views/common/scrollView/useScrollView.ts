import { useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

const useScrollView = () => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (containerHeight !== null && contentHeight !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setScrollEnabled(contentHeight > containerHeight);
    }
  }, [containerHeight, contentHeight]);

  const handleContainerLayoutChange = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setContainerHeight(height);
  };

  const handleContentLayoutChange = (_: number, height: number) => {
    setContentHeight(height);
  };

  return {
    scrollEnabled,
    handleContainerLayoutChange,
    handleContentLayoutChange,
  };
};

export default useScrollView;
