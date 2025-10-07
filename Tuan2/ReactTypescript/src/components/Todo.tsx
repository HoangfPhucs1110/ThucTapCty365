// components/Todo.tsx
import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Icon = ({ isCompleted }: { isCompleted: boolean }) =>
  isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />;

export const Todo = ({
  id, name, isCompleted, updateIsCompleted,
}: {
  id: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (id: string, isCompleted: boolean) => void;
}) => (
  <Button
    fullWidth
    onClick={() => updateIsCompleted(id, !isCompleted)}
    endIcon={<Icon isCompleted={isCompleted} />}
    style={{ justifyContent: "space-between", textDecoration: isCompleted ? "line-through" : "none" }}
  >
    {name}
  </Button>
);
