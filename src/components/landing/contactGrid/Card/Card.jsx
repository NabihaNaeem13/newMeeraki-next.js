export const Card = ({ advantage }) => {
    const { icon, title, buttonValue } = advantage;
    return (
      <div className='advantages-item'>
      <div className='advantages-item__icon' style={{height:"8rem"}}>
          <img src={icon} width="30%" height="30%"/>
          <div style={{textAlign:"center"}}><p style={{fontSize: "18px",fontWeight: "600",color: "#999999",padding: "10px 20px",}}>{title}</p></div>
        </div>
      <button style={{border:"1px solid #999999",
  height: "60px",
  width:"200px",
  lineHeight: "20px",
  outline: "none",
  background:"transparent",
  padding: "0 20px",
  fontWeight: "bold",
  fontSize: "14px",
  color: "#999999",
  textTransform: "uppercase",
  display: "inlineBlock",
  transition: "all 0.3s linear",
  fontFamily: "Lato",
  borderRadius:"10px"}}>{buttonValue}</button>
      </div>
    );
  };