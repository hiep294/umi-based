import { useSelector } from 'umi';
import { useMemo } from 'react';

export const selectCount = () => {
  return useSelector((state: any) => state.indexPage.count);
};

export const selectCountTwo = () => {
  return useSelector((state: any) => state.indexPage.countTwo);
};

export const selectItems = () => {
  return useSelector((state: any) => state.indexPage.items);
};

export const selectItemDetailId = () => {
  return useSelector((state: any) => state.indexPage.itemDetailId);
};

export const selectItemDetail = () => {
  const items = selectItems();
  const itemDetailId = selectItemDetailId();
  const item = useMemo(() => {
    if (!itemDetailId) return {};
    console.log(
      'do filter: expect not running this after component re-rendering and not mutate itemDetailId and items in state',
    );
    const rs = items.find((item: any) => item.id === itemDetailId);
    return rs || {};
  }, [items, itemDetailId]);
  return item;
};
