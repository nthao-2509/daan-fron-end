import { Modal } from 'antd'
import React, { Children, ReactNode } from 'react'

interface Props {
    title: string | null,
    footer?: ReactNode | boolean,
    okText?: string,
    cancelText?: string,
    onClose: () => void,
    onSubmit: () => void,
    visible: boolean,
    children: ReactNode,
    width?: string
}

const ModalCommon = ({
    title,
    footer = true,
    okText = 'Cập nhật',
    cancelText = 'Hủy',
    onClose,
    visible,
    children,
    width = '50%',
    onSubmit
}: Props) => {

  return (
    <Modal width={width} title={title} onOk={onSubmit} open={visible} okText={okText} cancelText={cancelText} onCancel={onClose}>
        {children}
    </Modal>
  )
}

export default ModalCommon