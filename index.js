const contacts = require("./contacts.js");
const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "list":
        const contactsList = await contacts.listContacts();
        console.table(contactsList);
        break;
  
      case "get":
        const contactGet = await contacts.getContactById(id);
        console.table(contactGet);
        break;
  
      case "add":
        const contactAdd = await contacts.addContact(name, email, phone);
        console.table(contactAdd);
        break;
  
      case "remove":
        const contactRemove = await contacts.removeContact(id);
        console.table(contactRemove)
        break;
  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }
  
  invokeAction(argv);