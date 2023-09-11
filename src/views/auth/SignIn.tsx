import React from "react";
import { StyleSignIn } from "./style";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { login, loginWithQR } from "features/auth/Auth.slice";
import QRcodeComponent from "common/QRCode.component";
import { HOST, UrlServer } from "config/UrlServer";
import { postQueryHelper } from "helpers/queryHelper";
import {io} from 'socket.io-client'
import { v4 as uuidv4 } from 'uuid';
import LoadingCommon from "common/Loading.common";
import { useNavigate } from "react-router-dom";


interface Values {
  username: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate()
  const socket = React.useRef<any>()
  const [visibleQrCode, setVisibleQrCode] = React.useState<boolean>(false)
  const [isLoadingPage, setIsLoadingPage] = React.useState<boolean>(false)
  const [valueQrCode, setValueQrCode] = React.useState<string>('')
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values: Values) => {
    const parameters = {
      username: values.username,
      password: values.password,
    };
    dispatch(login(parameters));
  };
  
  const createQrCode = React.useCallback( async () => {
    const id = uuidv4();
    socket.current = io(HOST)
      const msg = 'login-with-qr-code'
      socket.current.emit('add-user', id)
      socket.current.emit('send-msg', {
        from: id,
        message: msg
      })
      setValueQrCode(JSON.stringify({
        type: msg,
        data: id
      }))
  }, [])
  
  React.useEffect(() => {
    if(socket.current){
      let to: string = ''
      
      socket.current.on('status', (message: any) => {
        to = message.to
        if(message.status === 'loading'){
          setIsLoadingPage(true)
          setVisibleQrCode(false)
        }        
      })
      socket.current.on('msg-recieve', (msg: any) => {
        if(msg && to){
          socket.current.emit('status', {
            to: to,
            message: 'success'
          })
          dispatch(loginWithQR(msg))
          setIsLoadingPage(false)
        }
      })
    }
  }, [socket.current, dispatch])


  return (
      <LoadingCommon spinning={isLoadingPage} size="large">
    <StyleSignIn>
      <QRcodeComponent valueQRCode={valueQrCode} createQrCode={createQrCode} visible={visibleQrCode} onClose={() => setVisibleQrCode(false)} deadlineQRCode={30} />
        <div className='image'>
          <img src='/images/bg-sign-in.png' alt='sign-in' />
        </div>
        <div className='form'>
          <>
            <div className='title'>SIGN-IN</div>
            <div className="button-qrcode">
              <Button className="button" onClick={() => setVisibleQrCode(true)}>Login with QR-Code</Button>
            </div>

            <Form
              onFinish={onSubmit}
              form={form}
              className='form-input'
              layout='vertical'
            >
              <Form.Item label='Username' name='username' required>
                <Input
                  className='input'
                  type='text'
                  placeholder='Please enter your email address'
                />
              </Form.Item>
              <Form.Item label='Password' name='password' required>
                <Input
                  className='input'
                  type='password'
                  placeholder='Please enter your password'
                />
              </Form.Item>
              <Form.Item label='' required className='button-sign-up'>
                <button className='button' type='submit'>
                  Sign up
                </button>
              </Form.Item>
            </Form>
          </>
        </div>
    </StyleSignIn>
      </LoadingCommon>
  );
};

export default SignIn;
