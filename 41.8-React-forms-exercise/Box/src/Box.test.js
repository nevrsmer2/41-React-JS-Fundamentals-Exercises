import { render } from "@testing-library/react";
import React from "react";
import Box from "./Box";


//Smoke Test
it("Box renders without crashing", function () {
    render(<Box />);
});

// Snapshot Test 
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});