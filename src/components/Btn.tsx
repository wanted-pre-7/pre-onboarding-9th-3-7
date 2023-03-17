import type { Category } from "../pages/Home";

interface Props {
  left: string;
  right: string;
  onClick: (value: Category | string) => void;
  children: React.ReactNode;
}

const Btn = ({ left, right, onClick, children }: Props) => {
  return (
    <button
      onClick={(e) => onClick(e.currentTarget.textContent as string)}
      className={`${left === right ? "btn-active" : "btn"} `}
    >
      {children}
    </button>
  );
};
export default Btn;
