import { render } from "@testing-library/react";
import React from "react";
import BoxList from "./BoxList";


//Smoke Test
it("BoxList renders without crashing", function () {
    render(<BoxList />);
});

// Snapshot Test
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});
