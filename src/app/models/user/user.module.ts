export class UserModule {

  constructor(public firstName:string,
              public lastName:string,
              public email:string,
              public drinkPreference:string,
              public hobbies?:string[]
              ){}

 }
