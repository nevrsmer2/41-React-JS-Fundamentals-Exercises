import { render } from '@testing-library/react';
import React from "react";
import Card from './Card';

//Smike test for Card component
test("Card comonent renders without breaking", () => {
    render(<Card />);
});


//Snapshot Test for Card component
test("Current Card component state matches snapsot", function () {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});

