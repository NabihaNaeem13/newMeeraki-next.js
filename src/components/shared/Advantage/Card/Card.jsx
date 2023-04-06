export const Card = ({ advantage }) => {
  const { icon, title, body } = advantage;
  return (
    <div className='advantages-item'>
      <div className='advantages-item__icon'>
        <img src={icon} width="25%" height="25%"/>
      </div>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
};
