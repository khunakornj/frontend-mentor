import * as Dialog from '@radix-ui/react-dialog';
import closeUrl from '@shared/assets/close.svg';
import { motion } from 'motion/react';

import Button from '@/shared/components/button/button';
import ImageWrapper from '@/shared/ui/image-wrapper/imageWrapper';

import MoodPageFirst from './components/modal-page-first/moodPageFirst';
import ModalTitle from './components/modal-title/modalTitle';
import { useChangePage } from './hooks/useChangePage';
import stlye from './logMoodModal.module.css';

type Props = {
  children: React.ReactNode;
};

function LogMoodModal({ children }: Props) {
  const { nextPage, currentPage, resetPage } = useChangePage();

  return (
    <Dialog.Root onOpenChange={(open) => open && resetPage()}>
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
        <Dialog.Content className={stlye.dialogContent}>
          <Dialog.Title asChild>
            <ModalTitle cuurentSectionIndex={currentPage} />
          </Dialog.Title>

          <Dialog.Description asChild>
            <MoodPageFirst />
          </Dialog.Description>

          <div className={stlye.continueButton}>
            <Button text="Continue" onClick={nextPage} />
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
