export default function CustomButton({ title, ...rest }) {
  return <button {...rest}>{title}</button>;
}
