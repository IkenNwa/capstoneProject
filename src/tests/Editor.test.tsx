import { expectTypeOf, test } from "vitest";
import Editor from "../views/Editor";


// Testing the Editor component
test("My types are correct", () => {
    expectTypeOf(Editor).toMatchTypeOf<typeof Editor>();
    expectTypeOf(Editor).toMatchTypeOf<React.FC>();
}
);
