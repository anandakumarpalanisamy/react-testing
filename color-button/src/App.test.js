import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to blue'
  const button = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  // check that the button starts out enabled
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();
  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked("Change to red");
});

test("button disabled when the checkbox is checked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("Disabled button ha gray background and reverts to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});
test("Clicked disabled button ha gray background and reverts to blue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  // Change button to blue
  fireEvent.click(button);

  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
