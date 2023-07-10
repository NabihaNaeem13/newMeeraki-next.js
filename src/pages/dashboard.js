import { Dashboard } from 'components/Dashboard/Dashboard';
import { PublicLayout } from 'layout/PublicLayout'
import React from 'react'

const dashboard = () => {
    const breadcrumbsData = [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Dashboard',
          path: '/dashboard',
        },
      ];
  return (
   <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Dashboard'>
    <Dashboard/>
   </PublicLayout>
  )
}

export default dashboard