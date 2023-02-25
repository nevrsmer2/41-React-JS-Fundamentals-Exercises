import { render } from "@testing-library/react";
import React from "react";
import Todo from "./Todo";


// Smike Test
it("Todo component renders without crashing", function () {
    render(<Todo />);
});

// Snapshot Test 
it("Current structure matches structure in snapshot", function () {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});

// Snapshot Test - Initial State Todo Value
it("matches snapshot", function () {
    const { asFragment } = render(<Todo todo="Wash car" />);
    expect(asFragment()).toMatchSnapshot();
});



