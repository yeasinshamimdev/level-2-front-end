"use client";

import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface ITextArea {
  name: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  level?: string;
}

const FormTextArea = ({ name, rows, value, placeholder, level }: ITextArea) => {
  const { control } = useFormContext();

  return (
    <>
      <div style={{ marginBottom: "5px", marginTop: "5px" }}>
        {level ? level : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            placeholder={placeholder}
            defaultValue={value}
            rows={rows}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
