import { useEffect, useState } from 'react';
import { getTipsRequest } from '../api/tips';
import { type Tip } from '../models/Tip';

const useTipsScreen = () => {
  const [tips, setTips] = useState<Tip[]>();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    if (!isFetching) setIsRefreshing(true);
    const response = await getTipsRequest();
    if (!isFetching) setIsRefreshing(false);
    else setIsFetching(false);

    if (response.ok) {
      setTips(response.data);
    }
  };

  return { tips, fetchTips, isFetching, isRefreshing };
};

export default useTipsScreen;
