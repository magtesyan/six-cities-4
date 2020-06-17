import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Enzyme, {mount} from "enzyme";
import Main from "./main";
import {Offers} from "../../mocks/data.js";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Click on Title Test`, () => {
  it(`Should offer title be pressed`, () => {
    const onOfferTitleClick = jest.fn();

    const mainScreen = mount(
        <Main
          offersCount={Offers.OFFERS_COUNT}
          offersNames={Offers.OFFERS_NAMES}
          onOfferTitleClick = {onOfferTitleClick}
        />
    );

    const offerTitle = mainScreen.find(`.place-card__name`);

    offerTitle.forEach((title) => title.props().onClick());

    expect(onOfferTitleClick.mock.calls.length).toBe(offerTitle.length);
  });
});
