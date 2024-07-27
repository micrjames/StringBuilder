import { StringBuilder } from "../StringBuilder";

describe("A StringBuilder", () => {
   let sb: StringBuilder;
   let sbStr: string;
   beforeAll(() => {
	  sb = new StringBuilder();
	  sbStr = null;
   });
   /*
   isEmpty();

   append(str);

   build();

   clear();
   */
   describe("Created", () => {
	  test.todo("Should exist.");
	  test.todo("Should append a string.");
	  test.todo("Should append a chain of strings.");
	  test.todo("Should build to create a completed string.");
	  test.todo("Should clear the completed string.");
   });
});
