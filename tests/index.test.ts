import { StringBuilder } from "../StringBuilder";

describe("A StringBuilder", () => {
   let sb: StringBuilder;
   let sbStr: string;
   let isEmpty: boolean;
   beforeAll(() => {
	  sb = new StringBuilder();
	  sbStr = null;
	  isEmpty = false;
   });
   describe("Created", () => {
	  test("Should exist.", () => {
		 expect(sb).toBeDefined();
	  });
	  test("Should append a string.", () => {
		 sb.append("h");
		 isEmpty = sb.isEmpty;
		 expect(isEmpty).toBeFalsy();
	  });
	  test("Should clear the completed string.", () => {
		 sb.clear();
		 isEmpty = sb.isEmpty;
		 expect(isEmpty).toBeTruthy();
	  });
	  test("Should append a chain of strings.", () => {
		 sb.append("h").append("e").append("l").append("l").append("o");
		 isEmpty = sb.isEmpty;
		 expect(isEmpty).toBeFalsy();
	  });
	  test("Should build to create a completed string.", () => {
		 sbStr = sb.build();
		 expect(sbStr).toEqual("hello");
	  });
   });
});
