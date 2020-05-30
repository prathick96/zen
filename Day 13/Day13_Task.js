const input = [
  {
    name: "person 1",
    age: 50,
    childrens: [
      {
        name: "person 3",
        age: 50,
        childrens: [
          {
            name: "person 7",
            age: 50,
            childrens: [],
          },
        ],
      },
      {
        name: "person 4",
        age: 50,
        childrens: [
          {
            name: "person 8",
            age: 50,
            childrens: [
              {
                name: "person 10",
                age: 50,
                childrens: [],
              },
            ],
          },
        ],
      },
      {
        name: "person 5",
        age: 50,
        childrens: [
          {
            name: "person 9",
            age: 50,
            childrens: [],
          },
        ],
      },
    ],
  },
  {
    name: "person 2",
    age: 50,
    childrens: [
      {
        name: "person 6",
        age: 50,
        childrens: [],
      },
    ],
  },
];

let obj=[];
let obj1=[];
let obj2=[];
let obj3=[];
let obj4;
let inp = input.slice(1);
let child = input[0].childrens

   for(i=0;i<input.length;i++){
     obj[i] = (({ name, age }) => ({ name, age }))(input[i]);
   }
   let ppl = input.find((item)=>{
     return item.childrens
   })

   for(i=0;i<ppl.childrens.length;i++){
     obj1[i] = (({ name, age }) => ({ name, age }))(ppl.childrens[i]);
   }
   let ppl1 = inp.find((item)=>{
    return item.childrens
  })

  for(i=0;i<ppl1.childrens.length;i++){
    obj2[i] = (({ name, age }) => ({ name, age }))(ppl1.childrens[i]);
  }

  for(i=0;i<child.length;i++){
    obj3[i] = (({ name, age }) => ({ name, age }))(child[i].childrens[0]);
  }
    obj4 = (({ name, age }) => ({ name, age }))(child[1].childrens[0].childrens[0]);
  
  const output = obj.concat(obj1, obj2, obj3, obj4);

  var div = document.createElement("div");
  div.className = "divForm";
  div.innerHTML = "";
  for(i = 0; i<output.length;i++){
    console.log(output[i]);
    div.innerHTML += JSON.stringify(output[i]) +" ";
    div.innerHTML += "<br>";
  }
  document.body.appendChild(div)
