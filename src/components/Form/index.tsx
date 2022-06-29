import { Button, TextField } from "@mui/material";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { addField } from "../../service/addField";
import { Data } from "../../types";
import { StyledForm } from "./style";
const url = 'http://form';
const formSchema = [
  {
    name:'propduct',
    label: 'Производтель'
  },
  {
    name:'name',
    label: 'Наименование'
  },
  {
    name:'cost',
    label: 'Цена',
    type: "number"
  },
  {
    name:'count',
    label: 'Количество',
    type: "number"
  }
];
const Form: FC<{update:()=> void}>= ({update}) => {
  const {  handleSubmit, control } = useForm();
  const onSubmit = async (data: any) => {
     addField(data);
     update();
  }
  const textFields = formSchema.map( (el,i) => {

    return (
      <Controller
      key={i}
      name={el.name}
      defaultValue=''
      control={control}
      rules= {{
        required: true
      }}
      
      
      render={({ field: { onChange, value }, fieldState: { invalid, isTouched, isDirty, error }, }) => {
        //console.log(isTouched,isDirty);
        return (
          <TextField
            onChange={onChange}
            variant="outlined"
            value={value}
            label={el.label}
            type={ el.type === 'number' ? 'number' : 'text'}
            sx= {{
              background: 'white'
            }}
            required= {true}
            error= {invalid}
            helperText = {error?.message}
            
          />
        )
      }}
    />
    )
  })
  return (
    <StyledForm action="/">
      {textFields}
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>Добавить</Button>
    </StyledForm>
  );
};

export default Form;
