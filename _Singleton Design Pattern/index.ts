class singlton {
  static constClass = new singlton();

  private name = "Asif Mahmud";
  private id = 190210;

  private constructor() {}
  public static getInstance() {
    return singlton;
  }
}

let asif: any = singlton.getInstance();
var weCantdoThat: any = new singlton();

console.log(asif, weCantdoThat);
