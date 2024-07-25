console.clear();

// // input type inquirer
// import { input } from "@inquirer/prompts";

// const name: string = await input({
//   message: "Please enter your name.",
//   required: true,
//   validate: (val: string) => {
//     if (val.length < 3) {
//       return "Name should be at least 3 characters long.";
//     }
//     return true;
//   },
// });
// console.log(`hello, ${name}`);

// select(multipe choice) type inquirer

// import { select, Separator } from "@inquirer/prompts";

// const programming_lang: string = await select({
//   message: "Choose Your favourite programming language... ",
//   choices: [
//     {
//       name: "JavaScript/TypeScript",
//       value: "js",
//       description:
//         "These programming languages are used to make websites,mobile apps etc.",
//     },

//     {
//       name: "Python",
//       value: "python",
//       description: "This programming language is used to train LLM's etc.",
//     },

//     new Separator("Rarely used programming languages"),

//     {
//       name: "C#",
//       value: "c#",
//       description: "This programming language is used to make games...",
//     },
//     {
//       name: "PHP",
//       value: "php",
//       description:
//         "This programming langauge is used to make websites in old times.",
//       disabled: "(This language is currently not supported)",

//     },
//   ],
// });

// console.log(`You've selected ${programming_lang}`);

// checkboc type inquirer

// import { checkbox, Separator } from "@inquirer/prompts";

// const package_managers = await checkbox({
//   message: "Select most used package managers by you...",
//   choices: [
//     { name: "NPM", value: "npm" },
//     {
//       name: "PNPM",
//       value: "pnpm",
//       disabled: "(Current unavailable)",
//     },
//     new Separator("Not reliable..."),
//     { name: "Yarn", value: "yarn", checked: true },
//   ],
//   validate: (val: any) => {
//     if (val.length > 1) {
//       return true;
//     }
//     return "At least two package manager must be selected.";
//   },
//   pageSize: 2,
//   required: true,
// });

// console.log(`You've selected ${package_managers.join(", ")}`);

// confirm type inquirer

// import { confirm } from "@inquirer/prompts";

// const confirm_action = await confirm({
//   message: "Are you sure about this action?",
//   default: true,
// });

// console.log(`You've ${confirm_action} the action.`);

// password type inquirer

// import { password } from "@inquirer/prompts";

// const password_value:string = await password({
//   message: "Enter your password. ",
//   mask: "*",
//   validate:(val:string)=>{
//     if(val.length > 4){
//         return true;
//     }
//     return "Password should be at least 5 characters long.";
//   }
// });

// console.log(`Your password is ${password_value}`);

// number type inquirer
import { number } from "@inquirer/prompts";

const age: number | undefined = await number({
  message: "Please enter your age...",
  min: 0,
  max: 150,
  default: 14,
  //   required: true,
//   step: 3, // multiple hona chaiye provided value ka

  validate:(val:number|undefined) =>{
    if(val >= 18){
        return true;
    }
    return "You should be at least 18 years old.";
  }
});

console.log(`Your age is ${age}`);
