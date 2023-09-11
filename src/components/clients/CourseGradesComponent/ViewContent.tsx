import React from "react";

const ViewContent = ({ item }: any) => {
  return (
    <div className='content'>
      <div className='course-grades'>
        <h4>Điểm chuyên cần:</h4>
        <p>{item?.diem_cc}</p>
      </div>
      <div className='course-grades'>
        <h4>Điểm bài tập:</h4>
        <p>{item?.diem_bt}</p>
      </div>
      <div className='course-grades'>
        <h4>Điểm giữa kỳ:</h4>
        <p>{item?.giua_ky}</p>
      </div>
      <div className='course-grades'>
        <h4>Điểm cuối kỳ:</h4>
        <p>{item?.cuoi_ky}</p>
      </div>
      <div className='course-grades'>
        <h4>Tổng điểm T4:</h4>
        <p>{item?.diem_t4}</p>
      </div>
      <div className='course-grades'>
        <h4>Tổng điểm T10:</h4>
        <p>{item?.diem_t10}</p>
      </div>
      <div className='course-grades'>
        <h4>Điểm chữ:</h4>
        <p>{item?.diem_chu}</p>
      </div>
      <div className='course-grades'>
        <h4>Tổng điểm:</h4>
        <p>{item?.diem_tong}</p>
      </div>
    </div>
  );
};

export default ViewContent;
