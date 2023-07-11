import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export const ShopBreadcrumb = ({ breadcrumb, title, description }) => {
  const router = useRouter();

  return (
    <>
      {/* <!-- BEGIN DETAIL MAIN BLOCK --> */}
       <div className='row-breadcrumb'>
        <div className='column-breadcrumb'>
        </div>
        <div className='column-breadcrumb'>
        <h1 className='column-breadcrumb-title'>{title}</h1>
        {breadcrumb && (
              <ul className='bread-crumbs'>
                {breadcrumb?.map(({ path, label }, i) => {
                  return (
                    <React.Fragment key={i}>
                      {path === router.asPath ? (
                        <li className='bread-crumbs__item'>{label}</li>
                      ) : (
                        <li className='bread-crumbs__item'>
                          <Link href={path}>
                            <a className='bread-crumbs__link'>{label}</a>
                          </Link>
                        </li>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            )}

            {/* IF NEED DESCRIPTION */}
            {description && <span className='error-descr column-breadcrumb-description'>{description}</span>}
        </div>
        <div className='column-breadcrumb'>
        </div>
       </div>
      {/* <!-- DETAIL MAIN BLOCK EOF   --> */}
    </>
  );
};
