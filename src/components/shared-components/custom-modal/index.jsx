import React from "react";
import { Button, Modal } from "antd";
const CustomModal = ({
  title,
  isModalOpen,
  handleCloseModal,
  handleSave,
  children,
  width = "520px",
}) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    handleCloseModal();
  };
  const handleOk = () => {
    handleSave();
  };
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={() => {}}
        onCancel={handleCancel}
        width={width}
        footer={false}
      >
        {children}
      </Modal>
    </>
  );
};
export default CustomModal;
