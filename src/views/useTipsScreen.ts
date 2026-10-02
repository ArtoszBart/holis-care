import { useState } from 'react';
import { getTipsRequest } from '../api/tips';
import { useTipStore } from '../stores/tipStore';

const useTipsScreen = () => {
  const { setTips, tips } = useTipStore();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTips = async () => {
    setIsRefreshing(true);
    const response = await getTipsRequest();
    setIsRefreshing(false);

    if (!response.ok) {
      return;
    }

    setTips(response.data);
  };

  return { tips, isRefreshing, fetchTips };
};

export default useTipsScreen;
