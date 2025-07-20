import { useState } from 'react';
import { likeTipRequest, unlikeTipRequest } from '../../../../api/tips';
import { type Tip } from '../../../../models/Tip';

const useTipListItem = (tip: Tip) => {
  const [isLikeButtonDisabled, setIsLikeButtonDisabled] =
    useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(tip.userLiked);

  const onLikeButtonPress = async () => {
    setIsLikeButtonDisabled(true);

    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    const response = newLikedState
      ? await likeTipRequest(tip.id)
      : await unlikeTipRequest(tip.id);

    if (!response.ok) {
      setIsLiked(!newLikedState);
    }

    setIsLikeButtonDisabled(false);
  };

  return { isLiked, isLikeButtonDisabled, onLikeButtonPress };
};

export default useTipListItem;
