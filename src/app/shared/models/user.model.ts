export class UserModel {
  
    constructor(
       public Name:string='Priyanth',
       public State:string='Andhra Pradesh',
       public Gender:string='male',
       public Hobby:Array<any> = ['Music','Cricket']
    ) {
        
    }
}