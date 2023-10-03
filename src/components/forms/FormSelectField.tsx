import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  level?: string;
  defaultValue?: string;
};

const FormSelectField = ({
  options,
  name,
  size,
  value,
  placeholder,
  level,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      <div style={{ marginBottom: "5px", marginTop: "5px" }}>
        {level ? level : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            defaultValue={defaultValue}
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
