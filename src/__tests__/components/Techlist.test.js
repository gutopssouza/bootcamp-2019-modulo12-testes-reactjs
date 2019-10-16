import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { addTech } from "~/store/modules/techs/actions";
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

  it("should be able to add new tech", () => {
    const { getByTestId, getByLabelText } = render(<Techlist />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    console.log(dispatch.mock.calls);

    expect(dispatch).toHaveBeenCalledWith(addTech("Node.js"));
  });
});
