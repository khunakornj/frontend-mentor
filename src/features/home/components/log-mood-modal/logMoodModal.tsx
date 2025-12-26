import * as Dialog from '@radix-ui/react-dialog';
import closeUrl from '@shared/assets/close.svg';
import { motion } from 'motion/react';
import { useState } from 'react';
import { match } from 'ts-pattern';

import Button from '@/shared/components/button/button';
import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

import MoodPageFirst from './components/modal-page-first/moodPageFirst';
import ModalPageFourth from './components/modal-page-fourth/modalPageFourth';
import ModalPageSecond from './components/modal-page-second/modalPageSecond';
import ModalPageThird from './components/modal-page-third/modalPageThird';
import ModalTitle from './components/modal-title/modalTitle';
import { useChangePage } from './hooks/useChangePage';
import stlye from './logMoodModal.module.css';

type Props = {
  children: React.ReactNode;
};

function LogMoodModal({ children }: Props) {
  const { nextPage, currentPage, resetPage, isLast } = useChangePage();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (isOpen) {
          resetPage();
        }
      }}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.7,
              transition: {
                duration: 0.2,
              },
            }}
            className={stlye.dialogOverlay}
          ></motion.div>
        </Dialog.Overlay>

        {/* content */}
        <Dialog.Content
          className={stlye.dialogContent}
          onPointerDownOutside={(event) => event.preventDefault()}
        >
          <Dialog.Title asChild>
            <ModalTitle cuurentSectionIndex={currentPage} />
          </Dialog.Title>

          <Dialog.Description asChild>
            {getPageComponent(currentPage)}
          </Dialog.Description>

          <div className={stlye.continueButton}>
            <Button
              text={isLast ? 'Submit' : 'Continue'}
              onClick={() => {
                if (isLast) {
                  setOpen(false);
                }

                nextPage();
              }}
            />
          </div>

          <Dialog.Close asChild>
            <CloseButton />
          </Dialog.Close>
        </Dialog.Content>
        {/* content */}
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default LogMoodModal;

function CloseButton(props: React.ComponentProps<'div'>) {
  return (
    <div className={stlye.closeButton} {...props}>
      <ImageWrapper src={closeUrl} alt="close" />
    </div>
  );
}

function getPageComponent(currentPage: number) {
  return match(currentPage)
    .with(0, () => <MoodPageFirst />)
    .with(1, () => <ModalPageSecond />)
    .with(2, () => <ModalPageThird />)
    .with(3, () => <ModalPageFourth />)
    .otherwise(() => <MoodPageFirst />);
}
