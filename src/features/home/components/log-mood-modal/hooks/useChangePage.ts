import { useStateList } from 'react-use';

const stateSet = [0, 1, 2, 3];
export function useChangePage() {
  const { next, state, isLast, setState } = useStateList(stateSet);

  const resetPage = () => {
    setState(0);
  };
  const nextPage = () => {
    if (isLast) {
      resetPage();
      return;
    }

    next();
  };

  return {
    currentPage: state,
    nextPage,
    resetPage,
  };
}
