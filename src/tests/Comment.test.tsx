import Comments from "../components/Comments";
import {test, expect} from "vitest";
// Testing the Comments component



test("Every comment is an object", () => {
    expect(Comments).toBeInstanceOf(Object);
}
);
