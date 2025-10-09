// InputBox.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputBox from "../src/components/Inputbox.tsx";

describe("InputBox", () => {
  test("renders a label associated with the input and shows the given value", () => {
    const handleChange = jest.fn();

    render(<InputBox name="from" value="Amsterdam" onChange={handleChange} />);

    // label is present and associated via htmlFor/id
    const input = screen.getByLabelText("from");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "from");
    expect(input).toHaveAttribute("name", "from");

    // controlled value is rendered
    expect(input).toHaveValue("Amsterdam");
  });

  test("calls onChange when the user types", () => {
    const handleChange = jest.fn();

    render(<InputBox name="to" value="" onChange={handleChange} />);

    const input = screen.getByLabelText("to");

    fireEvent.change(input, { target: { value: "Rotterdam" } });
    expect(handleChange).toHaveBeenCalledTimes(1);

    // the first call receives the change event with the new value
    const eventArg = handleChange.mock.calls[0][0];
    expect(eventArg).toBeInstanceOf(Object);
    expect((eventArg as React.ChangeEvent<HTMLInputElement>).target.value).toBe(
      "Rotterdam"
    );
  });

  test("reflects updated value when parent re-renders with new props (controlled)", () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <InputBox name="city" value="Utrecht" onChange={handleChange} />
    );

    expect(screen.getByLabelText("city")).toHaveValue("Utrecht");

    rerender(<InputBox name="city" value="Leiden" onChange={handleChange} />);
    expect(screen.getByLabelText("city")).toHaveValue("Leiden");
  });
});
