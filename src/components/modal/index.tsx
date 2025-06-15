import { ConfigProvider, Modal } from "antd";
import React from "react";

export interface IModal<Type> {
  show: boolean;
  data?: any;
  title?: string;
  subTitle?: string;
  type?: Type;
}

interface IProps {
  title?: string;
  show: boolean;
  drawer?: boolean;
  width?: number | string;
  maskClosable?: boolean;
  children: React.ReactNode;
  onDimiss?: () => void;
  subTitle?: string;
}

export const AppModal: React.FC<IProps> = ({
  title,
  show,
  children,
  onDimiss,
  width,
  maskClosable,
  subTitle,
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "",
        },
      }}
    >
      <Modal
        maskClosable={maskClosable || false}
        title={<p className="font-bold text-2xl capitalize">{title}</p>}
        open={show}
        onCancel={onDimiss}
        footer={null}
        centered
        width={width || "60%"}
        wrapClassName="py-5"
        destroyOnHidden
      >
        <div>
          {subTitle && <p className="-mt-1 mb-5">{subTitle}</p>}
          <div className="mt-5">{children}</div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};
