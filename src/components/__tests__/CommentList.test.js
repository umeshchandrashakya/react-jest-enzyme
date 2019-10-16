import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

let warrped;
beforeEach(() => {
  const intialState = {
    comments: ["comment one", "comment two"]
  };
  warrped = mount(
    <Root intialState={intialState}>
      <CommentList></CommentList>
    </Root>
  );
});

it("it create one LI per comment", () => {
  expect(warrped.find("li").length).toEqual(2);
});
it("shows the text for each comment ", () => {
  expect(warrped.render().text()).toContain("comment one");
  expect(warrped.render().text()).toContain("comment two");
});
