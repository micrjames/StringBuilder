export class StringBuilder {
   private strs: Array<string> = new Array<string>();

   isEmpty(): boolean {
	  return this.strs.length === 0;
   }

   append(str: string): StringBuilder {
	  this.strs.push(str);
	  return this;
   }

   build(): string {
	  return this.strs.join(' ');
   }

   clear() {
	  this.strs.length = 0;
   }
}
