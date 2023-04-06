import { ShopBreadcrumb } from 'components/shared/Breadcrumb/ShopBreadcrumb';
import { Layout } from './Layout';

export const ShopLayout = ({
  children,
  breadcrumb,
  breadcrumbTitle,
  description,
}) => {
  return (
    <Layout>
      <ShopBreadcrumb
        breadcrumb={breadcrumb}
        title={breadcrumbTitle}
        description={description}
      />
      <>{children}</>
    </Layout>
  );
};