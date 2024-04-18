import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { resetModal } from "@/store/slices/modalSlice";
import { useForm } from "react-hook-form";
import { editBook } from "@/store/slices/bookSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Book, FormData } from "@/utils/types";

const EditModal: React.FC<{ book: Book }> = ({ book }) => {
  const { register, handleSubmit } = useForm<FormData>();
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  const submitHandler = (data: FormData) => {
    const editedBook = {
      id: book.id,
      ...data,
    };
    dispatch(editBook(editedBook));
    dispatch(resetModal());
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={modal !== null}
      onClose={() => dispatch(resetModal())}
    >
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack spacing={2} paddingTop={1}>
            <TextField
              id="title"
              type="text"
              label="Title"
              defaultValue={book.title}
              {...register("title")}
              required
            />
            <TextField
              id="price"
              type="text"
              label="Price"
              defaultValue={book.price}
              {...register("price")}
              required
            />
            <TextField
              id="category"
              type="text"
              label="Category"
              defaultValue={book.category}
              {...register("category")}
              required
            />
            <TextField
              id="description"
              type="text"
              label="Description"
              defaultValue={book.description}
              {...register("description")}
              required
            />
            <Box display="flex" justifyContent="end">
              <Button type="submit">Edit</Button>
              <Button type="button" onClick={() => dispatch(resetModal())}>
                Cancel
              </Button>
            </Box>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
