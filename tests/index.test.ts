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
   });
   describe("Appending", () => {
	  test("Should append a chain of strings.", () => {
		 sb.append("h").append("e").append("l").append("l").append("o");
		 isEmpty = sb.isEmpty;
		 expect(isEmpty).toBeFalsy();
	  });
	  test("Should build to create a completed string.", () => {
		 sbStr = sb.build();
		 expect(sbStr).toEqual("hello");
	  });
	  test("Should append each string piecemeal.", () => {
		 sb.clear();
		 sb.append("h");
		 sb.append("e");
		 sb.append("l");
		 sb.append("l");
		 sb.append("o");
		 const sbSize = sb.size;
		 expect(sbSize).toBe(5);
	  });
	  test("Should build the completed string from the piecemeal appended strings.", () => {
		 sbStr = sb.build();
		 expect(sbStr).toEqual("hello");
	  });
   });
   describe("Appending Special Characters", () => {
	  let sp: String;
	  let comma: String;
	  beforeAll(() => {
		 sp = ' ';
		 comma = ',';
	  });
	  beforeEach(() => {
		 sb.clear();
	  });
	  test("Should append a 'space' character'", () => {
		 sb.appendSp();
		 sbStr = sb.build();
		 expect(sbStr).toEqual(sp);
	  });
	  test("Should append a 'comma' character", () => {
		 sb.appendComma();
		 sbStr = sb.build();
		 expect(sbStr).toEqual(comma);
	  });
   });
});
