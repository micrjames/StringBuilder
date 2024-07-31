export class StringBuilder {
   private strs: Array<string> = new Array<string>();

   get isEmpty(): boolean {
	  return this.strs.length === 0;
   }

   get size(): number {
	  return this.strs.length;
   }

   append(str: string): StringBuilder {
	  if(typeof str === "string") {
		 this.strs.push(str);
		 return this;
	  }
   }

   build(): string {
	  if(!this.isEmpty)
		 return this.strs.join('');
   }

   clear() {
	  this.strs.length = 0;
   }
}
