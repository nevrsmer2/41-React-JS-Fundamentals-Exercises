import { render } from "@testing-library/react";
import React from "react";
import BoxFormNew from "./BoxFormNew";


//Smoke Test
it("BoxFormNew renders without crashing", function () {
    render(<BoxFormNew />);
});

// Snapshot Test
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<BoxFormNew />);
    expect(asFragment()).toMatchSnapshot();
});