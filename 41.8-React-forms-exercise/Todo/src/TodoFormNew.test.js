import { render } from "@testing-library/react";
import React from "react";
import TodoFormNew from "./TodoFormNew";

// Smike Test
it("TodoFormNew component renders without crashing", function () {
    render(<TodoFormNew />);
});

// Snapshot Test 
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<TodoFormNew />);
    expect(asFragment()).toMatchSnapshot();
});