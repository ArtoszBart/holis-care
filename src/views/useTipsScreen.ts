import { useState } from 'react';
import { useTipStore } from '../stores/tipStore';

const useTipsScreen = () => {
  const { tips } = useTipStore();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTips = async () => {
    setIsRefreshing(true);
    setIsRefreshing(false);
  };

  return { tips, isRefreshing, fetchTips };
};

export default useTipsScreen;
