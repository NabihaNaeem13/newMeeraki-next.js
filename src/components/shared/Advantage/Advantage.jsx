import { Card } from './Card/Card';
import advantagesData from 'data/advantage/advantage';

export const Advantage = () => {
  const advantages = [...advantagesData];
  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <div className='advantages'>
        <div className='wrapper'>
          <div className='advantages-items'>
          <h6

          className="text-center pb-4"
          style={{ fontSize: "15px", textAlign: "center", lineHeight: "1.6" }}
        >
          Meeraki is a fashion brand created especially for young and lively
          youth. It consists of a hardworking and enthusiastic group of people.
        </h6>
  
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};
