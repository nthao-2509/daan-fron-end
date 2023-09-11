import styled from 'styled-components';
export const UpdateStudentInfoStyled = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    gap: 20px;
    .left{
        display: flex;
        flex-direction: column;
        width: 40%;
        height: 100%;
        .avatar{
            width: 100%;
            height: 80%;
            img{
                width: 100%;
                height: 80%;
            }
        }
    }
    .right{
        width: calc(60% - 20px);
        .content{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 20px;
            margin-bottom: 10px;
            .label{
                width: 50%
            }
           .ant-typography{
            margin-bottom: 0;
           }
        }
    }
`