"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { showEditModal } from "@/store/slices/modalSlice";
import { Book } from "@/utils/types";
import { deleteBook } from "@/store/slices/bookSlice";
import EditModal from "./modals/EditModal";
import { capitalize } from "@/utils";
import { MODAL_STATE } from "@/utils/constants";

const Content = () => {
  const [editBook, setEditBook] = useState<Book>();
  const books = useAppSelector((state) => state.books.bookList);
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  const editHandler = (id: string) => {
    const book = { ...books.filter((book) => book.id === id) };
    setEditBook(book[0]);
    dispatch(showEditModal());
  };

  return (
    <>
      <Grid container py={4} px={10} rowGap={2} columnSpacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
            <Box
              sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
            >
              <Card sx={{ flexGrow: 1 }}>
                <CardActionArea onClick={() => editHandler(book.id)}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {capitalize(book.title)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Price: ${book.price}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Category: {capitalize(book.category)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="large"
                    color="primary"
                    onClick={() => editHandler(book.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="large"
                    color="error"
                    onClick={() => dispatch(deleteBook(book.id))}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      {modal === MODAL_STATE.EDIT && editBook && <EditModal book={editBook} />}
    </>
  );
};

export default Content;
