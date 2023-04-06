export const DetailBlock = ({ detailBlocks }) => {
  return (
    <>
      {/* <!-- BEGIN DETAIL MAIN BLOCK --> */}
      <div className='wrapper'>
        <div className='detail-block__items'>
          {detailBlocks.map((block, index) => (
            <div key={index} className={`detail-block__item`}>
              <div className='detail-block__item-icon'>
                <img src={block.icon} className="js-img"/>
              </div>
              <div className='detail-block__item-info' style={{color: "#999999"}}>
                <h6 style={{fontSize:"1rem"}}>{block.step}</h6>
                {block.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- DETAIL MAIN BLOCK EOF --> */}
    </>
  );
};
