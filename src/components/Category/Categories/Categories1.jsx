import { Card1 } from './Card/Card1';

export const Categories1 = ({ categories }) => {
  return (
    <>
      {/* <!-- BEGIN  CATEGORIES --> */}
      {categories.map((category,index) => (
        <Card1 index={index} category={category} />
      ))}
      {/* <!--  CATEGORIES EOF   --> */}
    </>
  );
};
