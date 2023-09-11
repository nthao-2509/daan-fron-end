import {
    CountdownProps,
    Modal,
    QRCode,
    QRCodeProps,
    Statistic,
    Typography,
  } from "antd";
  import { HOST, UrlServer } from "config/UrlServer";
  import React from "react";
  
  import { useSelector } from "react-redux";
  import { RootState } from "store";
  import { TypeUserData } from "types/Types";
  import { postWithAuthorization } from "helpers/queryHelper";
  import { useLocation } from "react-router-dom";
  import Colors from "modules/Colors";
import { QRCodeStyled } from "./styles/qrCode.styled";
interface Props {
    visible: boolean;
    onClose : () => void;
    deadlineQRCode?: number; // default: 15s
    createQrCode: () => void;
    valueQRCode: string
}
  
  const { Text } = Typography;
  const { Countdown } = Statistic;


  const QRcodeComponent = ({onClose, visible, deadlineQRCode = 15, createQrCode, valueQRCode}: Props) => {
    
    const [deadline, setDeadline] = React.useState<any>(Date.now() + 1000 * deadlineQRCode);
    const [expired, setExpired] = React.useState<boolean>(false);
  
    const { user }: { user: TypeUserData } = useSelector(
      (state: RootState) => state.auth
    );
    
    const onRefreshQRCode = () => {
      setDeadline(Date.now() + 1000 * deadlineQRCode);
      setExpired(false);
      createQrCode()
    };
    React.useEffect(() => {
        if(visible) createQrCode()
    }, [user?.accessToken, user?.userData?.idUser, visible]);
  
    const onFinish: CountdownProps["onFinish"] = () => {
      setDeadline(0);
      setExpired(true);
    };
    return (
      <>
        <Modal
          title={undefined}
          open={visible}
          footer={null}
          closable={false}
          onCancel={onClose}
          bodyStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <QRCodeStyled>
            <QRCode
              errorLevel={"H" as QRCodeProps["errorLevel"]}
              value={valueQRCode}
              icon={`${HOST}/image/vku_logo.png`}
              size={300}
              status={expired ? "expired" : "active"}
              bgColor={expired ? Colors.mainColor : "transparent"}
              className={expired ? "expired" : ""}
            />
            <div className='countdown'>
              <Countdown title={null} value={deadline} onFinish={onFinish} />
            </div>
            <div className='refresh_qr' onClick={onRefreshQRCode}>
              <i className='fa-solid fa-rotate-right'></i>
              <h4>Refresh</h4>
            </div>
          </QRCodeStyled>
        </Modal>
      </>
    );
  };
  
  export default QRcodeComponent;
  