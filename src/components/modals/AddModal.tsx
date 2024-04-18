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
import { addBook } from "@/store/slices/bookSlice";
import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Book, FormData } from "@/utils/types";
import { formatPrice } from "@/utils";

const AddModal = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  const submitHandler = (data: FormData) => {
    data.price = formatPrice(data.price);
    const newBook: Book = {
      id: nanoid(),
      ...data,
    };
    dispatch(addBook(newBook));
    dispatch(resetModal());
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={modal !== null}
      onClose={() => dispatch(resetModal())}
    >
      <DialogTitle>Add New Book</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack spacing={2} paddingTop={1}>
            <TextField
              id="title"
              type="text"
              label="Title"
              {...register("title")}
              required
            />
            <TextField
              id="price"
              type="number"
              label="Price"
              inputProps={{ step: "0.01" }}
              {...register("price")}
              required
            />
            <TextField
              id="category"
              type="text"
              label="Category"
              {...register("category")}
              required
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={5}
              {...register("description")}
              required
            />
            <Box display="flex" justifyContent="end">
              <Button type="submit">Add</Button>
              <Button
                type="button"
                color="error"
                onClick={() => dispatch(resetModal())}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
