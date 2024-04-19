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
import { editBook, resetEditable } from "@/store/slices/bookSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FormData } from "@/utils/types";
import { formatPrice } from "@/utils";

const EditModal = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const editable = useAppSelector((state) => state.books.editable);
  const modal = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  const submitHandler = (data: FormData) => {
    data.price = formatPrice(data.price);
    const editedBook = {
      id: editable!.id,
      ...data,
    };
    dispatch(editBook(editedBook));
    dispatch(resetModal());
    dispatch(resetEditable());
  };

  const closeHandler = () => {
    dispatch(resetEditable());
    dispatch(resetModal());
  }

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={modal !== null}
      onClose={() => closeHandler()}
    >
      <DialogTitle>Edit Book</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Stack spacing={2} paddingTop={1}>
            <TextField
              id="title"
              type="text"
              label="Title"
              defaultValue={editable!.title}
              {...register("title")}
              required
            />
            <TextField
              id="price"
              type="text"
              label="Price"
              defaultValue={editable!.price}
              {...register("price")}
              required
            />
            <TextField
              id="category"
              type="text"
              label="Category"
              defaultValue={editable!.category}
              {...register("category")}
              required
            />
            <TextField
              id="description"
              type="text"
              label="Description"
              defaultValue={editable!.description}
              {...register("description")}
              required
            />
            <Box display="flex" justifyContent="end">
              <Button type="submit">Edit</Button>
              <Button
                type="button"
                color="error"
                onClick={() => closeHandler()}
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

export default EditModal;
