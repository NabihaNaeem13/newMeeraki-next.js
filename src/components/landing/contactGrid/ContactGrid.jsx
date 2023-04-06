import { Card } from './Card/Card';
import advantagesData from "/src/data/contactGrid/contactGrid.json";


export const ContactGrid = () => {
  const advantages = [...advantagesData];
  return (
    <>
      {/* <!-- BEGIN ADVANTAGES --> */}
      <div className='advantages' style={{backgroundColor:"#ffff"}}>
        <div className='wrapper'>
          <div className='advantages-items'>
            {advantages.map((advantage, index) => (
              <Card key={index} advantage={advantage} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- ADVANTAGES EOF   --> */}
    </>
  );
};