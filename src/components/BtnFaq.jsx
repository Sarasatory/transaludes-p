import '../styles/components/BtnFaq.scss';
// import {useState} from 'react';

const BtnFaq = (props) => {
  return (
    <button className={`btn-faq ${props.isOpenBtn ? 'open' : ''}`}></button>
  );
};

export default BtnFaq;
