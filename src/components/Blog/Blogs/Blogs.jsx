import { Card } from './Card/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export const Blogs = ({ blogs }) => {
  return (
    <>
      {/* <!-- BEGIN  BLOG --> */}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
      {blogs.map((blog) => (
        <Grid item xs>
        <Card blog={blog} />
        </Grid> 
        ))}
        </Grid>
        </Box>
      {/* <!--  BLOG EOF   --> */}
    </>
  );
};
