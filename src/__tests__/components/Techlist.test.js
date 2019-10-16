import React from "react";
import { useSelector } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Techlist from "~/components/Techlist";

jest.mock("react-redux");

describe("Techlist", () => {
  it("should render  tech list", () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ["Node.js", "ReactJS"]
      })
    );

    const { getByTestId, getByText } = render(<Techlist />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });
});
