import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BOOKS } from "@/utils/data";

const Content = () => {
  return (
    <Grid container py={4} px={10} rowGap={2} columnSpacing={2}>
      {BOOKS.map((book) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            <Card sx={{ flexGrow: 1 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.category}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="large" color="primary">
                  Edit
                </Button>
                <Button size="large" color="error">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;