import { UserForm } from "./views/UserForm";
import { UserEdit } from "./views/UserEdit";
import { User } from './models/User';
const user = User.buildUser({ name: "Bob", age: 25 })
const root = document.getElementById('root')
if (root) {
    const userEdit = new UserEdit(root, user);
    userEdit.render(); 
//     const userForm = new UserForm(
//    root ,user
//     );
//     userForm.render();
}
else {
    throw new Error("Root element not Found")
}

