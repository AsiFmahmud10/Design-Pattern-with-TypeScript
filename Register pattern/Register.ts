interface reg<T> {
  [key: string]: T;
}

class game {
  public random: string;
  constructor(str: string) {
    this.random = str;
  }

  public toString = (): string => {
    return this.random;
  };
}

class register {
  private static items: reg<game> = {};

  public static set(key: string, value: game) {
    this.items[key] = value;
  }
  public static get(key: string): game {
    return this.items[key];
  }
}

let game1 = new game("adventure");
let game2 = new game("action");

register.set("game1", game1);
register.set("game2", game2);

let x = register.get("game1").random;
console.log(x);
