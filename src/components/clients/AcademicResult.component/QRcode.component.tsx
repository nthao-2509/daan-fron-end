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
import { QRCodeStyled } from "./styles/QRCode";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TypeUserData } from "types/Types";
import { postWithAuthorization } from "helpers/queryHelper";
import { useLocation } from "react-router-dom";
import Colors from "modules/Colors";

const { Text } = Typography;
const { Countdown } = Statistic;
const QRcodeComponent = () => {
  const [visibleModal, setVisibleModal] = React.useState<boolean>(true);
  const [valueQRCode, setValueQRCode] = React.useState<string>("");
  const [deadline, setDeadline] = React.useState<any>(Date.now() + 1000 * 15);
  const [expired, setExpired] = React.useState<boolean>(false);

  const { user }: { user: TypeUserData } = useSelector(
    (state: RootState) => state.auth
  );
  const onRandomQRCode = async (token: string, userId: number | string) => {
    const result: any = await postWithAuthorization(
      `${UrlServer}/client/create-qr-code`,
      token,
      { userId }
    );
    if (result?.status === 200)
      return setValueQRCode(
        `http://192.168.1.36:3000/result/${result?.data?.id}/${result?.data.token}`
      );
  };
  const onRefreshQRCode = () => {
    setDeadline(Date.now() + 1000 * 15);
    setExpired(false);

    onRandomQRCode(user?.accessToken, user?.userData?.idUser);
  };
  React.useEffect(() => {
    onRandomQRCode(user?.accessToken, user?.userData?.idUser);
  }, [user?.accessToken, user?.userData?.idUser]);

  const onFinish: CountdownProps["onFinish"] = () => {
    setDeadline(0);
    setExpired(true);
  };
  return (
    <>
      <Modal
        title={undefined}
        open={visibleModal}
        footer={null}
        closable={false}
        onCancel={() => setVisibleModal(false)}
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
