/** biome-ignore-all lint/suspicious/noExplicitAny: <not-necessary> */
"use client";

import { fromDate, getLocalTimeZone } from "@internationalized/date";
import { Label } from "react-aria-components";
import type { ControllerRenderProps } from "react-hook-form";
import { DateField, DateInput } from "@/components/ui/datefield-rac";

export default function DateTimePicker({
  label,
  required = false,
  field,
}: {
  label?: string;
  required?: boolean;
  field: ControllerRenderProps<any, any>;
}) {
  const { onBlur, onChange, value, disabled } = field;

  const dateValue =
    value instanceof Date ? fromDate(value, getLocalTimeZone()) : undefined;

  const handleChange = (date: any) => {
    if (!date) {
      onChange(undefined);
      return;
    }
    if (typeof date.toDate === "function") {
      onChange(date.toDate(getLocalTimeZone()));
      return;
    }
    onChange(undefined);
  };

  return (
    <DateField
      className="*:not-first:mt-2"
      granularity="minute"
      hourCycle={24}
      value={dateValue}
      onChange={handleChange}
      onBlur={onBlur}
      isDisabled={disabled}
    >
      {label ? (
        <Label className="flex items-center gap-1 font-medium text-foreground text-sm">
          {label}
          {required ? <span className="text-destructive">*</span> : null}
        </Label>
      ) : null}
      <DateInput />
    </DateField>
  );
}
