import TextField from '@mui/material/TextField';



const myStyle = {
  '& .MuiInputBase-input': {
    color: '#ffffff'
  },
  '& label': {
    color: '#ffffff', // 通常時のラベル色 
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ffffff',    // 通常時のボーダー色(アウトライン)
    },
    '&:hover fieldset': {
      borderColor: '#ffffff',    // ホバー時のボーダー色(アウトライン)
    },
  }
}

export const InputForm = (props) => {
  const { label, multiline, rows, style, color, type, value, onChange, name, fullWidth } = props;

  return (
    
      <TextField 
        id="outlined-basic" 
        label={label} 
        variant="outlined" 
        multiline={multiline} 
        rows={rows}
        style={style}
        color={color}
        sx={myStyle}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        fullWidth={fullWidth}
      />
  )
}