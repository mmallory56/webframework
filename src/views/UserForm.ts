import { User, UserProps } from "../models/User"
import {View} from "./View"
export class UserForm extends View<User,UserProps>{
   
  
    eventsMap():{[key:string]:()=>void} {
        return {
            "click:.set-age": this.onSetAge,
            "click:.set-name": this.onSetName,
            "click:.save-model": this.onSaveClick,
            
        }
    }
    onSaveClick = ():void => {
        this.model.save();
    }
    onSetName = (): void => {
        const input = this.parent.querySelector("input");
        if (input) {
           const name = input.value;
        this.model.set({name})
       }
        
    }
    onSetAge  =():void =>{
        this.model.set({age:20});
    }
    
  
    template(): string{
        return `
        <div>
        
        <input placeholder="${ this.model.get('name')}"/>
         <button class="set-name">Change Name</button>
         <button class="set-age">set age</button>
         <button class="save-model">Save User</button>
        </div>
       
        `;
    }
    
}