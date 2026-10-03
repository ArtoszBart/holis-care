import { useEffect, useState } from 'react';
import { type Tip } from '../../../../models/Tip';
import { useTipStore } from '../../../../stores/tipStore';

const useTipListItem = (tip: Tip) => {
  const { toggleLikeTip } = useTipStore();

  const [isLiked, setIsLiked] = useState<boolean>(tip.userLiked);
  const [isLikeButtonDisabled, setIsLikeButtonDisabled] =
    useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLiked(tip.userLiked);
  }, [tip]);

  const onLikeButtonPress = async () => {
    if (!tip) return;

    setIsLikeButtonDisabled(true);

    setIsLiked(!isLiked);
    const result = await toggleLikeTip(tip.id, !isLiked);
    if (!result) setIsLiked(isLiked);

    setIsLikeButtonDisabled(false);
  };

  return { isLiked, isLikeButtonDisabled, onLikeButtonPress };
};

export default useTipListItem;
