import Button from '@mui/material/Button';

export const FormButton = (props) => {
  const {children, endIcon, color, type, value, disabled} = props;

  return (
    <>
      <Button variant="outlined" endIcon={endIcon} color={color} type={type} value={value} disabled={disabled}>
        {children}
      </Button>
    </>
  )
}
