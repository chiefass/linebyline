import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Button, Dialog } from '@markflowy/components'
import { useTranslation } from 'react-i18next'

interface ConfirmModalProps {
  title: string
  content: string
  onConfirm?: () => void
}
const Confirm = NiceModal.create(({ title, content, onConfirm }: ConfirmModalProps) => {
  const modal = useModal()
  const { t } = useTranslation()

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm()
    }
    modal.hide()
  }

  return (
    <Dialog
      title={title}
      open={modal.visible}
      onClose={modal.hide}
      footer={[
        <Button key='cancel' onClick={modal.hide}>
          {t('cancel')}
        </Button>,
        <Button key='confirm' btnType='primary' onClick={handleConfirm}>
          {t('confirm')}
        </Button>,
      ]}
    >
      {content}
    </Dialog>
  )
})

export default {
  Confirm,
}