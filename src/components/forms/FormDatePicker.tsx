"use client";

import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

interface UMDatePickerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  level?: string;
  value?: Dayjs;
  size?: "large" | "small";
}

const FormDatePicker = ({
  onChange,
  name,
  level,
  value,
  size,
}: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <>
      <div style={{ marginBottom: "5px", marginTop: "5px" }}>
        {level ? level : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            value={dayjs(field.value || "")}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
